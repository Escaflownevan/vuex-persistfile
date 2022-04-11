const path = require('path')
const FsDriver = require('./FsDriver')

class VuexPersist {
  /**
   * Constructor.
   * @param {object} options
   */
  constructor(options) {
    this.options = Object.assign({
      path: null,
      dir: null,
      file: 'store.json',
      reducer: null,
      mutations: [],
      driver: null
    }, options)

    // Path option is required, otherwise there's
    // no file to write to.
    if (!this.options.path) throw new Error('Path not set')

    this.driver = options.driver || new FsDriver()
    this.options.dir = path.join( process.resourcesPath, '../', this.options.path)
    this.options.path = path.join( process.resourcesPath, '../', this.options.path, this.options.file)

  }

  /**
   * Persist the state to file.
   * @param {object} state
   */
  saveState(state) {


    this.driver.write(
     this.options.path,
      JSON.stringify(this.options.reducer ? this.options.reducer(state) : state),
      this.options.dir
    )
  }

  /**
   * Load the state from file.
   * @param {object} store
   */
  loadState(store) {
    try {
      let data = this.driver.read(this.options.path)

      let parsed

      try {
        parsed = JSON.parse(data)
      } catch (e) {}

      if (parsed) {
        store.replaceState(JSON.parse(data))
      }
    } catch (err) {
      console.error('[vuex-persistfile] Unable to restore state')
    }
  }

  /**
   * Check and load existing Vuex store.
   * @param {object} store
   * @private
   */
  initialize(store) {
    if (this.driver.exists(this.options.path)) {
      this.loadState(store)
    }
  }

  /**
   * Subscribe to the Vuex store.
   * @returns {function}
   */
  subscribe() {
    return (store) => {
      this.initialize(store)

      store.subscribe((mutation, state) => {
        if (this._mutation(mutation.type)) {
          this.saveState(state)
        }
      })
    }
  }

  /**
   * Checks if a mutation is in the list of allowed
   * mutations.
   * @param {string} type
   * @returns {boolean}
   * @private
   */
  _mutation(type) {
    return !this.options.mutations.length ||
      this.options.mutations.includes(type)
  }
}

module.exports = VuexPersist

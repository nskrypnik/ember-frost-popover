module.exports = {
  description: '',
  normalizeEntityName: function () {},

  /**
    Installs specified packages at the root level of the application.
    Triggered by 'ember install <addon name>'.
    @returns {Promise} package names and versions
  */
  afterInstall: function () {
    return this.addAddonsToProject({
      packages: [
        {name: 'ember-lodash-shim', target: '0.1.4'},
        {name: 'ember-prop-types', target: '2.5.6'}
      ]
    })
  }
}

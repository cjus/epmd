export default (config, env, helpers) => {
  config.target = 'electron-renderer';
  if (env.production) {
    config.output.publicPath = env.pkg.homepage;
    let {plugin} = helpers.getPluginsByName(config, 'DefinePlugin')[0];
    plugin.definitions['PUBLIC_PATH'] = env.pkg.homepage;
  }
};

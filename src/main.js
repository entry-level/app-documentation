export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-animator-css')
    .plugin('joelcoxokc/aurelia-interface-grid')
    .plugin('aurelia-interface-platforms', config => {
      config.setClassList(document.documentElement);
    })
    .feature('article/language')
    .globalResources('resources/au-icon')
    // .plugin('aurelia-interface', config => {
    //   config.icons();
    //   // config.platform();
    // });

  aurelia.start().then(a => a.setRoot());
}

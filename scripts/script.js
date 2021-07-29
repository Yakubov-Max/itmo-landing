function include(url) {
  var script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
include("./scripts/about-script.js");
//console.log('DOM loaded')

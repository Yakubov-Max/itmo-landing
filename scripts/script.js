console.log("DOM loaded")

// include("./scripts/projects.js");

let script = document.createElement('script')
script.src = "./scripts/projects.js"
document.getElementsByTagName('head')[0].appendChild(script)

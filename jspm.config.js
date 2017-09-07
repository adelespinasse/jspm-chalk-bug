SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "jspm-chalk-bug/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.25"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "jspm-chalk-bug": {
      "main": "jspm-chalk-bug.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    },
    "m": {
      "format": "cjs"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
    "assert": "npm:jspm-nodelibs-assert@0.2.1",
    "os": "npm:jspm-nodelibs-os@0.2.2",
    "process": "npm:jspm-nodelibs-process@0.2.1"
  },
  packages: {
    "npm:jspm-nodelibs-os@0.2.2": {
      "map": {
        "os-browserify": "npm:os-browserify@0.3.0"
      }
    }
  }
});

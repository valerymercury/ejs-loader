# ejs-loader for webpack

EJS (Underscore/LoDash Templates) loader for [webpack](http://webpack.github.io/). Uses [lodash template](http://lodash.com/docs#template) function to compile templates.

If you are looking for the loader which uses [EJS templating engine](https://github.com/tj/ejs), there is [ejs-compiled-loader](https://github.com/bazilio91/ejs-compiled-loader)

## Installation

`npm install ejs-loader`

## Usage

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

``` javascript
var template = require("ejs!./file.ejs");
// => returns the template function compiled with undesrcore (lodash) templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data
```

You also should provide a global `_` variable with the lodash/underscore runtime. You can do it with the followinf webpack plugin: https://github.com/webpack/docs/wiki/list-of-plugins#provideplugin

```
plugins: [
    new webpack.ProvidePlugin({
        _: "underscore"
    })
]
```

### Compiller options
Query parameters allows to pass options for template compiller.

Config example:
``` js
module.exports = {
  module: {
    loaders: [
      { test: /\.ejs$/, loader: "ejs-loader?variable=data" },
    ]
  }
};
```
is equivalent to
``` js
var template = _.template('<%= template %>', {variable: 'data'}); 
```

## Release History
* 0.2.1 - Add ability to pass compiller options
* 0.1.0 - Initial release

## License

MIT (http://www.opensource.org/licenses/mit-license.php)

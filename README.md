## Development
----------------------------------------------


### Using source maps
----------------------------------------------

When webpack bundles your source code, it can become difficult to track down errors and warnings to their original location. For example, if you bundle three source files (a.js, b.js, and c.js) into one bundle (bundle.js) and one of the source files contains an error, the stack trace will point to bundle.js. This isn't always helpful as you probably want to know exactly which source file the error came from.

In order to make it easier to track down errors and warnings, JavaScript offers source maps, which map your compiled code back to your original source code. If an error originates from b.js, the source map will tell you exactly that.

There are a lot of different options available when it comes to source maps. Be sure to check them out so you can configure them to your needs.


### Choosing a Development Tool
----------------------------------------------

There are a couple of different options available in webpack that help you automatically compile your code whenever it changes:

- webpack's Watch Mode
- webpack-dev-server
- webpack-dev-middleware


webpack-dev-server serves bundled files from the directory defined in output.path, i.e., files will be available under http://[devServer.host]:[devServer.port]/[output.publicPath]/[output.filename].

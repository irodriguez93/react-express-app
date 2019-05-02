// import path from 'path';

const path = require("path");
// export default {
module.exports = {
    /* 
        Chosen mode tells webpack to use its built-in optimizations accordingly
        mode: "production", enable many optimizations for production builds
        mode: "development",  enabled useful tools for development
        mode: "none",  no defaults
    */
    mode: 'development',
    /*
        path.resolve gets the pathname then tells it to look in src folder and app
        defaults to ./src
        Here the application starts executing
        and webpack starts bundling
    */
    entry: path.resolve(__dirname, 'src','app'), 
    output: {
        /*
            the target directory for all output files
            must be an absolute path (use the Node.js path module)
        */
        path: path.resolve(__dirname,'dist'),
        // the filename template for entry chunks
        filename: 'bundle.js',
         // the url to the output directory resolved relative to the HTML page
        publicPath: '/',
    },
   //Configure how modules are resolved
    resolve: {
        /*
        If multiple files share the same name but have different extensions, 
        webpack will resolve the one with the extension listed first in the array and skip the rest.
        */
        extensions: ['.js','.jsx']
    },
    devServer: {
        /*
            When using the HTML5 History API,
            the index.html page will likely have to be served in place of any 404 responses.
            devServer.historyApiFallback is disabled by default. Enable it by passing:
            historyApiFallback: true
        */
        historyApiFallback: true
    },
    module: {
        rules: [{
            test: /\.jsx?/,
            loader:'babel-loader'
        }]
    }
}
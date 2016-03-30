module.exports = {
    entry: [
        './index.jsx'
    ],
    output: {
        path: __dirname + '/',
        publicPath: '/react-redux-router/',
        filename: 'assets/bundle.js'
    },
    module:{
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel',
                query: {
                    presets: ['es2015','react'],
                }
            }
        ]
    }

};


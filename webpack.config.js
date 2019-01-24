module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader']
          },
          {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader']
          }
        ]
      },
      resolve: {
        extensions: ['*', '.js', '.jsx']
      },
    output: {
      path: __dirname + '/dist',
      publicPath: '/',
      filename: 'bundle.js',
      library: 'klijentlib',
      libraryTarget: 'umd'
    },
    devServer: {
      contentBase: './dist'
    },
    externals : [
      'react', 'react-dom'
    ]
  };
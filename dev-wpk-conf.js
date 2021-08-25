const vendor = [
    'react',
    'react-dom',
    'react-redux',
    'react-router',
    'redux',
    'redux-form',
    'redux-thunk',
    'redux-devtools-extension'
  ];
  
  const jsonLoader = {
    test: /\.json$/,
    loader: 'json-loader'
  };
  
  const babelLoader = {
    test: /\.js$/,
    loader: 'babel-loader',
    exclude: /node_modules/,
    options: {
      presets: ['babel-preset-env', 'react']
    }
  };
  
  const imgLoader = {
    test: /\.(jpe?g|png|gif|svg)$/,
    use: [
      { loader: 'url-loader', options: { limit: 40000 } },
      'image-webpack-loader'
    ]
  };

  
  module.exports = {
    vendor,
    jsonLoader,
    babelLoader,
    imgLoader,
  };
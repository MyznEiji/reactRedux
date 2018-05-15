// webpackの設定ファイル

var publidDir = __dirname + '/public';
module.exports = {
  // 元となるファイル(コンパイルする)
  entry: [
    './src/index.js'
  ],
  output: {
    // outputはどこに吐き出すか
    path: publidDir,
    // publicPathで,bundle.jsにアクセスがあったらentryのファイルを返す
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
        rules: [{
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015'],
          },
        }],
      },
  resolve: {
    // entryからインポートされたライブラリを検索する拡張子を指定している
    extensions: ['.js', '.jsx']
  },
  devServer: {
    // webpackDevServerの設定
    historyApiFallback: true,
    // contentBaseがドキュメントルートになる
    contentBase: publidDir
  }
};

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  // ENTRY POINT
  entry: './src/js/index.js',

  // OUTPUT
  output: {
    path: path.resolve(process.cwd(), './dist'),
    filename: 'js/[name].bundle.js',
    clean: true,
  },

  // CSS, JS AND FILE LOADING
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|svg|eot|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
      // BABEL JS
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        // Extract any CSS or SCSS content and minimize
        test: /\.[s]?css$/,
        use: [MiniCssExtractPlugin.loader, { loader: 'css-loader', options: { importLoaders: 2,  url: false,}}, { loader: 'postcss-loader' }, { loader: 'sass-loader' }],
      },
      // FILE LOADER FOR FONTS
      {
        test: /\.(svg|eot|woff|woff2|ttf)$/,
        use: ['file-loader'],
      },
    ],
  },

  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      // `...`,
      new CssMinimizerPlugin(),
    ],
  },

  plugins: [
    // ADDING HTML PAGES FOR INJECTING BUNDLE JS FILE AND GENERATING INTO DIST FILE
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/index.html') }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/home.html'), filename: 'home.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/about-us.html'), filename: 'about-us.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/contact-us.html'), filename: 'contact-us.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/our-menu.html'), filename: 'our-menu.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/order-online.html'), filename: 'order-online.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/cart.html'), filename: 'cart.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/checkout.html'), filename: 'checkout.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/login.html'), filename: 'login.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/my-account.html'), filename: 'my-account.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/register.html'), filename: 'register.html' }),
    new HtmlWebpackPlugin({ inject: 'body', minify:false, template: path.resolve(process.cwd(), 'src/gallery.html'), filename: 'gallery.html' }),

    // EXTRACTS CSS INTO SEPARATE CSS FILE
    new MiniCssExtractPlugin({
      filename: 'css/[name].min.css',
    }),

    // COPY IMAGES TO PUBLIC FOLDER
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/images',
          to: 'assets/images',
        },
      ],
    }),

    // COPY FONT
    new CopyPlugin({
      patterns: [
        {
          from: 'src/assets/font',
          to: 'assets/font',
        },
      ],
    }),

    // COPY BACKEND SCRIPT TO JS FOLDER
    new CopyPlugin({
      patterns: [
        {
          from: 'src/js/backend-script.js',
          to: 'js',
        },
      ],
    }),
  ],

  // DEV SERVER
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    watchFiles: [path.resolve(process.cwd(), 'src/index.html'),
    path.resolve(process.cwd(), 'src/home.html'),
    path.resolve(process.cwd(), 'src/about-us.html'),
    path.resolve(process.cwd(), 'src/contact-us.html'),
    path.resolve(process.cwd(), 'src/our-menu.html'),
    path.resolve(process.cwd(), 'src/order-online.html'),
    path.resolve(process.cwd(), 'src/cart.html'),
    path.resolve(process.cwd(), 'src/checkout.html'),
    path.resolve(process.cwd(), 'src/login.html'),
    path.resolve(process.cwd(), 'src/register.html'),
    path.resolve(process.cwd(), 'src/my-account.html'),
    path.resolve(process.cwd(), 'src/gallery.html')],
    compress: true,
    port: 9000,
    hot: true,
  },

  // EXTERNAL
  externals: {
    jquery: 'jQuery',
  },
};

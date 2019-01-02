---
title: "WebPack untuk pemula"
path: "/webpack-untuk-pemula/"
date: "2017-12-10T06:05:00.169Z"
tags: javaScript
draft: false
---
WebPack tuh merk tas ya? 
Menurut [quora](https://www.quora.com/What-is-Webpack), singkatnya webpack adalah **module bundler**. Ini mengambil banyak asset( seperti gambar, css dan js) dan mengubahnya menjadi suatu file yang bisa dikirimkan ke client dan dimengerti oleh browser. Jadi, sepengetahuan saya sekarang, webpack akan berguna kalau mas implement server-side-rendering. Nantinya bisa untuk memilah gaya(css) atau perintah (javascript) mana yang diperlukan oleh  home-page (misalnya) dan tidak perlu include seluruh style / perintah.

#install webpack & html-webpack-plugin
- mau run webpack, perlu install NPM & Node JS.
```bash
$ npm -v && node -v
```
- jalankan npm init & input data yang diperlukan
	![init](img/blogs/webpack-pemula/npm-init.png)	
- install webpack
```bash
$ npm i -D -g webpack@latest
```
i = instal, -D = dependensi, g = global

- add new folder : dist dan src. dist = distribution (output dari webpack compile), src = source (kita akan coding di folder ini)
- create new file : pempack/src/app.js
	```javascript
    console.log(“pempack:pemula webpack”)
    ```
- create new file pempack/webpack.config.js
	```javascript
    const path = require('path');
	…
	module.exports = {
        entry : './src/app.js', //file input
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: './dist/app.bundle.js' //file output
        }
    }
    ```
- di file package.json : 
	ganti command di dalam “scripts” dengan : 
	```javascript
    "dev" : "webpack -d —watch”, //untuk command di terminal -> npm run dev
	"prod": "ENV=production webpack -p" //untuk command di terminal -> npm run prod
    ```
- instal html-webpack-plugin
	```bash
    npm i -D html-webpack-plugin
    ```
- add new file: pempack/src/my-index.html
- copy paste template dari: https://github.com/jaketrent/html-webpack-template/blob/86f285d5c790a6c15263f5cc50fd666d51f974fd/index.html 
- di file webpack.config.js , setelah title tambahkan :
	```javascript
    minify: {
      collapseWhitespace: true, //enter akan dihapus, jade html akan 1 line
    },
    hash: true, //menambahkan hash (kode khusus) setelah filename index_bundle.js?
    template: __dirname + '/src/my-index.html', // template yang tadi dibuat
    ```

#CSS
css-loader: membaca file css di src folder.
style-loader: memasukkan inline-style (tag <style></style>)
extract-text-webpack-plugin: membuat file .css / external-style css
- install css-loader: https://github.com/webpack-contrib/css-loader
	```bash
    npm i -D css-loader
    ```
- install style-loader: https://github.com/webpack-contrib/style-loader
	```bash
    npm i -D style-loader
    ```
- install extract-text-webpack-plugin: https://github.com/numical/style-ext-html-webpack-plugin
	```bash
    npm i -D extract-text-webpack-plugin
    ```
- di file webpack.config.js:
	```javascript
    …
	let isProd = process.env.ENV === 'production'
//generate eksternal file css pakai ExtractTextPlugin
let cssDev = ['style-loader', 'css-loader'] //dev(development) css
let cssProd = ExtractTextPlugin.extract({
  fallback: 'style-loader',
  use: 'css-loader',
  publicPath: '/dist'
}) //prod(production) css
…
module: {
    rules: [
      {
        test: /\.css$/,
        use: isProd ? cssProd : cssDev, //kondisi if else, ENV === production maka pakai cssProd, jika tidak cssDev
      },
…
	plugins: [
	…	
	new ExtractTextPlugin({
      filename: 'app.css',
      disable: !isProd, //jika ENV === production, disable ExtractTextPlugin
    }), //nama external file css
	]
    ```

#Development Server
webpack-dev-server: supaya html bisa diakses dari awalnya fullpath ke http://localhost, auto reload/refresh page & reload DOM tanpa reload page (HMR / Hot Module Replacement)
- install webpack-dev-server : 
	```bash
    npm i -D webpack-dev-server
    ```
- di file packages.json
	ganti "dev": "webpack -d --watch" jade "dev": “webpack-dev-server”,
	- - watch, until otomatis update file di dist folder, kale ada perubahan file di src folder
- setting output folder & port server: https://webpack.js.org/configuration/dev-server/
	diantara module & plugins tambahkan :
	```javascript
    …
	const Webpack = require('webpack') //aktifkan HMR
	…
	module: {
	},
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		//port: 9000,
		stats: 'errors-only', //tampilkan error saja di terminal
		open: true, //buka new tab saat pertama kali "npm run dev”
		hot: true, //aktifkan HMR (Hot Module Replacement): reload DOM tanpa reload page
	}
	plugins: [
		…
		new Webpack.HotModuleReplacementPlugin(), //aktifkan HMR
		new Webpack.NamedModulesPlugin(), //console.log() informasi HMR
	]
    ```

#Setup ReactJS & Babel
react: view library
react-dom: penghubung react dengan DOM (document object model)
babel: compiler, untuk code legacy.
- install react & react-dom
	```bash
    npm i -D react react-dom
    ```
- install babel bersaudara
	```bash
    npm i -D babel babel-preset-react babel-preset-es2015 babel-loader babel-core
    ```
- buat file baru di root folder : pempack/.babelrc
	```javascript
    {
		"presets": ["es2015", "react"] //aktifkan modul ini
	}
    ```
- tambahkan kode react di app.js
	```javascript
    import css from ‘./app.css’
	…
	import React from 'react'
	import ReactDOM from 'react-dom'

	ReactDOM.render(
		<h1>Hello, world!</h1>,
		document.getElementById('root')
	) //basic react untuk menampilkan hello world di DOM dengan id root
    ```
- tambahkan div root di my-index.html
	```bash
    …
	<h1 id=“title"></h1>
	<div id="root"></div>
	…
    ```
- tambahkan konfigurasi babel di webpack.config.js
	```javascript
    module:{
		rules: [
			{
			…
			},
			{
				test: /\.js$/, //baca semua file ekstensi .js
				exclude: /node_modules/, //ignore direktori node_modules
				use: 'babel-loader' //gunakan package ini
			}
			
		]
	}
    ```
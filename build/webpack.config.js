/**
 * @description webpack 打包配置
 */
const path = require('path');
const webpack = require('webpack');

const FormatWebpackConf = require('./FormatWebpackConf');
const baseWebpackConf = require('./webpack.config.base');

const CopywebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const cesiumSource = '../node_modules/cesium/Source';
const cesiumWorkers = '../Build/Cesium/Workers';

module.exports = new FormatWebpackConf(baseWebpackConf)
    // 处理cesium配置
    .use((webpackConf) => {
		webpackConf.resolve.alias = {
			// Cesium module name
			cesium: path.resolve(__dirname, cesiumSource)
		};
		webpackConf.amd = {
			// Enable webpack-friendly use of require in Cesium
			toUrlUndefined: true
		};
		webpackConf.node = {
			// Resolve node module use of fs
			fs: 'empty'
		};

        webpackConf.output.sourcePrefix = '';

        webpackConf.plugins.push(
            new webpack.DefinePlugin({
				// Define relative base path in cesium for loading assets
				CESIUM_BASE_URL: JSON.stringify('public')
			})
        );

        webpackConf.plugins.push(
			new CopywebpackPlugin([
				{ from: path.join(__dirname,cesiumSource, cesiumWorkers), to: path.join(webpackConf.output.path,'Workers') },
				{ from: path.join(__dirname,cesiumSource, 'Assets'), to: path.join(webpackConf.output.path,'Assets') },
				{ from: path.join(__dirname,cesiumSource, 'Widgets'), to: path.join(webpackConf.output.path,'Widgets') }
			])
        );
    })
    // 处理antd配置
    .use((webpackConf) => {

        webpackConf.module.rules.push(
            {
                test: /\.less/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: [
                            {
                                loader: 'css-loader',
                                options: {
                                    sourceMap: true
                                }
                            },
                            {
                                loader: 'postcss-loader',
                                options: {
                                    sourceMap: true,
                                    ident: 'postcss', 	// https://webpack.js.org/guides/migrating/#complex-options
                                    plugins: () => [
                                        require('postcss-flexbugs-fixes'),
                                        require('autoprefixer')({
                                            browsers: [
                                                '>1%',
                                                'last 4 versions',
                                                'Firefox ESR',
                                                'not ie < 9' // React doesn't support IE8 anyway
                                            ],
                                            flexbox: 'no-2009'
                                        })
                                    ]
                                }
                            },
                            {
                                loader: 'less-loader',
                                options: {
                                    sourceMap: true,
                                    modifyVars: {
                                        "@primary-color": "#108ee9",		            //更改antd的主题颜色;
                                        "@icon-url":"'/asserts/ant_font/iconfont'",     //更改字体地址; 注意:必须再加额外的“'”,将icon字体部署到本地
                                    }
                                }
                            }
                        ]
                    }
                )
            }
		);

		for (let i = 0; i < webpackConf.module.rules.length; i++){
		    let rule = webpackConf.module.rules[i];
		    if (rule.loader && rule.loader == 'babel-loader'){
		        rule.options.plugins.push(
		            //babel-plugin-import
					['import', { libraryName: 'antd',"libraryDirectory":"es", style: true}]
                );
                break;
            }
        }
    })
    .end();


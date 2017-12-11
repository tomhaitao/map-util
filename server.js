/**
 * Created by chencheng on 16-11-17.
 */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./build/webpack.config');
const tool = require('./scripts/tool');
// const host = tool.getLocalIP() || '0.0.0.0';
const host = '0.0.0.0';
const port = 8001;        // 端口号
const mockHost = 'http://localhost:3000';	// mock服务主机+端口

// webpack 自动重新加载，采用inline
config.entry.app.push(`webpack-dev-server/client?http://${host}:${port}/`);

// 启动服务
const server = new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,

    progress: true,

    // 指定服务器内容指定目录
    contentBase: config.output.path,

    watchContentBase: true,

    // 开启服务器的模块热替换(HMR)
    hot: false,

    watchOptions: {
        ignored: /node_modules/,
        aggregateTimeout: 300,
        poll: 1000
    },

    // 当请求不存在的路由时，直接返回首页
    historyApiFallback: {
        index: '/public/',
        disableDotRule: true
    },

    stats: {
        colors: true
    },
    proxy: {
        '/mockAPI/*': {
            target: mockHost,
            changeOrigin: true,
            secure: false
        },
        '/apexAPI': {
            target: 'http://10.0.3.179:9090',
            pathRewrite: { '^/apexAPI': '' }
        }
    }
});

// 将其他路由，全部返回index.html
server.app.get('*', (req, res) => {
    res.sendFile(`${__dirname}/public/index.html`);
});

console.log(`http://${host}:${port}`);

server.listen(port, host);


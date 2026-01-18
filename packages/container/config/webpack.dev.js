const {merge}=require('webpack-merge');

const ModulefederationPlugin=require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig=require('./webpack.common');
const packageJson=require('../package.json');
const devConfig={
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
       new ModulefederationPlugin({
            filename:'Container',
            remotes:{
            marketing:'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared:packageJson.dependencies,
        }),
       
    ]
};
module.exports=merge(commonConfig,devConfig);
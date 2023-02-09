// 引入path
const path = require('path')

module.exports = {
    mode: 'development',
    //指定入口文件
    entry: './src/index.ts',

    //指定打包文件所在的目录

    output: {
        //指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        //打包后文件的名字
        filename: 'bundle.js'
    },
    //指定webpack打包时要使用的模块
    module: {
        //指定要加载的规则
        rules: [
            {
                //test指定的是规则生效的文件
                test: /\.ts$/,
                //要使用的loader
                use:'ts-loader',
                //要排除的文件
                exclude:/node-modules/
            }
        ]
    }


}
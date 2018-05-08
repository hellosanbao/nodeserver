const yargs = require('yargs')
const Server = require('./app')
const argv = yargs
            .usage('server [option]')
            .option('p',{
                alias:'port',
                describe:'端口号',
                default:8080
            })
            .option('h',{
                alias:'hostname',
                describe:'主机名',
                default:'localhost'
            })
            .option('d',{
                alias:'root',
                describe:'服务器根目录',
                default:process.cwd()
            })
            .version()
            .alias('v','version')
            .help()
            .argv;

const server = new Server(argv)
server.start();
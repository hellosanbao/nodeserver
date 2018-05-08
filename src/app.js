const http = require('http')
const chalk = require('chalk')
const path = require('path')
const fs = require('fs')
const handlebars = require('handlebars')
const mimeTypes = require('./content_types')
const compress = require('./compress')
const openUrl = require('./openUrl')
const conf = require('./config')


const source = fs.readFileSync(path.join(__dirname,'./template/dir.tpl')) 
const template = handlebars.compile(source.toString())

const route = async(req,res,filePath)=>{
    try{
        const stats = await fs.statSync(filePath)
        if(stats.isFile()){
            const contentType = mimeTypes(filePath)
            res.statusCode = 200
            res.setHeader('Content-Type',contentType.desc)
            let rs = fs.createReadStream(filePath)
            if(filePath.match(conf.compress)){
                rs = compress(rs,req,res)
            }
            rs.pipe(res)
        }else if(stats.isDirectory()){
            const files = await fs.readdirSync(filePath)
            res.statusCode = 200
            res.setHeader('Content-Type','text/html')
            const data = {
                title:path.basename(filePath),
                dir:path.relative(conf.root,filePath),
                files:files.map(file=>{
                    return {
                        file,
                        icon:mimeTypes(file).icon
                    }
                })
            }
            res.end(template(data))
        }
    }catch(ex){
        res.statusCode = 404
        res.setHeader('Content-Type','text/plain')
        res.end(`${filePath} is not found\n${ex.toString()}`)
    }
}

class Server {
    constructor(config){
        this.conf = Object.assign({},conf,config)
    }
    start(){
        const server = http.createServer((req,res)=>{
            const filePath = path.join(this.conf.root,req.url)
            route(req,res,filePath)
            // fs.stat(filePath,(err,stats)=>{
            //     if(err){
            //         res.statusCode = 404
            //         res.setHeader('Content-Type','text/plain')
            //         res.end(`${filePath} is not found`)
            //         return
            //     }
            //     if(stats.isFile()){
            //         res.statusCode = 200
            //         res.setHeader('Content-Type','text/plain')
            //         fs.createReadStream(filePath).pipe(res)
            //     }else if(stats.isDirectory()){
            //         fs.readdir(filePath,(err,files)=>{
            //             res.statusCode = 200
            //             res.setHeader('Content-Type','text/plain')
            //             res.end(files.join(','))
            //         })
            //     }
            // })
        })
        
        server.listen(this.conf.port,this.conf.hostname,()=>{
            const addr = `http://${this.conf.hostname}:${this.conf.port}`
            console.log(`server start listen ${chalk.blue(addr)}`)
            openUrl(addr)
        })
    }
}

module.exports = Server

const {createGzip,createDeflate} = require('zlib')
module.exports = (rs,req,res)=>{
    const accepEncoding = req.headers['accept-encoding'];
    if(!accepEncoding || !accepEncoding.match(/\b(gzip|deflate)\b/)){
        return rs     
    }else if(accepEncoding.match(/\bgzip\b/)){
        res.setHeader('Content-Encoding','gzip')
        return rs.pipe(createGzip())
    }else if(accepEncoding.match(/\bdeflate\b/)){
        res.setHeader('Content-Encoding','deflate')
        return rs.pipe(createDeflate())
    }
}
const path = require('path')
const fs = require('fs')

const MimeType = {
    'css':{
        desc:'text/css;charset=utf-8',
        icon:'http://oss.mendada.cn/xzqserver/css.png'
    },
    'gif':{
        desc:'image/gif',
        icon:'http://oss.mendada.cn/xzqserver/png.png'
    },
    'html':{
        desc:'text/html;charset=utf-8',
        icon:'http://oss.mendada.cn/xzqserver/html.png'
    },
    'icon':{
        desc:'image/x-icon',
        icon:'http://oss.mendada.cn/xzqserver/icon.png'
    },
    'jpeg':{
        desc:'image/jpeg',
        icon:'http://oss.mendada.cn/xzqserver/png.png'
    },
    'jpg':{
        desc:'image/jpeg',
        icon:'http://oss.mendada.cn/xzqserver/png.png'
    },
    'js':{
        desc:'text/javascript;charset=utf-8',
        icon:'http://oss.mendada.cn/xzqserver/js.png'
    },
    'json':{
        desc:'application/json;charset=utf-8',
        icon:'http://oss.mendada.cn/xzqserver/json.png'
    },
    'pdf':{
        desc:'application/pdf;charset=utf-8',
        icon:'http://oss.mendada.cn/xzqserver/pdf.png'
    },
    'png':{
        desc:'image/png',
        icon:'http://oss.mendada.cn/xzqserver/png.png'
    },
    'svg':{
        desc:'image/svg+xml',
        icon:'http://oss.mendada.cn/xzqserver/svg.png'
    },
    'swf':{
        desc:'application/x-shockwave-flash',
        icon:'http://oss.mendada.cn/xzqserver/font.png'
    },
    'tiff':{
        desc:'image/tiff',
        icon:'http://oss.mendada.cn/xzqserver/font.png'
    },
    'txt':{
        desc:'text/plain;charset=utf-8',
        icon:'http://oss.mendada.cn/xzqserver/font.png'
    },
    'wav':{
        desc:'audio/x-wav',
        icon:'http://oss.mendada.cn/xzqserver/font.png'
    },
    'wma':{
        desc:'audio/x-ms-wma',
        icon:'http://oss.mendada.cn/xzqserver/music.png'
    },
    'wmv':{
        desc:'video/x-ms-wmv',
        icon:'http://oss.mendada.cn/xzqserver/video.png'
    },
    'xml':{
        desc:'text/xml;charset=utf-8',
        icon:'http://oss.mendada.cn/xzqserver/xml.png'
    },
    'mp3':{
        desc:'audio/mp3',
        icon:'http://oss.mendada.cn/xzqserver/music.png'
    },
    'mp4':{
        desc:'video/mpeg4',
        icon:'http://oss.mendada.cn/xzqserver/video.png'
    },
    'flv':{
        desc:'audio/mp4',
        icon:'http://oss.mendada.cn/xzqserver/video.png'
    },
    'rmvb':{
        desc:'application/vnd.rn-realmedia-vbr',
        icon:'http://oss.mendada.cn/xzqserver/video.png'
    },
    'avi':{
        desc:'video/avi',
        icon:'http://oss.mendada.cn/xzqserver/video.png'
    },
    'dir':{
        desc:'text/html',
        icon:'http://oss.mendada.cn/xzqserver/dir.png'
    },
    'tpl':{
        desc:'text/plain',
        icon:'http://oss.mendada.cn/xzqserver/tpl.png'
    }
}

module.exports = (filePath)=>{
    let ext = path.extname(filePath).split('.').pop().toLowerCase()
    if(!ext){
        ext = filePath
    }
    const ft = fs.statSync(filePath)
    if(ft.isFile()){
        return MimeType[ext] || MimeType['txt']
    }else{
        return MimeType['dir']
    }
}
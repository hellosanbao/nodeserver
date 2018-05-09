const path = require('path')
const fs = require('fs')

const MimeType = {
    'css':{
        desc:'text/css;charset=utf-8',
        icon:'/src/static/css.png'
    },
    'gif':{
        desc:'image/gif',
        icon:'/src/static/png.png'
    },
    'html':{
        desc:'text/html;charset=utf-8',
        icon:'/src/static/html.png'
    },
    'icon':{
        desc:'image/x-icon',
        icon:'/src/static/icon.png'
    },
    'jpeg':{
        desc:'image/jpeg',
        icon:'/src/static/png.png'
    },
    'jpg':{
        desc:'image/jpeg',
        icon:'/src/static/png.png'
    },
    'js':{
        desc:'text/javascript;charset=utf-8',
        icon:'/src/static/js.png'
    },
    'json':{
        desc:'application/json;charset=utf-8',
        icon:'/src/static/json.png'
    },
    'pdf':{
        desc:'application/pdf;charset=utf-8',
        icon:'/src/static/pdf.png'
    },
    'png':{
        desc:'image/png',
        icon:'/src/static/png.png'
    },
    'svg':{
        desc:'image/svg+xml',
        icon:'/src/static/svg.png'
    },
    'swf':{
        desc:'application/x-shockwave-flash',
        icon:'/src/static/font.png'
    },
    'tiff':{
        desc:'image/tiff',
        icon:'/src/static/font.png'
    },
    'txt':{
        desc:'text/plain;charset=utf-8',
        icon:'/src/static/txt.png'
    },
    'wav':{
        desc:'audio/x-wav',
        icon:'/src/static/font.png'
    },
    'wma':{
        desc:'audio/x-ms-wma',
        icon:'/src/static/music.png'
    },
    'wmv':{
        desc:'video/x-ms-wmv',
        icon:'/src/static/video.png'
    },
    'xml':{
        desc:'text/xml;charset=utf-8',
        icon:'/src/static/xml.png'
    },
    'mp3':{
        desc:'audio/mp3',
        icon:'/src/static/music.png'
    },
    'mp4':{
        desc:'video/mpeg4',
        icon:'/src/static/video.png'
    },
    'flv':{
        desc:'audio/mp4',
        icon:'/src/static/video.png'
    },
    'rmvb':{
        desc:'application/vnd.rn-realmedia-vbr',
        icon:'/src/static/video.png'
    },
    'avi':{
        desc:'video/avi',
        icon:'/src/static/video.png'
    },
    'dir':{
        desc:'text/html',
        icon:'/src/static/dir.png'
    },
    'tpl':{
        desc:'text/plain',
        icon:'/src/static/tpl.png'
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
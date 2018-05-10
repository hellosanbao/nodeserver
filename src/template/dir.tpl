<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        @charset "utf-8";
        /*----------- ������ʽ ----------------*/
        html,body,h1,h2,h3,h4,h5,h6,div,dl,dt,dd,ul,ol,li,p,blockquote,pre,hr,figure,table,caption,th,td,form,fieldset,legend,input,button,textarea,menu{margin:0;padding:0;}
        header,footer,section,article,aside,nav,hgroup,address,figure,figcaption,menu,details{display:block;}
        table{border-collapse:collapse;border-spacing:0;}
        caption,th{font-weight:normal;}
        html,body,fieldset,iframe,abbr{border:0;}
        i,cite,em,var,address,dfn{font-style: normal;}
        [hidefocus],summary{outline:0;}
        ul , ol , ul li , li , ol li{list-style:none;}
        h1,h2,h3,h4,h5,h6,small{font-size:100%;}
        sup,sub{font-size:83%;}
        pre,code,kbd,samp{font-family:inherit;}
        q:before,q:after{content:none;}
        textarea{overflow:auto;resize:none;}
        label,summary{cursor:default;}
        a,button{cursor:pointer;}
        h1,h2,h3,h4,h5,h6,em,strong,b{font-weight:bold;}
        ins,u,s,a,a:hover{text-decoration:none;}
        body,textarea,input,button,select,keygen,legend{font-family:"Microsoft YaHei",\5fae\8f6f\96c5\9ed1,arial,\5b8b\4f53; font-size:12px;color:#444 ;outline:0;}
        body{background:#fff;color:#444;}
        a{color:#444; border: none; text-decoration: none;outline:none; /*�Ƴ����߿�  IE8,FF����*/ hide-focus: expression(this.hideFocus=true); /*IE6��IE7*/}
        a:focus{outline: 0;-moz-outline-style: none;}
        a:hover{text-decoration: none;}
        img{overflow: hidden;border: 0 none;}
        button,input,select,textarea{font-size:100%;font-family:tahoma;margin: 0;outline: 0 none;vertical-align: baseline;_overflow:visible;*vertical-align: middle;*overflow:visible;}
        .flex{
            display: flex;
            display: -webkit-box;
            display: -moz-box;
            display: -ms-flexbox;
            display: -webkit-flex;
        }
        .flex1{
            flex:1;
        }
        .flex-middle{
            align-items: center;
            -ms-flex-align: center;
            -webkit-box-align: center;
        }
        .flex-center{
            justify-content: center;
            -ms-flex-pack: center;
            -webkit-box-pack: center;
        }
        .flex-between{
            justify-content: space-between;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
        }
        .flex-vertical{
            flex-direction:column;
            -webkit-box-orient:vertical;
            -webkit-box-direction:normal;
            -ms-flex-direction:column;
        }
        body{
            background: url(http://oss.mendada.cn/xzqserver/E0D1ED15000D1F37B5EC42422CD73BAD.jpg) #333;
        }
        .content{
            width: 1000px;
            height: 800px;
            margin: 30px auto 0;
            background: url('http://oss.mendada.cn/xzqserver/bg.png') no-repeat center/100% auto;
            font-family: Arial, Helvetica, sans-serif;
            overflow: hidden;
        }
        .content .wrap{
            width: 920px;
            height: 518px;
            margin: 40px auto;
            overflow-y: scroll;
        }
        .wrap::-webkit-scrollbar{
            display: none;
        }
        .file-list::after{
            content:"";
            display: block;
            height:0;
            clear:both;
        }
        .file-item{
            float: left;
            text-align: center;
            margin: 35px 10px 0;
            width: 100px;
            height: 90px;
        }
        .file-icon img{
            width: 70px;
            vertical-align: middle;
        }
        .file-item .file-name{
            font-size:12px;
            color: #555;
            font-weight:600;
            overflow: hidden;
            text-overflow:ellipsis;
            white-space: nowrap;
            margin-top: 10px;
            width: 100px;
        }
        .file-item a{
            align-self: flex-end;
        }
    </style>
</head>
<body>
    <div class="content">
        <div class="wrap">
            <ul class="file-list">
                {{#each files}}
                    <li class="file-item flex">
                        <a href="{{../dir}}/{{file}}">
                            <div class="file-icon">
                                <img src="{{icon}}" alt="">
                            </div>
                            <div class="file-name">{{file}}</div>
                        </a>
                    </li>
                {{/each}}
            </ul>
        </div>
    </div>
</body>
</html>
cc.Class({
    extends: cc.Component,

    properties: {
        
    },    

    doLogin:function( name , password , cb ){
        cc.log('登录逻辑判断 name : %s  , password : %s  ', name , password);
        var url  ='http://120.92.233.98:4003/login/?name=%s&pwd=%s&token=%s&platform=%s';
        url= cc.formatStr(url,name,password,'','') 
        var httpRequest = new HttpRequest( url, function(res){
           if( null != cb )
           {
               cb( res.code );
           } 
        });
    },

    doRegister:function( name , password , cb ){
        cc.log('注册逻辑判断 name : %s  , password : %s  ', name , password);
        var url  ='http://120.92.233.98:4003/register/?name=%s&pwd=%s&token=%s&platform=%s';
        url= cc.formatStr(url,name,password,'','') 
        var httpRequest = new HttpRequest( url, function(res){
           if( null != cb )
           {
               cb( res.code );
           } 
        });
    },
});
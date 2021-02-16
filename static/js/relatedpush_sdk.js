var settingsRD = {
    defaultCookie:"_ExVID",
    webSiteAddress:"www.dsdamat.com",
    relatedAppAlias:"dsdamat_webpush",
    relatedAppSafariAlias:"dsdamat_webpush_safari",
    rdWebSitePushID:"",
    brandedSubDomain:"",
    safariPushApi:"https://pushs.euromsg.com/safari",
    subscriptionUrl: "https://pushs.euromsg.com/subscription",
    defaultLanguage:"TR",
    defaultTitle:"Bildirimlere izin verin",
    defaultMessage:"Bildirimlere izin verin",
    defaultIcon:"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",
    isHttp: false,
    autoRegister: true,
    isOptIn: false,
    optInNotify: {
        theme:"",
        background:"#FFFFFF",
        position: { v:"", h:"" },
        leftpadding:"",
        rightpadding:"",
        delay:"0",
        title:"",
        message:"",
        denytimespan:"1",
        allowButton: {
            bgcolor:"#5cb85c",
            fontcolor:"#FFFFFF",
            text:"İzin ver"
        },
        denyButton: {
            bgcolor:"#b6cab6",
            fontcolor:"#000000",
            text:"Daha Sonra"
        }
    },
    welcomeNotification: {
        enable:"False",
        title:"",
        message:"",
        icon:"",
        actionsButton: "",
        url:"",
        utmparams:""
    },
    pubkey : "BMPgc5orxsB4Sm_uEu2Sm3gBPXYbcv7c_LlnmhYG2fQgis551sgGPIEm523tz77hRP-ChhDyJIBBRfnbx7uMFLQ"
};

'use strict';
var subData = null;
function rdReceiveMessage(event){
    if(settingsRD.brandedSubDomain !== "" && event.origin.indexOf(settingsRD.brandedSubDomain)>-1){
        subData = JSON.parse(event.data);
        db.Update(subData);
        var rdObject = {};
        rdObject.subs = {};
        rdObject.extra = {};
        rdObject.extra.userinfo = RDActive.idOfUser;
        rdObject.action = "Accept";
        rdObject.channel = 2;
        rdObject.appKey = RDActive.appID;
        rdObject.subs.keys = {};
        rdObject.brw = subData.brw;
        rdObject.subs.token = subData.token;
        rdObject.subs.keys.p256dh = subData.p256dh;
        rdObject.subs.keys.auth = subData.auth;
        rdObject.version = "2.0";
        RDActive.postToServer(settingsRD.subscriptionUrl,rdObject);
        RDActive.postToVis(subData.token);
    }
}

window.addEventListener("message",rdReceiveMessage,false);

var RelatedPushSdk;
RelatedPushSdk = function () {
    this.ownHost = false;
    this.idOfUser = "";
    this.swRegistration = null;
    this.appID = "";
    this.protocol = document.location.protocol.split(":")[0];
    this.autoRegister = false;
    this.isSafari = false;
    this.isOthers = false;
    this.notifySettings = {};
    this.welcomeSettings = {};
    this.isSubscribed = false;
    this.denyAll = false;
    this.isHttps = false;
    this.dbTimeSpan = 120*1000; // 2 minutes
    this.denyTimeSpan = 0;
    this.vlTokenCo = "OM_TEMP_sys_TokenID";
    this.vlAliasCo = "OM_TEMP_sys_AppID";
    this.vlTokenPa = "OM.sys.TokenID";
    this.vlAliasPa = "OM.sys.AppID";
    this.pubkey = (settingsRD.hasOwnProperty("pubkey") && settingsRD.pubkey !== "") ? settingsRD.pubkey : "";
    this.vapidPublicKey = "";
    
    this.initSettings = function () {
        this.whichBrowser = this.getWhichBrowser();
        this.denyTimeSpan = this.getDenyTimeSpan();
        this.isHttps = this.getHttpOrHttps();
        this.ownHost = this.getPermWhere();
        this.appID = this.getAppID();
        if (this.pubkey == "")
			this.addManifest();
		else
			this.vapidPublicKey = this.urlBase64ToUint8Array(this.pubkey);
        this.idOfUser = this.getUserID();
        this.autoRegister = this.getAutoRegister();
        this.safariPushID = settingsRD.rdWebSitePushID;
        this.ControlPermission();
        this.notifySettings = this.getNotifySettings();
        this.getSubscribeSettings();
    };

    this.urlBase64ToUint8Array = function(base64String){
        const padding = '='.repeat((4 - base64String.length % 4) % 4);
        const base64 = (base64String + padding)
            .replace(/-/g, '+')
            .replace(/_/g, '/');
        const rawData = window.atob(base64);
        const outputArray = new Uint8Array(rawData.length);
        for (let i = 0; i < rawData.length; ++i) {
            outputArray[i] = rawData.charCodeAt(i);
        }
        return outputArray;
    };

    this.getDenyTimeSpan = function(){
        var day_webpush_deny = 36*24*10e4;
        if(settingsRD.isOptIn){
            var delay_time_webpush = parseInt(settingsRD.optInNotify.denytimespan);
            if(typeof  delay == "number"){
                day_webpush_deny = day_webpush_deny*delay_time_webpush;
            }
        }
        return day_webpush_deny;
    };
    this.getAppID = function () {
        var value = "";
        if (bowser.name === "Safari" && bowser.mac) {
            this.isSafari = true;
            value = settingsRD.relatedAppSafariAlias;
        }
        else if (bowser.name === "iPad" || bowser.name === "iPhone" || bowser.ios) {
            this.denyAll = true;
        }
        else if (( bowser.name === "Chrome" || bowser.name === "Firefox" || bowser.name === "Chromium") && !bowser.ios) {
            this.isSafari = false;
            this.isOthers = true;
            value = settingsRD.relatedAppAlias;
        }
        else if(bowser.name === "Opera"){
            this.isOthers = true;
            this.isSafari = false;
            value = settingsRD.relatedAppAlias;
        }
        else {
            this.denyAll = true;
        }
        return value;
    };
    this.getUserID = function () {
        var id = this.getCookie(settingsRD.defaultCookie);
        id = id.replace("%40","@").replace("%20"," ");
        if(id === ""){
            if(typeof Visilabs !== "undefined"){
                var vl = new Visilabs();
                if(vl.Parameters["OM.exVisitorID"]){
                    id = vl.Parameters["OM.exVisitorID"].replace("%40","@").replace("%20"," ");
                }
            }
        }
        return id;
    };
    this.getAutoRegister = function (){
        if(this.ownHost){
            return true;
        }
        else{
            return settingsRD.autoRegister;
        }

    };
    this.getSubscribeSettings = function(){
        if(this.isSafari && settingsRD.rdWebSitePushID !== ""){
            if(Notification.permission === "granted"){
                if('safari' in window && 'pushNotification' in window.safari){
                    var permissionData = window.safari.pushNotification.permission(this.safariPushID);
                    this.registerSafari(permissionData);
                }
            }
            else if(Notification.permission === "default"){
                this.RDPopUpCenter(settingsRD.optInNotify.theme);
            }
        }
        else if(this.isOthers){
            if(settingsRD.isHttp){
                this.RDPopUpCenter(settingsRD.optInNotify.theme);
            }
            else{
                if(settingsRD.isOptIn && this.isHttps){
                    this.updateServiceWorker();
                    this.RDPopUpCenter(settingsRD.optInNotify.theme);
                }
                else{
                    if((Notification.permission === "granted" || Notification.permission === "default") && this.isHttps){
                        this.updateServiceWorker();
                        this.registerServiceWorker(Notification.permission);
                    }
                    else{
                        console.warn("permission denied or site is not https.")
                    }
                }
            }
        }
    };
    this.createPermWindow = function(){
        var self = this;
        var protocol = "https://";
        if(settingsRD.brandedSubDomain.indexOf("localhost") > -1)
            protocol = "http://";
        var url = protocol+settingsRD.brandedSubDomain;
        var popup = window.open(url,"Web Push","width=600,height=400");
        setTimeout(function(){self.sendMessage(popup)},100);
    };
    this.subscriptionUpdater = function(){
        if(this.isSafari){
            if(Navigator.permission === "granted"){

            }
            else if(Navigator.permission === "default"){

            }
            else{

            }
        }
        else if(this.isOthers){
            if(Navigator.permission === "granted"){

            }
            else if(Navigator.permission === "default"){

            }
            else{

            }
        }
    };
    this.ControlPermission = function(){
        var self = this;
        if(this.isHttps && !settingsRD.isHttp){
            db.ControlSettings(self);
        }
    };

    this.registerServiceWorker = function(method){
        var self = this;
        if(method === "default"){
            if('serviceWorker' in navigator && 'PushManager' in window){
                console.info("Service Worker and Push is supported");
                navigator.serviceWorker.register('/static/js/relatedpush_sw.js');
                navigator.serviceWorker.ready
                    .then(function(sw){
                        console.info("Service Worker registered");
                        self.swRegistration = sw;
                        self.subScribeUser(sw);
                    })
                    .catch(function(err){
                        console.warn("Service Worker error:",err);
                    });
            }
            else{
                console.warn("Service worker or Push is not supported");
            }
        }
        else if(method === "granted"){
            if('serviceWorker' in navigator && 'PushManager' in window){
                console.info("Service Worker and Push is supported");
                navigator.serviceWorker.register('/static/js/relatedpush_sw.js');
                navigator.serviceWorker.ready
                    .then(function(sw){
                        console.info("Service Worker registered");
                        self.swRegistration = sw;
                        self.checkSubscribe(sw);
                    })
                    .catch(function(err){
                        console.warn("Service Worker error:",err);
                    });
            }
            else{
                console.warn("Service worker or Push is not supported");
            }
        }
        else{
            var data = {};
            data.permission = "denied";
            db.Update(data);
            console.log("push notification denied");
        }
    };

    this.updateServiceWorker = function () {
        var sw = "/static/js/relatedpush_sw.js";
        db.ServiceWorkerUpdate(sw);
    };

    this.registerSafari = function(data){
        if(data.permission === "default"){
            window.safari.pushNotification.requestPermission(
                settingsRD.safariPushApi,
                this.safariPushID,
                {"userinfo":this.idOfUser},
                function(data){RDActive.registerSafari(data)});
        }
        else if(data.permission === "granted"){
            this.updateSubscriptionOnServer(data);
        }
    };

    this.checkSafariSubscribe = function(data){
        var self = this;
        if(data.token !== null)
            db.getSubsUpdate(data,self,sw);
    };

    this.postToVis = function(token){
        if(typeof(Visilabs) !== "undefined"){
            var vl = new Visilabs();
            vl.AddParameter(this.vlAliasPa,this.appID);
            vl.AddParameter(this.vlTokenPa,token);
            vl.AddParameter("OM.uri","/om.gif");
            vl.Collect();
        }
    };

    this.subScribeUser = function(sw){
        var self = this;
        var subscribeObject = {userVisibleOnly: true};
		if ( self.vapidPublicKey !== "" )
		{
			subscribeObject.applicationServerKey = self.vapidPublicKey;
		}
        if(sw){
            sw.pushManager.subscribe(subscribeObject)
            .then(function(subscription){
                self.updateSubscriptionOnServer(subscription);
            })
            .catch(function (err) {
                console.warn("Failed to subscribe the user",err);
                sw.pushManager.getSubscription()
                    .then(function(subscription) {
					    console.log("subs : "  + subscription);
                        subscription.unsubscribe()
                            .then(function(successful) {
                                console.log("unsubscribe success :"  + successful);
                                db.clearDB();
                                self.getSubscribeSettings();
                            })
                            .catch(function(err) {
                                console.log("unsubscribe failed :"  + err);
                            })
                    })
                    .catch(function(err){
                        console.log("subscribtion get failed :"  + err);
                    });
            });
        }
    };

    this.checkSubscribe = function(sw){
        var self = this;
        if(sw)
            db.getSubsUpdate(this.dbTimeSpan,self,sw);
        else
            console.log("service worker data not found");
    };

    this.getPermWhere = function(){
        var value = false;
        var a = settingsRD.brandedSubDomain !== document.location.host+document.location.pathname ;
        var b = settingsRD.brandedSubDomain !== document.location.host;
        var c = settingsRD.brandedSubDomain !== document.location.hostname;
        if(settingsRD.isHttp){
            if(b)
                value = true;
        }
        return value;
    };

    this.updateSubscriptionOnServer = function(subs){
        var temp = JSON.stringify(subs);
        var dbdata = {};
        console.info("Default :",temp);
        var json_subs = JSON.parse(temp);
        var rdWebObject = {};
        rdWebObject.extra = {};
        rdWebObject.subs = {};
        rdWebObject.extra.userinfo = this.idOfUser;
        rdWebObject.action = "Accept";
        rdWebObject.channel = 2;
        rdWebObject.appKey = this.appID;
        rdWebObject.brw = this.whichBrowser;
        dbdata.brw = rdWebObject.brw;
        if(this.isSafari) {
            rdWebObject.subs.token = subs.deviceToken;
            dbdata.token = subs.deviceToken;
            dbdata.permission = "granted";
        }
        else {
            rdWebObject.subs.keys = {};
            rdWebObject.subs.token = subs.endpoint.split("/").slice(-1)[0];
            rdWebObject.subs.keys.p256dh = json_subs.keys.p256dh;
            rdWebObject.subs.keys.auth = json_subs.keys.auth;
            dbdata.token = subs.endpoint.split("/").slice(-1)[0];
            dbdata.p256dh = json_subs.keys.p256dh;
            dbdata.auth = json_subs.keys.auth;
            dbdata.permission = "granted";
        }
        rdWebObject.version = "2.0";
        if(this.isSafari){
            this.postToServerSafari(settingsRD.subscriptionUrl,rdWebObject);
        }
        else {
            this.postToServer(settingsRD.subscriptionUrl, rdWebObject);
        }
        this.postToVis(dbdata.token);
        db.Update(dbdata);
    };
    this.sendAsycSubs = function (data) {
        var rdWebObject = {};
        rdWebObject.subs = {};
        rdWebObject.extra = {};
        rdWebObject.extra.userinfo = this.idOfUser;
        rdWebObject.action = "Accept";
        rdWebObject.channel = 2;
        rdWebObject.appKey = this.appID;
        rdWebObject.subs.token = data.token;
        if(data.brw !== null){
            rdWebObject.brw = data.brw;
        }
        else{
            rdWebObject.brw = this.whichBrowser;
        }
        if(data.auth !== "" && data.p256dh !== ""){
            rdWebObject.subs.keys = {};
            rdWebObject.subs.keys.p256dh = data.p256dh;
            rdWebObject.subs.keys.auth = data.auth;
        }
        rdWebObject.version = "2.0";
        if(this.isSafari){
            this.postToServerSafari(settingsRD.subscriptionUrl,rdWebObject);
        }
        else{
            this.postToServer(settingsRD.subscriptionUrl,rdWebObject);
        }
        this.postToVis(data.token);
        var visilabsToken = {}
        visilabsToken.appid = this.isSafari ? settingsRD.relatedAppSafariAlias : settingsRD.relatedAppAlias;
        visilabsToken.token = rdWebObject.subs.token;
        RDigiSetVisilabsToken(visilabsToken);
    };
    this.addManifest = function(){
        if(!settingsRD.isHttp && this.isHttps && this.isOthers){
            var url = "";
            if(settingsRD.manifestName !== undefined && settingsRD.manifestName !== ""){
                if(settingsRD.manifestName !== "#manifestName#")
                    url = "/"+settingsRD.manifestName;
                else
                    url = "/manifest.json";
            }
            else{
                url = "/manifest.json";
            }
            var tempUrl = document.querySelector('link[rel="manifest"]');
            if(tempUrl !== null){
                console.log(tempUrl.href);
            }
            try{
                var http = new XMLHttpRequest();
                http.open('HEAD', url, true);
                http.send();
                if(http.status !== 404){
                    var link = document.createElement("link");
                    link.rel = "manifest";
                    link.href = url;
                    var elem = document.head;
                    elem.insertBefore(link,elem.firstChild);
                }
                else{
                    console.warn("manifest file not found.");
                }
            }
            catch(err){
                console.log(err);
            }

        }
    };

    this.createPostData = function(data){
        var perminfo = {};
        perminfo.auth = data.auth;
        perminfo.p256dh = data.p256dh;
        perminfo.token = data.token;
        return JSON.stringify(perminfo);
    };

    this.sendMessage = function(popup){
        var brandProtocol = "https://";
        if(settingsRD.brandedSubDomain.indexOf("localhost")>-1)
            brandProtocol = "http://";
        var targetUrl = brandProtocol+settingsRD.brandedSubDomain;
        if(popup !== null && subData == null ){
            setTimeout(function(){
                try{
                    popup.postMessage(this.idOfUser,targetUrl);
                }
                catch(err){

                }
                RDActive.sendMessage(popup);},300);
        }
    };

    this.getNotifySettings = function(){
        return settingsRD.optInNotify;
    };
    this.getHttpOrHttps = function(){
        if(document.location.host.indexOf("localhost")>-1)
            return true;
        else
            return this.protocol === "https";
    };
    this.getCookie = function(a){
        a += "=";
        for (var c = document.cookie.split(";"), d = 0; d < c.length; d++) {
            for (var b = c[d]; " " === b.charAt(0); )
                b = b.substring(1);
            if (0 === b.indexOf(a))
                return b.substring(a.length, b.length);
        }
        return ""
    };
    this.setCookie = function(data){

    };
    this.postToServer = function(endpoint,body){
        var header = new Headers();
        header.append("Content-Type","application/json;charset=UTF-8");
        fetch(endpoint,{
            method: 'POST',
            mode: 'no-cors',
            headers: header,
            body: JSON.stringify(body)
        });
    };

    this.postToServerSafari = function (endpoint,body) {
        var http = new XMLHttpRequest();
        var url = endpoint;
        var params = body;
        http.open("POST",url,true);
        http.send(JSON.stringify(params));
    };

    this.getWhichBrowser = function(){
        var value = bowser.name;
        if(value === "Chrome" || value === "Chromium")
            return "C";
        else if(value === "Opera")
            return "O";
        else if(value === "Firefox")
            return "F";
        else if(value === "Safari")
            return "S";
        else {
            console.log("Browser not categorized ," + value);
            return "";
        }
    };

    this.RDPopUpCenter = function(theme){
        var self = this;
        db.OptInSelect(self,theme);
    };
    this.createPopUp = function(theme){
        if(theme === "Default")
            this.DefaultOptIn(settingsRD.optInNotify);
    };

    this.DefaultOptIn = function(notifyObject){
        var self = this;
        console.info("optin trigger");
        var vl_perm_box = document.createElement("div");

        var div_id_vl_perm_box = document.createAttribute("id");
        div_id_vl_perm_box.value = "visilabs_web_push_perm_box";
        vl_perm_box.setAttributeNode(div_id_vl_perm_box);

        var style_vl_perm_box = document.createAttribute("style");
        style_vl_perm_box.value = "position:absolute;height:250px;width:520px;top:1%;left:50%;margin-left:-275px;margin-top:1px;z-index:100000;";
        vl_perm_box.setAttributeNode(style_vl_perm_box);

        vl_perm_box.innerHTML = "<div class='vl-notif-inner' style='overflow:auto;width:520px;height:auto; display: table;'>" +
            "<div style='display: table-row;'><div class='vl-notif-logo'>" +
            "<img src='data:image/png;base64," + settingsRD.defaultIcon + "'>" +
            "</div>" +
            "<div class='vl-notif-msg'>" +
            "<h3 class='vl-notif-title'>" + notifyObject.title + "</h3>" +
            "<p class='vl-notif-message'>" + notifyObject.message + "</p> " +
            "<div class='vl-notif-buttons'><button class='vl-notif-delay' id='web_push_hayir'>" + settingsRD.optInNotify.denyButton.text + "</button><button id='web_push_evet' class='vl-notif-accept'>" + settingsRD.optInNotify.allowButton.text + "</button> </div>" +
            "</div> " +
            "</div>" +
            "</div>";
        document.body.appendChild(vl_perm_box);

        if(notifyObject.background == null){
            notifyObject.background = "#fff";
        }

        var style_in_perm = document.createElement("style");
        style_in_perm.innerHTML = ".vl-notif-msg {display: table-cell; width: 60%; padding: 10px; box-sizing: border-box; text-align: center; line-height: 1.4; vertical-align: middle;}" +
            ".vl-notif-inner{box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.43) !important;background:" + notifyObject.background + ";border: 1px solid #EAEAEA;max-width: 520px;border-radius: 3px;}" +
            ".vl-notif-title{background: none;font-family: Tahoma, Geneva, sans-serif;font-size: 17px;font-weight: bold;margin: 0; padding: 0;}" +
            ".vl-notif-message{background: none;font-size: 15px;font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;padding: 0;margin: 12px 0;}" +
            ".vl-notif-logo{display: table-cell;width: 35%;padding: 10px;} " +
            ".vl-notif-logo img{width:100%}" +
            ".vl-notif-buttons button{padding: 8px 15px;margin-left: 15px;font-size: 15px;text-align: center;border: 1px solid transparent;border-radius: 4px;background-color: #fff;border-color: #333;}" +
            ".vl-notif-buttons button:hover{color:#333;background-color:#e6e6e6;border-color:#adadad;}" +
            ".vl-notif-buttons .vl-notif-accept{background-color:" + settingsRD.optInNotify.allowButton.bgcolor + ";color:" + settingsRD.optInNotify.allowButton.fontcolor + ";border-color:transparent;}" +
            ".vl-notif-buttons .vl-notif-delay{background-color:" + settingsRD.optInNotify.denyButton.bgcolor + ";color:" + settingsRD.optInNotify.denyButton.fontcolor + ";border-color:transparent;}" +
            "@media only screen and (max-width: 767px){#visilabs_web_push_perm_box{ width: 94% !important;margin-left: -47% !important;} .vl-notif-inner{width: 100% !important;max-width: 100%;} .vl-notif-title{font-size: 12px;} .vl-notif-message{font-size: 11px;} .vl-notif-buttons button{padding: 5px 10px;margin-left: 15px;font-size: 12px;}}";
        vl_perm_box.appendChild(style_in_perm);

        self.buttonBehavior();

    };
    this.buttonBehavior = function(){
        var self = this;
        document.getElementById("web_push_hayir").onclick = function () {
            console.log("web push reddedildi");
            var data = {optIn:opt_webpush_value[1]};
            db.OptInInsert(data);

            self.closePermBox();
        };
        document.getElementById("web_push_evet").onclick = function () {
            console.log("web push kabul edildi");
            self.closePermBox();
            var data = {optIn:opt_webpush_value[0]};
            if(self.isSafari){
                var permissionData = window.safari.pushNotification.permission(self.safariPushID);
                self.registerSafari(permissionData);
            }
            else{
                if(settingsRD.isHttp)
                    self.createPermWindow();
                else{
                    self.registerServiceWorker(Notification.permission);
                }
            }
            db.OptInInsert(data);
        }
    };
    this.closePermBox = function(){
        var close_perm_box = document.getElementById("visilabs_web_push_perm_box");
        close_perm_box.style.display = "none";
    };
};
var opt_webpush_value = {
    0:"accept",
    1:"deny"
};
var rdDbCenter;
rdDbCenter = function () {
    this.token = "";
    this.auth = "";
    this.p256dh = "";
    this.permission = "";
    relatedforage.config({
        driver: relatedforage.LOCALSTORAGE,
        name: settingsRD.relatedAppAlias
    });
    this.OptInInsert = function (data) {
        if (data.hasOwnProperty("optIn")) {
            relatedforage.setItem("optIn", data.optIn);
            if (data.optIn === opt_webpush_value[1]) {
                var delayDeny = new Date();
                delayDeny = delayDeny.getTime();
                relatedforage.setItem("denyDelay", delayDeny);
            }
        }
    };

    this.ControlSettings = function (self) {
        var permission = Notification.permission;
        relatedforage.getItem("permission").then(function (perm) {
            if (perm === null) {

            } else if (perm === "granted") {
                if (permission === "default") {
                    relatedforage.removeItem("permission");
                    relatedforage.removeItem("token");
                    relatedforage.removeItem("optIn");
                    relatedforage.removeItem("auth");
                    relatedforage.removeItem("p256dh");
                    relatedforage.removeItem("acceptTimespan");
                    relatedforage.removeItem("optInView");
                    relatedforage.removeItem("optInVisitTime");
                    relatedforage.removeItem("acceptTimespan");
                    RDigiRemoveItem("OM.visilabspush");
                } else if (permission === "denied") {
                    relatedforage.setItem("permission", "denied");
                    relatedforage.removeItem("token");
                    relatedforage.removeItem("optIn");
                    relatedforage.removeItem("auth");
                    relatedforage.removeItem("p256dh");
                    RDigiRemoveItem("OM.visilabspush");
                }
            } else if (perm === "denied") {
                if (permission === "default" || permission === "granted") {
                    relatedforage.removeItem("permission");
                    relatedforage.removeItem("token");
                    relatedforage.removeItem("optIn");
                    relatedforage.removeItem("auth");
                    relatedforage.removeItem("p256dh");
                    relatedforage.removeItem("acceptTimespan");
                    relatedforage.removeItem("optInView");
                    relatedforage.removeItem("optInVisitTime");
                    RDigiRemoveItem("OM.visilabspush");
                }
            }
        })
    };

    this.OptInSelect = function (self, theme) {
        relatedforage.getItem("optIn").then(function (value) {
            if (value === null) {
                var a = new Date();
                a = a.getTime();
                relatedforage.getItem("permission").then(function (perm) {
                    if (perm === "denied") {
                        console.log("permission denied");
                    } else {
                        relatedforage.getItem("optInView").then(function (view) {
                            if (view > 0) {
                                relatedforage.getItem("optInVisitTime").then(function (timeD) {
                                    if (a - timeD > self.dbTimeSpan) {
                                        self.createPopUp(theme);
                                        relatedforage.setItem("optInView", 1);
                                        relatedforage.setItem("optInVisitTime", a);
                                    }
                                });
                            } else {
                                self.createPopUp(theme);
                                relatedforage.setItem("optInView", 1);
                                relatedforage.setItem("optInVisitTime", a);
                            }
                        });
                    }
                });

            } else if (value === opt_webpush_value[0]) {
                var isSend = false;
                relatedforage.getItem("permission").then(function (perm) {
                    if (perm === "granted") {
                        var items = ["token", "auth", "p256dh", "acceptTimespan", "brw"];
                        var promises = items.map(function (item) {
                            return relatedforage.getItem(item);
                        });
                        Promise.all(promises).then(function (results) {
                            var a = new Date();
                            a = a.getTime();
                            if (results[0] !== null) {
                                if (results[3] !== null) {
                                    if (a - results[3] > self.dbTimeSpan) {
                                        isSend = true;
                                    }
                                } else {
                                    isSend = true;
                                }
                            } else {
                                //todo token null ise accept var ise
                                if (self.isSafari) {
                                    relatedforage.removeItem("acceptTimespan");
                                    var permissionData = window.safari.pushNotification.permission(self.safariPushID);
                                    self.registerSafari(permissionData);
                                } else {
                                    if (!settingsRD.isHttp) {
                                        relatedforage.removeItem("acceptTimespan");
                                        self.registerServiceWorker(Notification.permission);
                                    }
                                }
                            }
                            if (isSend) {
                                var token = results[0];
                                var auth = "";
                                var p256dh = "";
                                if (results[1] !== null && results[2] !== null) {
                                    auth = results[1];
                                    p256dh = results[2];
                                }
                                var data = {};
                                data.token = token;
                                data.auth = auth;
                                data.p256dh = p256dh;
                                data.brw = results[4];
                                self.sendAsycSubs(data);
                                relatedforage.setItem("acceptTimespan", a);
                            }
                        });
                    } else if (perm === null) {
                        if (self.isSafari) {
                            relatedforage.removeItem("acceptTimespan");
                            var permissionData = window.safari.pushNotification.permission(self.safariPushID);
                            self.registerSafari(permissionData);
                        } else {
                            if (!settingsRD.isHttp) {
                                relatedforage.removeItem("acceptTimespan");
                                self.registerServiceWorker(Notification.permission);
                            }
                        }
                    } else {
                        console.log("permission denied");
                    }
                });
                // accept ise 30 dakika da bir token varsa toplayıp istek atacacak

            } else if (value === opt_webpush_value[1]) {
                relatedforage.getItem("denyDelay").then(function (value) {
                    var timespan = self.denyTimeSpan;
                    var a = new Date();
                    a = a.getTime();
                    if (a - value > timespan) {
                        self.createPopUp(theme);
                        relatedforage.setItem("denyDelay", a);
                    }
                });
            } else {

            }
        }).catch(function (err) {

        });
    };
    // work
    this.ServiceWorkerUpdate = function (sw) {
        relatedforage.getItem("updateHash").then(function (value) {
            var dtime = new Date();
            if (value === null) {

                dtime = dtime.getTime();
                navigator.serviceWorker.register(sw + "?" + dtime).then(function (value) {
                    console.log("update service worker");
                });
                relatedforage.setItem("updateHash", dtime);
            } else {
                dtime = dtime.getTime();
                if ((dtime - value) > 1080000) {
                    navigator.serviceWorker.register(sw + "?" + dtime).then(function (value) {
                        console.log("update service worker");
                    });
                    relatedforage.setItem("updateHash", dtime);
                }
            }
        });
    };
    this.Update = function (data) {
        if (data.hasOwnProperty("token")) {
            this.token = data.token;
        }
        if (data.hasOwnProperty("auth")) {
            this.auth = data.auth;
        }
        if (data.hasOwnProperty("p256dh")) {
            this.p256dh = data.p256dh;
        }
        if (data.hasOwnProperty("permission"))
            this.permission = data.permission;
        if (this.token !== "") {
            relatedforage.setItem("token", this.token);
            relatedforage.setItem("permission", this.permission);
            relatedforage.setItem("brw", data.brw);
            var timeAccept = new Date().getTime();
            relatedforage.setItem("acceptTimespan", timeAccept);
            var visilabsToken = {};
            visilabsToken.appid = this.isSafari ? settingsRD.relatedAppSafariAlias : settingsRD.relatedAppAlias;
            visilabsToken.token = this.token;
            if (this.auth !== "" && this.p256dh !== "") {
                relatedforage.setItem("auth", this.auth);
                relatedforage.setItem("p256dh", this.p256dh);
            }
            relatedforage.setItem("optIn", opt_webpush_value[0]);
            RDigiSetVisilabsToken(visilabsToken);
        } else if (this.permission === "denied") {
            relatedforage.setItem("permission", this.permission);
        }
    };

    this.getSubsUpdate = function (data, self, sw) {
        var delay = new Date();
        delay = delay.getTime();
        var items = ["acceptTimespan", "permission", "token"];
        /*
        var promises  = items.map(function(item) { return relatedforage.getItem(item); });
        Promise.all(promises).then(function(results){
            if(results[0] == null && results[1] != null)
        });*/
        relatedforage.getItem("acceptTimespan").then(function (value) {
            if (value == null || ((delay - value) > data)) {
                self.subScribeUser(sw);
                relatedforage.setItem("acceptTimespan", delay);
            }
        }).catch(function (err) {
            console.log("timespan error");
        })
    };
    this.clearDB = function() {
        relatedforage.clear();
    }
};

function RDigiSetItem(key,value){
    if(window.localStorage)
        localStorage.setItem(key,JSON.stringify(value));
}

function RDigiRemoveItem(key){
    if(window.localStorage)
        localStorage.removeItem(key);
}

function RDigiSetVisilabsToken(data){
    if(data && data.hasOwnProperty("appid") && data.hasOwnProperty("token"))
    {
        RDigiSetItem("OM.visilabspush",data);    
    }
};


/*!
 localForage -- Offline Storage, Improved
 Version 1.5.0
 https://localforage.github.io/localForage
 (c) 2013-2017 Mozilla, Apache License 2.0
 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.relatedforage=t():e.relatedforage=t()}(window,(function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){(function(t){var r;e.exports=function e(t,n,o){function i(u,c){if(!n[u]){if(!t[u]){if(!c&&"function"==typeof r&&r)return r(u,!0);if(a)return a(u,!0);var f=new Error("Cannot find module '"+u+"'");throw f.code="MODULE_NOT_FOUND",f}var s=n[u]={exports:{}};t[u][0].call(s.exports,(function(e){return i(t[u][1][e]||e)}),s,s.exports,e,t,n,o)}return n[u].exports}for(var a="function"==typeof r&&r,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,r,n){(function(e){"use strict";function t(){f=!0;for(var e,t,r=s.length;r;){for(t=s,s=[],e=-1;++e<r;)t[e]();r=s.length}f=!1}var n,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(t),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),n=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)n="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var r=e.document.createElement("script");r.onreadystatechange=function(){t(),r.onreadystatechange=null,r.parentNode.removeChild(r),r=null},e.document.documentElement.appendChild(r)}:function(){setTimeout(t,0)};else{var c=new e.MessageChannel;c.port1.onmessage=t,n=function(){c.port2.postMessage(0)}}var f,s=[];r.exports=function(e){1!==s.push(e)||f||n()}}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,t,r){"use strict";function n(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,e!==n&&c(this,e)}function i(e,t,r){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof r&&(this.onRejected=r,this.callRejected=this.otherCallRejected)}function a(e,t,r){s((function(){var n;try{n=t(r)}catch(t){return l.reject(e,t)}n===e?l.reject(e,new TypeError("Cannot resolve promise with itself")):l.resolve(e,n)}))}function u(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function c(e,t){function r(t){o||(o=!0,l.reject(e,t))}function n(t){o||(o=!0,l.resolve(e,t))}var o=!1,i=f((function(){t(n,r)}));"error"===i.status&&r(i.value)}function f(e,t){var r={};try{r.value=e(t),r.status="success"}catch(e){r.status="error",r.value=e}return r}var s=e(1),l={},d=["REJECTED"],v=["FULFILLED"],h=["PENDING"];t.exports=r=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===v||"function"!=typeof t&&this.state===d)return this;var r=new this.constructor(n);return this.state!==h?a(r,this.state===v?e:t,this.outcome):this.queue.push(new i(r,e,t)),r},i.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){l.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},l.resolve=function(e,t){var r=f(u,t);if("error"===r.status)return l.reject(e,r.value);var n=r.value;if(n)c(e,n);else{e.state=v,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},l.reject=function(e,t){e.state=d,e.outcome=t;for(var r=-1,n=e.queue.length;++r<n;)e.queue[r].callRejected(t);return e},r.resolve=function(e){return e instanceof this?e:l.resolve(new this(n),e)},r.reject=function(e){var t=new this(n);return l.reject(t,e)},r.all=function(e){function t(e,t){r.resolve(e).then((function(e){a[t]=e,++u!==o||i||(i=!0,l.resolve(f,a))}),(function(e){i||(i=!0,l.reject(f,e))}))}var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=new Array(o),u=0,c=-1,f=new this(n);++c<o;)t(e[c],c);return f},r.race=function(e){function t(e){r.resolve(e).then((function(e){i||(i=!0,l.resolve(u,e))}),(function(e){i||(i=!0,l.reject(u,e))}))}var r=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=-1,u=new this(n);++a<o;)t(e[a]);return u}},{1:1}],3:[function(e,r,n){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(2))}).call(this,void 0!==t?t:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,t,r){"use strict";function n(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var r=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),n=0;n<e.length;n+=1)r.append(e[n]);return r.getBlob(t.type)}}function o(e,t){t&&e.then((function(e){t(null,e)}),(function(e){t(e)}))}function i(e,t,r){"function"==typeof t&&e.then(t),"function"==typeof r&&e.catch(r)}function a(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function u(e){for(var t=e.length,r=new ArrayBuffer(t),n=new Uint8Array(r),o=0;o<t;o++)n[o]=e.charCodeAt(o);return r}function c(e){return"boolean"==typeof E?O.resolve(E):function(e){return new O((function(t){var r=e.transaction(x,B),o=n([""]);r.objectStore(x).put(o,"key"),r.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},r.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),r=navigator.userAgent.match(/Edge\//);t(r||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}(e).then((function(e){return E=e}))}function f(e){var t=j[e.name],r={};r.promise=new O((function(e){r.resolve=e})),t.deferredOperations.push(r),t.dbReady?t.dbReady=t.dbReady.then((function(){return r.promise})):t.dbReady=r.promise}function s(e,t){return new O((function(r,n){if(e.db){if(!t)return r(e.db);f(e),e.db.close()}var o=[e.name];t&&o.push(e.version);var i=I.open.apply(I,o);t&&(i.onupgradeneeded=function(t){var r=i.result;try{r.createObjectStore(e.storeName),t.oldVersion<=1&&r.createObjectStore(x)}catch(r){if("ConstraintError"!==r.name)throw r;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),n(i.error)},i.onsuccess=function(){r(i.result),function(e){var t=j[e.name].deferredOperations.pop();t&&t.resolve()}(e)}}))}function l(e){return n([u(atob(e.data))],{type:e.type})}function d(e){return e&&e.__local_forage_encoded_blob}function v(e){var t=this,r=t._initReady().then((function(){var e=j[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return i(r,e,e),r}function h(e){f(e);for(var t=j[e.name].forages,r=0;r<t.length;r++)t[r]._dbInfo.db&&(t[r]._dbInfo.db.close(),t[r]._dbInfo.db=null);return s(e,!1).then((function(e){for(var r=0;r<t.length;r++)t[r]._dbInfo.db=e})).catch((function(t){throw function(e,t){var r=j[e.name].deferredOperations.pop();r&&r.reject(t)}(e,t),t}))}function y(e,t,r){try{var n=e.db.transaction(e.storeName,t);r(null,n)}catch(n){if(!e.db||"InvalidStateError"===n.name)return h(e).then((function(){var n=e.db.transaction(e.storeName,t);r(null,n)}));r(n)}}function p(e){var t,r,n,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var f=new ArrayBuffer(a),s=new Uint8Array(f);for(t=0;t<u;t+=4)r=N.indexOf(e[t]),n=N.indexOf(e[t+1]),o=N.indexOf(e[t+2]),i=N.indexOf(e[t+3]),s[c++]=r<<2|n>>4,s[c++]=(15&n)<<4|o>>2,s[c++]=(3&o)<<6|63&i;return f}function b(e){var t,r=new Uint8Array(e),n="";for(t=0;t<r.length;t+=3)n+=N[r[t]>>2],n+=N[(3&r[t])<<4|r[t+1]>>4],n+=N[(15&r[t+1])<<2|r[t+2]>>6],n+=N[63&r[t+2]];return r.length%3==2?n=n.substring(0,n.length-1)+"=":r.length%3==1&&(n=n.substring(0,n.length-2)+"=="),n}function g(e,t,r,n){var i=this;e=a(e);var u=new O((function(o,a){i.ready().then((function(){void 0===t&&(t=null);var u=t,c=i._dbInfo;c.serializer.serialize(t,(function(t,f){f?a(f):c.db.transaction((function(r){r.executeSql("INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,t],(function(){o(u)}),(function(e,t){a(t)}))}),(function(t){if(t.code===t.QUOTA_ERR){if(n>0)return void o(g.apply(i,[e,u,r,n-1]));a(t)}}))}))})).catch(a)}));return o(u,r),u}function m(e,t){e[t]=function(){var r=arguments;return e.ready().then((function(){return e[t].apply(e,r)}))}}function _(){for(var e=1;e<arguments.length;e++){var t=arguments[e];if(t)for(var r in t)t.hasOwnProperty(r)&&(ie(t[r])?arguments[0][r]=t[r].slice():arguments[0][r]=t[r])}return arguments[0]}function w(e){for(var t in ee)if(ee.hasOwnProperty(t)&&ee[t]===e)return!0;return!1}var S="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){}}();"undefined"==typeof Promise&&e(3);var E,j,O=Promise,x="local-forage-detect-blob-support",A=Object.prototype.toString,D="readonly",B="readwrite",R={_driver:"asyncStorage",_initStorage:function(e){function t(){return O.resolve()}var r=this,n={db:null};if(e)for(var o in e)n[o]=e[o];j||(j={});var i=j[n.name];i||(i={forages:[],db:null,dbReady:null,deferredOperations:[]},j[n.name]=i),i.forages.push(r),r._initReady||(r._initReady=r.ready,r.ready=v);for(var a=[],u=0;u<i.forages.length;u++){var c=i.forages[u];c!==r&&a.push(c._initReady().catch(t))}var f=i.forages.slice(0);return O.all(a).then((function(){return n.db=i.db,function(e){return s(e,!1)}(n)})).then((function(e){return n.db=e,function(e,t){if(!e.db)return!0;var r=!e.db.objectStoreNames.contains(e.storeName),n=e.version<e.db.version,o=e.version>e.db.version;if(n&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||r){if(r){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}(n,r._defaultConfig.version)?function(e){return s(e,!0)}(n):e})).then((function(e){n.db=i.db=e,r._dbInfo=n;for(var t=0;t<f.length;t++){var o=f[t];o!==r&&(o._dbInfo.db=n.db,o._dbInfo.version=n.version)}}))},iterate:function(e,t){var r=this,n=new O((function(t,n){r.ready().then((function(){y(r._dbInfo,D,(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var r=a.result;if(r){var n=r.value;d(n)&&(n=l(n));var o=e(n,r.key,u++);void 0!==o?t(o):r.continue()}else t()},a.onerror=function(){n(a.error)}}catch(e){n(e)}}))})).catch(n)}));return o(n,t),n},getItem:function(e,t){var r=this;e=a(e);var n=new O((function(t,n){r.ready().then((function(){y(r._dbInfo,D,(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),d(e)&&(e=l(e)),t(e)},a.onerror=function(){n(a.error)}}catch(e){n(e)}}))})).catch(n)}));return o(n,t),n},setItem:function(e,t,r){var n=this;e=a(e);var i=new O((function(r,o){var i;n.ready().then((function(){return i=n._dbInfo,"[object Blob]"===A.call(t)?c(i.db).then((function(e){return e?t:function(e){return new O((function(t,r){var n=new FileReader;n.onerror=r,n.onloadend=function(r){var n=btoa(r.target.result||"");t({__local_forage_encoded_blob:!0,data:n,type:e.type})},n.readAsBinaryString(e)}))}(t)})):t})).then((function(t){y(n._dbInfo,B,(function(i,a){if(i)return o(i);try{var u=a.objectStore(n._dbInfo.storeName).put(t,e);null===t&&(t=void 0),a.oncomplete=function(){void 0===t&&(t=null),r(t)},a.onabort=a.onerror=function(){var e=u.error?u.error:u.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return o(i,r),i},removeItem:function(e,t){var r=this;e=a(e);var n=new O((function(t,n){r.ready().then((function(){y(r._dbInfo,B,(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName).delete(e);i.oncomplete=function(){t()},i.onerror=function(){n(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;n(e)}}catch(e){n(e)}}))})).catch(n)}));return o(n,t),n},clear:function(e){var t=this,r=new O((function(e,r){t.ready().then((function(){y(t._dbInfo,B,(function(n,o){if(n)return r(n);try{var i=o.objectStore(t._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return o(r,e),r},length:function(e){var t=this,r=new O((function(e,r){t.ready().then((function(){y(t._dbInfo,D,(function(n,o){if(n)return r(n);try{var i=o.objectStore(t._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){r(i.error)}}catch(e){r(e)}}))})).catch(r)}));return o(r,e),r},key:function(e,t){var r=this,n=new O((function(t,n){e<0?t(null):r.ready().then((function(){y(r._dbInfo,D,(function(o,i){if(o)return n(o);try{var a=i.objectStore(r._dbInfo.storeName),u=!1,c=a.openCursor();c.onsuccess=function(){var r=c.result;r?0===e?t(r.key):u?t(r.key):(u=!0,r.advance(e)):t(null)},c.onerror=function(){n(c.error)}}catch(e){n(e)}}))})).catch(n)}));return o(n,t),n},keys:function(e){var t=this,r=new O((function(e,r){t.ready().then((function(){y(t._dbInfo,D,(function(n,o){if(n)return r(n);try{var i=o.objectStore(t._dbInfo.storeName).openCursor(),a=[];i.onsuccess=function(){var t=i.result;t?(a.push(t.key),t.continue()):e(a)},i.onerror=function(){r(i.error)}}catch(e){r(e)}}))})).catch(r)}));return o(r,e),r}},N="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",k="~~local_forage_type~",C=/^~~local_forage_type~([^~]+)~/,T="__lfsc__:",L=T.length,M="arbf",P="blob",F="si08",z="ui08",U="uic8",W="si16",q="si32",Q="ur16",G="ui32",X="fl32",H="fl64",J=L+M.length,K=Object.prototype.toString,V={serialize:function(e,t){var r="";if(e&&(r=K.call(e)),e&&("[object ArrayBuffer]"===r||e.buffer&&"[object ArrayBuffer]"===K.call(e.buffer))){var n,o=T;e instanceof ArrayBuffer?(n=e,o+=M):(n=e.buffer,"[object Int8Array]"===r?o+=F:"[object Uint8Array]"===r?o+=z:"[object Uint8ClampedArray]"===r?o+=U:"[object Int16Array]"===r?o+=W:"[object Uint16Array]"===r?o+=Q:"[object Int32Array]"===r?o+=q:"[object Uint32Array]"===r?o+=G:"[object Float32Array]"===r?o+=X:"[object Float64Array]"===r?o+=H:t(new Error("Failed to get type for BinaryArray"))),t(o+b(n))}else if("[object Blob]"===r){var i=new FileReader;i.onload=function(){var r=k+e.type+"~"+b(this.result);t(T+P+r)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(r){console.error("Couldn't convert value into a JSON string: ",e),t(null,r)}},deserialize:function(e){if(e.substring(0,L)!==T)return JSON.parse(e);var t,r=e.substring(J),o=e.substring(L,J);if(o===P&&C.test(r)){var i=r.match(C);t=i[1],r=r.substring(i[0].length)}var a=p(r);switch(o){case M:return a;case P:return n([a],{type:t});case F:return new Int8Array(a);case z:return new Uint8Array(a);case U:return new Uint8ClampedArray(a);case W:return new Int16Array(a);case Q:return new Uint16Array(a);case q:return new Int32Array(a);case G:return new Uint32Array(a);case X:return new Float32Array(a);case H:return new Float64Array(a);default:throw new Error("Unkown type: "+o)}},stringToBuffer:p,bufferToString:b},Y={_driver:"webSQLStorage",_initStorage:function(e){var t=this,r={db:null};if(e)for(var n in e)r[n]="string"!=typeof e[n]?e[n].toString():e[n];var o=new O((function(e,n){try{r.db=openDatabase(r.name,String(r.version),r.description,r.size)}catch(e){return n(e)}r.db.transaction((function(o){o.executeSql("CREATE TABLE IF NOT EXISTS "+r.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],(function(){t._dbInfo=r,e()}),(function(e,t){n(t)}))}))}));return r.serializer=V,o},iterate:function(e,t){var r=this,n=new O((function(t,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){r.executeSql("SELECT * FROM "+o.storeName,[],(function(r,n){for(var i=n.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),f=c.value;if(f&&(f=o.serializer.deserialize(f)),void 0!==(f=e(f,c.key,u+1)))return void t(f)}t()}),(function(e,t){n(t)}))}))})).catch(n)}));return o(n,t),n},getItem:function(e,t){var r=this;e=a(e);var n=new O((function(t,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){r.executeSql("SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,r){var n=r.rows.length?r.rows.item(0).value:null;n&&(n=o.serializer.deserialize(n)),t(n)}),(function(e,t){n(t)}))}))})).catch(n)}));return o(n,t),n},setItem:function(e,t,r){return g.apply(this,[e,t,r,1])},removeItem:function(e,t){var r=this;e=a(e);var n=new O((function(t,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){r.executeSql("DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){t()}),(function(e,t){n(t)}))}))})).catch(n)}));return o(n,t),n},clear:function(e){var t=this,r=new O((function(e,r){t.ready().then((function(){var n=t._dbInfo;n.db.transaction((function(t){t.executeSql("DELETE FROM "+n.storeName,[],(function(){e()}),(function(e,t){r(t)}))}))})).catch(r)}));return o(r,e),r},length:function(e){var t=this,r=new O((function(e,r){t.ready().then((function(){var n=t._dbInfo;n.db.transaction((function(t){t.executeSql("SELECT COUNT(key) as c FROM "+n.storeName,[],(function(t,r){var n=r.rows.item(0).c;e(n)}),(function(e,t){r(t)}))}))})).catch(r)}));return o(r,e),r},key:function(e,t){var r=this,n=new O((function(t,n){r.ready().then((function(){var o=r._dbInfo;o.db.transaction((function(r){r.executeSql("SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,r){var n=r.rows.length?r.rows.item(0).key:null;t(n)}),(function(e,t){n(t)}))}))})).catch(n)}));return o(n,t),n},keys:function(e){var t=this,r=new O((function(e,r){t.ready().then((function(){var n=t._dbInfo;n.db.transaction((function(t){t.executeSql("SELECT key FROM "+n.storeName,[],(function(t,r){for(var n=[],o=0;o<r.rows.length;o++)n.push(r.rows.item(o).key);e(n)}),(function(e,t){r(t)}))}))})).catch(r)}));return o(r,e),r}},Z={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var r in e)t[r]=e[r];return t.keyPrefix=t.name+"/",t.storeName!==this._defaultConfig.storeName&&(t.keyPrefix+=t.storeName+"/"),this._dbInfo=t,t.serializer=V,O.resolve()},iterate:function(e,t){var r=this,n=r.ready().then((function(){for(var t=r._dbInfo,n=t.keyPrefix,o=n.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(n)){var f=localStorage.getItem(c);if(f&&(f=t.serializer.deserialize(f)),void 0!==(f=e(f,c.substring(o),a++)))return f}}}));return o(n,t),n},getItem:function(e,t){var r=this;e=a(e);var n=r.ready().then((function(){var t=r._dbInfo,n=localStorage.getItem(t.keyPrefix+e);return n&&(n=t.serializer.deserialize(n)),n}));return o(n,t),n},setItem:function(e,t,r){var n=this;e=a(e);var i=n.ready().then((function(){void 0===t&&(t=null);var r=t;return new O((function(o,i){var a=n._dbInfo;a.serializer.serialize(t,(function(t,n){if(n)i(n);else try{localStorage.setItem(a.keyPrefix+e,t),o(r)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return o(i,r),i},removeItem:function(e,t){var r=this;e=a(e);var n=r.ready().then((function(){var t=r._dbInfo;localStorage.removeItem(t.keyPrefix+e)}));return o(n,t),n},clear:function(e){var t=this,r=t.ready().then((function(){for(var e=t._dbInfo.keyPrefix,r=localStorage.length-1;r>=0;r--){var n=localStorage.key(r);0===n.indexOf(e)&&localStorage.removeItem(n)}}));return o(r,e),r},length:function(e){var t=this.keys().then((function(e){return e.length}));return o(t,e),t},key:function(e,t){var r=this,n=r.ready().then((function(){var t,n=r._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(n.keyPrefix.length)),t}));return o(n,t),n},keys:function(e){var t=this,r=t.ready().then((function(){for(var e=t._dbInfo,r=localStorage.length,n=[],o=0;o<r;o++)0===localStorage.key(o).indexOf(e.keyPrefix)&&n.push(localStorage.key(o).substring(e.keyPrefix.length));return n}));return o(r,e),r}},$={},ee={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},te=[ee.INDEXEDDB,ee.WEBSQL,ee.LOCALSTORAGE],re=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],ne={description:"",driver:te.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},oe={};oe[ee.INDEXEDDB]=function(){try{if(!I)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),t="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||t)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),oe[ee.WEBSQL]="function"==typeof openDatabase,oe[ee.LOCALSTORAGE]=function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&localStorage.setItem}catch(e){return!1}}();var ie=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},ae=new(function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.INDEXEDDB=ee.INDEXEDDB,this.LOCALSTORAGE=ee.LOCALSTORAGE,this.WEBSQL=ee.WEBSQL,this._defaultConfig=_({},ne),this._config=_({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":S(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e){if("storeName"===t&&(e[t]=e[t].replace(/\W/g,"_")),"version"===t&&"number"!=typeof e[t])return new Error("Database version must be a number.");this._config[t]=e[t]}return!("driver"in e&&e.driver)||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,r){var n=new O((function(t,r){try{var n=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),i=new Error("Custom driver name already in use: "+e._driver);if(!e._driver)return void r(o);if(w(e._driver))return void r(i);for(var a=re.concat("_initStorage"),u=0;u<a.length;u++){var c=a[u];if(!c||!e[c]||"function"!=typeof e[c])return void r(o)}var f=function(r){oe[n]=r,$[n]=e,t()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(f,r):f(!!e._support):f(!0)}catch(e){r(e)}}));return i(n,t,r),n},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,r){var n=this,o=O.resolve().then((function(){if(!w(e)){if($[e])return $[e];throw new Error("Driver not found.")}switch(e){case n.INDEXEDDB:return R;case n.LOCALSTORAGE:return Z;case n.WEBSQL:return Y}}));return i(o,t,r),o},e.prototype.getSerializer=function(e){var t=O.resolve(V);return i(t,e),t},e.prototype.ready=function(e){var t=this,r=t._driverSet.then((function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready}));return i(r,e,e),r},e.prototype.setDriver=function(e,t,r){function n(){a._config.driver=a.driver()}function o(e){return a._extend(e),n(),a._ready=a._initStorage(a._config),a._ready}var a=this;ie(e)||(e=[e]);var u=this._getSupportedDrivers(e),c=null!==this._driverSet?this._driverSet.catch((function(){return O.resolve()})):O.resolve();return this._driverSet=c.then((function(){var e=u[0];return a._dbInfo=null,a._ready=null,a.getDriver(e).then((function(e){a._driver=e._driver,n(),a._wrapLibraryMethodsWithReady(),a._initDriver=function(e){return function(){var t=0;return function r(){for(;t<e.length;){var i=e[t];return t++,a._dbInfo=null,a._ready=null,a.getDriver(i).then(o).catch(r)}n();var u=new Error("No available storage method found.");return a._driverSet=O.reject(u),a._driverSet}()}}(u)}))})).catch((function(){n();var e=new Error("No available storage method found.");return a._driverSet=O.reject(e),a._driverSet})),i(this._driverSet,t,r),this._driverSet},e.prototype.supports=function(e){return!!oe[e]},e.prototype._extend=function(e){_(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t=[],r=0,n=e.length;r<n;r++){var o=e[r];this.supports(o)&&t.push(o)}return t},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0;e<re.length;e++)m(this,re[e])},e.prototype.createInstance=function(t){return new e(t)},e}());t.exports=ae},{3:3}]},{},[4])(4)}).call(this,r(1))},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r}])}));

/*!
 * Bowser - a browser detector
 * https://github.com/ded/bowser
 * MIT License | (c) Dustin Diaz 2015
 */
!function(e,t,n){typeof module!="undefined"&&module.exports?module.exports=n():typeof define=="function"&&define.amd?define(t,n):e[t]=n()}(this,"bowser",function(){function t(t){function n(e){var n=t.match(e);return n&&n.length>1&&n[1]||""}function r(e){var n=t.match(e);return n&&n.length>1&&n[2]||""}function N(e){switch(e){case"NT":return"NT";case"XP":return"XP";case"NT 5.0":return"2000";case"NT 5.1":return"XP";case"NT 5.2":return"2003";case"NT 6.0":return"Vista";case"NT 6.1":return"7";case"NT 6.2":return"8";case"NT 6.3":return"8.1";case"NT 10.0":return"10";default:return undefined}}var i=n(/(ipod|iphone|ipad)/i).toLowerCase(),s=/like android/i.test(t),o=!s&&/android/i.test(t),u=/nexus\s*[0-6]\s*/i.test(t),a=!u&&/nexus\s*[0-9]+/i.test(t),f=/CrOS/.test(t),l=/silk/i.test(t),c=/sailfish/i.test(t),h=/tizen/i.test(t),p=/(web|hpw)os/i.test(t),d=/windows phone/i.test(t),v=/SamsungBrowser/i.test(t),m=!d&&/windows/i.test(t),g=!i&&!l&&/macintosh/i.test(t),y=!o&&!c&&!h&&!p&&/linux/i.test(t),b=n(/edge\/(\d+(\.\d+)?)/i),w=n(/version\/(\d+(\.\d+)?)/i),E=/tablet/i.test(t)&&!/tablet pc/i.test(t),S=!E&&/[^-]mobi/i.test(t),x=/xbox/i.test(t),T;/opera/i.test(t)?T={name:"Opera",opera:e,version:w||n(/(?:opera|opr|opios)[\s\/](\d+(\.\d+)?)/i)}:/opr|opios/i.test(t)?T={name:"Opera",opera:e,version:n(/(?:opr|opios)[\s\/](\d+(\.\d+)?)/i)||w}:/SamsungBrowser/i.test(t)?T={name:"Samsung Internet for Android",samsungBrowser:e,version:w||n(/(?:SamsungBrowser)[\s\/](\d+(\.\d+)?)/i)}:/coast/i.test(t)?T={name:"Opera Coast",coast:e,version:w||n(/(?:coast)[\s\/](\d+(\.\d+)?)/i)}:/yabrowser/i.test(t)?T={name:"Yandex Browser",yandexbrowser:e,version:w||n(/(?:yabrowser)[\s\/](\d+(\.\d+)?)/i)}:/ucbrowser/i.test(t)?T={name:"UC Browser",ucbrowser:e,version:n(/(?:ucbrowser)[\s\/](\d+(?:\.\d+)+)/i)}:/mxios/i.test(t)?T={name:"Maxthon",maxthon:e,version:n(/(?:mxios)[\s\/](\d+(?:\.\d+)+)/i)}:/epiphany/i.test(t)?T={name:"Epiphany",epiphany:e,version:n(/(?:epiphany)[\s\/](\d+(?:\.\d+)+)/i)}:/puffin/i.test(t)?T={name:"Puffin",puffin:e,version:n(/(?:puffin)[\s\/](\d+(?:\.\d+)?)/i)}:/sleipnir/i.test(t)?T={name:"Sleipnir",sleipnir:e,version:n(/(?:sleipnir)[\s\/](\d+(?:\.\d+)+)/i)}:/k-meleon/i.test(t)?T={name:"K-Meleon",kMeleon:e,version:n(/(?:k-meleon)[\s\/](\d+(?:\.\d+)+)/i)}:d?(T={name:"Windows Phone",windowsphone:e},b?(T.msedge=e,T.version=b):(T.msie=e,T.version=n(/iemobile\/(\d+(\.\d+)?)/i))):/msie|trident/i.test(t)?T={name:"Internet Explorer",msie:e,version:n(/(?:msie |rv:)(\d+(\.\d+)?)/i)}:f?T={name:"Chrome",chromeos:e,chromeBook:e,chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:/chrome.+? edge/i.test(t)?T={name:"Microsoft Edge",msedge:e,version:b}:/vivaldi/i.test(t)?T={name:"Vivaldi",vivaldi:e,version:n(/vivaldi\/(\d+(\.\d+)?)/i)||w}:c?T={name:"Sailfish",sailfish:e,version:n(/sailfish\s?browser\/(\d+(\.\d+)?)/i)}:/seamonkey\//i.test(t)?T={name:"SeaMonkey",seamonkey:e,version:n(/seamonkey\/(\d+(\.\d+)?)/i)}:/firefox|iceweasel|fxios/i.test(t)?(T={name:"Firefox",firefox:e,version:n(/(?:firefox|iceweasel|fxios)[ \/](\d+(\.\d+)?)/i)},/\((mobile|tablet);[^\)]*rv:[\d\.]+\)/i.test(t)&&(T.firefoxos=e)):l?T={name:"Amazon Silk",silk:e,version:n(/silk\/(\d+(\.\d+)?)/i)}:/phantom/i.test(t)?T={name:"PhantomJS",phantom:e,version:n(/phantomjs\/(\d+(\.\d+)?)/i)}:/slimerjs/i.test(t)?T={name:"SlimerJS",slimer:e,version:n(/slimerjs\/(\d+(\.\d+)?)/i)}:/blackberry|\bbb\d+/i.test(t)||/rim\stablet/i.test(t)?T={name:"BlackBerry",blackberry:e,version:w||n(/blackberry[\d]+\/(\d+(\.\d+)?)/i)}:p?(T={name:"WebOS",webos:e,version:w||n(/w(?:eb)?osbrowser\/(\d+(\.\d+)?)/i)},/touchpad\//i.test(t)&&(T.touchpad=e)):/bada/i.test(t)?T={name:"Bada",bada:e,version:n(/dolfin\/(\d+(\.\d+)?)/i)}:h?T={name:"Tizen",tizen:e,version:n(/(?:tizen\s?)?browser\/(\d+(\.\d+)?)/i)||w}:/qupzilla/i.test(t)?T={name:"QupZilla",qupzilla:e,version:n(/(?:qupzilla)[\s\/](\d+(?:\.\d+)+)/i)||w}:/chromium/i.test(t)?T={name:"Chromium",chromium:e,version:n(/(?:chromium)[\s\/](\d+(?:\.\d+)?)/i)||w}:/chrome|crios|crmo/i.test(t)?T={name:"Chrome",chrome:e,version:n(/(?:chrome|crios|crmo)\/(\d+(\.\d+)?)/i)}:o?T={name:"Android",version:w}:/safari|applewebkit/i.test(t)?(T={name:"Safari",safari:e},w&&(T.version=w)):i?(T={name:i=="iphone"?"iPhone":i=="ipad"?"iPad":"iPod"},w&&(T.version=w)):/googlebot/i.test(t)?T={name:"Googlebot",googlebot:e,version:n(/googlebot\/(\d+(\.\d+))/i)||w}:T={name:n(/^(.*)\/(.*) /),version:r(/^(.*)\/(.*) /)},!T.msedge&&/(apple)?webkit/i.test(t)?(/(apple)?webkit\/537\.36/i.test(t)?(T.name=T.name||"Blink",T.blink=e):(T.name=T.name||"Webkit",T.webkit=e),!T.version&&w&&(T.version=w)):!T.opera&&/gecko\//i.test(t)&&(T.name=T.name||"Gecko",T.gecko=e,T.version=T.version||n(/gecko\/(\d+(\.\d+)?)/i)),!T.windowsphone&&!T.msedge&&(o||T.silk)?T.android=e:!T.windowsphone&&!T.msedge&&i?(T[i]=e,T.ios=e):g?T.mac=e:x?T.xbox=e:m?T.windows=e:y&&(T.linux=e);var C="";T.windows?C=N(n(/Windows ((NT|XP)( \d\d?.\d)?)/i)):T.windowsphone?C=n(/windows phone (?:os)?\s?(\d+(\.\d+)*)/i):T.mac?(C=n(/Mac OS X (\d+([_\.\s]\d+)*)/i),C=C.replace(/[_\s]/g,".")):i?(C=n(/os (\d+([_\s]\d+)*) like mac os x/i),C=C.replace(/[_\s]/g,".")):o?C=n(/android[ \/-](\d+(\.\d+)*)/i):T.webos?C=n(/(?:web|hpw)os\/(\d+(\.\d+)*)/i):T.blackberry?C=n(/rim\stablet\sos\s(\d+(\.\d+)*)/i):T.bada?C=n(/bada\/(\d+(\.\d+)*)/i):T.tizen&&(C=n(/tizen[\/\s](\d+(\.\d+)*)/i)),C&&(T.osversion=C);var k=!T.windows&&C.split(".")[0];if(E||a||i=="ipad"||o&&(k==3||k>=4&&!S)||T.silk)T.tablet=e;else if(S||i=="iphone"||i=="ipod"||o||u||T.blackberry||T.webos||T.bada)T.mobile=e;return T.msedge||T.msie&&T.version>=10||T.yandexbrowser&&T.version>=15||T.vivaldi&&T.version>=1||T.chrome&&T.version>=20||T.samsungBrowser&&T.version>=4||T.firefox&&T.version>=20||T.safari&&T.version>=6||T.opera&&T.version>=10||T.ios&&T.osversion&&T.osversion.split(".")[0]>=6||T.blackberry&&T.version>=10.1||T.chromium&&T.version>=20?T.a=e:T.msie&&T.version<10||T.chrome&&T.version<20||T.firefox&&T.version<20||T.safari&&T.version<6||T.opera&&T.version<10||T.ios&&T.osversion&&T.osversion.split(".")[0]<6||T.chromium&&T.version<20?T.c=e:T.x=e,T}function r(e){return e.split(".").length}function i(e,t){var n=[],r;if(Array.prototype.map)return Array.prototype.map.call(e,t);for(r=0;r<e.length;r++)n.push(t(e[r]));return n}function s(e){var t=Math.max(r(e[0]),r(e[1])),n=i(e,function(e){var n=t-r(e);return e+=(new Array(n+1)).join(".0"),i(e.split("."),function(e){return(new Array(20-e.length)).join("0")+e}).reverse()});while(--t>=0){if(n[0][t]>n[1][t])return 1;if(n[0][t]!==n[1][t])return-1;if(t===0)return 0}}function o(e,r,i){var o=n;typeof r=="string"&&(i=r,r=void 0),r===void 0&&(r=!1),i&&(o=t(i));var u=""+o.version;for(var a in e)if(e.hasOwnProperty(a)&&o[a]){if(typeof e[a]!="string")throw new Error("Browser version in the minVersion map should be a string: "+a+": "+String(e));return s([u,e[a]])<0}return r}function u(e,t,n){return!o(e,t,n)}var e=!0,n=t(typeof navigator!="undefined"?navigator.userAgent||"":"");return n.test=function(e){for(var t=0;t<e.length;++t){var r=e[t];if(typeof r=="string"&&r in n)return!0}return!1},n.isUnsupportedBrowser=o,n.compareVersions=s,n.check=u,n._detect=t,n})
var db = new rdDbCenter();
var RDActive = new RelatedPushSdk();
RDActive.initSettings();
/******/!function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(1),o=r(a),i=n(2),l=r(i),s=n(3),c=r(s),u=n(4),f=r(u),d=n(5),v=r(d),p=n(6),m=r(p),h=n(7),y=r(h),g=n(8),b=r(g);angular.module("reqApp",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngResource","ui.router"]).constant("malarkey",malarkey).constant("toastr",toastr).constant("moment",moment).config(o["default"]).config(l["default"]).run(c["default"]).service("slackWebhook",m["default"]).controller("MainController",f["default"]).controller("DeliveryController",v["default"]).directive("acmeNavbar",function(){return new y["default"]}).directive("acmeMalarkey",function(){return new b["default"](malarkey)})},function(e,t){"use strict";function n(e,t,n){"ngInject";delete t.defaults.headers.common["Content-Type"],e.debugEnabled(!0),n.options.timeOut=3e3,n.options.positionClass="toast-top-right",n.options.preventDuplicates=!0,n.options.progressBar=!0}n.$inject=["$logProvider","$httpProvider","toastr"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){"ngInject";e.state("home",{"abstract":!0,templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("home.landing",{url:"/",templateUrl:"app/main/landing.html"}).state("home.visiting",{url:"/visiting",templateUrl:"app/main/visiting.html"}).state("home.delivery",{url:"/delivery",templateUrl:"app/main/delivery.html",controller:"DeliveryController",controllerAs:"delivery"}),t.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e){"ngInject";e.debug("runBlock end")}n.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){"ngInject";n(this,e),this.creationDate=1457755202499,this.activate()}return e.$inject=["toastr"],r(e,[{key:"activate",value:function(){}}]),e}();t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t,r,a){"ngInject";n(this,e),this.$log=t,this.toastr=r,this.activate(this.toastr,a)}return e.$inject=["$log","toastr","slackWebhook"],r(e,[{key:"activate",value:function(e,t){this.getSlackService(t,this.toastr)}},{key:"getSlackService",value:function(e,t){var n={username:"Front Desk",icon_emoji:":space_invader:",attachments:[{fallback:"There is a delivery at the front desk.",color:"#ff0000",pretext:"There is a delivery at the 2nd floor front desk.",title:"Click here to let them know someone will help them shortly.",title_link:"https://api.slack.com/",text:"FedEx is at the front desk with a delivery.",fields:[{title:"Delivery For",value:"Ken","short":!0}]}]};this.slack=e.hook(),this.msg=JSON.stringify(n),this.slack.delivery(this.msg,function(e){t.info("Someone is coming!")},function(e){t.info("Sorry, there was an error.")})}}]),e}();t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=function(){function e(t){"ngInject";n(this,e),this.data=JSON.stringify({text:"There is a delivery."}),this.slack=t("https://hooks.slack.com/services/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",null,{delivery:{method:"POST",headers:{"Content-Type":void 0}}})}return e.$inject=["$resource"],r(e,[{key:"hook",value:function(){return this.slack}}]),e}();t["default"]=a,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(){"ngInject";n(this,o);var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:a,controllerAs:"vm",bindToController:!0};return e},a=function i(e){"ngInject";n(this,i),this.date=new Date,this.relativeDate=e(this.creationDate).fromNow()};a.$inject=["moment"],t["default"]=r,e.exports=t["default"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function o(e){"ngInject";function t(t,n,r,a){var o=void 0,i=e(n[0],{typeSpeed:50,deleteSpeed:50,pauseDelay:2e3,loop:!1,postfix:""});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){i.type(e).pause()}),o=t.$watch("vm.quotesArray",function(){angular.forEach(a.quotesArray,function(e){i.type(e).pause()})}),t.$on("$destroy",function(){o()})}n(this,o);var r={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return r};r.$inject=["malarkey"];var a=function i(e){"ngInject";n(this,i),this.$log=e,this.contributors=[],this.quotesArray=["Tell me and I forget. Teach me and I remember. Involve me and I learn"]};a.$inject=["$log"],t["default"]=r,e.exports=t["default"]}]),angular.module("reqApp").run(["$templateCache",function(e){e.put("app/main/landing.html",'<div><div class="greeting"><h1>Welcome!</h1></div><div class="call-to-action"><a ui-sref="home.delivery">Are you making a delivery?</a></div><div class="call-to-action"><a ui-sref="home.visiting">Here for a meeting or to meet someone?</a></div></div>'),e.put("app/main/main.html",'<div class="container"><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div ui-view=""></div>'),e.put("app/main/visiting.html",'<div class="container"><div><acme-malarkey></acme-malarkey></div><a ui-sref="home.landing">return</a></div>'),e.put("app/components/delivery/delivery.html",'<div class="contiainer"><h1>Delivery</h1></div>'),e.put("app/components/navbar/navbar.html",'<nav class="navbar"><div class="site-branding"></div><ul class="navbar-time"><li>{{ vm.date | date : \'short\' }}</li></ul></nav>')}]);
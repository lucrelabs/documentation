(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"4by9":function(e,a,t){e.exports=t.p+"static/overview-b2eccb11734028d30dc41c9e6b9fb973.png"},Uq7m:function(e,a,t){e.exports=t.p+"static/system-af3d227ac3f1be1df5e6632538fafd73.png"},jHx3:function(e,a,t){e.exports=t.p+"static/settings-a99a478185f90803e13fdb603194c62d.png"},on8f:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return p})),t.d(a,"default",(function(){return b}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var s=t("/FXl"),n=t("TjRS");t("aD51");function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e}).apply(this,arguments)}var p={};void 0!==p&&p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/open-source/web.mdx"}});var l={_frontmatter:p},m=n.a;function b(e){var a=e.components,n=function(e,a){if(null==e)return{};var t,s,n={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(s.b)(m,c({},l,n,{components:a,mdxType:"MDXLayout"}),Object(s.b)("h1",{id:"web-interface"},"Web interface"),Object(s.b)("p",null,"The web is responsible for the visualization. It's a GUI which helps the user to find activity at a specific period, configure the machinery, view a live stream, see system information and much more."),Object(s.b)("p",null,"It's written in PHP using the extremely popular PHP Framework Laravel, and Javascript using the client-side framework BackboneJS. We will discuss the different pages and functionality briefly. Please check out ",Object(s.b)("a",c({parentName:"p"},{href:"https://demo.kerberos.io"}),"the demo environment")," if you want to see a real life example."),Object(s.b)("h2",{id:"overview"},"Overview"),Object(s.b)("p",null,"We will shortly discuss the different pages that make up the web interface of Kerberos Open Source."),Object(s.b)("h3",{id:"dashboard"},"Dashboard"),Object(s.b)("p",null,"The landing page of the web is the dashboard. On the dashboard a user will see some statistics: activity per hour, activity per day, a live stream, the latest activity and a heatmap."),Object(s.b)("p",null,Object(s.b)("img",{alt:"web dashboard",src:t("p0ua")})),Object(s.b)("h3",{id:"overview-1"},"Overview"),Object(s.b)("p",null,"When selecting a specific day, you'll will get a timeline and overview. By using the timeline you can navigate through a day; the timeline highlights the amount of activity, from gray to red."),Object(s.b)("p",null,Object(s.b)("img",{alt:"web overview",src:t("4by9")})),Object(s.b)("h3",{id:"settings"},"Settings"),Object(s.b)("p",null,"The settings page allows you to configure the machinery. You can define the type of camera, post-processes, conditions and much more; it's highly configurable."),Object(s.b)("p",null,Object(s.b)("img",{alt:"web settings",src:t("jHx3")})),Object(s.b)("h3",{id:"system"},"System"),Object(s.b)("p",null,"The system page allows you to monitor the system. On this page you'll get an overview of the system specifications (CPU, Memory, Network, etc). Several actions are available: you can download system information (for debugging purposes) and download or remove your images."),Object(s.b)("p",null,Object(s.b)("img",{alt:"web system",src:t("Uq7m")})),Object(s.b)("h2",{id:"project-structure"},"Project structure"),Object(s.b)("p",null,"The web interface is using the Laravel framework (version 5.4). There is a lot of documentation related to Laravel, please review ",Object(s.b)("a",c({parentName:"p"},{href:"https://laravel.com/docs/5.4"}),"their documentation website here"),". In a nutshell this is how the web is organised."),Object(s.b)("h3",{id:"back-end"},"Back-end"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"config/app.php - general application settings."),Object(s.b)("li",{parentName:"ul"},"config/kerberos.php - this file contains web specific parameters; the user credentials to sign in, etc."),Object(s.b)("li",{parentName:"ul"},"app/Http/Controllers - MVC controllers"),Object(s.b)("li",{parentName:"ul"},"app/Http/Repositories -repositories are injected into the controller."),Object(s.b)("li",{parentName:"ul"},"app/Providers/AppServiceProvider.php - bind repositories to a specific interface - dependency injection."),Object(s.b)("li",{parentName:"ul"},"routes/api.php - contains all the URI endpoints for Ajax calls."),Object(s.b)("li",{parentName:"ul"},"routes/web.php - url routing for pages.")),Object(s.b)("h3",{id:"front-end"},"Front-end"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"public/css/less - LESS is used for the CSS."),Object(s.b)("li",{parentName:"ul"},"public/js/app - BackboneJS and RequireJS is used for building modular JS classes."),Object(s.b)("li",{parentName:"ul"},"public/js/mustache - Mustache is used for the client-side view rendering."),Object(s.b)("li",{parentName:"ul"},"public/js/vendor - This is where the bower extensions are installed."),Object(s.b)("li",{parentName:"ul"},"public/capture - A directory where images are written to by default."),Object(s.b)("li",{parentName:"ul"},"public/bower.json - The bower extensions used in the web repository."),Object(s.b)("li",{parentName:"ul"},"public/Gruntfile.js - We are using Grunt for our task manager.")),Object(s.b)("h2",{id:"api"},"API"),Object(s.b)("p",null,"If you want to integrate the Kerberos agent with your own application, you're at the right place! The web interface comes with a RESTfull API, that allows you to retrieve and modify information from the Kerberos agent."),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Disable the machinery"),Object(s.b)("li",{parentName:"ul"},"Health check"),Object(s.b)("li",{parentName:"ul"},"Enable or disable output devices"),Object(s.b)("li",{parentName:"ul"},"etc.")),Object(s.b)("h3",{id:"authentication"},"Authentication"),Object(s.b)("p",null,"To use the RESTfull API of your Kerberos agent you need to define an Authorization header with each request. We use Basic Authentication to secure the different endpoints."),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"Authorization"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"Basic root:root"')))),Object(s.b)("p",null,"An example with Python looks like this."),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"python"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk15"}),"import"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," requests")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk15"}),"import"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," json")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk15"}),"import"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," base64")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"url = "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"http://ip-of-pi/api/v1/condition/enabled"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"username = "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"user"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"password = "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"passw"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"basicAuth = base64.b64encode("),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk4"}),"%s"),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),":"),Object(s.b)("span",c({parentName:"span"},{className:"mtk4"}),"%s"),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),"'"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," % (username, password))")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"headers = {"),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"Authorization"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"Basic "'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," + basicAuth, "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"Content-Type"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"application/json"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"data = "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'\'{"active": "true"}\'')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk3"}),"#Call REST API")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"response = requests.put(url, "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"data"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"=data, "),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),"headers"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"=headers)")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk11"}),"print"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"(response.text)")))),Object(s.b)("p",null,"If you're using the wrong credentials, the web will return following error message."),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"text"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),"Invalid credentials."))),Object(s.b)("h3",{id:"endpoints"},"Endpoints"),Object(s.b)("p",null,"All endpoints are prefixed with api/v","[version]","/, in which the last part defines the API version number. Below you will find all the available endpoints with there signature and response. Note that when you call an endpoint which doesn't exists, the web will throw an 404."),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"\t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"error"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"API method does not exists"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("h3",{id:"version-1"},"Version 1"),Object(s.b)("p",null,"Below you'll find a list of all API methods which are available for version 1."),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET api/v1/name")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Description")),Object(s.b)("p",null,"Retrieve the name of your instance."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Response")),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"\t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"name"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"frontdoor"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"PUT api/v1/name")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Description")),Object(s.b)("p",null,"Change the name of your instance."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Payload")),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"\t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"name"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"frontdoor-changed"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Response")),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"\t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"name"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"frontdoor-changed"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET api/v1/images/latest_sequence")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Description")),Object(s.b)("p",null,"Retrieve the latest sequence detected."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Response")),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"[")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"    {")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"time"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"10:59:57"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"src"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"https://demo.kerberos.io/capture/1501491597_6-310145_frontdoor_722-691-873-926_703_511.mp4"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"local_src"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"/var/www/web/public/capture/1501491597_6-310145_frontdoor_722-691-873-926_703_511.mp4"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"metadata"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": {")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"key"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"1501491597_6-310145_frontdoor_722-691-873-926_703_511.mp4"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"user"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"1501491597_6-310145_frontdoor_722-691-873-926_703_511.mp4"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"timestamp"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk7"}),"1501491597"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"microseconds"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"6-310145"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"instanceName"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"frontdoor"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"regionCoordinates"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"722-691-873-926"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"numberOfChanges"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"703"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"            "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"token"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"511"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"        },")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"        "),Object(s.b)("span",c({parentName:"span"},{className:"mtk14"}),"type"),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"video"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"    }")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"]")))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET api/v1/condition/enabled")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Description")),Object(s.b)("p",null,"Check if enabled or disabled."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Response")),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," \t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"active"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"true"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," \t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"delay"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"5000"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"PUT api/v1/condition/enabled")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Description")),Object(s.b)("p",null,"Activate or disable the system."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Payload")),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," \t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"active"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"false"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Response")),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," \t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"active"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"false"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),",")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," \t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"delay"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"5000"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"GET api/v1/system/health")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Description")),Object(s.b)("p",null,"Check if the machinery is running (the stream is connected)."),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Response")),Object(s.b)("pre",{className:"default-dark vscode-highlight","data-language":"json"},Object(s.b)("code",c({parentName:"pre"},{className:"vscode-highlight-code"}),Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"{")),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"})," \t"),Object(s.b)("span",c({parentName:"span"},{className:"mtk12"}),'"status"'),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),": "),Object(s.b)("span",c({parentName:"span"},{className:"mtk8"}),'"false"')),"\n",Object(s.b)("span",c({parentName:"code"},{className:"vscode-highlight-line"}),Object(s.b)("span",c({parentName:"span"},{className:"mtk1"}),"}")))),Object(s.b)("style",{className:"vscode-highlight-styles"},"\n  :root {\n  --vscode-highlight-padding-v: 1rem;\n  --vscode-highlight-padding-h: 1.5rem;\n  --vscode-highlight-padding-top: var(--vscode-highlight-padding-v);\n  --vscode-highlight-padding-right: var(--vscode-highlight-padding-h);\n  --vscode-highlight-padding-bottom: var(--vscode-highlight-padding-v);\n  --vscode-highlight-padding-left: var(--vscode-highlight-padding-h);\n  --vscode-highlight-border-radius: 8px;\n\n  --vscode-highlight-line-highlighted-background-color: transparent;\n  --vscode-highlight-line-highlighted-border-width: 4px;\n  --vscode-highlight-line-highlighted-border-color: transparent;\n}\n\n.vscode-highlight {\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n  padding-top: 1rem;\n  padding-top: var(--vscode-highlight-padding-top);\n  padding-bottom: 1rem;\n  padding-bottom: var(--vscode-highlight-padding-bottom);\n  border-radius: 8px;\n  border-radius: var(--vscode-highlight-border-radius);\n  font-feature-settings: normal;\n}\n\n.vscode-highlight-code {\n  display: inline-block;\n  min-width: 100%;\n}\n\n.vscode-highlight-line {\n  display: inline-block;\n  box-sizing: border-box;\n  width: 100%;\n  padding-left: 1.5rem;\n  padding-left: var(--vscode-highlight-padding-left);\n  padding-right: 1.5rem;\n  padding-right: var(--vscode-highlight-padding-right);\n}\n\n.vscode-highlight-line-highlighted {\n  background-color: var(--vscode-highlight-line-highlighted-background-color);\n  box-shadow: inset var(--vscode-highlight-line-highlighted-border-width) 0 0 0 var(--vscode-highlight-line-highlighted-border-color);\n}\n\n  .default-dark {\nbackground-color: #1E1E1E;\ncolor: #D4D4D4;\n}\n\n.default-dark .mtk1 { color: #D4D4D4; }\n.default-dark .mtk2 { color: #1E1E1E; }\n.default-dark .mtk3 { color: #6A9955; }\n.default-dark .mtk4 { color: #569CD6; }\n.default-dark .mtk5 { color: #D16969; }\n.default-dark .mtk6 { color: #D7BA7D; }\n.default-dark .mtk7 { color: #B5CEA8; }\n.default-dark .mtk8 { color: #CE9178; }\n.default-dark .mtk9 { color: #646695; }\n.default-dark .mtk10 { color: #4EC9B0; }\n.default-dark .mtk11 { color: #DCDCAA; }\n.default-dark .mtk12 { color: #9CDCFE; }\n.default-dark .mtk13 { color: #000080; }\n.default-dark .mtk14 { color: #F44747; }\n.default-dark .mtk15 { color: #C586C0; }\n.default-dark .mtk16 { color: #6796E6; }\n.default-dark .mtk17 { color: #808080; }\n.default-dark .mtki { font-style: italic; }\n.default-dark .mtkb { font-weight: bold; }\n.default-dark .mtku { text-decoration: underline; text-underline-position: under; }\n"))}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/open-source/web.mdx"}}),b.isMDXComponent=!0},p0ua:function(e,a,t){e.exports=t.p+"static/dashboard-c4553b47d71f7e21989ace3051779159.png"}}]);
//# sourceMappingURL=component---src-open-source-web-mdx-ac0dbd480b020463c63e.js.map
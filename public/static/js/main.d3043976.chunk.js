(this.webpackJsonpaugment=this.webpackJsonpaugment||[]).push([[0],{143:function(e,t,a){e.exports=a(157)},154:function(e,t,a){},157:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a(24),i=a(129),l=a(222),s=a(51),m=a(122),p=a(123),u=a(27),d={org:[],currentPage:"Dashboard",company:"",companyObj:"",center:"",centerObj:"",apartment:"",apartmentObj:"",motionData:[],period:"1hr",loggedIn:!1};var g=Object(s.c)({app:function(e,t){if("undefined"===typeof e)return d;switch(t.type){case"direct_logout":return Object(u.a)({},e,{loggedIn:!1});case"direct_login":return Object(u.a)({},e,{loggedIn:!0});case"set_period":return Object(u.a)({},e,{period:t.period});case"get_motion_data_request":return Object(u.a)({},e,{motionData:[]});case"get_motion_data_success":return Object(u.a)({},e,{motionData:t.json});case"get_org_success":return Object(u.a)({},e,{org:t.json});case"set_company":return Object(u.a)({},e,{company:t.company,companyObj:e.org.filter((function(e){return e.name===t.company}))[0],center:"",centerObj:"",apartment:"",apartmentObj:"",currentPage:"Dashboard",period:"1hr"});case"set_center":return Object(u.a)({},e,{center:t.center,centerObj:e.org.filter((function(t){return t.name===e.company}))[0].centers.filter((function(e){return e.name===t.center}))[0],apartment:"",apartmentObj:"",period:"1hr",currentPage:"Dashboard"});case"set_apartment":return Object(u.a)({},e,{apartment:t.apartment,currentPage:"Apartment",period:"1hr",apartmentObj:e.org.filter((function(t){return t.name===e.company}))[0].centers.filter((function(t){return t.name===e.center}))[0].apartments.filter((function(e){return e.name===t.apartment}))[0]});case"CHANGE_PAGE":return Object(u.a)({},e,{currentPage:t.page});default:return e}}}),f=Object(p.createLogger)(),h=Object(s.d)(g,Object(s.a)(m.a,f)),y=a(22),b=a(16),E=a(30),v=a(31),j=a(34),O=a(9),x=a(211),C=a(210),w=a(204),N=a(208),_=a(162),k=a(209),D=a(212),A=a(96),P=a(4),I=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={mobileOpen:!1},a.handleDrawerToggle=function(){a.setState((function(e){return{mobileOpen:!e.mobileOpen}}))},a.changePage=function(e){a.props.changePage(e),a.setState({mobileOpen:!1})},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=(t.theme,t.children);r.a.createElement("div",null,r.a.createElement("div",{className:a.toolbar}),r.a.createElement(w.a,null),r.a.createElement(N.a,null,["Dashboard","Apartment"].map((function(t,n){return r.a.createElement(_.a,{button:!0,key:t,onClick:function(){return e.changePage(t)},selected:e.props.currentPage===t,classes:{selected:a.selected}},r.a.createElement(k.a,{disableTypography:!0,primary:t}))}))),r.a.createElement(w.a,null));return r.a.createElement("div",{className:a.root},r.a.createElement(C.a,null),r.a.createElement(x.a,{position:"fixed",color:"primary",className:a.appBar},r.a.createElement(D.a,{className:a.toolbarRoot},r.a.createElement(A.a,{variant:"h5",color:"inherit",noWrap:!0},"Oncierre"))),r.a.createElement("main",{className:a.content},n))}}]),t}(r.a.Component);var S=Object(c.b)((function(e){return{currentPage:e.app.currentPage}}),(function(e){return{changePage:function(t){e({type:"CHANGE_PAGE",page:t})}}}))(Object(P.a)((function(e){return{root:{display:"flex",height:"100%"},drawer:Object(O.a)({},e.breakpoints.up("md"),{width:190,flexShrink:0}),appBar:Object(O.a)({marginLeft:190},e.breakpoints.up("md"),{width:"calc(100% - ".concat(190,"px)")}),menuButton:Object(O.a)({marginRight:20},e.breakpoints.up("md"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:190},content:{flexGrow:1,padding:e.spacing(3),paddingTop:88},selected:{backgroundColor:"#54AAB3 !important",color:"#ffffff !important"}}}),{withTheme:!0})(I)),T=a(125),M=a(170),B=a(213),z=a(166),L=a(163),W=a(167),G=Object(T.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function H(e){var t=G();return r.a.createElement("div",null,r.a.createElement(L.a,{className:t.formControl},r.a.createElement(M.a,{shrink:!0,id:"Company-label"},"Company"),r.a.createElement(W.a,{labelId:"Company-select",id:"Company-select",value:e.company,onChange:function(t){e.setCompany(t.target.value)},displayEmpty:!0,className:t.selectEmpty},r.a.createElement(B.a,{value:"",disabled:!0},r.a.createElement("em",null,"None")),e.org.map((function(t){return r.a.createElement(B.a,{key:t.name,value:t.name,disabled:e.company===t.name},t.name)}))),r.a.createElement(z.a,null,"Select the company")))}var R=Object(T.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function F(e){var t=R();return r.a.createElement("div",null,r.a.createElement(L.a,{className:t.formControl},r.a.createElement(M.a,{shrink:!0,id:"Center-label"},"Center"),r.a.createElement(W.a,{labelId:"Center-select",id:"Center-select",value:e.center,onChange:function(t){e.setCenter(t.target.value)},displayEmpty:!0,className:t.selectEmpty},r.a.createElement(B.a,{value:"",disabled:!0},r.a.createElement("em",null,"None")),e.company&&e.company.centers.map((function(t){return r.a.createElement(B.a,{key:t.name,value:t.name,disabled:e.center===t.name},t.name)}))),r.a.createElement(z.a,null,"Select the center")))}var q=a(214),V=a(215),J=Object(T.a)((function(e){return{root:{width:"100%",display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},cardContainer:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},card:{width:"22%",margin:10,padding:10}}}));function U(e){var t=J();return r.a.createElement("div",{className:t.root},r.a.createElement(H,{company:e.companyName,org:e.org,setCompany:e.setCompany}),r.a.createElement(F,{center:e.center,company:e.company,setCenter:e.setCenter}),r.a.createElement("div",{className:t.cardContainer},""!==e.center&&e.company.centers.filter((function(t){return t.name===e.center}))[0].apartments.map((function(a){return r.a.createElement(q.a,{className:t.card,key:a.name},r.a.createElement("div",{style:{display:"flex"}},r.a.createElement("div",{style:{width:"70%"}},r.a.createElement("div",{style:{color:"#54aab3"}},a.name),r.a.createElement("div",{style:{color:"#545477"}},a.resident.name)),r.a.createElement("div",{style:{width:"30%",background:0!==a.softNotifications.length&&"bedroom"===a.softNotifications.filter((function(e){return"currentLocation"===e.type}))[0].name?"url(sleeping.png)":"url(occupied.png)",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"}})),r.a.createElement("div",{style:{display:"flex",padding:10,flexDirection:"column"}},r.a.createElement("div",null,"Bathroom Visits - ",0!==a.softNotifications.length&&a.softNotifications.filter((function(e){return"bathroomVisits"===e.type}))[0].count.toFixed(2)),r.a.createElement("div",null,"Active Time - ",0!==a.softNotifications.length&&a.softNotifications.filter((function(e){return"activeTime"===e.type}))[0].count.toFixed(2)),r.a.createElement("div",null,"Sleep Time - ",0!==a.softNotifications.length&&a.softNotifications.filter((function(e){return"sleepTime"===e.type}))[0].count.toFixed(2))),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",flexDirection:"column"}},r.a.createElement(V.a,{variant:"contained",color:"primary",size:"small"},"Call Responder"),r.a.createElement(V.a,{variant:"text",color:"primary",size:"small",onClick:function(){return e.setApartment(a.name)}},"Details")))}))))}var Z={getOrg:function(){return fetch("https://augment-api.azurewebsites.net/org",{method:"GET",mode:"cors",body:null}).then($)},getMotionData:function(e,t){return fetch("https://augment-api.azurewebsites.net/motionData?hubID=".concat(e,"&ts=").concat(t),{method:"GET",mode:"cors",body:null}).then($)}};function $(e){return e.json().then((function(t){if(e.ok)return t;var a=t&&t.message||e.statusText;return Promise.reject(a)}))}var K=Object(T.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function Q(e){var t=K();return r.a.createElement("div",null,r.a.createElement(L.a,{className:t.formControl},r.a.createElement(M.a,{shrink:!0,id:"Center-label"},"Apartment"),r.a.createElement(W.a,{labelId:"Center-select",id:"Center-select",value:e.apartment,onChange:function(t){e.setApartment(t.target.value)},displayEmpty:!0,className:t.selectEmpty},r.a.createElement(B.a,{value:"",disabled:!0},r.a.createElement("em",null,"None")),e.center&&e.center.apartments.map((function(t){return r.a.createElement(B.a,{key:t.name,value:t.name,disabled:e.apartment===t.name},t.name)}))),r.a.createElement(z.a,null,"Select the apartment")))}var X=Object(T.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)}}}));function Y(e){var t=X();return r.a.createElement("div",null,r.a.createElement(L.a,{className:t.formControl},r.a.createElement(M.a,{shrink:!0,id:"Period-label"},"Period"),r.a.createElement(W.a,{labelId:"period-select",id:"period-select",value:e.period,onChange:function(t){e.setPeriod(t.target.value)},displayEmpty:!0,className:t.selectEmpty},r.a.createElement(B.a,{value:"1hr"},r.a.createElement("em",null,"1hr")),r.a.createElement(B.a,{value:"3hrs"},r.a.createElement("em",null,"3hrs")),r.a.createElement(B.a,{value:"6hrs"},r.a.createElement("em",null,"6hrs")))))}var ee=a(25),te=a(131),ae=a(128),ne=a.n(ae),re=(a(152),function(e){function t(){return Object(y.a)(this,t),Object(E.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(j.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this._renderChart(this.props.graphEvents)}},{key:"componentDidUpdate",value:function(e){e.graphEvents!==this.props.graphEvents&&0!==this.props.graphEvents.length&&this._renderChart(this.props.graphEvents)}},{key:"_renderChart",value:function(e){var t=e?e.map((function(e){return{zone:e.area,x:new Date(1e3*e.ts),y:e.motion}})):[];Array.from(new Set(t.map((function(e){return e.zone})))).map((function(e,a){var n=e.replace(/ /g,"");ne.a.generate({size:{height:85},data:{color:function(e,t){return"#54AAB3"},x:"x",columns:[["x"].concat(Object(ee.a)(t.filter((function(t){return t.zone===e})).map((function(e){return e.x})))),["motion"].concat(Object(ee.a)(t.filter((function(t){return t.zone===e})).map((function(e){return e.y}))))],type:"area-step",xFormat:"yyyy-MM-dd'T'HH:mm:ssZ"},line:{step:{type:"step-after"}},zoom:{enabled:{type:"drag"}},axis:{x:{type:"timeseries",show:!0,tick:{format:"%m/%d %H:%M",fit:!1,culling:{max:5}}},y:{show:!1}},legend:{show:!1},tooltip:{show:!0},bindto:"#"+n})}))}},{key:"render",value:function(){var e=this.props,t=(e.classes,e.graphEvents),a=t?t.map((function(e){return{zone:e.area,x:new Date(e.ts),y:e.motion}})):[];return r.a.createElement(n.Fragment,null,a===[]?r.a.createElement("div",{style:{display:"flex",height:"100%",width:"100%",alignItems:"center",justifyContent:"center"}},"No events to show"):Array.from(new Set(a.map((function(e){return e.zone})))).map((function(e,t){return r.a.createElement(te.a,{key:e.replace(/ /g,""),style:{padding:"5px",marginBottom:"1%",overflow:"hidden",width:"100%"}},r.a.createElement("div",{key:e.replace(/ /g,"")},r.a.createElement("div",{style:{paddingLeft:"10px"}},e),r.a.createElement("div",{id:e.replace(/ /g,"")})))})))}}]),t}(r.a.Component));var oe=Object(c.b)((function(e){return{graphEvents:e.app.motionData}}),(function(e){return{}}))(Object(P.a)((function(e){return{activityGraph:{}}}))(re)),ce=a(217),ie=a(218),le=a(219),se=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){},a.setApartment=function(e){a.props.setApartment(e),a.props.getMotionData(a.props.apartmentObj.hubID,Math.round(Date.now()/1e3)-3600)},a.setPeriod=function(e){a.props.setPeriod(e),"1hr"===e?a.props.getMotionData(a.props.apartmentObj.hubID,Math.round(Date.now()/1e3)-3600):"3hrs"===e?a.props.getMotionData(a.props.apartmentObj.hubID,Math.round(Date.now()/1e3)-10800):a.props.getMotionData(a.props.apartmentObj.hubID,Math.round(Date.now()/1e3)-21600)},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("div",{className:t.selectors},r.a.createElement(V.a,{color:"primary",onClick:function(){return e.props.setCenter(e.props.center)}},"Back"),r.a.createElement(H,{company:this.props.company,org:this.props.org,setCompany:this.props.setCompany}),r.a.createElement(F,{center:this.props.center,company:this.props.org.filter((function(t){return t.name===e.props.company}))[0],setCenter:this.props.setCenter}),r.a.createElement(Q,{center:this.props.org.filter((function(t){return t.name===e.props.company}))[0].centers.filter((function(t){return t.name===e.props.center}))[0],apartment:this.props.apartment,setApartment:this.setApartment})),r.a.createElement("div",{className:t.overview},r.a.createElement(q.a,{className:t.personal},r.a.createElement(ce.a,null,r.a.createElement(ie.a,{className:t.media,image:"10170-old-man-icon.png",title:"Old man"}),r.a.createElement(le.a,null,r.a.createElement(A.a,{gutterBottom:!0,variant:"h5",component:"h2"},this.props.apartmentObj.resident.name),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"Age: ",this.props.apartmentObj.resident.age),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"Guardian: ",this.props.apartmentObj.resident.guardianName),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},"Guardian Phone: ",this.props.apartmentObj.resident.guardianPhoneNumber)))),r.a.createElement(q.a,{className:t.notifications},r.a.createElement("div",{className:t.notif,style:{borderBottom:"1px solid lightgrey",borderRight:"1px solid lightgrey"}},r.a.createElement(A.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Active Time"),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.apartmentObj.softNotifications.filter((function(e){return"activeTime"===e.type}))[0].count)),r.a.createElement("div",{className:t.notif,style:{borderRight:"1px solid lightgrey"}},r.a.createElement(A.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Sleep Time"),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.apartmentObj.softNotifications.filter((function(e){return"sleepTime"===e.type}))[0].count)),r.a.createElement("div",{className:t.notif,style:{borderBottom:"1px solid lightgrey"}},r.a.createElement(A.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Bathroom Visits"),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.apartmentObj.softNotifications.filter((function(e){return"bathroomVisits"===e.type}))[0].count)),r.a.createElement("div",{className:t.notif},r.a.createElement(A.a,{gutterBottom:!0,variant:"h5",component:"h2"},"Location"),r.a.createElement(A.a,{variant:"body2",color:"textSecondary",component:"p"},this.props.apartmentObj.softNotifications.filter((function(e){return"currentLocation"===e.type}))[0].name)))),r.a.createElement(Y,{period:this.props.period,setPeriod:this.setPeriod}),r.a.createElement("div",{className:t.motionGraph},r.a.createElement(oe,null)))}}]),t}(r.a.Component);var me=Object(c.b)((function(e){var t=e.app;return{org:t.org,company:t.company,center:t.center,apartment:t.apartment,apartmentObj:t.apartmentObj,period:t.period}}),(function(e){return{setCompany:function(t){e({type:"set_company",company:t})},setCenter:function(t){e({type:"set_center",center:t})},setApartment:function(t){e({type:"set_apartment",apartment:t})},setPeriod:function(t){e({type:"set_period",period:t})},getMotionData:function(t,a){e({type:"get_motion_data_request"}),Z.getMotionData(t,a).then((function(t){e({type:"get_motion_data_success",json:t})}),(function(t){e({type:"get_motion_data_failure",error:t})}))}}}))(Object(P.a)((function(e){return{root:{width:"100%",display:"flex",flexDirection:"column"},selectors:{width:"100%",display:"flex",flexWrap:"wrap",justifyContent:"space-evenly"},overview:{width:"100%",display:"flex",flexWrap:"wrap",padding:"20px",flexDirection:"column",height:250,justifyContent:"space-evenly"},personal:{maxWidth:300},media:{height:70,backgroundSize:"contain"},notifications:{width:"calc(100% - 200px)",margin:10,display:"flex",flexDirection:"column",flexWrap:"wrap"},notif:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"50%",height:"50%"}}}))(se)),pe=a(221),ue=a(220),de=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(O.a)({},n,r))},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;"staging_monitor@oncierre.com"===n&&"Panda201$"===r&&a.props.directLogin()},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this.props,t=(e.loggingIn,e.classes);return(r.a.createElement("div",{style:{height:"100%"}},r.a.createElement(x.a,{className:t.AppBar,position:"static",color:"primary"},r.a.createElement(D.a,{disableGutters:!0},r.a.createElement(ue.a,{container:!0,justify:"space-between",alignItems:"center",style:{height:"64px"}},r.a.createElement(ue.a,{item:!0,xs:2,className:t.bigLogo},r.a.createElement("img",{src:"/logo-new.png",height:"100%"})),r.a.createElement(ue.a,{item:!0,xs:2,className:t.smallLogo},r.a.createElement("img",{src:"/favicon.ico",height:"100%"})),r.a.createElement(ue.a,{item:!0,xs:2,className:t.smallerLogo},r.a.createElement("img",{src:"/favicon.ico",width:"100%",height:"100%"})),r.a.createElement(ue.a,{item:!0,xs:8,className:t.bigHeading},r.a.createElement(A.a,{variant:"h3"},"Oncierre")),r.a.createElement(ue.a,{item:!0,xs:8,className:t.smallHeading},r.a.createElement(A.a,{variant:"h4"},"Oncierre")),r.a.createElement(ue.a,{item:!0,xs:8,className:t.smallerHeading},r.a.createElement(A.a,{variant:"h5"},"Oncierre")),r.a.createElement(ue.a,{item:!0,xs:2})))),r.a.createElement(ue.a,{container:!0,direction:"row",justify:"center",alignItems:"center",style:{height:"calc(100% - 64px)"}},r.a.createElement(ue.a,{md:3,sm:6,xs:10,item:!0},r.a.createElement(q.a,{className:t.card},r.a.createElement(ie.a,{className:t.media,image:"/logo.png"}),r.a.createElement(le.a,null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement(pe.a,{name:"username",label:"Email Id",placeholder:"Enter your email id",className:"email-field",margin:"normal",onChange:this.handleChange,fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(pe.a,{name:"password",label:"Password",className:"password-field",placeholder:"Enter your password",type:"password",autoComplete:"current-password",margin:"normal",onChange:this.handleChange,fullWidth:!0}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("center",null,r.a.createElement(V.a,{type:"submit",className:"submit-button"},"Login")))))))))}}]),t}(r.a.Component);var ge=Object(c.b)((function(e){return{loggingIn:e.app.loggingIn}}),(function(e){return{directLogin:function(){e({type:"direct_login"})}}}))(Object(P.a)((function(e){var t,a;return{AppBar:{backgroundColor:"#525963"},card:{maxHeight:450},media:{paddingTop:"213.64px",backgroundSize:"contain"},bigLogo:Object(O.a)({height:"100%"},e.breakpoints.down(960),{display:"none"}),smallLogo:(t={height:"100%"},Object(O.a)(t,e.breakpoints.up(960),{display:"none"}),Object(O.a)(t,e.breakpoints.down(410),{display:"none"}),t),smallerLogo:Object(O.a)({height:"100%"},e.breakpoints.up(410),{display:"none"}),bigHeading:Object(O.a)({textAlign:"center"},e.breakpoints.down(960),{display:"none"}),smallHeading:(a={textAlign:"center"},Object(O.a)(a,e.breakpoints.up(960),{display:"none"}),Object(O.a)(a,e.breakpoints.down(410),{display:"none"}),a),smallerHeading:Object(O.a)({textAlign:"center"},e.breakpoints.up(410),{display:"none"}),mainPic:Object(O.a)({height:450},e.breakpoints.down("sm"),{display:"none"})}}))(de)),fe=function(e){function t(){var e,a;Object(y.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(E.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).componentDidMount=function(){a.props.getOrg()},a.setApartment=function(e){a.props.setApartment(e),a.props.getMotionData(a.props.centerObj.apartments.filter((function(t){return t.name===e}))[0].hubID,Math.round(Date.now()/1e3)-3600)},a}return Object(j.a)(t,e),Object(b.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},this.props.loggedIn?r.a.createElement(S,null,"Dashboard"===this.props.currentPage&&r.a.createElement(U,{companyName:this.props.company,setApartment:this.setApartment,center:this.props.center,org:this.props.org,company:this.props.org.filter((function(t){return t.name===e.props.company}))[0],setCenter:this.props.setCenter,setCompany:this.props.setCompany})||"Apartment"===this.props.currentPage&&r.a.createElement(me,null)):r.a.createElement(ge,null))}}]),t}(r.a.Component);var he=Object(c.b)((function(e){var t=e.app;return{org:t.org,currentPage:t.currentPage,company:t.company,center:t.center,centerObj:t.centerObj,loggedIn:t.loggedIn}}),(function(e){return{getOrg:function(){e({type:"get_org_request"}),Z.getOrg().then((function(t){e({type:"get_org_success",json:t})}),(function(t){e({type:"get_org_failure",error:t})}))},setCompany:function(t){e({type:"set_company",company:t})},setCenter:function(t){e({type:"set_center",center:t})},setApartment:function(t){e({type:"set_apartment",apartment:t})},getMotionData:function(t,a){e({type:"get_motion_data_request"}),Z.getMotionData(t,a).then((function(t){e({type:"get_motion_data_success",json:t})}),(function(t){e({type:"get_motion_data_failure",error:t})}))}}}))(Object(P.a)((function(e){return{}}))(fe)),ye=(a(154),Object(i.a)({palette:{primary:{main:"#54AAB3",dark:"#3c8f98",contrastText:"#ffffff"},secondary:{main:"#ffffff",contrastText:"#000000"}}}));Object(o.render)(r.a.createElement(l.a,{theme:ye},r.a.createElement(c.a,{store:h},r.a.createElement(he,null))),document.getElementById("root"))}},[[143,1,2]]]);
//# sourceMappingURL=main.d3043976.chunk.js.map
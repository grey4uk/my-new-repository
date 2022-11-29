"use strict";(self.webpackChunkmy_new_repository=self.webpackChunkmy_new_repository||[]).push([[421],{9443:function(n,t,a){a.d(t,{Z:function(){return s}});a(2791);var e="Container_container__VVOCq",i=a(3329);function o(n){var t=n.children;return(0,i.jsx)("div",{className:e,children:t})}var r="Section_section__Z2PLw";function s(n){var t=n.title,a=n.isHidden,e=n.children;return(0,i.jsx)("section",{className:r,children:(0,i.jsxs)(o,{children:[(0,i.jsx)("h1",{className:a?"sectionTitleIsHidden":"sectionTitle",children:t}),e]})})}},5377:function(n,t,a){a.d(t,{Z:function(){return o}});var e=a(885),i=a(2791);function o(n){var t=(0,i.useState)(n),a=(0,e.Z)(t,2),o=a[0],r=a[1];return{state:o,setState:r,handleChange:function(n){var t=n.target.value;r(t)}}}},4807:function(n,t,a){a.r(t),a.d(t,{default:function(){return In}});var e=a(9443),i=a(885),o=a(2791),r=a(5377),s="FormAddContact_form__IqSWD",c="FormAddContact_labelText__+HisC",d="FormAddContact_input__eRaal",l="FormAddContact_btn__P4r9R",u="FormAddContact_addContactIcon__dAZp9",v=a(9914),h=a(7750),m=a(3329);function f(){var n=(0,r.Z)(""),t=n.state,a=n.setState,e=n.handleChange,o=(0,r.Z)(""),f=o.state,g=o.setState,Z=o.handleChange,p=(0,v.Tn)(),x=(0,i.Z)(p,2),_=x[0],b=x[1].isLoading,I=(0,v.wY)("",{refetchOnFocus:!0,refetchOnReconnect:!0}).data,j=function(){a(""),g("")};return(0,m.jsxs)("form",{className:s,onSubmit:function(n){n.preventDefault();var a={name:t,number:f},e=a.name;null!==I&&void 0!==I&&I.some((function(n){return n.name===e}))?alert("".concat(e," is already in your contacts")):(_(a),j())},children:[(0,m.jsxs)("label",{className:c,children:["Name",(0,m.jsx)("input",{className:d,type:"text",name:"name",value:t,onChange:e,maxLength:15,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,m.jsxs)("label",{className:c,children:["Number",(0,m.jsx)("input",{className:d,type:"tel",name:"number",value:f,onChange:Z,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,m.jsxs)("button",{className:l,type:"submit",children:[(0,m.jsx)(h.Z,{className:u}),b?"Addition...":"Add contact"]})]})}var g=a(1405),Z=a(887),p=a(3811),x=a(7247),_=a(4942),b=a(3366),I=a(7462),j=a(9853),C=a(1853),S=a(4419),y=a(9367),L=a(5873),N=a(7205),P=a(168),w=a(8182),k=a(2554),z=a(5878),M=a(1217);function F(n){return(0,M.Z)("MuiCircularProgress",n)}(0,z.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);var A,R,D,E,H,O,q,B,V=["className","color","disableShrink","size","style","thickness","value","variant"],W=44,Y=(0,k.F4)(H||(H=A||(A=(0,P.Z)(["\n  0% {\n    transform: rotate(0deg);\n  }\n\n  100% {\n    transform: rotate(360deg);\n  }\n"])))),T=(0,k.F4)(O||(O=R||(R=(0,P.Z)(["\n  0% {\n    stroke-dasharray: 1px, 200px;\n    stroke-dashoffset: 0;\n  }\n\n  50% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -15px;\n  }\n\n  100% {\n    stroke-dasharray: 100px, 200px;\n    stroke-dashoffset: -125px;\n  }\n"])))),G=(0,y.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:function(n,t){var a=n.ownerState;return[t.root,t[a.variant],t["color".concat((0,j.Z)(a.color))]]}})((function(n){var t=n.ownerState,a=n.theme;return(0,I.Z)({display:"inline-block"},"determinate"===t.variant&&{transition:a.transitions.create("transform")},"inherit"!==t.color&&{color:(a.vars||a).palette[t.color].main})}),(function(n){return"indeterminate"===n.ownerState.variant&&(0,k.iv)(q||(q=D||(D=(0,P.Z)(["\n      animation: "," 1.4s linear infinite;\n    "]))),Y)})),J=(0,y.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:function(n,t){return t.svg}})({display:"block"}),K=(0,y.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:function(n,t){var a=n.ownerState;return[t.circle,t["circle".concat((0,j.Z)(a.variant))],a.disableShrink&&t.circleDisableShrink]}})((function(n){var t=n.ownerState,a=n.theme;return(0,I.Z)({stroke:"currentColor"},"determinate"===t.variant&&{transition:a.transitions.create("stroke-dashoffset")},"indeterminate"===t.variant&&{strokeDasharray:"80px, 200px",strokeDashoffset:0})}),(function(n){var t=n.ownerState;return"indeterminate"===t.variant&&!t.disableShrink&&(0,k.iv)(B||(B=E||(E=(0,P.Z)(["\n      animation: "," 1.4s ease-in-out infinite;\n    "]))),T)})),Q=o.forwardRef((function(n,t){var a=(0,L.Z)({props:n,name:"MuiCircularProgress"}),e=a.className,i=a.color,o=void 0===i?"primary":i,r=a.disableShrink,s=void 0!==r&&r,c=a.size,d=void 0===c?40:c,l=a.style,u=a.thickness,v=void 0===u?3.6:u,h=a.value,f=void 0===h?0:h,g=a.variant,Z=void 0===g?"indeterminate":g,p=(0,b.Z)(a,V),x=(0,I.Z)({},a,{color:o,disableShrink:s,size:d,thickness:v,value:f,variant:Z}),_=function(n){var t=n.classes,a=n.variant,e=n.color,i=n.disableShrink,o={root:["root",a,"color".concat((0,j.Z)(e))],svg:["svg"],circle:["circle","circle".concat((0,j.Z)(a)),i&&"circleDisableShrink"]};return(0,S.Z)(o,F,t)}(x),C={},y={},N={};if("determinate"===Z){var P=2*Math.PI*((W-v)/2);C.strokeDasharray=P.toFixed(3),N["aria-valuenow"]=Math.round(f),C.strokeDashoffset="".concat(((100-f)/100*P).toFixed(3),"px"),y.transform="rotate(-90deg)"}return(0,m.jsx)(G,(0,I.Z)({className:(0,w.Z)(_.root,e),style:(0,I.Z)({width:d,height:d},y,l),ownerState:x,ref:t,role:"progressbar"},N,p,{children:(0,m.jsx)(J,{className:_.svg,ownerState:x,viewBox:"".concat(22," ").concat(22," ").concat(W," ").concat(W),children:(0,m.jsx)(K,{className:_.circle,style:C,ownerState:x,cx:W,cy:W,r:(W-v)/2,fill:"none",strokeWidth:v})})}))}));function X(n){return(0,M.Z)("MuiLoadingButton",n)}var $=(0,z.Z)("MuiLoadingButton",["root","loading","loadingIndicator","loadingIndicatorCenter","loadingIndicatorStart","loadingIndicatorEnd","endIconLoadingEnd","startIconLoadingStart"]),U=["children","disabled","id","loading","loadingIndicator","loadingPosition","variant"],nn=(0,y.ZP)(N.Z,{shouldForwardProp:function(n){return function(n){return"ownerState"!==n&&"theme"!==n&&"sx"!==n&&"as"!==n&&"classes"!==n}(n)||"classes"===n},name:"MuiLoadingButton",slot:"Root",overridesResolver:function(n,t){return[t.root,t.startIconLoadingStart&&(0,_.Z)({},"& .".concat($.startIconLoadingStart),t.startIconLoadingStart),t.endIconLoadingEnd&&(0,_.Z)({},"& .".concat($.endIconLoadingEnd),t.endIconLoadingEnd)]}})((function(n){var t=n.ownerState,a=n.theme;return(0,I.Z)((0,_.Z)({},"& .".concat($.startIconLoadingStart,", & .").concat($.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0}),"center"===t.loadingPosition&&(0,_.Z)({transition:a.transitions.create(["background-color","box-shadow","border-color"],{duration:a.transitions.duration.short})},"&.".concat($.loading),{color:"transparent"}),"start"===t.loadingPosition&&t.fullWidth&&(0,_.Z)({},"& .".concat($.startIconLoadingStart,", & .").concat($.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginRight:-8}),"end"===t.loadingPosition&&t.fullWidth&&(0,_.Z)({},"& .".concat($.startIconLoadingStart,", & .").concat($.endIconLoadingEnd),{transition:a.transitions.create(["opacity"],{duration:a.transitions.duration.short}),opacity:0,marginLeft:-8}))})),tn=(0,y.ZP)("div",{name:"MuiLoadingButton",slot:"LoadingIndicator",overridesResolver:function(n,t){var a=n.ownerState;return[t.loadingIndicator,t["loadingIndicator".concat((0,j.Z)(a.loadingPosition))]]}})((function(n){var t=n.theme,a=n.ownerState;return(0,I.Z)({position:"absolute",visibility:"visible",display:"flex"},"start"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{left:"small"===a.size?10:14},"start"===a.loadingPosition&&"text"===a.variant&&{left:6},"center"===a.loadingPosition&&{left:"50%",transform:"translate(-50%)",color:(t.vars||t).palette.action.disabled},"end"===a.loadingPosition&&("outlined"===a.variant||"contained"===a.variant)&&{right:"small"===a.size?10:14},"end"===a.loadingPosition&&"text"===a.variant&&{right:6},"start"===a.loadingPosition&&a.fullWidth&&{position:"relative",left:-10},"end"===a.loadingPosition&&a.fullWidth&&{position:"relative",right:-10})})),an=o.forwardRef((function(n,t){var a=(0,L.Z)({props:n,name:"MuiLoadingButton"}),e=a.children,i=a.disabled,o=void 0!==i&&i,r=a.id,s=a.loading,c=void 0!==s&&s,d=a.loadingIndicator,l=a.loadingPosition,u=void 0===l?"center":l,v=a.variant,h=void 0===v?"text":v,f=(0,b.Z)(a,U),g=(0,C.Z)(r),Z=null!=d?d:(0,m.jsx)(Q,{"aria-labelledby":g,color:"inherit",size:16}),p=(0,I.Z)({},a,{disabled:o,loading:c,loadingIndicator:Z,loadingPosition:u,variant:h}),x=function(n){var t=n.loading,a=n.loadingPosition,e=n.classes,i={root:["root",t&&"loading"],startIcon:[t&&"startIconLoading".concat((0,j.Z)(a))],endIcon:[t&&"endIconLoading".concat((0,j.Z)(a))],loadingIndicator:["loadingIndicator",t&&"loadingIndicator".concat((0,j.Z)(a))]},o=(0,S.Z)(i,X,e);return(0,I.Z)({},e,o)}(p),_=c?(0,m.jsx)(tn,{className:x.loadingIndicator,ownerState:p,children:Z}):null;return(0,m.jsxs)(nn,(0,I.Z)({disabled:o||c,id:g,ref:t},f,{variant:h,classes:x,ownerState:p,children:["end"===p.loadingPosition?e:_,"end"===p.loadingPosition?_:e]}))})),en=a(1286),on=a(1038),rn=a(2168),sn="ContactItem_contactItem__Z4FuP",cn="ContactItem_icon__qzINN",dn="ContactItem_btnDelete__edqzG",ln="ContactItem_btnEdit__NMSxc ContactItem_btnDelete__edqzG",un="ContactItem_contactName__ZAMAK",vn="ContactItem_contactNumber__Xjnxb",hn="ContactItem_btnList__4v6m0";function mn(n){var t=n.contactData,a=(0,v.MG)(),e=(0,i.Z)(a,2),o=e[0],r=e[1].isLoading,s=(0,g.I0)();return(0,m.jsxs)("li",{className:sn,children:[(0,m.jsx)(Z.Z,{className:cn}),(0,m.jsxs)("p",{className:un,children:[t.name,":"]}),(0,m.jsx)("p",{className:vn,children:t.number}),(0,m.jsxs)("ul",{className:hn,children:[(0,m.jsx)(p.Z,{"aria-label":"edit",size:"large",className:ln,type:"button",onClick:function(){return n=t,s((0,rn.fS)(n)),void s((0,rn.sz)());var n},children:(0,m.jsx)(en.Z,{})}),r?(0,m.jsx)(an,{loading:!0,variant:"outlined",className:dn,children:"Submit"}):(0,m.jsx)(p.Z,{"aria-label":"delete",size:"large",className:dn,type:"button",onClick:function(){return n=t.id,o(n),void s((0,on.a)(""));var n},children:(0,m.jsx)(x.Z,{})})]})]})}var fn=function(n){return n.filter},gn="ContactsList_contactsList__ZQI1L";function Zn(){var n=(0,v.wY)("",{refetchOnReconnect:!0,refetchOnMountOrArgChange:!0}).data,t=(0,g.I0)(),a=(0,g.v9)(fn),e=function(){var t=null===a||void 0===a?void 0:a.toLowerCase();return a?null===n||void 0===n?void 0:n.filter((function(n){return n.name.toLowerCase().includes(t)})):n}();return(0,o.useEffect)((function(){0===(null===n||void 0===n?void 0:n.length)&&t((0,on.a)(""))}),[n,t]),(0,m.jsx)("ul",{className:gn,children:null===e||void 0===e?void 0:e.map((function(n){return(0,m.jsx)(mn,{contactData:n},n.id)}))})}var pn="FilterInput_inputLabel__C+sAF",xn="FilterInput_filterInput__LNZay",_n="FilterInput_notification__67Cr3";function bn(){var n=(0,v.wY)("",{refetchOnFocus:!0,refetchOnReconnect:!0}).data,t=(0,g.v9)(fn),a=(0,g.I0)();return(0,m.jsx)(m.Fragment,{children:null!==n&&void 0!==n&&n.length?(0,m.jsxs)("label",{className:pn,children:["Find contact by name",(0,m.jsx)("input",{className:xn,type:"text",name:"filter",value:t,autoFocus:!0,onChange:function(n){var t=n.target.value;a((0,on.a)(t))}})]}):(0,m.jsx)("p",{className:_n,children:"You haven't added any contact yet..."})})}function In(){var n=(0,v.wY)().isFetching;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(e.Z,{title:"Add new contact:",isHidden:!1,children:(0,m.jsx)(f,{})}),(0,m.jsxs)(e.Z,{title:"Contacts",isHidden:!1,children:[n?(0,m.jsx)("h1",{children:"loading..."}):(0,m.jsx)(bn,{}),(0,m.jsx)(Zn,{})]})]})}},7247:function(n,t,a){var e=a(4836);t.Z=void 0;var i=e(a(5649)),o=a(3329),r=(0,i.default)((0,o.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.Z=r},1286:function(n,t,a){var e=a(4836);t.Z=void 0;var i=e(a(5649)),o=a(3329),r=(0,i.default)((0,o.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");t.Z=r},7750:function(n,t,a){var e=a(4836);t.Z=void 0;var i=e(a(5649)),o=a(3329),r=(0,i.default)((0,o.jsx)("path",{d:"M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"PersonAdd");t.Z=r},887:function(n,t,a){var e=a(4836);t.Z=void 0;var i=e(a(5649)),o=a(3329),r=(0,i.default)((0,o.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z"}),"PersonRounded");t.Z=r}}]);
//# sourceMappingURL=contacts.b547c1cf.chunk.js.map
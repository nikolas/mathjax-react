(this["webpackJsonptypescript-examples"]=this["webpackJsonptypescript-examples"]||[]).push([[0],{238:function(e,t,n){},239:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(79),o=n.n(c),i=(n(89),n(5)),s=n(6),u=n(8),l=n(7),p=n(9),f=(n(90),n(17)),h=n(18),m=n(16),d=n(80),b=n(81),y=n(38),x=n(82),v=n(83),g=function(e,t){return(g=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var j=function(){return(j=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};function O(e,t){var n,r,a,c,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:i(0),throw:i(1),return:i(2)},"function"===typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function i(c){return function(i){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return o.label++,{value:c[1],done:!1};case 5:o.label++,r=c[1],c=[0];continue;case 7:c=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===c[0]||2===c[0])){o=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){o.label=c[1];break}if(6===c[0]&&o.label<a[1]){o.label=a[1],a=c;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(c);break}a[2]&&o.ops.pop(),o.trys.pop();continue}c=t.call(e,o)}catch(i){c=[6,i],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,i])}}}var E=Object(x.browserAdaptor)();Object(v.RegisterHTMLHandler)(E);var S=new d.TeX({packages:["base","ams"]}),w=new b.MathML({}),C=new y.SVG({fontCache:"none"}),k=m.mathjax.document("",{InputJax:S,OutputJax:C}),T=m.mathjax.document("",{InputJax:w,OutputJax:C});function R(e,t,n){return r=this,a=void 0,o=function(){var r,a,c,o,i;return O(this,(function(s){return r=e.src,a=e.lang,c=k,"MathML"==a&&(c=T),o=r.trim(),i=C.getMetricsFor(t,n),[2,m.mathjax.handleRetriesFor((function(){return c.convert(o,j({display:n},i))})).then((function(e){return c.updateDocument(),function(e,t){var n=document.getElementById(e);null===n&&((n=document.createElement("style")).setAttribute("id",e),document.head.appendChild(n)),n.innerHTML=t}("MATHJAX-SVG-STYLESHEET",C.cssStyles.cssText),E.outerHTML(e)})).catch((function(e){console.log("error rendering!",e)})).then((function(e){return e||""}))]}))},new((c=void 0)||(c=Promise))((function(e,t){function n(e){try{s(o.next(e))}catch(n){t(n)}}function i(e){try{s(o.throw(e))}catch(n){t(n)}}function s(t){t.done?e(t.value):new c((function(e){e(t.value)})).then(n,i)}s((o=o.apply(r,a||[])).next())}));var r,a,c,o}var _={display:!0},L=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.rootDivRef=Object(h.createRef)(),t.rootSpanRef=Object(h.createRef)(),t.state={renderSrc:{src:"",lang:"TeX"},renderPromise:null,renderResult:"",src:{src:"",lang:"TeX"}},t}return function(e,t){function n(){this.constructor=e}g(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.getRootRef=function(){return this.props.display?this.rootDivRef:this.rootSpanRef},t.parseProps=function(e){return"mathml"in e?{src:e.mathml,lang:"MathML"}:"tex"in e?{src:e.tex,lang:"TeX"}:{src:"",lang:"TeX"}},t.getDerivedStateFromProps=function(e,n){var r=t.parseProps(e);return j({},n,{src:r})},t.prototype.componentDidMount=function(){this._sendRender()},t.prototype.componentDidUpdate=function(){this._sendRender()},t.prototype._sendRender=function(){var e=this,t=this.getRootRef().current,n=this.state,r=n.src,a=n.renderSrc;if(t&&(r.src!=a.src||r.lang!=a.lang)){var c=R(r,t,this.props.display).then((function(t){c==e.state.renderPromise?e.setState({renderResult:t}):console.log("promise expired...")}));this.setState({renderPromise:c,renderSrc:r})}},t.prototype.render=function(){var e=this.state.renderResult;return this.props.display?Object(h.createElement)("div",{ref:this.rootDivRef,dangerouslySetInnerHTML:{__html:e}}):Object(h.createElement)("span",{ref:this.rootSpanRef,dangerouslySetInnerHTML:{__html:e}})},t.defaultProps=_,t}(h.Component),M=(n(238),function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.createElement("div",{className:"example"},r.createElement("div",{className:"title"},r.createElement("h2",null,this.props.title),r.createElement("a",{className:"src-link",href:this.state.absSrc,target:"blank"},"view source")),r.createElement("div",{className:"caption"},r.createElement("p",null," ",this.props.caption," ")),r.createElement("div",{className:"result"},this.props.children))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return{absSrc:"https://github.com/charliemcvicker/react-mathjax/blob/master/typescript-examples/src/"+e.relSrc}}}]),t}(r.Component));function P(){var e=Object(f.a)(["int_{-infty}^{infty}e^{-x^2} dx"],["\\int_{-\\infty}^{\\infty}e^{-x^2}\\ dx"]);return P=function(){return e},e}var H=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=String.raw(P());return a.a.createElement(M,t.exampleConfig,a.a.createElement(L,{tex:e,display:!0}),a.a.createElement("p",{style:{textAlign:"center"}}," It is hard to compute ",a.a.createElement(L,{tex:e,display:!1})," if you don't know much math."))}}]),t}(a.a.Component);function I(){var e=Object(f.a)(["(x-h)^2+k=0"]);return I=function(){return e},e}function D(){var e=Object(f.a)(["x=\frac{-bpm sqrt{b^2-4ac}}{2a}"],["x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}"]);return D=function(){return e},e}function N(){var e=Object(f.a)(["ax^2+bx+c=0"]);return N=function(){return e},e}H.exampleConfig={title:"Basic Typesetting",caption:"Here is a basic example using react-mathjax to typeset some static equations.",relSrc:"examples/BasicTypesetting.tsx"};var A=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=[String.raw(N()),String.raw(D()),String.raw(I())].map((function(e,t){return a.a.createElement(L,{tex:e,key:t})}));return a.a.createElement(M,t.exampleConfig,e)}}]),t}(a.a.Component);A.exampleConfig={title:"List of Equations",caption:"Here we render a list of static equations and display the results.",relSrc:"examples/ListOfEquations.tsx"};var J=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={counter:0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"increment",value:function(){this.setState({counter:this.state.counter+1})}},{key:"render",value:function(){var e=this,n=this.state.counter,r=["x=".concat(n),"x^2=".concat(n*n)].map((function(e,t){return a.a.createElement(L,{tex:e,key:t})}));return a.a.createElement(M,t.exampleConfig,a.a.createElement("button",{onClick:function(){return e.increment()}},"Increment"),r)}}]),t}(a.a.Component);J.exampleConfig={title:"Counter",caption:'Hit the button that says "Increment" to increase the value of x.',relSrc:"examples/Counter.tsx"};var q=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleLangChange=function(e){e.persist(),n.setState({lang:e.currentTarget.value})},n.handleSrcChange=function(e){e.persist(),n.setState({text:e.currentTarget.value})},n.state={text:" ",lang:"tex"},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,n=e.text,r=e.lang;"tex"!==r&&"mathml"!==r&&(r="tex");var c=null;return c="tex"===r?{tex:n}:{mathml:n},a.a.createElement(M,t.exampleConfig,a.a.createElement("select",{onChange:this.handleLangChange},a.a.createElement("option",null,"tex"),a.a.createElement("option",null,"mathml")),a.a.createElement("input",{style:X,type:"text",onChange:this.handleSrcChange}),a.a.createElement(L,c))}}]),t}(a.a.Component);q.exampleConfig={title:"Live Typing",caption:"Type in the text box below and see the rendered result.",relSrc:"examples/LiveTyping.tsx"};var X={display:"block",margin:"auto"},B=[H,A,J,q].map((function(e,t){return r.createElement(e,{key:t})})),F=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"container"},a.a.createElement("header",{className:"App-header"},a.a.createElement("h1",null,"Examples for react-mathjax")),a.a.createElement("div",{className:"exampleList"},B))}}]),t}(a.a.Component);o.a.render(a.a.createElement(F,null),document.getElementById("root"))},84:function(e,t,n){e.exports=n(239)},89:function(e,t,n){},90:function(e,t,n){}},[[84,1,2]]]);
//# sourceMappingURL=main.316f56df.chunk.js.map
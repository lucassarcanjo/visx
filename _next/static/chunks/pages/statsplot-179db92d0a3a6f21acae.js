_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[124],{"+fu8":function(t,n,e){"use strict";e.d(n,"b",(function(){return f})),e.d(n,"a",(function(){return d}));var i=e("aWzz"),o=e.n(i),r=e("ERkP"),a=e.n(r),s=e("O94r"),u=e.n(s),l=["className","top","left","offsetLeft","offsetTop","style","children","unstyled","applyPositionStyle"];function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}var f={position:"absolute",backgroundColor:"white",color:"#666666",padding:".3rem .5rem",borderRadius:"3px",fontSize:"14px",boxShadow:"0 1px 2px rgba(33,33,33,0.2)",lineHeight:"1em",pointerEvents:"none"};function d(t){var n=t.className,e=t.top,i=t.left,o=t.offsetLeft,r=void 0===o?10:o,s=t.offsetTop,d=void 0===s?10:s,p=t.style,h=void 0===p?f:p,m=t.children,b=t.unstyled,x=void 0!==b&&b,y=t.applyPositionStyle,v=void 0!==y&&y,_=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,l);return a.a.createElement("div",c({className:u()("visx-tooltip",n),style:c({top:null==e||null==d?e:e+d,left:null==i||null==r?i:i+r},v&&{position:"absolute"},!x&&h)},_),m)}d.propTypes={children:o.a.node,className:o.a.string,left:o.a.number,offsetLeft:o.a.number,offsetTop:o.a.number,top:o.a.number,applyPositionStyle:o.a.bool,unstyled:o.a.bool}},"+pY8":function(t,n,e){"use strict";var i=e("1rRp"),o=e("Df+F"),r=e("mGPF"),a=e("ZzoX");n.a=function(){var t=a.a,n=a.b,e=Object(o.a)(!0),s=null,u=r.a,l=null;function c(o){var r,a,c,f=o.length,d=!1;for(null==s&&(l=u(c=Object(i.a)())),r=0;r<=f;++r)!(r<f&&e(a=o[r],r,o))===d&&((d=!d)?l.lineStart():l.lineEnd()),d&&l.point(+t(a,r,o),+n(a,r,o));if(c)return l=null,c+""||null}return c.x=function(n){return arguments.length?(t="function"===typeof n?n:Object(o.a)(+n),c):t},c.y=function(t){return arguments.length?(n="function"===typeof t?t:Object(o.a)(+t),c):n},c.defined=function(t){return arguments.length?(e="function"===typeof t?t:Object(o.a)(!!t),c):e},c.curve=function(t){return arguments.length?(u=t,null!=s&&(l=u(s)),c):u},c.context=function(t){return arguments.length?(null==t?s=l=null:l=u(s=t),c):s},c}},"/B0Q":function(t,n,e){"use strict";e.d(n,"b",(function(){return o})),e.d(n,"a",(function(){return r}));var i=e("W1cA");const o=Symbol("implicit");function r(){var t=new Map,n=[],e=[],a=o;function s(i){var r=i+"",s=t.get(r);if(!s){if(a!==o)return a;t.set(r,s=n.push(i))}return e[(s-1)%e.length]}return s.domain=function(e){if(!arguments.length)return n.slice();n=[],t=new Map;for(const i of e){const e=i+"";t.has(e)||t.set(e,n.push(i))}return s},s.range=function(t){return arguments.length?(e=Array.from(t),s):e.slice()},s.unknown=function(t){return arguments.length?(a=t,s):a},s.copy=function(){return r(n,e).unknown(a)},i.b.apply(s,arguments),s}},"1rRp":function(t,n,e){"use strict";var i=Math.PI,o=2*i,r=o-1e-6;function a(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function s(){return new a}a.prototype=s.prototype={constructor:a,moveTo:function(t,n){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,n){this._+="L"+(this._x1=+t)+","+(this._y1=+n)},quadraticCurveTo:function(t,n,e,i){this._+="Q"+ +t+","+ +n+","+(this._x1=+e)+","+(this._y1=+i)},bezierCurveTo:function(t,n,e,i,o,r){this._+="C"+ +t+","+ +n+","+ +e+","+ +i+","+(this._x1=+o)+","+(this._y1=+r)},arcTo:function(t,n,e,o,r){t=+t,n=+n,e=+e,o=+o,r=+r;var a=this._x1,s=this._y1,u=e-t,l=o-n,c=a-t,f=s-n,d=c*c+f*f;if(r<0)throw new Error("negative radius: "+r);if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=n);else if(d>1e-6)if(Math.abs(f*u-l*c)>1e-6&&r){var p=e-a,h=o-s,m=u*u+l*l,b=p*p+h*h,x=Math.sqrt(m),y=Math.sqrt(d),v=r*Math.tan((i-Math.acos((m+d-b)/(2*x*y)))/2),_=v/y,g=v/x;Math.abs(_-1)>1e-6&&(this._+="L"+(t+_*c)+","+(n+_*f)),this._+="A"+r+","+r+",0,0,"+ +(f*p>c*h)+","+(this._x1=t+g*u)+","+(this._y1=n+g*l)}else this._+="L"+(this._x1=t)+","+(this._y1=n);else;},arc:function(t,n,e,a,s,u){t=+t,n=+n,u=!!u;var l=(e=+e)*Math.cos(a),c=e*Math.sin(a),f=t+l,d=n+c,p=1^u,h=u?a-s:s-a;if(e<0)throw new Error("negative radius: "+e);null===this._x1?this._+="M"+f+","+d:(Math.abs(this._x1-f)>1e-6||Math.abs(this._y1-d)>1e-6)&&(this._+="L"+f+","+d),e&&(h<0&&(h=h%o+o),h>r?this._+="A"+e+","+e+",0,1,"+p+","+(t-l)+","+(n-c)+"A"+e+","+e+",0,1,"+p+","+(this._x1=f)+","+(this._y1=d):h>1e-6&&(this._+="A"+e+","+e+",0,"+ +(h>=i)+","+p+","+(this._x1=t+e*Math.cos(s))+","+(this._y1=n+e*Math.sin(s))))},rect:function(t,n,e,i){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+n)+"h"+ +e+"v"+ +i+"h"+-e+"Z"},toString:function(){return this._}},n.a=s},"67po":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e("uKU/"),o=e("xx0A"),r=Object(o.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function a(t){return r(Object(i.a)(),t)}},"Cf/J":function(t,n,e){"use strict";e.d(n,"a",(function(){return l}));var i=e("aWzz"),o=e.n(i),r=e("ERkP"),a=e.n(r),s=["children","id","from","to","x1","y1","x2","y2","fromOffset","fromOpacity","toOffset","toOpacity","rotate","transform","vertical"];function u(){return(u=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function l(t){var n=t.children,e=t.id,i=t.from,o=t.to,r=t.x1,l=t.y1,c=t.x2,f=t.y2,d=t.fromOffset,p=void 0===d?"0%":d,h=t.fromOpacity,m=void 0===h?1:h,b=t.toOffset,x=void 0===b?"100%":b,y=t.toOpacity,v=void 0===y?1:y,_=t.rotate,g=t.transform,O=t.vertical,T=void 0===O||O,M=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,s),w=r,S=c,P=l,j=f;return!T||w||S||P||j||(w="0",S="0",P="0",j="1"),a.a.createElement("defs",null,a.a.createElement("linearGradient",u({id:e,x1:w,y1:P,x2:S,y2:j,gradientTransform:_?"rotate("+_+")":g},M),!!n&&n,!n&&a.a.createElement("stop",{offset:p,stopColor:i,stopOpacity:m}),!n&&a.a.createElement("stop",{offset:x,stopColor:o,stopOpacity:v})))}l.propTypes={id:o.a.string.isRequired,from:o.a.string,to:o.a.string,x1:o.a.oneOfType([o.a.string,o.a.number]),x2:o.a.oneOfType([o.a.string,o.a.number]),y1:o.a.oneOfType([o.a.string,o.a.number]),y2:o.a.oneOfType([o.a.string,o.a.number]),fromOffset:o.a.oneOfType([o.a.string,o.a.number]),fromOpacity:o.a.oneOfType([o.a.string,o.a.number]),toOffset:o.a.oneOfType([o.a.string,o.a.number]),toOpacity:o.a.oneOfType([o.a.string,o.a.number]),rotate:o.a.oneOfType([o.a.string,o.a.number]),transform:o.a.string,children:o.a.node,vertical:o.a.bool}},"Df+F":function(t,n,e){"use strict";n.a=function(t){return function(){return t}}},HO86:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));var i=e("lEbO");function o(t,n){if(t){if("string"===typeof t)return Object(i.a)(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?Object(i.a)(t,n):void 0}}},J4UP:function(t,n,e){"use strict";e.d(n,"a",(function(){return o}));const i=1/4294967296;function o(t=Math.random()){let n=0|(0<=t&&t<1?t/i:Math.abs(t));return()=>(n=1664525*n+1013904223|0,i*(n>>>0))}},JkM6:function(t,n,e){"use strict";function i(t,n,e){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-n),t._y2+t._k*(t._y1-e),t._x2,t._y2)}function o(t,n){this._context=t,this._k=(1-n)/6}e.d(n,"c",(function(){return i})),e.d(n,"a",(function(){return o})),o.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:i(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2,this._x1=t,this._y1=n;break;case 2:this._point=3;default:i(this,t,n)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=n}},n.b=function t(n){function e(t){return new o(t,n)}return e.tension=function(n){return t(+n)},e}(0)},JmwF:function(t,n,e){"use strict";e.d(n,"a",(function(){return f}));var i=e("aWzz"),o=e.n(i),r=e("ERkP"),a=e.n(r),s=e("O94r"),u=e.n(s),l=["top","left","transform","className","children","innerRef"];function c(){return(c=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function f(t){var n=t.top,e=void 0===n?0:n,i=t.left,o=void 0===i?0:i,r=t.transform,s=t.className,f=t.children,d=t.innerRef,p=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,l);return a.a.createElement("g",c({ref:d,className:u()("visx-group",s),transform:r||"translate("+o+", "+e+")"},p),f)}f.propTypes={top:o.a.number,left:o.a.number,transform:o.a.string,className:o.a.string,children:o.a.node,innerRef:o.a.oneOfType([o.a.string,o.a.func,o.a.object])}},QnoR:function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e("ERkP"),o=["tooltipOpen"];function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i])}return t}).apply(this,arguments)}function a(t){var n=Object(i.useState)(r({tooltipOpen:!1},t)),e=n[0],a=n[1],s=Object(i.useCallback)((function(t){return a("function"===typeof t?function(n){n.tooltipOpen;var e=function(t,n){if(null==t)return{};var e,i,o={},r=Object.keys(t);for(i=0;i<r.length;i++)e=r[i],n.indexOf(e)>=0||(o[e]=t[e]);return o}(n,o);return r({},t(e),{tooltipOpen:!0})}:{tooltipOpen:!0,tooltipLeft:t.tooltipLeft,tooltipTop:t.tooltipTop,tooltipData:t.tooltipData})}),[a]),u=Object(i.useCallback)((function(){return a({tooltipOpen:!1,tooltipLeft:void 0,tooltipTop:void 0,tooltipData:void 0})}),[a]);return{tooltipOpen:e.tooltipOpen,tooltipLeft:e.tooltipLeft,tooltipTop:e.tooltipTop,tooltipData:e.tooltipData,updateTooltip:a,showTooltip:s,hideTooltip:u}}},YaE3:function(t,n,e){"use strict";e.d(n,"a",(function(){return a})),e.d(n,"b",(function(){return u}));var i=function(t,n,e){t=+t,n=+n,e=(o=arguments.length)<2?(n=t,t=0,1):o<3?1:+e;for(var i=-1,o=0|Math.max(0,Math.ceil((n-t)/e)),r=new Array(o);++i<o;)r[i]=t+i*e;return r},o=e("W1cA"),r=e("/B0Q");function a(){var t,n,e=Object(r.a)().unknown(void 0),s=e.domain,u=e.range,l=0,c=1,f=!1,d=0,p=0,h=.5;function m(){var e=s().length,o=c<l,r=o?c:l,a=o?l:c;t=(a-r)/Math.max(1,e-d+2*p),f&&(t=Math.floor(t)),r+=(a-r-t*(e-d))*h,n=t*(1-d),f&&(r=Math.round(r),n=Math.round(n));var m=i(e).map((function(n){return r+t*n}));return u(o?m.reverse():m)}return delete e.unknown,e.domain=function(t){return arguments.length?(s(t),m()):s()},e.range=function(t){return arguments.length?([l,c]=t,l=+l,c=+c,m()):[l,c]},e.rangeRound=function(t){return[l,c]=t,l=+l,c=+c,f=!0,m()},e.bandwidth=function(){return n},e.step=function(){return t},e.round=function(t){return arguments.length?(f=!!t,m()):f},e.padding=function(t){return arguments.length?(d=Math.min(1,p=+t),m()):d},e.paddingInner=function(t){return arguments.length?(d=Math.min(1,t),m()):d},e.paddingOuter=function(t){return arguments.length?(p=+t,m()):p},e.align=function(t){return arguments.length?(h=Math.max(0,Math.min(1,t)),m()):h},e.copy=function(){return a(s(),[l,c]).round(f).paddingInner(d).paddingOuter(p).align(h)},o.b.apply(m(),arguments)}function s(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return s(n())},t}function u(){return s(a.apply(null,arguments).paddingInner(1))}},"ZDJ+":function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/statsplot",function(){return e("hrup")}])},Zbhd:function(t,n,e){"use strict";e.d(n,"a",(function(){return s}));var i=e("PB0s"),o=e("XAd9"),r=e("Cyas"),a=e("VBI3");function s(t,n,e,s){var u,l=Object(i.c)(t,n,e);switch((s=Object(o.a)(null==s?",f":s)).type){case"s":var c=Math.max(Math.abs(t),Math.abs(n));return null!=s.precision||isNaN(u=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(r.a)(n)/3)))-Object(r.a)(Math.abs(t)))}(l,c))||(s.precision=u),Object(a.b)(s,c);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(u=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,Object(r.a)(n)-Object(r.a)(t))+1}(l,Math.max(Math.abs(t),Math.abs(n))))||(s.precision=u-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(u=function(t){return Math.max(0,-Object(r.a)(Math.abs(t)))}(l))||(s.precision=u-2*("%"===s.type))}return Object(a.a)(s)}},ZzoX:function(t,n,e){"use strict";function i(t){return t[0]}function o(t){return t[1]}e.d(n,"a",(function(){return i})),e.d(n,"b",(function(){return o}))},"cc+0":function(t,n,e){"use strict";e.d(n,"a",(function(){return a}));var i=e("YaE3"),o=e("xx0A"),r=Object(o.b)("domain","range","reverse","align","padding","round");function a(t){return r(Object(i.a)(),t)}},fGyu:function(t,n,e){"use strict";e.d(n,"a",(function(){return r}));var i=e("lEbO");var o=e("HO86");function r(t){return function(t){if(Array.isArray(t))return Object(i.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(o.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},hrup:function(t,n,e){"use strict";e.r(n);var i=e("jg1C"),o=(e("ERkP"),e("6wy5")),r=e("4Jcw"),a=e("uVo9");n.default=function(){return Object(i.jsx)(o.a,{events:!0,component:r.a,title:"BoxPlot + ViolinPlot",codeSandboxDirectoryName:"visx-stats",packageJson:a,children:"import React from 'react';\nimport { Group } from '@visx/group';\nimport { ViolinPlot, BoxPlot } from '@visx/stats';\nimport { LinearGradient } from '@visx/gradient';\nimport { scaleBand, scaleLinear } from '@visx/scale';\nimport genStats, { Stats } from '@visx/mock-data/lib/generators/genStats';\nimport { getSeededRandom, getRandomNormal } from '@visx/mock-data';\nimport { withTooltip, Tooltip, defaultStyles as defaultTooltipStyles } from '@visx/tooltip';\nimport { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip';\nimport { PatternLines } from '@visx/pattern';\n\n// seeded randomness\nconst seededRandom = getSeededRandom(0.1);\nconst randomNormal = getRandomNormal.source(getSeededRandom(0.789))(4, 3);\nconst data: Stats[] = genStats(5, randomNormal, () => 10 * seededRandom());\n\n// accessors\nconst x = (d: Stats) => d.boxPlot.x;\nconst min = (d: Stats) => d.boxPlot.min;\nconst max = (d: Stats) => d.boxPlot.max;\nconst median = (d: Stats) => d.boxPlot.median;\nconst firstQuartile = (d: Stats) => d.boxPlot.firstQuartile;\nconst thirdQuartile = (d: Stats) => d.boxPlot.thirdQuartile;\nconst outliers = (d: Stats) => d.boxPlot.outliers;\n\ninterface TooltipData {\n  name?: string;\n  min?: number;\n  median?: number;\n  max?: number;\n  firstQuartile?: number;\n  thirdQuartile?: number;\n}\n\nexport type StatsPlotProps = {\n  width: number;\n  height: number;\n};\n\nexport default withTooltip<StatsPlotProps, TooltipData>(\n  ({\n    width,\n    height,\n    tooltipOpen,\n    tooltipLeft,\n    tooltipTop,\n    tooltipData,\n    showTooltip,\n    hideTooltip,\n  }: StatsPlotProps & WithTooltipProvidedProps<TooltipData>) => {\n    // bounds\n    const xMax = width;\n    const yMax = height - 120;\n\n    // scales\n    const xScale = scaleBand<string>({\n      range: [0, xMax],\n      round: true,\n      domain: data.map(x),\n      padding: 0.4,\n    });\n\n    const values = data.reduce((allValues, { boxPlot }) => {\n      allValues.push(boxPlot.min, boxPlot.max);\n      return allValues;\n    }, [] as number[]);\n    const minYValue = Math.min(...values);\n    const maxYValue = Math.max(...values);\n\n    const yScale = scaleLinear<number>({\n      range: [yMax, 0],\n      round: true,\n      domain: [minYValue, maxYValue],\n    });\n\n    const boxWidth = xScale.bandwidth();\n    const constrainedWidth = Math.min(40, boxWidth);\n\n    return width < 10 ? null : (\n      <div style={{ position: 'relative' }}>\n        <svg width={width} height={height}>\n          <LinearGradient id=\"statsplot\" to=\"#8b6ce7\" from=\"#87f2d4\" />\n          <rect x={0} y={0} width={width} height={height} fill=\"url(#statsplot)\" rx={14} />\n          <PatternLines\n            id=\"hViolinLines\"\n            height={3}\n            width={3}\n            stroke=\"#ced4da\"\n            strokeWidth={1}\n            // fill=\"rgba(0,0,0,0.3)\"\n            orientation={['horizontal']}\n          />\n          <Group top={40}>\n            {data.map((d: Stats, i) => (\n              <g key={i}>\n                <ViolinPlot\n                  data={d.binData}\n                  stroke=\"#dee2e6\"\n                  left={xScale(x(d))!}\n                  width={constrainedWidth}\n                  valueScale={yScale}\n                  fill=\"url(#hViolinLines)\"\n                />\n                <BoxPlot\n                  min={min(d)}\n                  max={max(d)}\n                  left={xScale(x(d))! + 0.3 * constrainedWidth}\n                  firstQuartile={firstQuartile(d)}\n                  thirdQuartile={thirdQuartile(d)}\n                  median={median(d)}\n                  boxWidth={constrainedWidth * 0.4}\n                  fill=\"#FFFFFF\"\n                  fillOpacity={0.3}\n                  stroke=\"#FFFFFF\"\n                  strokeWidth={2}\n                  valueScale={yScale}\n                  outliers={outliers(d)}\n                  minProps={{\n                    onMouseOver: () => {\n                      showTooltip({\n                        tooltipTop: yScale(min(d)) ?? 0 + 40,\n                        tooltipLeft: xScale(x(d))! + constrainedWidth + 5,\n                        tooltipData: {\n                          min: min(d),\n                          name: x(d),\n                        },\n                      });\n                    },\n                    onMouseLeave: () => {\n                      hideTooltip();\n                    },\n                  }}\n                  maxProps={{\n                    onMouseOver: () => {\n                      showTooltip({\n                        tooltipTop: yScale(max(d)) ?? 0 + 40,\n                        tooltipLeft: xScale(x(d))! + constrainedWidth + 5,\n                        tooltipData: {\n                          max: max(d),\n                          name: x(d),\n                        },\n                      });\n                    },\n                    onMouseLeave: () => {\n                      hideTooltip();\n                    },\n                  }}\n                  boxProps={{\n                    onMouseOver: () => {\n                      showTooltip({\n                        tooltipTop: yScale(median(d)) ?? 0 + 40,\n                        tooltipLeft: xScale(x(d))! + constrainedWidth + 5,\n                        tooltipData: {\n                          ...d.boxPlot,\n                          name: x(d),\n                        },\n                      });\n                    },\n                    onMouseLeave: () => {\n                      hideTooltip();\n                    },\n                  }}\n                  medianProps={{\n                    style: {\n                      stroke: 'white',\n                    },\n                    onMouseOver: () => {\n                      showTooltip({\n                        tooltipTop: yScale(median(d)) ?? 0 + 40,\n                        tooltipLeft: xScale(x(d))! + constrainedWidth + 5,\n                        tooltipData: {\n                          median: median(d),\n                          name: x(d),\n                        },\n                      });\n                    },\n                    onMouseLeave: () => {\n                      hideTooltip();\n                    },\n                  }}\n                />\n              </g>\n            ))}\n          </Group>\n        </svg>\n\n        {tooltipOpen && tooltipData && (\n          <Tooltip\n            top={tooltipTop}\n            left={tooltipLeft}\n            style={{ ...defaultTooltipStyles, backgroundColor: '#283238', color: 'white' }}\n          >\n            <div>\n              <strong>{tooltipData.name}</strong>\n            </div>\n            <div style={{ marginTop: '5px', fontSize: '12px' }}>\n              {tooltipData.max && <div>max: {tooltipData.max}</div>}\n              {tooltipData.thirdQuartile && <div>third quartile: {tooltipData.thirdQuartile}</div>}\n              {tooltipData.median && <div>median: {tooltipData.median}</div>}\n              {tooltipData.firstQuartile && <div>first quartile: {tooltipData.firstQuartile}</div>}\n              {tooltipData.min && <div>min: {tooltipData.min}</div>}\n            </div>\n          </Tooltip>\n        )}\n      </div>\n    );\n  },\n);\n"})}},lEbO:function(t,n,e){"use strict";function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,i=new Array(n);e<n;e++)i[e]=t[e];return i}e.d(n,"a",(function(){return i}))},mGPF:function(t,n,e){"use strict";function i(t){this._context=t}i.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,n){switch(t=+t,n=+n,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,n):this._context.moveTo(t,n);break;case 1:this._point=2;default:this._context.lineTo(t,n)}}},n.a=function(t){return new i(t)}},"uKU/":function(t,n,e){"use strict";e.d(n,"b",(function(){return s})),e.d(n,"a",(function(){return u}));var i=e("PB0s"),o=e("2+fR"),r=e("W1cA"),a=e("Zbhd");function s(t){var n=t.domain;return t.ticks=function(t){var e=n();return Object(i.a)(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){var i=n();return Object(a.a)(i[0],i[i.length-1],null==t?10:t,e)},t.nice=function(e){null==e&&(e=10);var o,r,a=n(),s=0,u=a.length-1,l=a[s],c=a[u],f=10;for(c<l&&(r=l,l=c,c=r,r=s,s=u,u=r);f-- >0;){if((r=Object(i.b)(l,c,e))===o)return a[s]=l,a[u]=c,n(a);if(r>0)l=Math.floor(l/r)*r,c=Math.ceil(c/r)*r;else{if(!(r<0))break;l=Math.ceil(l*r)/r,c=Math.floor(c*r)/r}o=r}return t},t}function u(){var t=Object(o.b)();return t.copy=function(){return Object(o.a)(t,u())},r.b.apply(t,arguments),s(t)}},zjfJ:function(t,n,e){"use strict";function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,"a",(function(){return i}))}},[["ZDJ+",0,2,1,3,4,5,6,24]]]);
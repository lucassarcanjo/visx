(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[47],{Csc1:function(e,t,n){"use strict";function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}t.__esModule=!0,t.default=function(e,t){for(var n,a=e,i=1/0,o=function(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(n)return(n=n.call(e)).next.bind(n);if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0;return function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}(t);!(n=o()).done;){var u=n.value,s=Math.sqrt(Math.pow(u.x-e.x,2)+Math.pow(u.y-e.y,2));s<i&&(i=s,a={x:u.x,y:u.y})}return a}},"Hn+V":function(e,t,n){"use strict";n.d(t,"a",(function(){return ue})),n.d(t,"b",(function(){return se}));var r=n("zjfJ"),a=n("jg1C"),i=n("ERkP"),o=n.n(i),u=n("cjvV"),s=n("67po"),l=n("oT5u"),d=n.n(l),h=n("aWzz"),c=n.n(h),f=n("JmwF"),p=n("g2fB"),g=n("wQia"),x=n.n(g);function y(e,t){if("invert"in e&&"undefined"!==typeof e.invert)return e.invert(t).valueOf();var n=e.range(),r=n[0],a=n[1],i=0,o=("step"in e&&"undefined"!==typeof e.step?e.step():1)*(a-r)/Math.abs(a-r);if(o>0)for(;t>r+o*(i+1);)i+=1;else for(;t<r+o*(i+1);)i+=1;return i}function v(e,t,n,r){var a,i=y(e,t+(t<n?-r:r)),o=y(e,n+(n<t?-r:r)),u=Math.min(i,o),s=Math.max(i,o);if("invert"in e&&"undefined"!==typeof e.invert)a={start:u,end:s};else{for(var l=[],d=e.domain(),h=u;h<=s;h+=1)l.push(d[h]);a={values:l}}return a}function m(e){if("undefined"!==typeof window&&window.TouchEvent&&e instanceof TouchEvent)return{pageX:e.touches[0].pageX,pageY:e.touches[0].pageY};var t=e;return{pageX:t.pageX,pageY:t.pageY}}function b(){return(b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function M(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var S=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return w(M(t=e.call.apply(e,[this].concat(r))||this),"handleDragStart",(function(e){var n=t.props,r=n.onBrushHandleChange,a=n.type,i=n.onBrushStart;r&&r(a,m(e.event)),i&&i(e)})),w(M(t),"handleDragMove",(function(e){var n=t.props,r=n.updateBrush,a=n.type,i=n.isControlled;e.isDragging&&!i&&r((function(t){var n=t.start,r=t.end,i=0,o=Math.max(n.x,r.x),u=Math.min(n.x,r.x),s=Math.max(n.y,r.y),l=Math.min(n.y,r.y);switch(a){case"right":return i=o+e.dx,b({},t,{activeHandle:a,extent:b({},t.extent,{x0:Math.max(Math.min(i,n.x),t.bounds.x0),x1:Math.min(Math.max(i,n.x),t.bounds.x1)})});case"left":return i=u+e.dx,b({},t,{activeHandle:a,extent:b({},t.extent,{x0:Math.min(i,r.x),x1:Math.max(i,r.x)})});case"bottom":return i=s+e.dy,b({},t,{activeHandle:a,extent:b({},t.extent,{y0:Math.min(i,n.y),y1:Math.max(i,n.y)})});case"top":return i=l+e.dy,b({},t,{activeHandle:a,extent:b({},t.extent,{y0:Math.min(i,r.y),y1:Math.max(i,r.y)})});default:return t}}))})),w(M(t),"handleDragEnd",(function(){var e=t.props,n=e.updateBrush,r=e.onBrushEnd,a=e.onBrushHandleChange;e.isControlled||n((function(e){var t=e.start,n=e.end,a=e.extent;t.x=Math.min(a.x0,a.x1),t.y=Math.min(a.y0,a.y0),n.x=Math.max(a.x0,a.x1),n.y=Math.max(a.y0,a.y1);var i=b({},e,{start:t,end:n,activeHandle:null,isBrushing:!1,extent:{x0:Math.min(t.x,n.x),x1:Math.max(t.x,n.x),y0:Math.min(t.y,n.y),y1:Math.max(t.y,n.y)}});return r&&r(i),i})),a&&a()})),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,O(t,n),r.prototype.render=function(){var e=this.props,t=e.stageWidth,n=e.stageHeight,r=e.brush,a=e.type,i=e.handle,u=e.isControlled,s=e.isDragInProgress,l=i.x,d=i.y,h=i.width,c=i.height,f="right"===a||"left"===a?"ew-resize":"ns-resize";return o.a.createElement(x.a,{width:t,height:n,onDragStart:this.handleDragStart,onDragMove:this.handleDragMove,onDragEnd:this.handleDragEnd,resetOnStart:!0,isDragging:u?s:void 0},(function(e){var i=e.dragStart,s=e.dragEnd,p=e.dragMove,g=e.isDragging;return o.a.createElement("g",null,g&&o.a.createElement("rect",{fill:"transparent",width:t,height:n,style:{cursor:f},onPointerMove:p,onPointerUp:u?void 0:s,onPointerLeave:u?void 0:s}),o.a.createElement("rect",{x:l,y:d,width:h,height:c,fill:"transparent",className:"visx-brush-handle-"+a,onPointerDown:i,onPointerMove:p,onPointerUp:u?void 0:s,style:{cursor:f,pointerEvents:r.activeHandle||r.isBrushing?"none":"all"}}))}))},r}(o.a.Component);function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function D(e,t){return(D=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function P(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}w(S,"propTypes",{stageWidth:c.a.number.isRequired,stageHeight:c.a.number.isRequired,updateBrush:c.a.func.isRequired,onBrushStart:c.a.func,onBrushEnd:c.a.func,handle:c.a.shape({x:c.a.number.isRequired,y:c.a.number.isRequired,width:c.a.number.isRequired,height:c.a.number.isRequired}).isRequired,isControlled:c.a.bool,isDragInProgress:c.a.bool,onBrushHandleChange:c.a.func});var j=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return P(B(t=e.call.apply(e,[this].concat(r))||this),"cornerDragMove",(function(e){var n=t.props,r=n.updateBrush,a=n.type;e.isDragging&&r((function(t){var n=t.start,r=t.end,i=Math.max(n.x,r.x),o=Math.min(n.x,r.x),u=Math.max(n.y,r.y),s=Math.min(n.y,r.y),l=0,d=0;switch(a){case"topRight":return l=i+e.dx,d=s+e.dy,E({},t,{activeHandle:a,extent:E({},t.extent,{x0:Math.max(Math.min(l,n.x),t.bounds.x0),x1:Math.min(Math.max(l,n.x),t.bounds.x1),y0:Math.max(Math.min(d,r.y),t.bounds.y0),y1:Math.min(Math.max(d,r.y),t.bounds.y1)})});case"topLeft":return l=o+e.dx,d=s+e.dy,E({},t,{activeHandle:a,extent:E({},t.extent,{x0:Math.max(Math.min(l,r.x),t.bounds.x0),x1:Math.min(Math.max(l,r.x),t.bounds.x1),y0:Math.max(Math.min(d,r.y),t.bounds.y0),y1:Math.min(Math.max(d,r.y),t.bounds.y1)})});case"bottomLeft":return l=o+e.dx,d=u+e.dy,E({},t,{activeHandle:a,extent:E({},t.extent,{x0:Math.max(Math.min(l,r.x),t.bounds.x0),x1:Math.min(Math.max(l,r.x),t.bounds.x1),y0:Math.max(Math.min(d,n.y),t.bounds.y0),y1:Math.min(Math.max(d,n.y),t.bounds.y1)})});case"bottomRight":return l=i+e.dx,d=u+e.dy,E({},t,{activeHandle:a,extent:E({},t.extent,{x0:Math.max(Math.min(l,n.x),t.bounds.x0),x1:Math.min(Math.max(l,n.x),t.bounds.x1),y0:Math.max(Math.min(d,n.y),t.bounds.y0),y1:Math.min(Math.max(d,n.y),t.bounds.y1)})});default:return t}}))})),P(B(t),"cornerDragEnd",(function(){var e=t.props,n=e.updateBrush,r=e.onBrushEnd;n((function(e){var t=e.start,n=e.end,a=e.extent;t.x=Math.min(a.x0,a.x1),t.y=Math.min(a.y0,a.y0),n.x=Math.max(a.x0,a.x1),n.y=Math.max(a.y0,a.y1);var i=E({},e,{start:t,end:n,activeHandle:null,domain:{x0:Math.min(t.x,n.x),x1:Math.max(t.x,n.x),y0:Math.min(t.y,n.y),y1:Math.max(t.y,n.y)}});return r&&r(i),i}))})),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,D(t,n),r.prototype.render=function(){var e=this.props,t=e.type,n=e.brush,r=e.stageWidth,a=e.stageHeight,i=e.style,u=e.corner,s=(null==i?void 0:i.cursor)||("topLeft"===t||"bottomRight"===t?"nwse-resize":"nesw-resize"),l=n.activeHandle||n.isBrushing?"none":"all";return o.a.createElement(x.a,{width:r,height:a,onDragMove:this.cornerDragMove,onDragEnd:this.cornerDragEnd,resetOnStart:!0},(function(e){var n=e.dragMove,d=e.dragEnd,h=e.dragStart,c=e.isDragging;return o.a.createElement("g",null,c&&o.a.createElement("rect",{fill:"transparent",width:r,height:a,style:{cursor:s},onPointerMove:n,onPointerUp:d}),o.a.createElement("rect",E({fill:"transparent",onPointerDown:h,onPointerMove:n,onPointerUp:d,className:"visx-brush-corner-"+t,style:E({cursor:s,pointerEvents:l},i)},u)))}))},r}(o.a.Component);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(e,t){return(R=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}P(j,"propTypes",{stageWidth:c.a.number.isRequired,stageHeight:c.a.number.isRequired,updateBrush:c.a.func.isRequired,onBrushEnd:c.a.func,corner:c.a.shape({x:c.a.number.isRequired,y:c.a.number.isRequired,width:c.a.number.isRequired,height:c.a.number.isRequired}).isRequired}),P(j,"defaultProps",{style:{}});var T={cursor:"move"},A=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return _(k(t=e.call.apply(e,[this].concat(r))||this),"selectionDragStart",(function(e){var n=t.props,r=n.onMoveSelectionChange,a=n.onBrushStart;r&&r("move",m(e.event)),a&&a(e)})),_(k(t),"selectionDragMove",(function(e){var n=t.props,r=n.updateBrush;n.isControlled||r((function(t){var n=t.start,r=n.x,a=n.y,i=t.end,o=i.x,u=i.y,s=e.dx>0?Math.min(e.dx,t.bounds.x1-o):Math.max(e.dx,t.bounds.x0-r),l=e.dy>0?Math.min(e.dy,t.bounds.y1-u):Math.max(e.dy,t.bounds.y0-a);return C({},t,{isBrushing:!0,extent:C({},t.extent,{x0:r+s,x1:o+s,y0:a+l,y1:u+l})})}))})),_(k(t),"selectionDragEnd",(function(){var e=t.props,n=e.updateBrush,r=e.onBrushEnd,a=e.onMoveSelectionChange;e.isControlled||n((function(e){var t=C({},e,{isBrushing:!1,start:C({},e.start,{x:Math.min(e.extent.x0,e.extent.x1),y:Math.min(e.extent.y0,e.extent.y1)}),end:C({},e.end,{x:Math.max(e.extent.x0,e.extent.x1),y:Math.max(e.extent.y0,e.extent.y1)})});return r&&r(t),t})),a&&a()})),t}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,R(t,n),r.prototype.render=function(){var e=this.props,t=e.width,n=e.height,r=e.stageWidth,a=e.stageHeight,i=e.brush,u=e.disableDraggingSelection,s=e.onMouseLeave,l=e.onMouseMove,d=e.onMouseUp,h=e.onClick,c=e.selectedBoxStyle,f=e.isControlled,p=e.isDragInProgress;return o.a.createElement(x.a,{width:t,height:n,resetOnStart:!0,onDragStart:this.selectionDragStart,onDragMove:this.selectionDragMove,onDragEnd:this.selectionDragEnd,isDragging:f?p:void 0},(function(e){var p=e.isDragging,g=e.dragStart,x=e.dragEnd,y=e.dragMove;return o.a.createElement("g",null,p&&o.a.createElement("rect",{width:r,height:a,fill:"transparent",onPointerUp:f?void 0:x,onPointerMove:y,onPointerLeave:f?void 0:x,style:T}),o.a.createElement("rect",C({x:Math.min(i.extent.x0,i.extent.x1),y:Math.min(i.extent.y0,i.extent.y1),width:t,height:n,className:"visx-brush-selection",onPointerDown:u?void 0:g,onPointerLeave:function(e){s&&s(e)},onPointerMove:function(e){y(e),l&&l(e)},onPointerUp:function(e){f||x(e),d&&d(e)},onClick:function(e){h&&h(e)},style:{pointerEvents:i.isBrushing||i.activeHandle?"none":"all",cursor:u?void 0:"move"}},c)))}))},r}(o.a.Component);function L(){return(L=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function q(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function W(e,t){return(W=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}_(A,"propTypes",{width:c.a.number.isRequired,height:c.a.number.isRequired,stageWidth:c.a.number.isRequired,stageHeight:c.a.number.isRequired,updateBrush:c.a.func.isRequired,onMoveSelectionChange:c.a.func,onBrushStart:c.a.func,onBrushEnd:c.a.func,disableDraggingSelection:c.a.bool.isRequired,onMouseLeave:c.a.func,onMouseMove:c.a.func,onMouseUp:c.a.func,onClick:c.a.func,isControlled:c.a.bool,isDragInProgress:c.a.bool}),_(A,"defaultProps",{onMouseLeave:null,onMouseUp:null,onMouseMove:null,onClick:null});var H={cursor:"crosshair"},N=function(e){var t,n;function r(t){var n;z(q(n=e.call(this,t)||this),"mouseUpTime",0),z(q(n),"mouseDownTime",0),z(q(n),"handleWindowPointerUp",(function(){var e=n.props,t=e.useWindowMoveEvents,r=e.onBrushEnd,a=e.resetOnEnd,i=n.state.brushingType;t&&i&&n.updateBrush((function(e){var t=e.start,i=e.end,o=e.extent;t.x=Math.min(o.x0,o.x1),t.y=Math.min(o.y0,o.y0),i.x=Math.max(o.x0,o.x1),i.y=Math.max(o.y0,o.y1);var u=L({},e,{activeHandle:null,isBrushing:!1,brushingType:void 0});return r&&r(u),a&&n.reset(),u}))})),z(q(n),"handleWindowPointerMove",(function(e){var t=n.props.useWindowMoveEvents,r=n.state,a=r.brushingType,i=r.isBrushing,o=r.brushPageOffset,u=r.start;if(t&&i){var s=e.pageX-((null==o?void 0:o.pageX)||0),l=e.pageY-((null==o?void 0:o.pageY)||0);["left","right","top","bottom"].includes(null!=a?a:"")&&n.updateBrush((function(e){var t=e.start,r=t.x,i=t.y,o=e.end,u=o.x,d=o.y;return L({},e,{isBrushing:!0,extent:L({},e.extent,n.getExtent({x:"left"===a?Math.min(Math.max(r+s,e.bounds.x0),e.bounds.x1):r,y:"top"===a?Math.min(Math.max(i+l,e.bounds.y0),e.bounds.y1):i},{x:"right"===a?Math.min(Math.max(u+s,e.bounds.x0),e.bounds.x1):u,y:"bottom"===a?Math.min(Math.max(d+l,e.bounds.y0),e.bounds.y1):d}))})})),"move"===a&&n.updateBrush((function(e){var t=e.start,n=t.x,r=t.y,a=e.end,i=a.x,o=a.y,u=s>0?Math.min(s,e.bounds.x1-i):Math.max(s,e.bounds.x0-n),d=l>0?Math.min(l,e.bounds.y1-o):Math.max(l,e.bounds.y0-r);return L({},e,{isBrushing:!0,extent:L({},e.extent,{x0:n+u,y0:r+d,x1:i+u,y1:o+d})})})),"select"===a&&n.updateBrush((function(e){var t=e.start,r=t.x,a=t.y,i={x:Math.min(Math.max(r+s,e.bounds.x0),e.bounds.x1),y:Math.min(Math.max(a+l,e.bounds.y0),e.bounds.y1)};return L({},e,{end:i,extent:n.getExtent(u,i)})}))}})),z(q(n),"getExtent",(function(e,t){var r=n.props,a=r.brushDirection,i=r.width,o=r.height;return{x0:"vertical"===a?0:Math.min(e.x||0,t.x||0),x1:"vertical"===a?i:Math.max(e.x||0,t.x||0),y0:"horizontal"===a?0:Math.min(e.y||0,t.y||0),y1:"horizontal"===a?o:Math.max(e.y||0,t.y||0)}})),z(q(n),"handleDragStart",(function(e){var t=n.props,r=t.onBrushStart,a=t.left,i=t.top,o=t.inheritedMargin,u=t.useWindowMoveEvents,s=null!=o&&o.left?o.left:0,l=null!=o&&o.top?o.top:0,d={x:(e.x||0)+e.dx-a-s,y:(e.y||0)+e.dy-i-l},h=L({},d);r&&r(d),n.updateBrush((function(t){return L({},t,{start:d,end:h,extent:{x0:-1,x1:-1,y0:-1,y1:-1},isBrushing:!0,brushingType:"select",brushPageOffset:u?m(e.event):void 0})}))})),z(q(n),"handleBrushStart",(function(e){var t=n.props,r=t.onBrushStart,a=t.left,i=t.top,o=t.inheritedMargin;if(r){var u=null!=o&&o.left?o.left:0,s=null!=o&&o.top?o.top:0;r({x:(e.x||0)+e.dx-a-u,y:(e.y||0)+e.dy-i-s})}})),z(q(n),"handleDragMove",(function(e){var t=n.props,r=t.left,a=t.top,i=t.inheritedMargin,o=t.useWindowMoveEvents;if(e.isDragging&&!o){var u=(null==i?void 0:i.left)||0,s=(null==i?void 0:i.top)||0,l={x:(e.x||0)+e.dx-r-u,y:(e.y||0)+e.dy-a-s};n.updateBrush((function(e){var t=e.start,r=n.getExtent(t,l);return L({},e,{end:l,extent:r})}))}})),z(q(n),"handleDragEnd",(function(){var e=n.props,t=e.onBrushEnd,r=e.resetOnEnd;e.useWindowMoveEvents||n.updateBrush((function(e){var a=e.extent,i=L({},e,{start:{x:a.x0,y:a.y0},end:{x:a.x1,y:a.y1},isBrushing:!1,brushingType:void 0,activeHandle:null});return t&&t(i),r&&n.reset(),i}))})),z(q(n),"getBrushWidth",(function(){var e=n.state.extent,t=e.x0,r=e.x1;return Math.max(Math.max(t,r)-Math.min(t,r),0)})),z(q(n),"getBrushHeight",(function(){var e=n.state.extent,t=e.y1,r=e.y0;return Math.max(Math.max(r,t)-Math.min(r,t),0)})),z(q(n),"handles",(function(){var e=n.props.handleSize,t=n.state.extent,r=t.x0,a=t.x1,i=t.y0,o=t.y1,u=e/2,s=n.getBrushWidth(),l=n.getBrushHeight();return{top:{x:r-u,y:i-u,height:e,width:s+e},bottom:{x:r-u,y:o-u,height:e,width:s+e},right:{x:a-u,y:i-u,height:l+e,width:e},left:{x:r-u,y:i-u,height:l+e,width:e}}})),z(q(n),"corners",(function(){var e=n.props.handleSize,t=n.state.extent,r=t.x0,a=t.x1,i=t.y0,o=t.y1,u=e/2,s=e,l=e;return{topLeft:{x:Math.min(r,a)-u,y:Math.min(i,o)-u,width:s,height:l},topRight:{x:Math.max(r,a)-u,y:Math.min(i,o)-u,width:s,height:l},bottomLeft:{x:Math.min(r,a)-u,y:Math.max(i,o)-u,width:s,height:l},bottomRight:{x:Math.max(r,a)-u,y:Math.max(i,o)-u,width:s,height:l}}})),z(q(n),"updateBrush",(function(e){var t=n.props.onChange;n.setState(e,(function(){t&&t(n.state)}))})),z(q(n),"reset",(function(){var e=n.props,t=e.width,r=e.height;n.updateBrush((function(){return{start:{x:0,y:0},end:{x:0,y:0},extent:{x0:-1,x1:-1,y0:-1,y1:-1},bounds:{x0:0,x1:t,y0:0,y1:r},isBrushing:!1,brushPageOffset:void 0,activeHandle:null,brushingType:void 0}}))})),z(q(n),"handleBrushingTypeChange",(function(e,t){n.updateBrush((function(n){var r=L({},n,{brushingType:e,isBrushing:void 0!==e});return(t||void 0===e)&&(r.brushPageOffset=t),r}))}));var r=t.initialBrushPosition,a=r?n.getExtent(r.start,r.end):{x0:-1,x1:-1,y0:-1,y1:-1};return n.state={start:{x:Math.max(0,a.x0),y:Math.max(0,a.y0)},end:{x:Math.max(0,a.x1),y:Math.max(0,a.y1)},extent:a,bounds:{x0:0,x1:n.props.width,y0:0,y1:n.props.height},isBrushing:!1,brushingType:void 0,activeHandle:null},n}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,W(t,n);var a=r.prototype;return a.componentDidUpdate=function(e){var t=this;this.props.width===e.width&&this.props.height===e.height||this.setState((function(){return{bounds:{x0:0,x1:t.props.width,y0:0,y1:t.props.height}}}))},a.componentDidMount=function(){this.props.useWindowMoveEvents&&(window.addEventListener("mouseup",this.handleWindowPointerUp),window.addEventListener("mousemove",this.handleWindowPointerMove))},a.componentWillUnmount=function(){this.props.useWindowMoveEvents&&(window.removeEventListener("mouseup",this.handleWindowPointerUp),window.removeEventListener("mousemove",this.handleWindowPointerMove))},a.render=function(){var e=this,t=this.state,n=t.start,r=t.end,a=this.props,i=a.top,u=a.left,s=a.width,l=a.height,d=a.onMouseLeave,h=a.onMouseUp,c=a.onMouseMove,g=a.onBrushEnd,y=a.onClick,v=a.resizeTriggerAreas,m=a.selectedBoxStyle,b=a.disableDraggingSelection,M=a.clickSensitivity,O=a.useWindowMoveEvents,w=this.state.brushingType,E=this.handles(),B=this.corners(),D=this.getBrushWidth(),P=this.getBrushHeight(),C=new Set(v);return o.a.createElement(f.a,{className:"visx-brush",top:i,left:u},o.a.createElement(x.a,{width:s,height:l,resetOnStart:!0,onDragStart:this.handleDragStart,onDragMove:this.handleDragMove,onDragEnd:this.handleDragEnd,isDragging:O?"select"===w:void 0},(function(t){var n=t.dragStart,r=t.isDragging,a=t.dragMove,i=t.dragEnd;return o.a.createElement(p.a,{className:"visx-brush-overlay",fill:"transparent",x:0,y:0,width:s,height:l,onDoubleClick:function(){return e.reset()},onClick:function(t){var n=e.mouseUpTime-e.mouseDownTime;y&&n<M&&y(t)},onPointerDown:function(t){e.mouseDownTime=Date.now(),n(t)},onPointerLeave:function(e){d&&d(e)},onPointerMove:function(e){!r&&c&&c(e),r&&a(e)},onPointerUp:function(t){e.mouseUpTime=Date.now(),h&&h(t),i(t)},style:H})})),n&&r&&o.a.createElement(A,{updateBrush:this.updateBrush,width:D,height:P,stageWidth:s,stageHeight:l,brush:this.state,disableDraggingSelection:b,onBrushEnd:g,onBrushStart:this.handleBrushStart,onMouseLeave:d,onMouseMove:c,onMouseUp:h,onMoveSelectionChange:this.handleBrushingTypeChange,onClick:y,selectedBoxStyle:m,isControlled:O,isDragInProgress:O?"move"===w:void 0}),n&&r&&Object.keys(E).filter((function(e){return C.has(e)})).map((function(t){var n=E[t];return n&&o.a.createElement(S,{key:"handle-"+t,type:t,handle:n,stageWidth:s,stageHeight:l,updateBrush:e.updateBrush,brush:e.state,onBrushStart:e.handleBrushStart,onBrushEnd:g,isControlled:O,isDragInProgress:O?w===t:void 0,onBrushHandleChange:e.handleBrushingTypeChange})})),n&&r&&Object.keys(B).filter((function(e){return C.has(e)})).map((function(t){var n=B[t];return n&&o.a.createElement(j,{key:"corner-"+t,type:t,brush:e.state,updateBrush:e.updateBrush,stageWidth:s,stageHeight:l,corner:n,onBrushEnd:g})})))},r}(o.a.Component);function V(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function U(e,t){return(U=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}z(N,"propTypes",{brushDirection:c.a.oneOf(["horizontal","vertical","both"]),width:c.a.number.isRequired,height:c.a.number.isRequired,left:c.a.number.isRequired,top:c.a.number.isRequired,onChange:c.a.func,handleSize:c.a.number,resizeTriggerAreas:c.a.array,onBrushStart:c.a.func,onBrushEnd:c.a.func,onMouseLeave:c.a.func,onMouseUp:c.a.func,onMouseMove:c.a.func,onClick:c.a.func,clickSensitivity:c.a.number,disableDraggingSelection:c.a.bool,resetOnEnd:c.a.bool,useWindowMoveEvents:c.a.bool}),z(N,"defaultProps",{brushDirection:"both",inheritedMargin:{left:0,top:0,right:0,bottom:0},onChange:null,handleSize:4,resizeTriggerAreas:["left","right"],onBrushStart:null,onBrushEnd:null,onMouseLeave:null,onMouseUp:null,onMouseMove:null,onClick:null,disableDraggingSelection:!1,clickSensitivity:200,resetOnEnd:!1,initialBrushPosition:null,useWindowMoveEvents:!1});var Y=function(e){var t,n;function r(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return I(V(t=e.call.apply(e,[this].concat(r))||this),"handleChange",(function(e){var n=t.props.onChange;if(n){var r=e.extent.x0;if("undefined"===typeof r||r<0)n(null);else n(t.convertRangeToDomain(e))}})),I(V(t),"handleBrushStart",(function(e){var n=t.props.onBrushStart;if(n){var r=e.x,a=e.y,i=t.props,o=i.xScale,u=i.yScale,s=y(o,r),l=y(u,a);n({x:"invert"in o&&"undefined"!==typeof o.invert?s:o.domain()[s],y:"invert"in u&&"undefined"!==typeof u.invert?l:u.domain()[l]})}})),I(V(t),"handleBrushEnd",(function(e){var n=t.props.onBrushEnd;if(n){var r=e.extent.x0;if("undefined"===typeof r||r<0)n(null);else n(t.convertRangeToDomain(e))}})),t}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,U(t,n);var a=r.prototype;return a.convertRangeToDomain=function(e){var t=this.props,n=t.xScale,r=t.yScale,a=e.extent,i=a.x0,o=a.x1,u=a.y0,s=a.y1,l=v(n,i||0,o||0,2),d=v(r,u||0,s||0,2);return{x0:l.start||0,x1:l.end||0,xValues:l.values,y0:d.start||0,y1:d.end||0,yValues:d.values}},a.render=function(){var e,t,n,r,a=this.props,i=a.xScale,u=a.yScale,s=a.height,l=a.width,d=a.margin,h=a.brushDirection,c=a.initialBrushPosition,f=a.innerRef,p=a.resizeTriggerAreas,g=a.brushRegion,x=a.yAxisOrientation,y=a.xAxisOrientation,v=a.selectedBoxStyle,m=a.disableDraggingSelection,b=a.resetOnEnd,M=a.onMouseLeave,O=a.onMouseMove,w=a.onClick,S=a.handleSize,E=a.useWindowMoveEvents;if(!i||!u)return null;var B=null!=d&&d.left?d.left:0,D=null!=d&&d.top?d.top:0,P=null!=d&&d.right?d.right:0,j=null!=d&&d.bottom?d.bottom:0;return"chart"===g?(n=0,r=0,e=l,t=s):"yAxis"===g?(r=0,t=s,"right"===x?(n=l,e=P):(n=-B,e=B)):(n=0,e=l,"bottom"===y?(r=s,t=j):(r=-D,t=D)),o.a.createElement(N,{width:e,height:t,left:n,top:r,brushDirection:h,disableDraggingSelection:m,handleSize:S,inheritedMargin:d,initialBrushPosition:c,ref:f,resetOnEnd:b,resizeTriggerAreas:p,selectedBoxStyle:v,onBrushEnd:this.handleBrushEnd,onBrushStart:this.handleBrushStart,onChange:this.handleChange,onClick:w,onMouseLeave:M,onMouseMove:O,useWindowMoveEvents:E})},r}(i.Component);I(Y,"propTypes",{height:c.a.number,width:c.a.number,onChange:c.a.func,onBrushEnd:c.a.func,brushDirection:c.a.oneOf(["vertical","horizontal","both"]),resizeTriggerAreas:c.a.array,brushRegion:c.a.oneOf(["xAxis","yAxis","chart"]),yAxisOrientation:c.a.oneOf(["left","right"]),xAxisOrientation:c.a.oneOf(["top","bottom"]),disableDraggingSelection:c.a.bool,resetOnEnd:c.a.bool,handleSize:c.a.number,useWindowMoveEvents:c.a.bool}),I(Y,"defaultProps",{xScale:null,yScale:null,onChange:null,height:0,width:0,selectedBoxStyle:{fill:"steelblue",fillOpacity:.2,stroke:"steelblue",strokeWidth:1,strokeOpacity:.8},margin:{top:0,left:0,right:0,bottom:0},handleSize:4,brushDirection:"horizontal",initialBrushPosition:null,resizeTriggerAreas:["left","right"],brushRegion:"chart",yAxisOrientation:"right",xAxisOrientation:"bottom",onBrushStart:null,onBrushEnd:null,disableDraggingSelection:!1,resetOnEnd:!1,onMouseMove:null,onMouseLeave:null,onClick:null,useWindowMoveEvents:!1});var K=Y,F=n("a49c"),J=n("Cf/J"),X=n("ue4z"),G=n("9Jhr"),Q=n("a7GN"),$=n("KRsa"),Z=n("EbDF"),ee={textAnchor:"middle",fontFamily:"Arial",fontSize:10,fill:"#fff"},te={dx:"-0.25em",dy:"0.25em",fontFamily:"Arial",fontSize:10,textAnchor:"end",fill:"#fff"};function ne(e){var t=e.data,n=e.gradientColor,r=e.width,i=e.yMax,o=e.margin,u=e.xScale,s=e.yScale,l=e.hideBottomAxis,d=void 0!==l&&l,h=e.hideLeftAxis,c=void 0!==h&&h,p=e.top,g=e.left,x=e.children;return r<10?null:Object(a.jsxs)(f.a,{left:g||o.left,top:p||o.top,children:[Object(a.jsx)(J.a,{id:"gradient",from:n,fromOpacity:1,to:n,toOpacity:.2}),Object(a.jsx)(G.a,{data:t,x:function(e){return u(function(e){return new Date(e.date)}(e))||0},y:function(e){return s(function(e){return e.close}(e))||0},yScale:s,strokeWidth:1,stroke:"url(#gradient)",fill:"url(#gradient)",curve:Z.a}),!d&&Object(a.jsx)(Q.a,{top:i,scale:u,numTicks:r>520?10:5,stroke:"#fff",tickStroke:"#fff",tickLabelProps:function(){return ee}}),!c&&Object(a.jsx)($.a,{scale:s,numTicks:5,stroke:"#fff",tickStroke:"#fff",tickLabelProps:function(){return te}}),x]})}try{ne.displayName="AreaChart",ne.__docgenInfo={description:"",displayName:"AreaChart",props:{data:{defaultValue:null,description:"",name:"data",required:!0,type:{name:"AppleStock[]"}},gradientColor:{defaultValue:null,description:"",name:"gradientColor",required:!0,type:{name:"string"}},xScale:{defaultValue:null,description:"",name:"xScale",required:!0,type:{name:"ValueOf<ScaleTypeToD3Scale<number, any, any>>"}},yScale:{defaultValue:null,description:"",name:"yScale",required:!0,type:{name:"ValueOf<ScaleTypeToD3Scale<number, any, any>>"}},width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},yMax:{defaultValue:null,description:"",name:"yMax",required:!0,type:{name:"number"}},margin:{defaultValue:null,description:"",name:"margin",required:!0,type:{name:"{ top: number; right: number; bottom: number; left: number; }"}},hideBottomAxis:{defaultValue:{value:!1},description:"",name:"hideBottomAxis",required:!1,type:{name:"boolean | undefined"}},hideLeftAxis:{defaultValue:{value:!1},description:"",name:"hideLeftAxis",required:!1,type:{name:"boolean | undefined"}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"number | undefined"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"number | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-brush/AreaChart.tsx#AreaChart"]={docgenInfo:ne.__docgenInfo,name:"AreaChart",path:"src/sandboxes/visx-brush/AreaChart.tsx#AreaChart"})}catch(fe){}function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ie=d.a.slice(1e3),oe={top:10,bottom:15,left:50,right:20},ue="#f6acc8",se="#584153",le={fill:"url(#".concat("brush_pattern",")"),stroke:"white"},de=function(e){return new Date(e.date)},he=function(e){return e.close};function ce(e){var t=e.compact,n=void 0!==t&&t,r=e.width,o=e.height,l=e.margin,d=void 0===l?{top:20,left:50,bottom:20,right:20}:l,h=Object(i.useRef)(null),c=Object(i.useState)(ie),f=c[0],p=c[1],g=o-d.top-d.bottom,x=n?15:40,y=.8*g-x,v=g-y-30,m=Math.max(r-d.left-d.right,0),b=Math.max(y,0),M=Math.max(r-oe.left-oe.right,0),O=Math.max(v-oe.top-oe.bottom,0),w=Object(i.useMemo)((function(){return Object(u.a)({range:[0,m],domain:Object(X.b)(f,de)})}),[m,f]),S=Object(i.useMemo)((function(){return Object(s.a)({range:[b,0],domain:[0,Object(X.c)(f,he)||0],nice:!0})}),[b,f]),E=Object(i.useMemo)((function(){return Object(u.a)({range:[0,M],domain:Object(X.b)(ie,de)})}),[M]),B=Object(i.useMemo)((function(){return Object(s.a)({range:[O,0],domain:[0,Object(X.c)(ie,he)||0],nice:!0})}),[O]),D=Object(i.useMemo)((function(){return{start:{x:E(de(ie[50]))},end:{x:E(de(ie[100]))}}}),[E]);return Object(a.jsxs)("div",{children:[Object(a.jsxs)("svg",{width:r,height:o,children:[Object(a.jsx)(J.a,{id:"brush_gradient",from:se,to:"#af8baf",rotate:45}),Object(a.jsx)("rect",{x:0,y:0,width:r,height:o,fill:"url(#".concat("brush_gradient",")"),rx:14}),Object(a.jsx)(ne,{hideBottomAxis:n,data:f,width:r,margin:ae(ae({},d),{},{bottom:x}),yMax:b,xScale:w,yScale:S,gradientColor:"#af8baf"}),Object(a.jsxs)(ne,{hideBottomAxis:!0,hideLeftAxis:!0,data:ie,width:r,yMax:O,xScale:E,yScale:B,margin:oe,top:y+x+d.top,gradientColor:"#af8baf",children:[Object(a.jsx)(F.a,{id:"brush_pattern",height:8,width:8,stroke:ue,strokeWidth:1,orientation:["diagonal"]}),Object(a.jsx)(K,{xScale:E,yScale:B,width:M,height:O,margin:oe,handleSize:8,innerRef:h,resizeTriggerAreas:["left","right"],brushDirection:"horizontal",initialBrushPosition:D,onChange:function(e){if(e){var t=e.x0,n=e.x1,r=e.y0,a=e.y1,i=ie.filter((function(e){var i=de(e).getTime(),o=he(e);return i>t&&i<n&&o>r&&o<a}));p(i)}},onClick:function(){return p(ie)},selectedBoxStyle:le,useWindowMoveEvents:!0})]})]}),Object(a.jsx)("button",{onClick:function(){(null===h||void 0===h?void 0:h.current)&&(p(ie),h.current.reset())},children:"Clear"}),"\xa0",Object(a.jsx)("button",{onClick:function(){if(null===h||void 0===h?void 0:h.current){h.current.updateBrush((function(e){var t=h.current.getExtent(D.start,D.end);return ae(ae({},e),{},{start:{y:t.y0,x:t.x0},end:{y:t.y1,x:t.x1},extent:t})}))}},children:"Reset"})]})}t.c=ce;try{ce.displayName="BrushChart",ce.__docgenInfo={description:"",displayName:"BrushChart",props:{width:{defaultValue:null,description:"",name:"width",required:!0,type:{name:"number"}},height:{defaultValue:null,description:"",name:"height",required:!0,type:{name:"number"}},margin:{defaultValue:{value:"{\n    top: 20,\n    left: 50,\n    bottom: 20,\n    right: 20,\n  }"},description:"",name:"margin",required:!1,type:{name:"{ top: number; right: number; bottom: number; left: number; } | undefined"}},compact:{defaultValue:{value:!1},description:"",name:"compact",required:!1,type:{name:"boolean | undefined"}}}},"undefined"!==typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/sandboxes/visx-brush/Example.tsx#BrushChart"]={docgenInfo:ce.__docgenInfo,name:"BrushChart",path:"src/sandboxes/visx-brush/Example.tsx#BrushChart"})}catch(fe){}},KRsa:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),u=n("5Nbk"),s=n("pn27"),l=["axisClassName","labelOffset","tickLabelProps","tickLength"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(){return{dx:"-0.25em",dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"end"}};function c(e){var t=e.axisClassName,n=e.labelOffset,r=void 0===n?36:n,i=e.tickLabelProps,c=void 0===i?h:i,f=e.tickLength,p=void 0===f?8:f,g=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);return a.a.createElement(u.a,d({axisClassName:o()("visx-axis-left",t),labelOffset:r,orientation:s.a.left,tickLabelProps:c,tickLength:p},g))}},Kvgx:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){var i,o,u,s;void 0===n&&(n={});if(t.length>0)return(0,a.default)(e,t);return{x:(0,r.default)(e.x,null!=(i=n.xMin)?i:-1/0,null!=(o=n.xMax)?o:1/0),y:(0,r.default)(e.y,null!=(u=n.yMin)?u:-1/0,null!=(s=n.yMax)?s:1/0)}};var r=i(n("VS8C")),a=i(n("Csc1"));function i(e){return e&&e.__esModule?e:{default:e}}},LpNs:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=void 0===e?{}:e,n=t.resetOnStart,l=void 0!==n&&n,h=t.snapToPointer,c=void 0===h||h,f=t.onDragEnd,p=t.onDragMove,g=t.onDragStart,x=t.x,y=t.y,v=t.dx,m=t.dy,b=t.isDragging,M=t.restrict,O=void 0===M?{}:M,w=t.restrictToPath,S=(0,r.useRef)({x:x,y:y,dx:v,dy:m}),E=(0,o.default)({x:x,y:y,dx:null!=v?v:0,dy:null!=m?m:0,isDragging:!1}),B=E[0],D=E[1],P=(0,r.useState)(new a.Point({x:0,y:0})),j=P[0],C=P[1];(0,r.useEffect)((function(){S.current.x===x&&S.current.y===y&&S.current.dx===v&&S.current.dy===m||(S.current={x:x,y:y,dx:v,dy:m},D((function(e){return d({},e,{x:x,y:y,dx:null!=v?v:0,dy:null!=m?m:0})})))})),(0,r.useEffect)((function(){void 0!==b&&B.isDragging!==b&&D((function(e){return d({},e,{isDragging:b})}))}),[B.isDragging,b,D]);var k=(0,s.default)(w),R=(0,r.useCallback)((function(e){e.persist(),D((function(t){var n=t.x,r=void 0===n?0:n,o=t.y,s=void 0===o?0:o,d=t.dx,h=t.dy,f=new a.Point({x:(r||0)+d,y:(s||0)+h}),p=(0,i.localPoint)(e)||new a.Point({x:0,y:0}),g=c?p:f,x=(0,u.default)(g,k,O);return C((0,a.subtractPoints)(f,p)),{isDragging:!0,dx:l?0:t.dx,dy:l?0:t.dy,x:l?x.x:x.x-t.dx,y:l?x.y:x.y-t.dy}}),g&&function(t){g(d({},t,{event:e}))})}),[g,l,O,k,D,c]),_=(0,r.useCallback)((function(e){e.persist(),D((function(t){if(!t.isDragging)return t;var n=t.x,r=void 0===n?0:n,o=t.y,s=void 0===o?0:o,l=(0,i.localPoint)(e)||new a.Point({x:0,y:0}),h=c?l:(0,a.sumPoints)(l,j),f=(0,u.default)(h,k,O);return d({},t,{dx:f.x-r,dy:f.y-s})}),p&&function(t){t.isDragging&&p(d({},t,{event:e}))})}),[D,p,c,j,k,O]),T=(0,r.useCallback)((function(e){e.persist(),D((function(e){return d({},e,{isDragging:!1})}),f&&function(t){f(d({},t,{event:e}))})}),[f,D]);return d({},B,{dragEnd:T,dragMove:_,dragStart:R})};var r=n("ERkP"),a=n("m7nO"),i=n("MiVw"),o=l(n("NzS/")),u=l(n("Kvgx")),s=l(n("Mpzh"));function l(e){return e&&e.__esModule?e:{default:e}}function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}},MiVw:function(e,t,n){"use strict";n.r(t);var r=n("jpI8");n.d(t,"localPoint",(function(){return r.a}));var a=n("VB+g");n.d(t,"touchPoint",(function(){return a.a}))},Mpzh:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){return(0,r.useMemo)((function(){if(!e)return[];var t=e.getCTM()||new DOMMatrix;return function(e,t,n){void 0===n&&(n=1);if(!e)return[];for(var r=[],a=e.getTotalLength(),i=0;i<=a;i+=n){var o=e.getPointAtLength(i).matrixTransform(t);r.push(o)}return r}(e,t)}),[null==e?void 0:e.getTotalLength()])};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n("ERkP"));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}},MrGM:function(e){e.exports=JSON.parse('{"name":"@visx/demo-brush","description":"Standalone visx brush demo.","main":"index.tsx","private":true,"dependencies":{"@babel/runtime":"^7.8.4","@types/react":"^18","@types/react-dom":"^18","@visx/axis":"latest","@visx/brush":"latest","@visx/curve":"latest","@visx/gradient":"latest","@visx/group":"latest","@visx/mock-data":"latest","@visx/pattern":"latest","@visx/responsive":"latest","@visx/scale":"latest","@visx/shape":"latest","d3-array":"^2.4.0","react":"^18","react-dom":"^18","react-scripts-ts":"3.1.0","typescript":"^3"},"keywords":["visualization","d3","react","visx","brush","interaction"]}')},"NzS/":function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e){var t=(0,r.useState)(e),n=t[0],a=t[1],i=(0,r.useRef)(null),o=(0,r.useCallback)((function(e,t){i.current=t||null,a(e)}),[a]);return(0,r.useLayoutEffect)((function(){i.current&&(i.current(n),i.current=null)}),[n]),[n,o]};var r=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var n=a(t);if(n&&n.has(e))return n.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var u=i?Object.getOwnPropertyDescriptor(e,o):null;u&&(u.get||u.set)?Object.defineProperty(r,o,u):r[o]=e[o]}r.default=e,n&&n.set(e,r);return r}(n("ERkP"));function a(e){if("function"!==typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(a=function(e){return e?n:t})(e)}},VS8C:function(e,t,n){"use strict";t.__esModule=!0,t.default=function(e,t,n){return Math.min(Math.max(e,t),n)}},a7GN:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("ERkP"),a=n.n(r),i=n("O94r"),o=n.n(i),u=n("5Nbk"),s=n("pn27"),l=["axisClassName","labelOffset","tickLabelProps","tickLength"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(){return{dy:"0.25em",fill:"#222",fontFamily:"Arial",fontSize:10,textAnchor:"middle"}};function c(e){var t=e.axisClassName,n=e.labelOffset,r=void 0===n?8:n,i=e.tickLabelProps,c=void 0===i?h:i,f=e.tickLength,p=void 0===f?8:f,g=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,l);return a.a.createElement(u.a,d({axisClassName:o()("visx-axis-bottom",t),labelOffset:r,orientation:s.a.bottom,tickLabelProps:c,tickLength:p},g))}},wQia:function(e,t,n){"use strict";t.__esModule=!0,t.default=u;var r=o(n("aWzz")),a=o(n("ERkP")),i=o(n("LpNs"));function o(e){return e&&e.__esModule?e:{default:e}}function u(e){var t=e.captureDragArea,n=void 0===t||t,r=e.snapToPointer,o=void 0===r||r,u=e.children,s=e.dx,l=e.dy,d=e.height,h=e.onDragEnd,c=e.onDragMove,f=e.onDragStart,p=e.resetOnStart,g=e.width,x=e.x,y=e.y,v=e.isDragging,m=e.restrict,b=e.restrictToPath,M=(0,i.default)({resetOnStart:p,snapToPointer:o,onDragEnd:h,onDragMove:c,onDragStart:f,x:x,y:y,dx:s,dy:l,isDragging:v,restrict:m,restrictToPath:b});return a.default.createElement(a.default.Fragment,null,M.isDragging&&n&&a.default.createElement("rect",{width:g,height:d,onPointerDown:M.dragStart,onPointerMove:M.dragMove,onPointerUp:M.dragEnd,fill:"transparent"}),u(M))}u.propTypes={children:r.default.func.isRequired,width:r.default.number.isRequired,height:r.default.number.isRequired,captureDragArea:r.default.bool,isDragging:r.default.bool}}}]);
_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[133],{"67po":function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=t("uKU/"),r=t("xx0A"),o=Object(r.b)("domain","range","reverse","clamp","interpolate","nice","round","zero");function i(n){return o(Object(a.a)(),n)}},HO86:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t("lEbO");function r(n,e){if(n){if("string"===typeof n)return Object(a.a)(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Object(a.a)(n,e):void 0}}},Saat:function(n,e,t){"use strict";t.r(e);var a=t("jg1C"),r=(t("ERkP"),t("6wy5")),o=t("dqFU"),i=t("zp3m");e.default=function(){return Object(a.jsx)(r.a,{component:o.a,title:"XYChart",codeSandboxDirectoryName:"visx-xychart",packageJson:i,children:"import React from 'react';\nimport { CityTemperature } from '@visx/mock-data/lib/mocks/cityTemperature';\n\nimport ExampleControls from './ExampleControls';\nimport CustomChartBackground from './CustomChartBackground';\n\nexport type XYChartProps = {\n  width: number;\n  height: number;\n};\n\ntype City = 'San Francisco' | 'New York' | 'Austin';\n\nexport default function Example({ height }: XYChartProps) {\n  return (\n    <ExampleControls>\n      {({\n        accessors,\n        animationTrajectory,\n        annotationDataKey,\n        annotationDatum,\n        annotationLabelPosition,\n        annotationType,\n        colorAccessorFactory,\n        config,\n        curve,\n        data,\n        editAnnotationLabelPosition,\n        numTicks,\n        renderAreaSeries,\n        renderAreaStack,\n        renderBarGroup,\n        renderBarSeries,\n        renderBarStack,\n        renderGlyph,\n        renderGlyphSeries,\n        enableTooltipGlyph,\n        renderTooltipGlyph,\n        renderHorizontally,\n        renderLineSeries,\n        setAnnotationDataIndex,\n        setAnnotationDataKey,\n        setAnnotationLabelPosition,\n        sharedTooltip,\n        showGridColumns,\n        showGridRows,\n        showHorizontalCrosshair,\n        showTooltip,\n        showVerticalCrosshair,\n        snapTooltipToDatumX,\n        snapTooltipToDatumY,\n        stackOffset,\n        theme,\n        xAxisOrientation,\n        yAxisOrientation,\n\n        // components are animated or not depending on selection\n        Annotation,\n        AreaSeries,\n        AreaStack,\n        Axis,\n        BarGroup,\n        BarSeries,\n        BarStack,\n        GlyphSeries,\n        Grid,\n        LineSeries,\n        AnnotationCircleSubject,\n        AnnotationConnector,\n        AnnotationLabel,\n        AnnotationLineSubject,\n        Tooltip,\n        XYChart,\n      }) => (\n        <XYChart\n          theme={theme}\n          xScale={config.x}\n          yScale={config.y}\n          height={Math.min(400, height)}\n          captureEvents={!editAnnotationLabelPosition}\n          onPointerUp={(d) => {\n            setAnnotationDataKey(d.key as 'New York' | 'San Francisco' | 'Austin');\n            setAnnotationDataIndex(d.index);\n          }}\n        >\n          <CustomChartBackground />\n          <Grid\n            key={`grid-${animationTrajectory}`} // force animate on update\n            rows={showGridRows}\n            columns={showGridColumns}\n            animationTrajectory={animationTrajectory}\n            numTicks={numTicks}\n          />\n          {renderBarStack && (\n            <BarStack offset={stackOffset}>\n              <BarSeries\n                dataKey=\"New York\"\n                data={data}\n                xAccessor={accessors.x['New York']}\n                yAccessor={accessors.y['New York']}\n              />\n              <BarSeries\n                dataKey=\"San Francisco\"\n                data={data}\n                xAccessor={accessors.x['San Francisco']}\n                yAccessor={accessors.y['San Francisco']}\n              />\n              <BarSeries\n                dataKey=\"Austin\"\n                data={data}\n                xAccessor={accessors.x.Austin}\n                yAccessor={accessors.y.Austin}\n              />\n            </BarStack>\n          )}\n          {renderBarGroup && (\n            <BarGroup>\n              <BarSeries\n                dataKey=\"New York\"\n                data={data}\n                xAccessor={accessors.x['New York']}\n                yAccessor={accessors.y['New York']}\n                colorAccessor={colorAccessorFactory('New York')}\n              />\n              <BarSeries\n                dataKey=\"San Francisco\"\n                data={data}\n                xAccessor={accessors.x['San Francisco']}\n                yAccessor={accessors.y['San Francisco']}\n                colorAccessor={colorAccessorFactory('San Francisco')}\n              />\n              <BarSeries\n                dataKey=\"Austin\"\n                data={data}\n                xAccessor={accessors.x.Austin}\n                yAccessor={accessors.y.Austin}\n                colorAccessor={colorAccessorFactory('Austin')}\n              />\n            </BarGroup>\n          )}\n          {renderBarSeries && (\n            <BarSeries\n              dataKey=\"New York\"\n              data={data}\n              xAccessor={accessors.x['New York']}\n              yAccessor={accessors.y['New York']}\n              colorAccessor={colorAccessorFactory('New York')}\n            />\n          )}\n          {renderAreaSeries && (\n            <>\n              <AreaSeries\n                dataKey=\"Austin\"\n                data={data}\n                xAccessor={accessors.x.Austin}\n                yAccessor={accessors.y.Austin}\n                fillOpacity={0.4}\n                curve={curve}\n              />\n              <AreaSeries\n                dataKey=\"New York\"\n                data={data}\n                xAccessor={accessors.x['New York']}\n                yAccessor={accessors.y['New York']}\n                fillOpacity={0.4}\n                curve={curve}\n              />\n              <AreaSeries\n                dataKey=\"San Francisco\"\n                data={data}\n                xAccessor={accessors.x['San Francisco']}\n                yAccessor={accessors.y['San Francisco']}\n                fillOpacity={0.4}\n                curve={curve}\n              />\n            </>\n          )}\n          {renderAreaStack && (\n            <AreaStack curve={curve} offset={stackOffset} renderLine={stackOffset !== 'wiggle'}>\n              <AreaSeries\n                dataKey=\"Austin\"\n                data={data}\n                xAccessor={accessors.x.Austin}\n                yAccessor={accessors.y.Austin}\n                fillOpacity={0.4}\n              />\n              <AreaSeries\n                dataKey=\"New York\"\n                data={data}\n                xAccessor={accessors.x['New York']}\n                yAccessor={accessors.y['New York']}\n                fillOpacity={0.4}\n              />\n              <AreaSeries\n                dataKey=\"San Francisco\"\n                data={data}\n                xAccessor={accessors.x['San Francisco']}\n                yAccessor={accessors.y['San Francisco']}\n                fillOpacity={0.4}\n              />\n            </AreaStack>\n          )}\n          {renderLineSeries && (\n            <>\n              <LineSeries\n                dataKey=\"Austin\"\n                data={data}\n                xAccessor={accessors.x.Austin}\n                yAccessor={accessors.y.Austin}\n                curve={curve}\n              />\n              {!renderBarSeries && (\n                <LineSeries\n                  dataKey=\"New York\"\n                  data={data}\n                  xAccessor={accessors.x['New York']}\n                  yAccessor={accessors.y['New York']}\n                  curve={curve}\n                />\n              )}\n              <LineSeries\n                dataKey=\"San Francisco\"\n                data={data}\n                xAccessor={accessors.x['San Francisco']}\n                yAccessor={accessors.y['San Francisco']}\n                curve={curve}\n              />\n            </>\n          )}\n          {renderGlyphSeries && (\n            <GlyphSeries\n              dataKey=\"San Francisco\"\n              data={data}\n              xAccessor={accessors.x['San Francisco']}\n              yAccessor={accessors.y['San Francisco']}\n              renderGlyph={renderGlyph}\n              colorAccessor={colorAccessorFactory('San Francisco')}\n            />\n          )}\n          <Axis\n            key={`time-axis-${animationTrajectory}-${renderHorizontally}`}\n            orientation={renderHorizontally ? yAxisOrientation : xAxisOrientation}\n            numTicks={numTicks}\n            animationTrajectory={animationTrajectory}\n          />\n          <Axis\n            key={`temp-axis-${animationTrajectory}-${renderHorizontally}`}\n            label={\n              stackOffset == null\n                ? 'Temperature (\xb0F)'\n                : stackOffset === 'expand'\n                ? 'Fraction of total temperature'\n                : ''\n            }\n            orientation={renderHorizontally ? xAxisOrientation : yAxisOrientation}\n            numTicks={numTicks}\n            animationTrajectory={animationTrajectory}\n            // values don't make sense in stream graph\n            tickFormat={stackOffset === 'wiggle' ? () => '' : undefined}\n          />\n          {annotationDataKey && annotationDatum && (\n            <Annotation\n              dataKey={annotationDataKey}\n              datum={annotationDatum}\n              dx={annotationLabelPosition.dx}\n              dy={annotationLabelPosition.dy}\n              editable={editAnnotationLabelPosition}\n              canEditSubject={false}\n              onDragEnd={({ dx, dy }) => setAnnotationLabelPosition({ dx, dy })}\n            >\n              <AnnotationConnector />\n              {annotationType === 'circle' ? (\n                <AnnotationCircleSubject />\n              ) : (\n                <AnnotationLineSubject />\n              )}\n              <AnnotationLabel\n                title={annotationDataKey}\n                subtitle={`${annotationDatum.date}, ${annotationDatum[annotationDataKey]}\xb0F`}\n                width={135}\n                backgroundProps={{\n                  stroke: theme.gridStyles.stroke,\n                  strokeOpacity: 0.5,\n                  fillOpacity: 0.8,\n                }}\n              />\n            </Annotation>\n          )}\n          {showTooltip && (\n            <Tooltip<CityTemperature>\n              showHorizontalCrosshair={showHorizontalCrosshair}\n              showVerticalCrosshair={showVerticalCrosshair}\n              snapTooltipToDatumX={snapTooltipToDatumX}\n              snapTooltipToDatumY={snapTooltipToDatumY}\n              showDatumGlyph={(snapTooltipToDatumX || snapTooltipToDatumY) && !renderBarGroup}\n              showSeriesGlyphs={sharedTooltip && !renderBarGroup}\n              renderGlyph={enableTooltipGlyph ? renderTooltipGlyph : undefined}\n              renderTooltip={({ tooltipData, colorScale }) => (\n                <>\n                  {/** date */}\n                  {(tooltipData?.nearestDatum?.datum &&\n                    accessors.date(tooltipData?.nearestDatum?.datum)) ||\n                    'No date'}\n                  <br />\n                  <br />\n                  {/** temperatures */}\n                  {(\n                    (sharedTooltip\n                      ? Object.keys(tooltipData?.datumByKey ?? {})\n                      : [tooltipData?.nearestDatum?.key]\n                    ).filter((city) => city) as City[]\n                  ).map((city) => {\n                    const temperature =\n                      tooltipData?.nearestDatum?.datum &&\n                      accessors[renderHorizontally ? 'x' : 'y'][city](\n                        tooltipData?.nearestDatum?.datum,\n                      );\n\n                    return (\n                      <div key={city}>\n                        <em\n                          style={{\n                            color: colorScale?.(city),\n                            textDecoration:\n                              tooltipData?.nearestDatum?.key === city ? 'underline' : undefined,\n                          }}\n                        >\n                          {city}\n                        </em>{' '}\n                        {temperature == null || Number.isNaN(temperature)\n                          ? '\u2013'\n                          : `${temperature}\xb0 F`}\n                      </div>\n                    );\n                  })}\n                </>\n              )}\n            />\n          )}\n        </XYChart>\n      )}\n    </ExampleControls>\n  );\n}\n"})}},"VB+g":function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t("rkTo"),r=t("ZQHj");function o(){return(o=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(n[a]=t[a])}return n}).apply(this,arguments)}var i={x:0,y:0};function s(n,e){if(!n||!e)return null;var t=function(n){if(!n)return o({},i);if(Object(r.g)(n))return n.changedTouches.length>0?{x:n.changedTouches[0].clientX,y:n.changedTouches[0].clientY}:o({},i);if(Object(r.c)(n))return{x:n.clientX,y:n.clientY};var e=null==n?void 0:n.target,t=e&&"getBoundingClientRect"in e?e.getBoundingClientRect():null;return t?{x:t.x+t.width/2,y:t.y+t.height/2}:o({},i)}(e),s=Object(r.d)(n)?n.ownerSVGElement:n,c=Object(r.e)(s)?s.getScreenCTM():null;if(Object(r.f)(s)&&c){var u=s.createSVGPoint();return u.x=t.x,u.y=t.y,u=u.matrixTransform(c.inverse()),new a.a({x:u.x,y:u.y})}var l=n.getBoundingClientRect();return new a.a({x:t.x-l.left-n.clientLeft,y:t.y-l.top-n.clientTop})}},VFFr:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t("aWzz"),r=t.n(a),o=t("ERkP"),i=t.n(o);function s(n){var e=n.id,t=n.width,a=n.height,r=n.children;return i.a.createElement("defs",null,i.a.createElement("pattern",{id:e,width:t,height:a,patternUnits:"userSpaceOnUse"},r))}s.propTypes={id:r.a.string.isRequired,width:r.a.number.isRequired,height:r.a.number.isRequired,children:r.a.node.isRequired}},ZQHj:function(n,e,t){"use strict";function a(n){return!!n&&n instanceof Element}function r(n){return!!n&&(n instanceof SVGElement||"ownerSVGElement"in n)}function o(n){return!!n&&"createSVGPoint"in n}function i(n){return!!n&&"getScreenCTM"in n}function s(n){return!!n&&"changedTouches"in n}function c(n){return!!n&&"clientX"in n}function u(n){return!!n&&(n instanceof Event||"nativeEvent"in n&&n.nativeEvent instanceof Event)}t.d(e,"a",(function(){return a})),t.d(e,"d",(function(){return r})),t.d(e,"f",(function(){return o})),t.d(e,"e",(function(){return i})),t.d(e,"g",(function(){return s})),t.d(e,"c",(function(){return c})),t.d(e,"b",(function(){return u}))},Zbhd:function(n,e,t){"use strict";t.d(e,"a",(function(){return s}));var a=t("PB0s"),r=t("XAd9"),o=t("Cyas"),i=t("VBI3");function s(n,e,t,s){var c,u=Object(a.c)(n,e,t);switch((s=Object(r.a)(null==s?",f":s)).type){case"s":var l=Math.max(Math.abs(n),Math.abs(e));return null!=s.precision||isNaN(c=function(n,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(Object(o.a)(e)/3)))-Object(o.a)(Math.abs(n)))}(u,l))||(s.precision=c),Object(i.b)(s,l);case"":case"e":case"g":case"p":case"r":null!=s.precision||isNaN(c=function(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Object(o.a)(e)-Object(o.a)(n))+1}(u,Math.max(Math.abs(n),Math.abs(e))))||(s.precision=c-("e"===s.type));break;case"f":case"%":null!=s.precision||isNaN(c=function(n){return Math.max(0,-Object(o.a)(Math.abs(n)))}(u))||(s.precision=c-2*("%"===s.type))}return Object(i.a)(s)}},a49c:function(n,e,t){"use strict";t.d(e,"a",(function(){return f}));var a=t("aWzz"),r=t.n(a),o=t("ERkP"),i=t.n(o),s=t("O94r"),c=t.n(s),u=t("VFFr"),l="horizontal",d="vertical",y="diagonal",p="diagonalRightToLeft";function h(n){var e=n.height;switch(n.orientation){case l:return"M 0,"+e/2+" l "+e+",0";case y:return"M 0,"+e+" l "+e+","+-e+" M "+-e/4+","+e/4+" l "+e/2+","+-e/2+"\n             M "+3/4*e+","+5/4*e+" l "+e/2+","+-e/2;case p:return"M 0,0 l "+e+","+e+"\n        M "+-e/4+","+3/4*e+" l "+e/2+","+e/2+"\n        M "+3/4*e+","+-e/4+" l "+e/2+","+e/2;case d:default:return"M "+e/2+", 0 l 0, "+e}}function f(n){var e=n.id,t=n.width,a=n.height,r=n.stroke,o=n.strokeWidth,s=n.strokeDasharray,l=n.strokeLinecap,d=void 0===l?"square":l,y=n.shapeRendering,p=void 0===y?"auto":y,f=n.orientation,m=void 0===f?["vertical"]:f,A=n.background,b=n.className,x=Array.isArray(m)?m:[m];return i.a.createElement(u.a,{id:e,width:t,height:a},!!A&&i.a.createElement("rect",{className:c()("visx-pattern-line-background"),width:t,height:a,fill:A}),x.map((function(n,t){return i.a.createElement("path",{key:"visx-"+e+"-line-"+n+"-"+t,className:c()("visx-pattern-line",b),d:h({orientation:n,height:a}),stroke:r,strokeWidth:o,strokeDasharray:s,strokeLinecap:d,shapeRendering:p})})))}f.propTypes={id:r.a.string.isRequired,width:r.a.number.isRequired,height:r.a.number.isRequired,className:r.a.string,background:r.a.string,stroke:r.a.string,strokeWidth:r.a.oneOfType([r.a.number,r.a.string]),strokeDasharray:r.a.oneOfType([r.a.string,r.a.number]),strokeLinecap:r.a.oneOf(["square","butt","round","inherit"]),shapeRendering:r.a.oneOfType([r.a.string,r.a.number]),orientation:r.a.array}},jpI8:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var a=t("VB+g"),r=t("ZQHj");function o(n,e){if(Object(r.a)(n)&&e)return Object(a.a)(n,e);if(Object(r.b)(n)){var t=n,o=t.target;if(o)return Object(a.a)(o,t)}return null}},lEbO:function(n,e,t){"use strict";function a(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,a=new Array(e);t<e;t++)a[t]=n[t];return a}t.d(e,"a",(function(){return a}))},teKd:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/xychart",function(){return t("Saat")}])},"uKU/":function(n,e,t){"use strict";t.d(e,"b",(function(){return s})),t.d(e,"a",(function(){return c}));var a=t("PB0s"),r=t("2+fR"),o=t("W1cA"),i=t("Zbhd");function s(n){var e=n.domain;return n.ticks=function(n){var t=e();return Object(a.a)(t[0],t[t.length-1],null==n?10:n)},n.tickFormat=function(n,t){var a=e();return Object(i.a)(a[0],a[a.length-1],null==n?10:n,t)},n.nice=function(t){null==t&&(t=10);var r,o,i=e(),s=0,c=i.length-1,u=i[s],l=i[c],d=10;for(l<u&&(o=u,u=l,l=o,o=s,s=c,c=o);d-- >0;){if((o=Object(a.b)(u,l,t))===r)return i[s]=u,i[c]=l,e(i);if(o>0)u=Math.floor(u/o)*o,l=Math.ceil(l/o)*o;else{if(!(o<0))break;u=Math.ceil(u*o)/o,l=Math.floor(l*o)/o}r=o}return n},n}function c(){var n=Object(r.b)();return n.copy=function(){return Object(r.a)(n,c())},o.b.apply(n,arguments),s(n)}}},[["teKd",0,2,1,3,4,5,6,7,9,11,12,13,14,15,18,19,22,21,29,41]]]);
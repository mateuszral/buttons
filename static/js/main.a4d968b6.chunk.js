(this["webpackJsonpreact-template"]=this["webpackJsonpreact-template"]||[]).push([[0],{43:function(e,n,t){},56:function(e,n,t){"use strict";t.r(n);var c=t(0),r=t.n(c),i=t(28),s=t.n(i),a=t(35),l=t(4),d="/",o=t(29),j=t(10),h=t(13);t(43);function b(){var e=Object(h.a)(["\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n  }\n\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n\n  body {\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    margin: 0;\n    font-size: 1.6rem;\n    font-family: 'Ubuntu Mono', monospace;\n  }\n\n  h1, h2, h3, h4, h5, span {\n    margin: 0;\n  }\n\n  button {\n    padding: 0;\n    cursor: pointer;\n  }\n\n  ul {\n    padding: 0;\n    margin: 0;\n  }\n"]);return b=function(){return e},e}var x=Object(j.b)(b()),u=t(22),O={huge:"1700",bigDesktop:"1440",desktop:"1150",bigTablet:"1020",tablet:"767",bigPhone:"400",phone:"320"},p=Object.keys(O).reduce((function(e,n){return e[n]="@media (min-width: ".concat(O[n],"px)"),e}),{}),v=Object(u.a)(Object(u.a)({},{white:"hsl(0, 0%, 100%)",black:"hsl(0, 0%, 0%)",grey100:"hsl(0, 0%, 35%)",grey200:"hsl(0, 0%, 74%)",grey300:"hsl(0, 0%, 87%)",grey400:"hsl(0, 0%, 91%)",grey500:"hsl(0, 0%, 97%)",default:"#3F3F3F",primary:"#2962FF",secondary:"#455A64",danger:"#D32F2F"}),{},{mq:p,font:{size:{paragraph:"1.6rem",button:"1.4rem"},weight:{regular:"500",bold:"700"}},layout:{searchBarHeight:"80px",mobileSidesPadding:"30px"},zIndex:{level1:"1000",level2:"2000",level3:"3000",level4:"4000",level5:"5000",level6:"6000",level7:"7000",level8:"8000",level9:"9000",level10:"10000"}}),f=t(1),m=function(e){var n=e.children;return Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)(o.a,{lang:"pl",title:"React template"}),Object(f.jsx)(x,{}),Object(f.jsx)(j.a,{theme:v,children:n})]})},g=t(23),y=t.n(g);function w(){var e=Object(h.a)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: 80px;\n  min-height: 36px;\n  font-family: 'Noto Sans JP', sans-serif;\n  font-size: 14px;\n  box-shadow: ",";\n  border-radius: 6px;\n  outline: none;\n\n  background-color: ",";\n  color: ",";\n  padding: ",";\n  border: ",";\n\n  &.default__hover {\n    background-color: #aeaeae;\n  }\n\n  &.outline__hover {\n    background-color: #2962ff1a;\n  }\n\n  &.text__hover {\n    background-color: #2962ff1a;\n  }\n\n  &.color {\n    &.default {\n      background-color: #aeaeae;\n    }\n    &.primary {\n      background-color: #0039cb;\n    }\n    &.secondary {\n      background-color: #1c313a;\n    }\n    &.danger {\n      background-color: #9a0007;\n    }\n  }\n\n  svg {\n    margin: ",";\n  }\n"]);return w=function(){return e},e}var D=j.c.button(w(),(function(e){return!e.isShadowDisabled&&"0px 2px 3px rgba(51, 51, 51, 0.2)"}),(function(e){var n=e.theme,t=e.variant,c=e.color;if("outline"===t||"text"===t)return n.white;switch(c){case"primary":return n.primary;case"secondary":return n.secondary;case"danger":return n.danger;default:return"#E0E0E0"}}),(function(e){var n=e.theme,t=e.color;if(e.isDisabled)return"#9E9E9E";switch(t){case"primary":case"secondary":case"danger":return n.white;default:return n.default}}),(function(e){switch(e.size){case"sm":return"6px 12px";case"lg":return"11px 22px";default:return"8px 16px"}}),(function(e){var n=e.theme;switch(e.variant){case"outline":return"1px solid ".concat(n.primary);default:return 0}}),(function(e){return e.startIcon?"0 10px 0 0":"0 0 0 10px"}));function B(){var e=Object(h.a)(["\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  grid-gap: 10px;\n  padding: 15px;\n\n  div {\n    min-width: 15%;\n    display: flex;\n    margin: 10px;\n\n    div {\n      display: flex;\n      align-items: flex-start;\n      flex-direction: column;\n\n      span {\n        margin-bottom: 10px;\n      }\n    }\n  }\n"]);return B=function(){return e},e}var z=j.c.div(B()),S=function(){return Object(f.jsx)("div",{children:Object(f.jsxs)(z,{children:[Object(f.jsx)("h1",{children:"Buttons"}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"<Button />"}),Object(f.jsx)(D,{children:"Default"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"&:hover, &:focus"}),Object(f.jsx)(D,{className:"default__hover",children:"Default"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button variant="outline" />'}),Object(f.jsx)(D,{variant:"outline",isShadowDisabled:!0,children:"Outline"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"&:hover, &:focus"}),Object(f.jsx)(D,{variant:"outline",isShadowDisabled:!0,className:"outline__hover",children:"Outline"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button variant="text" />'}),Object(f.jsx)(D,{variant:"text",isShadowDisabled:!0,children:"Text"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"&:hover, &:focus"}),Object(f.jsx)(D,{variant:"text",isShadowDisabled:!0,className:"text__hover",children:"Text"})]})]}),Object(f.jsx)("div",{children:Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"<Button isShadowDisabled />"}),Object(f.jsx)(D,{isShadowDisabled:!0,children:"No shadow"})]})}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"<Button isDisabled />"}),Object(f.jsx)(D,{isShadowDisabled:!0,isDisabled:!0,children:"Disabled"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button variant="text" isDisabled />'}),Object(f.jsx)(D,{variant:"text",isShadowDisabled:!0,isDisabled:!0,children:"Disabled"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"<Button startIcon /> with icon before text "}),Object(f.jsxs)(D,{startIcon:!0,children:[Object(f.jsx)(y.a,{})," Start icon"]})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"<Button endIcon /> with icon after text"}),Object(f.jsxs)(D,{endIcon:!0,children:["End icon ",Object(f.jsx)(y.a,{})]})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button size="sm" />'}),Object(f.jsx)(D,{size:"sm",children:"Small"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button size="md" />'}),Object(f.jsx)(D,{size:"md",children:"Medium"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button size="lg" />'}),Object(f.jsx)(D,{size:"lg",children:"Large"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button color="default" />'}),Object(f.jsx)(D,{color:"default",children:"Default"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button color="primary" />'}),Object(f.jsx)(D,{color:"primary",children:"Primary"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button color="secondary" />'}),Object(f.jsx)(D,{color:"secondary",children:"Secondary"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:'<Button color="danger" />'}),Object(f.jsx)(D,{color:"danger",children:"Danger"})]})]}),Object(f.jsxs)("div",{children:[Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"&:hover, &:focus"}),Object(f.jsx)(D,{color:"default",className:"color default",children:"Default"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"&:hover, &:focus"}),Object(f.jsx)(D,{color:"primary",className:"color primary",children:"Primary"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"&:hover, &:focus"}),Object(f.jsx)(D,{color:"secondary",className:"color secondary",children:"Secondary"})]}),Object(f.jsxs)("div",{children:[Object(f.jsx)("span",{children:"&:hover, &:focus"}),Object(f.jsx)(D,{color:"danger",className:"color danger",children:"Danger"})]})]}),Object(f.jsxs)("span",{children:["Created by ",Object(f.jsx)("i",{children:"Mateusz Ral"})]})]})})},k=function(){return Object(f.jsx)(a.a,{children:Object(f.jsx)(m,{children:Object(f.jsx)(l.c,{children:Object(f.jsx)(l.a,{exact:!0,path:d,component:S})})})})};s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(k,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.a4d968b6.chunk.js.map
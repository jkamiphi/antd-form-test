(this["webpackJsonpdfl-form-test"]=this["webpackJsonpdfl-form-test"]||[]).push([[0],{204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},311:function(e,t,a){},326:function(e,t,a){},358:function(e,t,a){},359:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),c=a(31),l=a.n(c),i=(a(204),a(362)),n=a(363),j=(a(205),a(367)),o=a(368),h=(a(206),a(3)),d=function(e){var t=e.value,a=e.description;return Object(h.jsx)(j.a,{value:t,className:"card-radio-wrapper",children:Object(h.jsxs)(o.b,{direction:"vertical",children:[Object(h.jsx)("label",{children:t}),Object(h.jsx)("label",{className:"card-radio-description",children:a})]})})},x=a(66),m=a(53),b=a(190),f=(a(311),function(e){var t=e.color,a=Object(s.useState)({displayColorPicker:!1,color:{hex:"#000000"}}),r=Object(m.a)(a,2),c=r[0],l=r[1];return"custom"===t?Object(h.jsxs)(j.a.Button,{value:c.color.hex,className:"color-radio",style:{backgroundColor:c.color.hex},onClick:function(){return l(Object(x.a)(Object(x.a)({},c),{},{displayColorPicker:!c.displayColorPicker}))},children:[Object(h.jsx)("div",{className:"circle",style:{backgroundColor:c.color.hex}}),c.displayColorPicker&&Object(h.jsx)("div",{className:"color-picker-wrapper",children:Object(h.jsx)(b.a,{color:c.color,onChange:function(e){return function(e){l(Object(x.a)(Object(x.a)({},c),{},{color:e}))}(e)}})})]}):Object(h.jsx)(j.a.Button,{value:t,className:"color-radio",style:{backgroundColor:t},children:Object(h.jsx)("div",{className:"circle",style:{backgroundColor:t}})})}),O=a(183),u=a(197),g=(a(326),function(e){var t=e.value;return Object(h.jsx)("div",{className:"space-block",children:Object(h.jsxs)(o.b,{align:"start",children:[Object(h.jsx)(u.a,{}),Object(h.jsx)("p",{children:Object(O.a)(t)})]})})}),p=a(366),N=a(364),w=a(63),y=a(195),v=a(369),C=a(370),k=function(e){var t=Object(s.useState)({loading:!1}),a=Object(m.a)(t,2),r=a[0],c=a[1];return Object(h.jsxs)(i.a,{gutter:10,align:"middle",children:[Object(h.jsx)(n.a,{md:4,xs:6,children:Object(h.jsx)(p.a,{size:67,src:r.imageUrl,icon:Object(h.jsx)(v.a,{})})}),Object(h.jsx)(n.a,{md:8,xs:18,children:Object(h.jsx)(N.a,{showUploadList:!1,beforeUpload:H,onChange:function(e){"uploading"!==e.file.status?function(e,t){var a=new FileReader;a.addEventListener("load",(function(){return t(a.result)})),a.readAsDataURL(e)}(e.file.originFileObj,(function(e){return c({imageUrl:e,loading:!1})})):c({loading:!0})},children:Object(h.jsxs)(w.a,{children:[Object(h.jsx)(C.a,{}),"Subir logo"]})})})]})};function H(e){var t="image/jpeg"===e.type||"image/png"===e.type;t||y.b.error("You can only upload JPG/PNG file!");var a=e.size/1024/1024<2;return a||y.b.error("Image must smaller than 2MB!"),t&&a}var V=a(365),S=a(113),M=r.a.createContext(),U=function(e){var t=V.a.useForm(),a=Object(m.a)(t,1)[0],s=S.a.useForceUpdate();return Object(h.jsx)(M.Provider,Object(x.a)({value:{form:a,forceUpdate:s}},e))},P=function(){var e=r.a.useContext(M);if(!e)throw new Error("useForm debe estar dentro del context");return e},Z=(a(358),function(){var e=P().form,t=e.getFieldValue("color"),a=e.getFieldValue("url");return Object(h.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100%",height:"auto",viewBox:"0 0 807 598",className:"svg",children:[Object(h.jsxs)("defs",{children:[Object(h.jsx)("clipPath",{id:"a",children:Object(h.jsx)("rect",{className:"a",width:"807",height:"598",transform:"translate(1093 225)"})}),Object(h.jsxs)("filter",{id:"b",x:"135",y:"34",width:"830",height:"602",filterUnits:"userSpaceOnUse",children:[Object(h.jsx)("feOffset",{dy:"32",input:"SourceAlpha"}),Object(h.jsx)("feGaussianBlur",{stdDeviation:"25",result:"c"}),Object(h.jsx)("feFlood",{"flood-opacity":"0.059"}),Object(h.jsx)("feComposite",{operator:"in",in2:"c"}),Object(h.jsx)("feComposite",{in:"SourceGraphic"})]}),Object(h.jsx)("clipPath",{id:"d",children:Object(h.jsx)("rect",{className:"b",width:"680",height:"452",transform:"translate(3689 642)"})}),Object(h.jsxs)("filter",{id:"e",x:"276",y:"273",width:"573",height:"46",filterUnits:"userSpaceOnUse",children:[Object(h.jsx)("feOffset",{dy:"1",input:"SourceAlpha"}),Object(h.jsx)("feGaussianBlur",{result:"f"}),Object(h.jsx)("feFlood",{"flood-color":"#c1d2db"}),Object(h.jsx)("feComposite",{operator:"in",in2:"f"}),Object(h.jsx)("feComposite",{in:"SourceGraphic"})]}),Object(h.jsxs)("filter",{id:"g",x:"276",y:"320",width:"573",height:"46",filterUnits:"userSpaceOnUse",children:[Object(h.jsx)("feOffset",{dy:"1",input:"SourceAlpha"}),Object(h.jsx)("feGaussianBlur",{result:"h"}),Object(h.jsx)("feFlood",{"flood-color":"#c1d2db"}),Object(h.jsx)("feComposite",{operator:"in",in2:"h"}),Object(h.jsx)("feComposite",{in:"SourceGraphic"})]}),Object(h.jsxs)("filter",{id:"i",x:"276",y:"367",width:"573",height:"46",filterUnits:"userSpaceOnUse",children:[Object(h.jsx)("feOffset",{dy:"1",input:"SourceAlpha"}),Object(h.jsx)("feGaussianBlur",{result:"j"}),Object(h.jsx)("feFlood",{"flood-color":"#c1d2db"}),Object(h.jsx)("feComposite",{operator:"in",in2:"j"}),Object(h.jsx)("feComposite",{in:"SourceGraphic"})]}),Object(h.jsxs)("filter",{id:"k",x:"276",y:"414",width:"573",height:"46",filterUnits:"userSpaceOnUse",children:[Object(h.jsx)("feOffset",{dy:"1",input:"SourceAlpha"}),Object(h.jsx)("feGaussianBlur",{result:"l"}),Object(h.jsx)("feFlood",{"flood-color":"#c1d2db"}),Object(h.jsx)("feComposite",{operator:"in",in2:"l"}),Object(h.jsx)("feComposite",{in:"SourceGraphic"})]}),Object(h.jsxs)("filter",{id:"m",x:"276",y:"461",width:"573",height:"46",filterUnits:"userSpaceOnUse",children:[Object(h.jsx)("feOffset",{dy:"1",input:"SourceAlpha"}),Object(h.jsx)("feGaussianBlur",{result:"n"}),Object(h.jsx)("feFlood",{"flood-color":"#c1d2db"}),Object(h.jsx)("feComposite",{operator:"in",in2:"n"}),Object(h.jsx)("feComposite",{in:"SourceGraphic"})]}),Object(h.jsx)("clipPath",{id:"o",children:Object(h.jsx)("path",{className:"c",d:"M5,0H680a0,0,0,0,1,0,0V447a5,5,0,0,1-5,5H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z",transform:"translate(3689 642)"})})]}),Object(h.jsxs)("g",{className:"d",transform:"translate(-1093 -225)",children:[Object(h.jsxs)("g",{transform:"translate(1321.7 224.819)",children:[Object(h.jsxs)("g",{transform:"translate(14.087)",children:[Object(h.jsx)("ellipse",{className:"e",cx:"37.944",cy:"37.944",rx:"37.944",ry:"37.944",transform:"translate(211.027 21.048)"}),Object(h.jsx)("rect",{className:"f",width:"70.618",height:"187.611",transform:"translate(299.162 0.351) rotate(30)"}),Object(h.jsx)("path",{className:"g",d:"M344.817,589.12c-5.217,3.069-11.438,7.973-18.217,15.848",transform:"translate(-170.071 -428.453)"})]}),Object(h.jsxs)("g",{className:"h",transform:"translate(210.099 26.108)",children:[Object(h.jsx)("circle",{className:"af",cx:"3.502",cy:"3.502",r:"3.502"}),Object(h.jsx)("circle",{className:"ac",cx:"3.502",cy:"3.502",r:"3.002"})]})]}),Object(h.jsxs)("g",{transform:"translate(1175.7 502.819)",children:[Object(h.jsxs)("g",{transform:"translate(14.087)",children:[Object(h.jsx)("rect",{className:"i",width:"102.37",height:"97.16",transform:"translate(48.775 70.727)"}),Object(h.jsx)("path",{className:"j",d:"M569.246,70.93,517.6,119.941,615.622,175.8Z",transform:"translate(-517.6 -70.93)"})]}),Object(h.jsxs)("g",{className:"h",transform:"translate(0 106.145)",children:[Object(h.jsx)("circle",{className:"af",cx:"3.502",cy:"3.502",r:"3.502"}),Object(h.jsx)("circle",{className:"ac",cx:"3.502",cy:"3.502",r:"3.002"})]}),Object(h.jsxs)("g",{className:"h",transform:"translate(46.022 184.182)",children:[Object(h.jsx)("circle",{className:"af",cx:"3.502",cy:"3.502",r:"3.502"}),Object(h.jsx)("circle",{className:"ac",cx:"3.502",cy:"3.502",r:"3.002"})]})]}),Object(h.jsxs)("g",{transform:"translate(-2386 -340)",children:[Object(h.jsx)("g",{className:"al",transform:"matrix(1, 0, 0, 1, 3479, 565)",children:Object(h.jsx)("path",{className:"k",d:"M5,0H680a0,0,0,0,1,0,0V447a5,5,0,0,1-5,5H5a5,5,0,0,1-5-5V5A5,5,0,0,1,5,0Z",transform:"translate(210 77)"})}),Object(h.jsxs)("g",{className:"l",children:[Object(h.jsxs)("g",{className:"b",transform:"translate(3689 717)",children:[Object(h.jsx)("rect",{className:"af",width:"688",height:"377"}),Object(h.jsx)("rect",{className:"ac",x:"0.5",y:"0.5",width:"687",height:"376"})]}),Object(h.jsxs)("g",{className:"m",transform:"translate(3767 688)",children:[Object(h.jsx)("rect",{className:"af",width:"626",height:"24",rx:"12"}),Object(h.jsx)("rect",{className:"ac",x:"0.5",y:"0.5",width:"625",height:"23",rx:"11.5"})]})]}),Object(h.jsxs)("g",{transform:"translate(-28 -11)",children:[Object(h.jsx)("rect",{className:"n",width:"8",height:"46",transform:"translate(3781 849)"}),Object(h.jsx)("rect",{className:"n",width:"8",height:"46",transform:"translate(3781 896)"}),Object(h.jsx)("rect",{className:"n",width:"8",height:"46",transform:"translate(3781 990)"}),Object(h.jsx)("rect",{className:"n",width:"8",height:"46",transform:"translate(3781 1037)"}),Object(h.jsx)("g",{className:"ak",transform:"matrix(1, 0, 0, 1, 3507, 576)",children:Object(h.jsx)("rect",{className:"c",width:"573",height:"45",transform:"translate(276 273)"})}),Object(h.jsx)("g",{className:"aj",transform:"matrix(1, 0, 0, 1, 3507, 576)",children:Object(h.jsx)("rect",{className:"c",width:"573",height:"45",transform:"translate(276 320)"})}),Object(h.jsx)("g",{className:"ai",transform:"matrix(1, 0, 0, 1, 3507, 576)",children:Object(h.jsx)("rect",{className:"o",width:"573",height:"45",transform:"translate(276 367)"})}),Object(h.jsx)("g",{className:"ah",transform:"matrix(1, 0, 0, 1, 3507, 576)",children:Object(h.jsx)("rect",{className:"c",width:"573",height:"45",transform:"translate(276 414)"})}),Object(h.jsx)("g",{className:"ag",transform:"matrix(1, 0, 0, 1, 3507, 576)",children:Object(h.jsx)("rect",{className:"c",width:"573",height:"45",transform:"translate(276 461)"})}),Object(h.jsx)("rect",{className:"p",width:"177",height:"45",transform:"translate(4119 849)"}),Object(h.jsx)("rect",{className:"p",width:"177",height:"45",transform:"translate(4119 896)"}),Object(h.jsx)("rect",{className:"q",width:"177",height:"45",transform:"translate(4119 943)"}),Object(h.jsx)("rect",{className:"p",width:"177",height:"45",transform:"translate(4119 990)"}),Object(h.jsx)("rect",{className:"p",width:"177",height:"45",transform:"translate(4119 1037)"}),Object(h.jsx)("rect",{className:"r",width:"145",height:"19",rx:"9.5",transform:"translate(3781 817)"}),Object(h.jsx)("rect",{className:"r",width:"107",height:"9",rx:"4.5",transform:"translate(3797 867)"}),Object(h.jsx)("rect",{className:"r",width:"107",height:"9",rx:"4.5",transform:"translate(3910 867)"}),Object(h.jsx)("rect",{className:"r",width:"83",height:"9",rx:"4.5",transform:"translate(4135 867)"}),Object(h.jsx)("rect",{className:"r",width:"28",height:"9",rx:"4.5",transform:"translate(4135 913)"}),Object(h.jsx)("rect",{className:"r",width:"85",height:"9",rx:"4.5",transform:"translate(4169 913)"}),Object(h.jsx)("rect",{style:{fill:t},width:"95",height:"9",rx:"4.5",transform:"translate(4135 960)"}),Object(h.jsx)("rect",{className:"r",width:"28",height:"9",rx:"4.5",transform:"translate(4226 1007)"}),Object(h.jsx)("rect",{className:"r",width:"85",height:"9",rx:"4.5",transform:"translate(4135 1007)"}),Object(h.jsx)("rect",{className:"r",width:"102",height:"9",rx:"4.5",transform:"translate(4135 1054)"}),Object(h.jsx)("rect",{className:"r",width:"51",height:"9",rx:"4.5",transform:"translate(4023 867)"}),Object(h.jsx)("rect",{className:"r",width:"44",height:"9",rx:"4.5",transform:"translate(3797 913)"}),Object(h.jsx)("rect",{style:{fill:t},width:"117",height:"9",rx:"4.5",transform:"translate(3797 960)"}),Object(h.jsx)("rect",{className:"r",width:"103",height:"9",rx:"4.5",transform:"translate(3847 913)"}),Object(h.jsx)("rect",{className:"r",width:"44",height:"9",rx:"4.5",transform:"translate(3816 1054)"}),Object(h.jsx)("rect",{className:"r",width:"103",height:"9",rx:"4.5",transform:"translate(3797 1007)"}),Object(h.jsx)("rect",{className:"r",width:"72",height:"9",rx:"4.5",transform:"translate(3975 913)"}),Object(h.jsx)("rect",{style:{fill:t},width:"103",height:"9",rx:"4.5",transform:"translate(3920 960)"}),Object(h.jsx)("rect",{className:"r",width:"13",height:"9",rx:"4.5",transform:"translate(3956 913)"}),Object(h.jsx)("rect",{className:"r",width:"44",height:"9",rx:"4.5",transform:"translate(4015 1007)"}),Object(h.jsx)("rect",{style:{fill:t},width:"44",height:"9",rx:"4.5",transform:"translate(4029 960)"}),Object(h.jsx)("rect",{className:"r",width:"103",height:"9",rx:"4.5",transform:"translate(3906 1007)"}),Object(h.jsx)("rect",{className:"r",width:"103",height:"9",rx:"4.5",transform:"translate(3866 1054)"}),Object(h.jsx)("rect",{className:"r",width:"13",height:"9",rx:"4.5",transform:"translate(4065 1007)"}),Object(h.jsx)("rect",{className:"r",width:"112",height:"9",rx:"4.5",transform:"translate(3975 1054)"}),Object(h.jsx)("rect",{className:"r",width:"13",height:"9",rx:"4.5",transform:"translate(3797 1054)"}),Object(h.jsx)("rect",{style:{fill:t},width:"6",height:"46",transform:"translate(3781 943)"})]}),Object(h.jsx)("path",{className:"t",d:"M5,0H680a0,0,0,0,1,0,0V42a0,0,0,0,1,0,0H0a0,0,0,0,1,0,0V5A5,5,0,0,1,5,0Z",transform:"translate(3689 642)"}),Object(h.jsx)("rect",{className:"u",width:"680",height:"1",transform:"translate(3689 716)"}),Object(h.jsx)("path",{className:"k",d:"M3716.049,651h192.556c3.97,0,7.189,2.239,7.189,5v21s-.331,7,8.659,7H3701.231c6.676,0,7.629-7,7.629-7V656C3708.861,653.238,3712.079,651,3716.049,651Z"}),Object(h.jsx)("text",{className:"v",transform:"translate(3791.538 705.215)",children:Object(h.jsx)("tspan",{x:"0",y:"0",children:"Secure"})}),Object(h.jsx)("text",{className:"v",transform:"translate(3850.538 705.215)",children:Object(h.jsx)("tspan",{x:"0",y:"0",children:"https:"})}),Object(h.jsx)("text",{className:"w",transform:"translate(3892.538 705.215)",children:Object(h.jsxs)("tspan",{x:"0",y:"0",children:["://",a,".dofleini.com"]})}),Object(h.jsx)("text",{className:"w",transform:"translate(3742.538 673.215)",children:Object(h.jsx)("tspan",{x:"0",y:"0",children:"Plankton - Mi Espacio"})}),Object(h.jsx)("rect",{className:"x",width:"1",height:"16",transform:"translate(3843 692)"}),Object(h.jsx)("circle",{className:"u",cx:"10",cy:"10",r:"10",transform:"translate(3716 658)"}),Object(h.jsxs)("g",{transform:"translate(3719.776 661.963)",children:[Object(h.jsx)("rect",{className:"k",width:"10.252",height:"2.239",rx:"1.12",transform:"translate(0 6.718)"}),Object(h.jsx)("rect",{className:"k",width:"7.831",height:"2.239",rx:"1.12",transform:"translate(2.421)"}),Object(h.jsx)("rect",{className:"k",width:"6.155",height:"2.239",rx:"1.12",transform:"translate(6.337 3.359)"}),Object(h.jsx)("rect",{className:"k",width:"4.479",height:"2.239",rx:"1.12",transform:"translate(0.182 3.359)"}),Object(h.jsx)("rect",{className:"k",width:"4.479",height:"2.239",rx:"1.12",transform:"translate(0.182 10.097)"})]}),Object(h.jsxs)("g",{className:"y",children:[Object(h.jsxs)("g",{transform:"translate(3689 716)",children:[Object(h.jsxs)("g",{className:"b",children:[Object(h.jsx)("rect",{className:"af",width:"49",height:"378"}),Object(h.jsx)("rect",{className:"ac",x:"0.5",y:"0.5",width:"48",height:"377"})]}),Object(h.jsx)("rect",{className:"z",width:"34",height:"37",rx:"3",transform:"translate(7 90)"}),Object(h.jsxs)("g",{transform:"translate(14 14.941)",children:[Object(h.jsx)("rect",{className:"aa",width:"21.244",height:"4.641",rx:"2.32",transform:"translate(0 13.922)"}),Object(h.jsx)("rect",{className:"aa",width:"16.227",height:"4.641",rx:"2.32",transform:"translate(5.009)"}),Object(h.jsx)("rect",{className:"aa",width:"12.754",height:"4.641",rx:"2.32",transform:"translate(13.122 6.961)"}),Object(h.jsx)("rect",{className:"aa",width:"9.281",height:"4.641",rx:"2.32",transform:"translate(0 6.961)"}),Object(h.jsx)("rect",{className:"aa",width:"9.281",height:"4.641",rx:"2.32",transform:"translate(0 20.922)"})]}),Object(h.jsxs)("g",{transform:"translate(12.827)",children:[Object(h.jsx)("circle",{className:"aa",cx:"11.5",cy:"11.5",r:"11.5",transform:"translate(0.173 205)"}),Object(h.jsx)("circle",{className:"aa",cx:"11.5",cy:"11.5",r:"11.5",transform:"translate(0.173 169)"}),Object(h.jsx)("circle",{className:"aa",cx:"11.5",cy:"11.5",r:"11.5",transform:"translate(0.173 133)"}),Object(h.jsx)("circle",{style:{fill:t},cx:"11.5",cy:"11.5",r:"11.5",transform:"translate(0.173 97)"}),Object(h.jsx)("circle",{className:"aa",cx:"11.5",cy:"11.5",r:"11.5",transform:"translate(0.173 61)"})]})]}),Object(h.jsxs)("g",{transform:"translate(3737 716)",children:[Object(h.jsxs)("g",{className:"b",children:[Object(h.jsx)("rect",{className:"af",width:"589",height:"56"}),Object(h.jsx)("rect",{className:"ac",x:"0.5",y:"0.5",width:"588",height:"55"})]}),Object(h.jsx)("rect",{style:{fill:t},width:"119",height:"32",rx:"16",transform:"translate(409 12)"}),Object(h.jsx)("g",{transform:"translate(235.443 19.562)",children:Object(h.jsx)("path",{className:"ab",d:"M255.65,4329.04a1,1,0,0,1,.56,1.75l-3.67,3.18,1.1,4.73a1,1,0,0,1-1.49,1.08l-4.15-2.51-4.15,2.5a1,1,0,0,1-1.49-1.08l1.1-4.72-3.67-3.18a1,1,0,0,1,.57-1.75l4.83-.41,1.89-4.459a1,1,0,0,1,1.84,0l1.89,4.45,4.84.42Z",transform:"translate(-239.443 -4323.562)"})}),Object(h.jsx)("rect",{className:"r",width:"211",height:"21",rx:"10.5",transform:"translate(16 18)"})]})]}),Object(h.jsxs)("g",{transform:"translate(3740 693)",children:[Object(h.jsx)("path",{className:"ac",d:"M0,0H14.931V14.931H0Z"}),Object(h.jsx)("path",{d:"M12.5,5.462a4.978,4.978,0,1,0,1.294,4.759H12.5A3.731,3.731,0,1,1,8.981,5.244a3.68,3.68,0,0,1,2.625,1.107l-2,2h4.355V4Z",transform:"translate(-1.515 -1.511)"})]}),Object(h.jsxs)("g",{className:"ad",transform:"translate(3718 693)",children:[Object(h.jsx)("path",{className:"ac",d:"M0,0H15V15H0Z"}),Object(h.jsx)("path",{d:"M9,4l-.881.881,3.488,3.494H4v1.25h7.606L8.119,13.119,9,14l5-5Z",transform:"translate(-1.5 -1.5)"})]}),Object(h.jsxs)("g",{transform:"translate(3697 693)",children:[Object(h.jsx)("path",{className:"ac",d:"M15,0H0V15H15Z"}),Object(h.jsx)("path",{d:"M9,4l.881.881L6.394,8.375H14v1.25H6.394l3.488,3.494L9,14,4,9Z",transform:"translate(-1.5 -1.5)"})]}),Object(h.jsxs)("g",{transform:"translate(3891.797 660.796)",children:[Object(h.jsx)("path",{className:"ac",d:"M0,0H14.407V14.407H0Z"}),Object(h.jsx)("path",{d:"M13.4,5.846,12.558,5,9.2,8.356,5.846,5,5,5.846,8.356,9.2,5,12.558l.846.846L9.2,10.049,12.558,13.4l.846-.846L10.049,9.2Z",transform:"translate(-1.998 -1.998)"})]}),Object(h.jsxs)("g",{transform:"translate(3924.893 658.524)",children:[Object(h.jsx)("path",{className:"ac",d:"M0,0H17.583V17.583H0Z"}),Object(h.jsx)("path",{d:"M15.257,10.861h-4.4v4.4H9.4v-4.4H5V9.4H9.4V5h1.465V9.4h4.4Z",transform:"translate(-1.337 -1.337)"})]}),Object(h.jsxs)("g",{transform:"translate(3776 693.857)",children:[Object(h.jsx)("path",{className:"ac",d:"M0,0H12.794V12.794H0Z"}),Object(h.jsx)("path",{className:"ae",d:"M11.463,4.732H10.93V3.665a2.665,2.665,0,1,0-5.331,0V4.732H5.066A1.069,1.069,0,0,0,4,5.8v5.331a1.069,1.069,0,0,0,1.066,1.066h6.4a1.069,1.069,0,0,0,1.066-1.066V5.8A1.069,1.069,0,0,0,11.463,4.732Zm-3.2,4.8A1.066,1.066,0,1,1,9.331,8.463,1.069,1.069,0,0,1,8.265,9.529Zm1.653-4.8H6.612V3.665a1.653,1.653,0,1,1,3.305,0Z",transform:"translate(-1.868 -0.467)"})]})]})]})]})}),B=function(){var e=P(),t=e.form,a=e.forceUpdate,s={formItemLayout:null,colon:!0,fields:[{key:"title",render:function(){return Object(h.jsx)("fieldset",{children:Object(h.jsx)("h2",{children:"Configuraci\xf3n"})})}},{key:"logo",label:"Logo del espacio",forwardRef:!0,widget:k,extra:Object(h.jsx)(g,{value:"Este logo identificar\xe1 tu espacio entre el resto.<br/> Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente."})},{key:"name",label:"Nombre del espacio",placeholder:"Ep: Mi espacio de trabajo"},{key:"url",label:"URL del espacio (direcci\xf3n web)",placeholder:"Ep: mi.dominio",widgetProps:{suffix:".dofleini.com"},extra:Object(h.jsx)(g,{value:"Puedes cambiar la URL de tu espacio (direcci\xf3n web) en cualquier momento, pero por cortes\xeda hacia tus compa\xf1eros de trabajo y otros usuarios de Plankton, porfavor no lo hagas muy seguido :)<br/><br/> Nota: Si cambias la URL de tu espacio, Plankton autom\xe1ticamente redireccionar\xe1 desde la antigua direcci\xf3n hacia la nueva. En cualquier caso, deber\xedas asegurarte que tus compa\xf1eros sepan acerca del cambio porque la direcci\xf3n anterior pasar\xe1 a estar libre y puede ser usada por otro espacio en el futuro."})},{key:"working",label:"\xbfCu\xe1ntas personas trabajar\xe1n contigo, incluy\xe9ndote a ti?",widget:"radio-group",buttonGroup:!0,options:["S\xf3lo yo","2 - 10","11 - 25","26 - 50","51 - 100","500+"],initialValue:"S\xf3lo yo",extra:Object(h.jsx)(g,{value:"Este logo identificar\xe1 tu espacio entre el resto. <br/> Preferiblemente sube una imagen .png igual o superior a 65px a 72ppp con fondo transparente."})},{key:"color",label:"Color del tema",widget:"radio-group",initialValue:"#E59100",buttonGroup:!0,children:["#39B0FF","#04B58B","#3E9C4B","#B6BC00","#E59100","#E55C00","#EE1F50","custom"].map((function(e){return Object(h.jsx)(f,{color:e})}))},{key:"privacy",label:"Privacidad del espacio",initialValue:"Privado",widgetProps:{style:{display:"inline-flex"}},widget:"radio-group",children:[["Privado","El contenido ser\xe1 visible s\xf3lo para t\xed y los miembros de tu Organizaci\xf3n."],["P\xfablico","Cualquiera con el v\xednculo podr\xe1 ver la actividad de tu Organizaci\xf3n"]].map((function(e){var t=Object(m.a)(e,2),a=t[0],s=t[1];return Object(h.jsx)(d,{value:a,description:s})}))}]};return Object(h.jsx)("div",{className:"form-block",children:Object(h.jsxs)(V.a,{form:t,layout:"vertical",onValuesChange:a,size:"large",children:[Object(h.jsx)(S.a,{meta:s,form:t}),Object(h.jsxs)(V.a.Item,{className:"form-footer",wrapperCol:{span:24},children:[Object(h.jsx)(w.a,{htmlType:"submit",type:"primary",children:"Guardar cambios"}),Object(h.jsx)(w.a,{onClick:function(){t.resetFields()},style:{marginLeft:"15px"},children:"Descartar"})]})]})})};var F=function(){return Object(h.jsxs)(i.a,{children:[Object(h.jsx)(n.a,{xs:24,md:12,children:Object(h.jsx)(B,{})}),Object(h.jsx)(n.a,{md:12,className:"view-mode",children:Object(h.jsx)(Z,{})})]})};l.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(U,{children:Object(h.jsx)(F,{})})}),document.getElementById("root"))}},[[359,1,2]]]);
//# sourceMappingURL=main.c331de85.chunk.js.map
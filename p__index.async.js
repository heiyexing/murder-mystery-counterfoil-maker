"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{18231:function(Yn,Q,n){n.r(Q),n.d(Q,{default:function(){return wn}});var Ne=n(5574),P=n.n(Ne),Le=n(28459),Me=n(51431),Re=n(68400),I=n.n(Re),D=n(70761),q=n(9361),_,ee,ne,Oe=function(){var r=q.Z.useToken,t=r(),a=t.token,o="300px";return{homePage:(0,D.iv)(_||(_=I()([`
      height: 100vh;
      overflow: hidden;
    `]))),sidePanel:(0,D.iv)(ee||(ee=I()([`
      width: `,`;
      box-shadow: `,`;
      position: relative;
    `])),o,a.boxShadow),content:(0,D.iv)(ne||(ne=I()([`
      width: calc(100% - `,`);
      background: `,`;
    `])),o,a.colorBgLayout)}},j=n(67294),ze=n(31989),E=n(93085),te=n(77598),e=n(85893),ke=function(r){var t=r.config,a=t.width,o=t.height,s=t.posterImg,u=t.mask,l=(0,j.useRef)(null),m=(0,j.useMemo)(function(){return u?"l(90) ".concat(u.colors.map(function(c){return"".concat(c.percent,":").concat(c.color)}).join(" ")):""},[u]);return(0,te.Z)(function(){l.current&&(l.current.style.fill=m)},[m]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(E.UL,{width:a,height:o,fill:"#fff"}),(0,e.jsx)(E.Ee,{img:s,width:a,keepAspectRatio:!0},s),u&&(0,e.jsx)(E.UL,{ref:l,width:a,height:u.height,y:o-u.height,fill:m},m)]})},He=ke,Ge=n(97857),y=n.n(Ge),ae=n(1242),Ue=n(13769),re=n.n(Ue),$e=["text"],oe=function(r){var t=r.text,a=re()(r,$e);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(E.xv,y()(y()({},a),{},{text:String(t)[0],fontSize:22})),(0,e.jsx)(E.xv,y()(y()({},a),{},{text:String(t).slice(1),fontSize:16,x:Number(a.x)+22}))]})};oe.defaultProps={fontFamily:"\u9510\u5B57\u5DE5\u623F\u78C5\u7934\u9ED1\u7B80"};var Ve=oe,G=27,z=20,se=336,L=170,k=243,le=20,U=34,ie=4,ue=20,we=function(r){var t=r.config,a=t.width,o=t.height,s=t.title,u=t.role,l=t.username,m=t.time,c=t.roleImg,F=t.mainColor,g=G,x=o-se-G,h=a-G*2,d=g+h-L-z,i=x+z,A=(0,j.useMemo)(function(){return new ae.UL({style:{x:d,y:i,width:L,height:k,radius:8}})},[L,k,d,i]),p=(0,j.useMemo)(function(){return{x:d,y:i,width:L,height:k}},[d,i,L,k]),K=[{label:"\u5267\u672C",value:s},{label:"\u89D2\u8272",value:u},{label:"\u59D3\u540D",value:l},{label:"\u65F6\u95F4",value:m}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(E.ZA,{children:[(0,e.jsx)(E.UL,{width:h,height:se,x:g,y:x,fill:"#fff",radius:8,opacity:.9}),c&&(0,e.jsx)(E.Ee,y()({img:c,clipPath:A},p)),(0,e.jsx)(E.ZA,{children:K.map(function(O,f){var Z={x:g+z,y:x+z};return(0,e.jsxs)(j.Fragment,{children:[(0,e.jsx)(Ve,{text:O.label,x:Z.x,y:Z.y+le*(f+1)+(ie+U+ue)*f,fontFamily:"title-font",fill:F}),(0,e.jsx)(E.xv,{text:O.value,x:Z.x,y:Z.y+(le+ie)*(f+1)+(U+ue)*f,fontFamily:"value-font",fontSize:U,textBaseline:"top"})]},O.label)})})]})})},Ye=we,H=n(82188),ce,We=function(){return{canvasContainer:(0,D.iv)(ce||(ce=I()([`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: auto;
    `])))}},Xe=new ze.Th,Ke=function(){var r=(0,j.useRef)(Xe),t=(0,j.useRef)(null),a=(0,H.tT)("canvas"),o=a.config,s=a.setCanvas,u=We();return(0,j.useEffect)(function(){var l=t.current;l&&(window.__g_instances__=[l],s(l))},[t.current]),(0,e.jsx)("div",{className:u.canvasContainer,id:"container",children:(0,e.jsxs)(E.Xz,{width:o.width,height:o.height,renderer:r.current,ref:t,children:[(0,e.jsx)(He,{config:o}),(0,e.jsx)(Ye,{config:o})]})})},Je=Ke,de,me,ve,fe,ge,he,$=function(){var r=q.Z.useToken,t=r(),a=t.token;return{counterfoilSidebar:(0,D.iv)(de||(de=I()([`
      height: 100%;
      overflow: auto;
      position: relative;
      h5.ant-typography {
        margin: 8px 0;
      }
      p.form-title {
        color: `,`;
      }
      .ant-tabs-nav {
        margin-bottom: 0;
      }
    `])),a.colorTextDescription),exportPanel:(0,D.iv)(me||(me=I()([`
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #fff;
    `]))),imageBtnModal:(0,D.iv)(ve||(ve=I()([`
      .ant-upload-text {
        color: `,` !important;
        font-size: 14px !important;
      }
      .ant-upload-drag-icon {
        margin-bottom: 0px !important;
      }
    `])),a.colorTextDescription),uploadTip:(0,D.iv)(fe||(fe=I()([`
      font-size: 12px;
      color: `,`;
      margin-top: 4px;
    `])),a.colorTextDescription),imageList:(0,D.iv)(ge||(ge=I()([`
      max-height: 300px;
      overflow: auto;
      .image-item {
        overflow: hidden;
        cursor: pointer;
        border-radius: 8px;
        border: 2px solid #fff;
        margin-bottom: 12px;
        .image-checkbox {
          position: absolute;
          top: 0;
          right: 2px;
        }
        &.image-item--selected {
          border-color: `,`;
        }
        &:hover .image-close-btn {
          opacity: 1;
        }
      }
      .image-info {
        padding: 6px;
      }
      .image-panel {
        position: relative;
        img {
          display: block;
        }
        .image-close-btn {
          position: absolute;
          right: 4px;
          bottom: 4px;
          opacity: 0;
          transition: opacity 0.2s;
        }
      }
      .image-date {
        font-size: 12px;
        color: `,`;
      }
    `])),a.colorPrimary,a.colorTextDescription),gradationColorPicker:(0,D.iv)(he||(he=I()([`
      margin-bottom: 32px;
      .color-blank {
        width: 100%;
        height: 6px;
        border-radius: 6px;
        margin-top: 12px;
      }
      .color-item {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        transform: translate(-12px);
        position: absolute;
        &:hover {
          z-index: 1;
          .anticon-caret-up {
            color: `,`
          }
        }
      }
      .ant-color-picker-trigger {
        margin-top: -4px;
      }
      .anticon-caret-up {
        color: `,`
      }
    `])),a.colorPrimary,a.colorBorder)}},Qe=n(85813),qe=n(32880),_e=n(15009),S=n.n(_e),en=n(99289),M=n.n(en),nn=n(58638),pe=n(10154),V=n(15867),tn=function(){var r=(0,H.tT)("canvas"),t=r.exportor,a=r.config,o=(0,j.useState)(!1),s=P()(o,2),u=s[0],l=s[1],m=function(){var c=M()(S()().mark(function F(){var g,x;return S()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:if(t){d.next=3;break}return pe.ZP.warning("\u753B\u5E03\u672A\u521D\u59CB\u5316\u5B8C\u6210"),d.abrupt("return");case 3:return l(!0),d.next=6,t.toCanvas({clippingRegion:new ae.Ae(0,0,a.width,a.height)});case 6:g=d.sent,x=g.toDataURL(),t.downloadImage({dataURL:x,name:"".concat(a.role)}),l(!1),pe.ZP.success("".concat(a.role,".png \u5BFC\u51FA\u6210\u529F"));case 11:case"end":return d.stop()}},F)}));return function(){return c.apply(this,arguments)}}();return(0,e.jsx)(V.ZP,{block:!0,type:"primary",icon:(0,e.jsx)(nn.Z,{}),onClick:m,loading:u,children:"\u5BFC\u51FA"})},an=tn,C=n(23323),w=n(80148),Y=n(48928),xe=n(87749),je=n(96074),Wn={width:428,height:926,posterImg:"",title:"",role:"",username:"",time:"",roleImg:"",mainColor:"#000"},Ce="YYYY-MM-DD",rn=[{fontName:"title-font",fontUrl:"/murder-mystery-counterfoil-maker/font/title-font.ttf"},{fontName:"value-font",fontUrl:"/murder-mystery-counterfoil-maker/font/value-font.ttf"}],Fe=50,on=n(41973),sn=n(27484),R=n.n(sn),ln=function(r){var t=r.value,a=r.onChange,o=(0,j.useState)(function(){return R()(t,Ce)}),s=P()(o,2),u=s[0],l=s[1];return(0,e.jsx)(on.Z,{allowClear:!1,style:{width:"100%"},value:u,onChange:function(c){l(c),a==null||a(R()(c).format(Ce))}})},un=ln,cn=n(9783),ye=n.n(cn),dn=n(19632),W=n.n(dn),mn=n(80269),vn=n(28670),Ee=n.n(vn),Ze=n(57632),fn=function(){return Promise.all(rn.map(function(r){var t=new FontFace(r.fontName,"url(".concat(r.fontUrl,")"));document.fonts.add(t);var a=document.createElement("span");return a.innerHTML="",a.setAttribute("style","font-family: ".concat(r.fontName)),document.body.append(a),t.loaded.then(function(){})}))},gn=function(r){return new Promise(function(t,a){var o=new FileReader;o.onload=function(s){var u,l=(u=s.target)===null||u===void 0?void 0:u.result;l?t(l):a(new Error("\u6587\u4EF6\u4FE1\u606F\u83B7\u53D6\u6709\u8BEF"))},o.onerror=function(s){a(s)},o.readAsDataURL(r)})},Ie=function(r){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:10;return new Promise(function(a,o){var s=document.createElement("img");s.onload=function(){var u=new mn.Z,l=[];t===1?l.push(u.getColor(s)):l.push.apply(l,W()(u.getPalette(s,t))),a(l.map(function(m){return Ee()(m).hex()}))},s.onerror=function(u){o(u)},s.src=r})},De=function(r){return new Promise(function(t,a){var o=new Image;o.onload=function(){var s=o.width,u=o.height;t({width:s,height:u})},o.onerror=function(s){a(s)},o.src=r})},hn=function(r,t){return new Promise(function(){var a=M()(S()().mark(function o(s,u){var l,m,c,F,g,x,h;return S()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,Ie(r,2);case 2:return l=i.sent,m=P()(l,2),c=m[0],F=m[1],i.next=8,De(r);case 8:g=i.sent,x=Math.ceil(t.height-t.width/g.width*g.height+Fe),h={height:x,colors:[{color:Ee()(c).alpha(0).hex(),percent:0},{color:c,percent:Fe/x},{color:F,percent:1}].map(function(A){return y()(y()({},A),{},{id:(0,Ze.Z)()})})},s(h);case 12:case"end":return i.stop()}},o)}));return function(o,s){return a.apply(this,arguments)}}())},Xn=function(r){var t=r.colors;return"l(90) ".concat(t.map(function(a){return"".concat(a.percent,":").concat(a.color)}).join(" "))},pn=n(64082),xn=n(48689),jn=n(62370),Cn=n(65821),Fn=n(24534),yn=n(38925),En=n(71230),Zn=n(15746),In=n(29789),Se=n(32983),Ae=n(78234),Dn=n(69483),X=n.n(Dn),Sn=n(35322),An=n(93967),Pn=n.n(An),bn=jn.Z.Dragger,Bn=function(r){var t=r.value,a=r.onChange,o=r.tip,s=(0,j.useState)(),u=P()(s,2),l=u[0],m=u[1],c=(0,j.useState)(!1),F=P()(c,2),g=F[0],x=F[1],h=$(),d=(0,j.useState)([]),i=P()(d,2),A=i[0],p=i[1],K=function(){var f=M()(S()().mark(function Z(T){var b,N;return S()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return b=T.file,B.next=3,gn(b);case 3:N=B.sent,p(function(J){return[].concat(W()(J),[{id:(0,Ze.Z)(),name:b.name,url:N,date:R()().format("YYYY-MM-DD HH:mm:ss")}])}),m(N);case 6:case"end":return B.stop()}},Z)}));return function(T){return f.apply(this,arguments)}}(),O=function(){l&&(a==null||a(l),x(!1))};return(0,Ae.Z)(function(){X().getItem("imageList").then(function(f){p(f||[])})}),(0,te.Z)(function(){X().getItem("imageList").then(function(f){(0,Sn.Z)(f,A)||X().setItem("imageList",A)})},[A]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{style:t?{marginBottom:8}:void 0,children:[(0,e.jsx)(V.ZP,{onClick:function(){return x(!0)},children:t?"\u91CD\u65B0\u9009\u62E9":"\u9009\u62E9\u56FE\u7247"}),o&&(0,e.jsx)("div",{className:h.uploadTip,children:o})]}),t&&(0,e.jsx)(Cn.Z,{src:t}),(0,e.jsxs)(Fn.Z,{width:"800px",title:"\u9009\u62E9\u56FE\u7247",open:g,className:h.imageBtnModal,okText:"\u786E\u5B9A",destroyOnClose:!0,okButtonProps:{disabled:!l},maskClosable:!0,onOk:O,onCancel:function(){return x(!1)},children:[(0,e.jsx)(yn.Z,{style:{marginBottom:16},message:"\u53EF\u4E00\u6B21\u6027\u4E0A\u4F20\u5267\u672C\u5C01\u9762\u4EE5\u53CA\u89D2\u8272\u5C01\u9762\uFF0C\u518D\u901A\u8FC7\u5F39\u6846\u4E0B\u65B9\u7684\u56FE\u7247\u5217\u8868\u8FDB\u884C\u9009\u62E9",closable:!0,type:"info"}),(0,e.jsxs)(bn,{accept:"image/*",multiple:!0,customRequest:K,fileList:[],children:[(0,e.jsx)("p",{className:"ant-upload-drag-icon",children:(0,e.jsx)(pn.Z,{})}),(0,e.jsx)("p",{className:"ant-upload-text",children:"\u70B9\u51FB\u6216\u62D6\u62FD\u53EF\u6279\u91CF\u4E0A\u4F20\u56FE\u7247"})]}),(0,e.jsx)(je.Z,{}),(0,e.jsx)("div",{className:h.imageList,children:A.length?(0,e.jsx)(En.Z,{gutter:16,children:A.sort(function(f,Z){return+R()(Z.date)-+R()(f.date)}).map(function(f,Z){var T,b,N=f.url===l;return(0,e.jsx)(Zn.Z,{span:6,children:(0,e.jsxs)("div",{className:Pn()((b={},ye()(b,"image-item",!0),ye()(b,"image-item--selected",N),b)),onClick:function(){m(f.url)},children:[(0,e.jsxs)("div",{className:"image-panel",children:[N&&(0,e.jsx)(In.Z,{checked:!0,className:"image-checkbox"}),(0,e.jsx)(V.ZP,{className:"image-close-btn",icon:(0,e.jsx)(xn.Z,{}),onClick:function(B){B.stopPropagation(),p(function(J){var Te=W()(J);return Te.splice(Z,1),Te})}}),(0,e.jsx)("img",{src:f.url,draggable:!1,style:{width:"100%"}})]}),(0,e.jsxs)("div",{className:"image-info",children:[(0,e.jsx)("div",{children:f.name}),(0,e.jsx)("div",{className:"image-date",children:f.date})]})]})},(T=f.id)!==null&&T!==void 0?T:f.date)})}):(0,e.jsx)(Se.Z,{image:Se.Z.PRESENTED_IMAGE_SIMPLE,description:"\u65E0\u56FE\u7247\uFF0C\u8BF7\u5148\u4E0A\u4F20"})})]})]})},Pe=Bn,be=n(9496),Tn=n(10010),Nn=n(460),Ln=n(16042),Mn=["value","onChange"],Rn=function(r){var t=r.value,a=r.onChange,o=re()(r,Mn),s=$(),u=(0,j.useMemo)(function(){return"linear-gradient(to right, ".concat(t==null?void 0:t.map(function(c){return"".concat(c.color," ").concat(c.percent*100,"%")}).join(", "),")")},[t]),l=(0,j.useRef)(null),m=(0,Nn.Z)(l.current);return(0,e.jsxs)("div",{className:s.gradationColorPicker,children:[(0,e.jsx)("div",{className:"color-blank",ref:l,style:{background:u}}),t==null?void 0:t.map(function(c,F){var g;return(0,e.jsxs)("div",{className:"color-item",style:{left:c.percent*((g=m==null?void 0:m.width)!==null&&g!==void 0?g:0)+"px"},children:[(0,e.jsx)(Tn.Z,{}),(0,e.jsx)(xe.Z,y()({value:c.color,onChange:function(h,d){var i=(0,Ln.Z)(t);i[F].color=d,a==null||a(i)},size:"small"},o))]},c.id)})]})},On=Rn,zn=function(){var r=C.Z.useForm(),t=P()(r,1),a=t[0],o=(0,H.tT)("canvas"),s=o.config,u=o.setConfig,l=C.Z.useWatch("posterImg",a),m=(0,be.Z)(M()(S()().mark(function h(){return S()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(l){i.next=2;break}return i.abrupt("return",Promise.resolve([]));case 2:return i.next=4,Ie(l);case 4:return i.t0=i.sent,i.t1={label:"\u5267\u672C\u6D77\u62A5\u62FE\u53D6\u4E3B\u8981\u989C\u8272",colors:i.t0},i.abrupt("return",[i.t1]);case 7:case"end":return i.stop()}},h)})),{refreshDeps:[l]}),c=m.data,F=c===void 0?[]:c,g=(0,be.Z)(M()(S()().mark(function h(){var d,i;return S()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:if(l){p.next=2;break}return p.abrupt("return",!1);case 2:return p.next=4,De(l);case 4:if(d=p.sent,i=s.height/s.width,!(d.height/d.width>i)){p.next=8;break}return p.abrupt("return",!1);case 8:return p.next=10,hn(l,s);case 10:return p.abrupt("return",p.sent);case 11:case"end":return p.stop()}},h)})),{refreshDeps:[l],onSuccess:function(d){a.setFieldValue("mask",d),u(y()(y()({},s),{},{mask:d}))}}),x=g.data;return(0,e.jsxs)(C.Z,{form:a,initialValues:s,labelAlign:"left",labelCol:{span:8},wrapperCol:{span:16},onValuesChange:function(d,i){u(y()(y()({},s),i))},children:[(0,e.jsx)("p",{className:"form-title",children:"\u5267\u672C\u914D\u7F6E"}),(0,e.jsx)(C.Z.Item,{label:"\u5267\u672C",name:"title",children:(0,e.jsx)(w.Z,{placeholder:"\u8BF7\u8F93\u5165\u5267\u672C\u540D\u79F0"})}),(0,e.jsx)(C.Z.Item,{label:"\u5267\u672C\u6D77\u62A5",name:"posterImg",children:(0,e.jsx)(Pe,{tip:"\u957F\u5BBD\u6BD4\u5EFA\u8BAE \u2265 926:428 "})}),x&&(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(C.Z.Item,{label:"\u6E10\u53D8\u9AD8\u5EA6",name:["mask","height"],children:(0,e.jsx)(Y.Z,{min:0,style:{width:"100%"}})}),(0,e.jsx)(C.Z.Item,{label:"\u6E10\u53D8\u8272\u5E26",name:["mask","colors"],children:(0,e.jsx)(On,{presets:F})})]}),(0,e.jsx)(C.Z.Item,{label:"\u4E3B\u9898\u8272",name:"mainColor",getValueFromEvent:function(d,i){return i},children:(0,e.jsx)(xe.Z,{presets:F})}),(0,e.jsx)(C.Z.Item,{label:"\u65F6\u95F4",name:"time",children:(0,e.jsx)(un,{})}),(0,e.jsx)(je.Z,{}),(0,e.jsx)("p",{className:"form-title",children:"\u89D2\u8272\u914D\u7F6E"}),(0,e.jsx)(C.Z.Item,{label:"\u89D2\u8272",name:"role",children:(0,e.jsx)(w.Z,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D"})}),(0,e.jsx)(C.Z.Item,{label:"\u59D3\u540D",name:"username",children:(0,e.jsx)(w.Z,{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"})}),(0,e.jsx)(C.Z.Item,{label:"\u89D2\u8272\u5C01\u9762",name:"roleImg",children:(0,e.jsx)(Pe,{})})]})},kn=zn,Hn=function(){var r=C.Z.useForm(),t=P()(r,1),a=t[0],o=(0,H.tT)("canvas"),s=o.config,u=o.setConfig;return(0,e.jsxs)(C.Z,{form:a,initialValues:s,labelAlign:"left",labelCol:{span:8},wrapperCol:{span:16},onValuesChange:function(m,c){u(y()(y()({},s),c))},children:[(0,e.jsx)("p",{className:"form-title",children:"\u753B\u5E03\u5C3A\u5BF8\uFF08\u4E0D\u5EFA\u8BAE\u66F4\u6539\uFF09"}),(0,e.jsx)(C.Z.Item,{label:"\u957F\u5EA6",name:"height",tooltip:"\u4E0D\u5EFA\u8BAE\u66F4\u6539\uFF0C\u9ED8\u8BA4\u503C\u4E3A 926",children:(0,e.jsx)(Y.Z,{min:1,addonAfter:"px"})}),(0,e.jsx)(C.Z.Item,{label:"\u5BBD\u5EA6",name:"width",tooltip:"\u4E0D\u5EFA\u8BAE\u66F4\u6539\uFF0C\u9ED8\u8BA4\u503C\u4E3A 428",children:(0,e.jsx)(Y.Z,{min:1,addonAfter:"px"})})]})},Gn=Hn,Un=function(){var r=$();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Qe.Z,{bodyStyle:{padding:12},className:r.counterfoilSidebar,children:(0,e.jsx)(qe.Z,{items:[{label:"\u5E38\u89C4",key:"\u5E38\u89C4",children:(0,e.jsx)(kn,{})},{label:"\u6837\u5F0F",key:"\u6837\u5F0F",children:(0,e.jsx)(Gn,{})}]})}),(0,e.jsx)("div",{className:r.exportPanel,children:(0,e.jsx)("div",{style:{margin:8},children:(0,e.jsx)(an,{})})})]})},$n=Un,Kn=n(33852),Vn=n(82925);function wn(){var v=Oe(),r=(0,j.useState)(!1),t=P()(r,2),a=t[0],o=t[1];return(0,Ae.Z)(function(){fn().then(function(){o(!0)})}),(0,e.jsx)(Le.ZP,{locale:Vn.Z,children:(0,e.jsxs)(Me.Z,{className:v.homePage,children:[(0,e.jsx)("div",{className:v.sidePanel,children:(0,e.jsx)($n,{})}),(0,e.jsx)("div",{className:v.content,children:a&&(0,e.jsx)(Je,{})})]})})}}}]);

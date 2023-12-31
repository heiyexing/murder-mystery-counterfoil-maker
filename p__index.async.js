"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[866],{62900:function(Nt,J,t){t.r(J),t.d(J,{default:function(){return Lt}});var ye=t(5574),E=t.n(ye),Ee=t(28459),Ie=t(86250),Ze=t(68400),I=t.n(Ze),Z=t(70761),K=t(9361),Q,w,k,Se=function(){var r=K.Z.useToken,n=r(),a=n.token,o="300px";return{homePage:(0,Z.iv)(Q||(Q=I()([`
      height: 100vh;
      overflow: hidden;
    `]))),sidePanel:(0,Z.iv)(w||(w=I()([`
      width: `,`;
      box-shadow: `,`;
      position: relative;
    `])),o,a.boxShadow),content:(0,Z.iv)(k||(k=I()([`
      width: calc(100% - `,`);
      background: `,`;
    `])),o,a.colorBgLayout)}},f=t(67294),De=t(31989),x=t(93085),e=t(85893),Ae=function(r){var n=r.config,a=n.width,o=n.height,s=n.posterImg;return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.UL,{width:a,height:o,fill:"#fff"}),(0,e.jsx)(x.Ee,{img:s,width:a,keepAspectRatio:!0},s)]})},Be=Ae,Pe=t(97857),F=t.n(Pe),q=t(1242),Te=t(13769),Le=t.n(Te),Ne=["text"],_=function(r){var n=r.text,a=Le()(r,Ne);return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(x.xv,F()(F()({},a),{},{text:String(n)[0],fontSize:22})),(0,e.jsx)(x.xv,F()(F()({},a),{},{text:String(n).slice(1),fontSize:16,x:Number(a.x)+22}))]})};_.defaultProps={fontFamily:"\u9510\u5B57\u5DE5\u623F\u78C5\u7934\u9ED1\u7B80"};var be=_,G=27,M=20,ee=336,T=170,O=243,te=20,V=34,ne=4,ae=20,Re=function(r){var n=r.config,a=n.width,o=n.height,s=n.title,u=n.role,l=n.username,C=n.time,d=n.roleImg,y=n.mainColor,j=G,g=o-ee-G,p=a-G*2,v=j+p-T-M,D=g+M,A=(0,f.useMemo)(function(){return new q.UL({style:{x:v,y:D,width:T,height:O,radius:8}})},[T,O,v,D]),N=(0,f.useMemo)(function(){return{x:v,y:D,width:T,height:O}},[v,D,T,O]),W=[{label:"\u5267\u672C",value:s},{label:"\u89D2\u8272",value:u},{label:"\u59D3\u540D",value:l},{label:"\u65F6\u95F4",value:C}];return(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)(x.ZA,{children:[(0,e.jsx)(x.UL,{width:p,height:ee,x:j,y:g,fill:"#fff",radius:8,opacity:.9}),d&&(0,e.jsx)(x.Ee,F()({img:d,clipPath:A},N)),(0,e.jsx)(x.ZA,{children:W.map(function(b,i){var h={x:j+M,y:g+M};return(0,e.jsxs)(f.Fragment,{children:[(0,e.jsx)(be,{text:b.label,x:h.x,y:h.y+te*(i+1)+(ne+V+ae)*i,fontFamily:"title-font",fill:y}),(0,e.jsx)(x.xv,{text:b.value,x:h.x,y:h.y+(te+ne)*(i+1)+(V+ae)*i,fontFamily:"value-font",fontSize:V,textBaseline:"top"})]},b.label)})})]})})},Me=Re,H=t(82188),re,Oe=function(){return{canvasContainer:(0,Z.iv)(re||(re=I()([`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: auto;
    `])))}},He=new De.Th,Ue=function(){var r=(0,f.useRef)(He),n=(0,f.useRef)(null),a=(0,H.tT)("canvas"),o=a.config,s=a.setCanvas,u=Oe();return(0,f.useEffect)(function(){var l=n.current;l&&(window.__g_instances__=[l],s(l))},[n.current]),(0,e.jsx)("div",{className:u.canvasContainer,id:"container",children:(0,e.jsxs)(x.Xz,{width:o.width,height:o.height,renderer:r.current,ref:n,children:[(0,e.jsx)(Be,{config:o}),(0,e.jsx)(Me,{config:o})]})})},Ge=Ue,oe,se,le,ie,ue=function(){var r=K.Z.useToken,n=r(),a=n.token;return{counterfoilSidebar:(0,Z.iv)(oe||(oe=I()([`
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
    `])),a.colorTextDescription),exportPanel:(0,Z.iv)(se||(se=I()([`
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #fff;
    `]))),imageBtnModal:(0,Z.iv)(le||(le=I()([`
      .ant-upload-text {
        color: `,` !important;
        font-size: 14px !important;
      }
    `])),a.colorTextDescription),imageList:(0,Z.iv)(ie||(ie=I()([`
      max-height: 300px;
      overflow: auto;
      .image-item {
        overflow: hidden;
        cursor: pointer;
        border-radius: 8px;
        border: 1px solid #fff;
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
    `])),a.colorPrimary,a.colorTextDescription)}},Ve=t(85813),ze=t(32880),Ye=t(15009),U=t.n(Ye),$e=t(99289),ce=t.n($e),We=t(58638),me=t(10154),z=t(15867),Xe=function(){var r=(0,H.tT)("canvas"),n=r.exportor,a=r.config,o=(0,f.useState)(!1),s=E()(o,2),u=s[0],l=s[1],C=function(){var d=ce()(U()().mark(function y(){var j,g;return U()().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:if(n){v.next=3;break}return me.ZP.warning("\u753B\u5E03\u672A\u521D\u59CB\u5316\u5B8C\u6210"),v.abrupt("return");case 3:return l(!0),v.next=6,n.toCanvas({clippingRegion:new q.Ae(0,0,a.width,a.height)});case 6:j=v.sent,g=j.toDataURL(),n.downloadImage({dataURL:g,name:"".concat(a.role)}),l(!1),me.ZP.success("".concat(a.role,".png \u5BFC\u51FA\u6210\u529F"));case 11:case"end":return v.stop()}},y)}));return function(){return d.apply(this,arguments)}}();return(0,e.jsx)(z.ZP,{block:!0,type:"primary",icon:(0,e.jsx)(We.Z,{}),onClick:C,loading:u,children:"\u5BFC\u51FA"})},Je=Xe,m=t(23323),Y=t(80148),Ke=t(87749),de=t(96074),bt={width:428,height:926,posterImg:"",title:"",role:"",username:"",time:"",roleImg:"",mainColor:"#000"},ve="YYYY-MM-DD",Qe=[{fontName:"title-font",fontUrl:"/murder-mystery-counterfoil-maker/font/title-font.ttf"},{fontName:"value-font",fontUrl:"/murder-mystery-counterfoil-maker/font/value-font.ttf"}],we=t(41973),ke=t(27484),L=t.n(ke),qe=function(r){var n=r.value,a=r.onChange,o=(0,f.useState)(function(){return L()(n,ve)}),s=E()(o,2),u=s[0],l=s[1];return(0,e.jsx)(we.Z,{allowClear:!1,style:{width:"100%"},value:u,onChange:function(d){l(d),a==null||a(L()(d).format(ve))}})},_e=qe,et=t(9783),fe=t.n(et),tt=t(19632),ge=t.n(tt),nt=t(80269),at=function(){return Promise.all(Qe.map(function(r){var n=new FontFace(r.fontName,"url(".concat(r.fontUrl,")"));document.fonts.add(n);var a=document.createElement("span");return a.innerHTML="",a.setAttribute("style","font-family: ".concat(r.fontName)),document.body.append(a),n.loaded.then(function(){})}))},rt=function(r){return new Promise(function(n,a){var o=new FileReader;o.onload=function(s){var u,l=(u=s.target)===null||u===void 0?void 0:u.result;l?n(l):a(new Error("\u6587\u4EF6\u4FE1\u606F\u83B7\u53D6\u6709\u8BEF"))},o.onerror=function(s){a(s)},o.readAsDataURL(r)})},ot=function(r){return new Promise(function(n,a){var o=document.createElement("img");o.onload=function(){var s=new nt.Z;n(s.getPalette(o).map(function(u){return"rgb(".concat(u.join(" ,"),")")}))},o.onerror=function(s){a(s)},o.src=r})},Rt=function(r){return new Promise(function(n,a){var o=new Image;o.onload=function(){var s=o.width,u=o.height;return{width:s,height:u}},o.src=r})},st=t(64082),lt=t(48689),it=t(62370),ut=t(42075),ct=t(65821),mt=t(24534),dt=t(38925),vt=t(71230),ft=t(15746),gt=t(29789),he=t(32983),xe=t(78234),ht=t(77598),xt=t(69483),$=t.n(xt),jt=t(4046),pt=t(57632),Ft=t(93967),Ct=t.n(Ft),yt=it.Z.Dragger,Et=function(r){var n=r.value,a=r.onChange,o=r.tip,s=(0,f.useState)(),u=E()(s,2),l=u[0],C=u[1],d=(0,f.useState)(!1),y=E()(d,2),j=y[0],g=y[1],p=ue(),v=(0,f.useState)([]),D=E()(v,2),A=D[0],N=D[1],W=function(){var i=ce()(U()().mark(function h(P){var S,R;return U()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return S=P.file,B.next=3,rt(S);case 3:R=B.sent,N(function(X){return[].concat(ge()(X),[{id:(0,pt.Z)(),name:S.name,url:R,date:L()().format("YYYY-MM-DD HH:mm:ss")}])});case 5:case"end":return B.stop()}},h)}));return function(P){return i.apply(this,arguments)}}(),b=function(){l&&(a==null||a(l),g(!1))};return(0,xe.Z)(function(){$().getItem("imageList").then(function(i){N(i||[])})}),(0,ht.Z)(function(){$().getItem("imageList").then(function(i){(0,jt.Z)(i,A)||$().setItem("imageList",A)})},[A]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(ut.Z,{style:n?{marginBottom:12}:void 0,children:[(0,e.jsx)(z.ZP,{onClick:function(){return g(!0)},children:n?"\u91CD\u65B0\u9009\u62E9":"\u9009\u62E9\u56FE\u7247"}),o&&(0,e.jsx)("span",{children:o})]}),n&&(0,e.jsx)(ct.Z,{src:n}),(0,e.jsxs)(mt.Z,{width:"800px",title:"\u9009\u62E9\u56FE\u7247",open:j,className:p.imageBtnModal,okText:"\u786E\u5B9A",destroyOnClose:!0,okButtonProps:{disabled:!l},maskClosable:!0,onOk:b,onCancel:function(){return g(!1)},children:[(0,e.jsx)(dt.Z,{style:{marginBottom:16},message:"\u53EF\u4E00\u6B21\u6027\u4E0A\u4F20\u5267\u672C\u5C01\u9762\u4EE5\u53CA\u89D2\u8272\u5C01\u9762\uFF0C\u518D\u901A\u8FC7\u5F39\u6846\u4E0B\u65B9\u7684\u56FE\u7247\u5217\u8868\u8FDB\u884C\u9009\u62E9",closable:!0,type:"info"}),(0,e.jsxs)(yt,{accept:"image/*",multiple:!0,customRequest:W,fileList:[],children:[(0,e.jsx)("p",{className:"ant-upload-drag-icon",children:(0,e.jsx)(st.Z,{})}),(0,e.jsx)("p",{className:"ant-upload-text",children:"\u70B9\u51FB\u6216\u62D6\u62FD\u53EF\u6279\u91CF\u4E0A\u4F20\u56FE\u7247"})]}),(0,e.jsx)(de.Z,{}),(0,e.jsx)("div",{className:p.imageList,children:A.length?(0,e.jsx)(vt.Z,{gutter:16,children:A.sort(function(i,h){return+L()(h.date)-+L()(i.date)}).map(function(i,h){var P,S,R=i.url===l;return(0,e.jsx)(ft.Z,{span:6,children:(0,e.jsxs)("div",{className:Ct()((S={},fe()(S,"image-item",!0),fe()(S,"image-item--selected",R),S)),onClick:function(){C(i.url)},children:[(0,e.jsxs)("div",{className:"image-panel",children:[R&&(0,e.jsx)(gt.Z,{checked:!0,className:"image-checkbox"}),(0,e.jsx)(z.ZP,{className:"image-close-btn",icon:(0,e.jsx)(lt.Z,{}),onClick:function(B){B.stopPropagation(),N(function(X){var Ce=ge()(X);return Ce.splice(h,1),Ce})}}),(0,e.jsx)("img",{src:i.url,draggable:!1,style:{width:"100%"}})]}),(0,e.jsxs)("div",{className:"image-info",children:[(0,e.jsx)("div",{children:i.name}),(0,e.jsx)("div",{className:"image-date",children:i.date})]})]})},(P=i.id)!==null&&P!==void 0?P:i.date)})}):(0,e.jsx)(he.Z,{image:he.Z.PRESENTED_IMAGE_SIMPLE,description:"\u65E0\u56FE\u7247\uFF0C\u8BF7\u5148\u4E0A\u4F20"})})]})]})},je=Et,It=t(41428),Zt=function(){var r=m.Z.useForm(),n=E()(r,1),a=n[0],o=(0,H.tT)("canvas"),s=o.config,u=o.setConfig,l=m.Z.useWatch("posterImg",a),C=(0,It.Z)(function(){return l?ot(l):Promise.resolve([])},{refreshDeps:[l]}),d=C.data,y=d===void 0?[]:d;return(0,e.jsxs)(m.Z,{form:a,initialValues:s,labelAlign:"left",labelCol:{span:8},wrapperCol:{span:16},onValuesChange:function(g,p){u(F()(F()({},s),p))},children:[(0,e.jsx)("p",{className:"form-title",children:"\u5267\u672C\u914D\u7F6E"}),(0,e.jsx)(m.Z.Item,{label:"\u5267\u672C",name:"title",children:(0,e.jsx)(Y.Z,{placeholder:"\u8BF7\u8F93\u5165\u5267\u672C\u540D\u79F0"})}),(0,e.jsx)(m.Z.Item,{label:"\u5267\u672C\u6D77\u62A5",name:"posterImg",children:(0,e.jsx)(je,{tip:"\u56FE\u7247\u957F\u5BBD\u6BD4\u9700\u5927\u4E8E 926:428 "})}),(0,e.jsx)(m.Z.Item,{label:"\u4E3B\u9898\u8272",name:"mainColor",getValueFromEvent:function(g,p){return p},children:(0,e.jsx)(Ke.Z,{presets:[{label:"\u5267\u672C\u6D77\u62A5\u62FE\u53D6\u4E3B\u8981\u989C\u8272",colors:y}]})}),(0,e.jsx)(m.Z.Item,{label:"\u65F6\u95F4",name:"time",children:(0,e.jsx)(_e,{})}),(0,e.jsx)(de.Z,{}),(0,e.jsx)("p",{className:"form-title",children:"\u89D2\u8272\u914D\u7F6E"}),(0,e.jsx)(m.Z.Item,{label:"\u89D2\u8272",name:"role",children:(0,e.jsx)(Y.Z,{placeholder:"\u8BF7\u8F93\u5165\u89D2\u8272\u540D"})}),(0,e.jsx)(m.Z.Item,{label:"\u59D3\u540D",name:"username",children:(0,e.jsx)(Y.Z,{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D"})}),(0,e.jsx)(m.Z.Item,{label:"\u89D2\u8272\u5C01\u9762",name:"roleImg",children:(0,e.jsx)(je,{})})]})},St=Zt,pe=t(48928),Dt=function(){var r=m.Z.useForm(),n=E()(r,1),a=n[0],o=(0,H.tT)("canvas"),s=o.config,u=o.setConfig;return(0,e.jsxs)(m.Z,{form:a,initialValues:s,labelAlign:"left",labelCol:{span:8},wrapperCol:{span:16},onValuesChange:function(C,d){u(F()(F()({},s),d))},children:[(0,e.jsx)("p",{className:"form-title",children:"\u753B\u5E03\u5C3A\u5BF8\uFF08\u4E0D\u5EFA\u8BAE\u66F4\u6539\uFF09"}),(0,e.jsx)(m.Z.Item,{label:"\u957F\u5EA6",name:"height",tooltip:"\u4E0D\u5EFA\u8BAE\u66F4\u6539\uFF0C\u9ED8\u8BA4\u503C\u4E3A 926",children:(0,e.jsx)(pe.Z,{min:1,addonAfter:"px"})}),(0,e.jsx)(m.Z.Item,{label:"\u5BBD\u5EA6",name:"width",tooltip:"\u4E0D\u5EFA\u8BAE\u66F4\u6539\uFF0C\u9ED8\u8BA4\u503C\u4E3A 428",children:(0,e.jsx)(pe.Z,{min:1,addonAfter:"px"})})]})},At=Dt,Bt=function(){var r=ue();return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(Ve.Z,{bodyStyle:{padding:12},className:r.counterfoilSidebar,children:(0,e.jsx)(ze.Z,{items:[{label:"\u5E38\u89C4",key:"\u5E38\u89C4",children:(0,e.jsx)(St,{})},{label:"\u6837\u5F0F",key:"\u6837\u5F0F",children:(0,e.jsx)(At,{})}]})}),(0,e.jsx)("div",{className:r.exportPanel,children:(0,e.jsx)("div",{style:{margin:8},children:(0,e.jsx)(Je,{})})})]})},Pt=Bt,Mt=t(33852),Tt=t(82925);function Lt(){var c=Se(),r=(0,f.useState)(!1),n=E()(r,2),a=n[0],o=n[1];return(0,xe.Z)(function(){at().then(function(){o(!0)})}),(0,e.jsx)(Ee.ZP,{locale:Tt.Z,children:(0,e.jsxs)(Ie.Z,{className:c.homePage,children:[(0,e.jsx)("div",{className:c.sidePanel,children:(0,e.jsx)(Pt,{})}),(0,e.jsx)("div",{className:c.content,children:a&&(0,e.jsx)(Ge,{})})]})})}}}]);

"use strict";(self.webpackChunktwitter_users=self.webpackChunktwitter_users||[]).push([[297],{515:function(n,e,t){t.r(e),t.d(e,{default:function(){return M}});var r=t(861),o=t(439),i=t(757),a=t.n(i),s=t(791),p=t(243);function l(){return c.apply(this,arguments)}function c(){return(c=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.get("/users");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function u(n){return x.apply(this,arguments)}function x(){return(x=(0,r.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,p.Z.put("/users/".concat(e.id),e);case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}p.Z.defaults.baseURL="https://64419945fadc69b8e087e3ed.mockapi.io";var d,f=t(168),g=t(444),h=t(87),b=(0,g.ZP)(h.rU)(d||(d=(0,f.Z)(["\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n"]))),m=t(184);function Z(n){var e=n.text;return(0,m.jsx)(b,{to:"/",children:e})}var w,A,v,S,j,k,E,Y,y,B=t(433),F=t(683),Q=g.ZP.li(w||(w=(0,f.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  background-image: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n\n  text-align: center;\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 36px;\n  padding-left: 36px;\n  padding-right: 36px;\n  padding-top: 28px;\n\n  &:before {\n    content: '';\n    position: absolute;\n    top: 50%;\n    transform: translateY(-50%);\n    left: 0;\n    background-color: #ebd8ff;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n    height: 8px;\n    z-index: 0;\n    width: 380px;\n  }\n"]))),N=g.ZP.img(A||(A=(0,f.Z)(["\n  position: absolute;\n  left: 20px;\n  top: 20px;\n"]))),P=g.ZP.div(v||(v=(0,f.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80px;\n  height: 80px;\n  background-color: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n  border-radius: 50%;\n  overflow: hidden;\n  border: 8px solid #ebd8ff;\n"]))),C=g.ZP.div(S||(S=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  margin-top: 88px;\n  margin-bottom: 26px;\n"]))),U=g.ZP.p(j||(j=(0,f.Z)(["\n  font-family: 'Montserrat';\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 1.2;\n  text-transform: uppercase;\n\n  color: #ebd8ff;\n"]))),q=g.ZP.button(k||(k=(0,f.Z)(["\n  padding: 14px 28px;\n  width: 196px;\n  height: 50px;\n  background-color: ",";\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10px;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  border: 0;\n  color: #373737;\n  transition: transform 0.3s ease-in-out;\n\n  &:hover,\n  &:focus {\n    transform: scale(1.05);\n  }\n"])),(function(n){return n.isFollowing?"#5CD3A8":"#EBD8FF"})),R=t.p+"static/media/bg-img.032662a2a907475127d7.png";function T(n){var e=n.twiUser,t=(0,s.useState)(e),i=(0,o.Z)(t,2),p=i[0],l=i[1],c=p.id,x=p.followers,d=p.user,f=p.tweets,g=p.avatar,h=(0,s.useState)(!1),b=(0,o.Z)(h,2),Z=b[0],w=b[1],A=(0,s.useState)(!1),v=(0,o.Z)(A,2),S=v[0],j=v[1],k=(0,s.useState)(JSON.parse(localStorage.getItem("isFollowing-".concat(c)))||!1),E=(0,o.Z)(k,2),Y=E[0],y=E[1],B=function(n){var e=n.toString().split("");e.reverse();for(var t=3;t<e.length;t+=3)e[t]+=",";return e.reverse().join("")}(x);(0,s.useEffect)((function(){localStorage.setItem("isFollowing-".concat(c),JSON.stringify(Y))}),[c,Y]);return(0,m.jsxs)(Q,{children:[(0,m.jsx)(N,{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg==",alt:"logo",width:"76"}),(0,m.jsx)("img",{src:R,alt:"bg-img",width:"308"}),(0,m.jsx)(P,{children:(0,m.jsx)("img",{src:g,alt:d,width:"62"})}),(0,m.jsxs)(C,{children:[(0,m.jsxs)(U,{children:[" ",f," tweets"]}),(0,m.jsxs)(U,{children:[" ",B," followers"]})]})," ",S?(0,m.jsx)("p",{children:"Error"}):(0,m.jsx)(q,{type:"button",disabled:Z,name:"follow",onClick:function(){Y?(l((function(n){return(0,F.Z)((0,F.Z)({},n),{},{followers:n.followers-1})})),y(!1)):(l((function(n){return(0,F.Z)((0,F.Z)({},n),{},{followers:n.followers+1})})),y(!0));var n=function(){var n=(0,r.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,w(!0),n.next=4,u(p);case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),j(!0);case 9:return n.prev=9,w(!1),n.finish(9);case 12:case"end":return n.stop()}}),n,null,[[0,6,9,12]])})));return function(){return n.apply(this,arguments)}}();n()},isFollowing:Y,children:Y?"Following":"Follow"})]})}var D,I,L=g.ZP.div(E||(E=(0,f.Z)(["\n  text-align: center;\n  margin-bottom: 20px;\n  margin-top: 30px;\n"]))),O=g.ZP.ul(Y||(Y=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n"]))),V=g.ZP.button(y||(y=(0,f.Z)(["\n  display: block;\n  background-color: #007bff;\n  color: #fff;\n  padding: 10px 20px;\n  border-radius: 5px;\n  text-decoration: none;\n  display: inline-block;\n  border: 0;\n  margin-top: 20px;\n  margin-bottom: 20px;\n"])));function W(n){var e=n.users,t=(0,s.useState)(null),r=(0,o.Z)(t,2),i=r[0],a=r[1],p=(0,s.useState)(!1),l=(0,o.Z)(p,2),c=l[0],u=l[1],x=(0,s.useState)(!0),d=(0,o.Z)(x,2),f=d[0],g=d[1];(0,s.useEffect)((function(){a(e.slice(0,3))}),[e]);return(0,m.jsxs)(L,{children:[i&&(0,m.jsx)(O,{children:i.map((function(n){return(0,m.jsx)(T,{twiUser:n},n.id)}))}),f&&(0,m.jsxs)(V,{onClick:function(){u(!0);var n=i.slice(),t=e.slice(n.length,n.length+3);a([].concat((0,B.Z)(n),(0,B.Z)(t))),u(!1),i.length+3>=e.length&&g(!1)},disabled:c,children:[c?"Loading...":"Load more users"," "]})]})}var z=g.ZP.div(D||(D=(0,f.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-top: 30px;\n"]))),J=g.ZP.div(I||(I=(0,f.Z)(["\n  position: relative;\n  width: 380px;\n  height: 460px;\n  background-color: #ccc;\n  text-align: center;\n  border-radius: 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 36px;\n  padding-left: 36px;\n  padding-right: 36px;\n  padding-top: 28px;\n"]))),G=function(n){for(var e=n.count,t=void 0===e?3:e,r=[],o=0;o<t;o++)r.push((0,m.jsx)(J,{},o));return(0,m.jsx)(z,{children:r})},M=function(){var n=(0,s.useState)([]),e=(0,o.Z)(n,2),t=e[0],i=e[1],p=(0,s.useState)(!1),c=(0,o.Z)(p,2),u=c[0],x=c[1],d=(0,s.useState)(!1),f=(0,o.Z)(d,2),g=f[0],h=f[1],b=(0,s.useState)(!1),w=(0,o.Z)(b,2),A=w[0],v=w[1];return(0,s.useEffect)((function(){var n=function(){var n=(0,r.Z)(a().mark((function n(){var e;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,x(!0),v(!0),n.next=5,l();case 5:e=n.sent,i(e),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(0),h(!0);case 12:return n.prev=12,x(!1),v(!1),n.finish(12);case 16:case"end":return n.stop()}}),n,null,[[0,9,12,16]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Z,{text:"Back to Home"})," ",g&&"Error, please reload the page",u||A?(0,m.jsx)(G,{}):(0,m.jsx)(W,{users:t})]})}}}]);
//# sourceMappingURL=297.6d725760.chunk.js.map
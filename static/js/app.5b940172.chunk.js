(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{168:function(e,n,t){e.exports=t(218)},218:function(e,n,t){"use strict";t.r(n);t(217);var r,a,c,o,i,l,u,s,p,m,f,x,d,g,b,h,E,y,v,w,j=t(231),O=t(0),S=t.n(O),V=t(228),k=t(229),z=t(23),T=t.n(z),C=t(24),N=C.a.View(r||(r=T()(["\n  flex: 1;\n  background-color: #2980b9;\n  justify-content: center;\n  align-items: center;\n"]))),R=C.a.TouchableOpacity(a||(a=T()(["\n  padding: 10px 20px;\n  background-color: blueviolet;\n  border-radius: 20px;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.8);\n"]))),D=C.a.Text(c||(c=T()(["\n  color: white;\n  font-size: 24px;\n  font-weight: 600;\n"]))),P=function(e){var n=e.navigation.navigate;return S.a.createElement(N,null,S.a.createElement(R,{onPress:function(){return n("Game")}},S.a.createElement(D,null,"Go Play!")))},I=t(12),F=t.n(I),G=t(7),J=[{name:"tomato-pizza",content:["\ud1a0\ub9c8\ud1a0\uc18c\uc2a4","\ubaa8\uc9dc(220g)","\uc591\ud30c","\ubc84\uc12f","\ucf58","\ubbf8\ud2b8","\ud654\uc774\ud2b8\uac08\ub9ad","\uace0\uad6c\ub9c8\ubb34\uc2a4","\uce74\ub098\ub514\uc5b8/\ud398\ud37c\ub85c\ub2c8","\ubca0\uc774\ucee8","\ud30c\uc778\uc560\ud50c","\uccb4\ub2e4\uce58\uc988\uccad\ud53c\ub9dd"]},{name:"cheeze-pizza",content:["me","my","you","we"]}],q=t(18),L=t.n(q),M=t(4),W=C.a.FlatList(o||(o=T()(["\n  padding: 10px 10px;\n"]))),A=C.a.TouchableOpacity(i||(i=T()(["\n  background-color: ",";\n  padding: 5px 10px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);\n  justify-content: center;\n  align-items: center;\n  margin: 0px 5px;\n"])),(function(e){return e.selected?"gray":"#9b59b6"})),B=C.a.Text(l||(l=T()(["\n  color: #ecf0f1;\n  font-size: 18px;\n  font-weight: 600;\n"]))),H=function(e){var n=e.randomRecipe,t=e.currentRecipe,r=e.choiceRecipe,a=e.result,c=e.stateFn;return S.a.createElement(W,{contentContainerStyle:{flexGrow:1,justifyContent:"center"},data:n,extraData:t,numColumns:3,columnWrapperStyle:{justifyContent:"center"},ItemSeparatorComponent:function(){return S.a.createElement(M.a,{style:{height:10}})},keyExtractor:function(e){return e},renderItem:function(e){var n=e.item;e.index;return S.a.createElement(A,{onPress:function(){return function(e,n){if(a.includes(e)){var t=a.indexOf(e);-1!==t&&(r=a).splice(t,1)}else(r=a).push(e);c(L()(r))}(n)},selected:!!a.includes(n)},S.a.createElement(B,null,n))}})},K=t(230),Q=C.a.TouchableOpacity(u||(u=T()(["\n  justify-content: center;\n  align-items: center;\n  margin-left: 20px;\n"]))),U=C.a.Text(s||(s=T()([""]))),X=function(e){var n=e.onPress,t=e.name,r=e.color,a=e.word;return S.a.createElement(Q,{onPress:n},S.a.createElement(K.a,{name:t,size:50,color:r}),S.a.createElement(U,null,a))},Y=C.a.FlatList(p||(p=T()(["\n  padding: 10px 10px;\n"]))),Z=C.a.View(m||(m=T()(["\n  background-color: #ff7979;\n  padding: 5px 10px;\n  border-radius: 10px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);\n  justify-content: center;\n  align-items: center;\n  margin: 0px 5px;\n"]))),$=C.a.Text(f||(f=T()(["\n  color: #ecf0f1;\n  font-size: 16px;\n  font-weight: 600;\n"]))),_=function(e){var n=e.result;return S.a.createElement(Y,{data:n,numColumns:3,columnWrapperStyle:{justifyContent:"center"},ItemSeparatorComponent:function(){return S.a.createElement(M.a,{style:{height:5}})},keyExtractor:function(e){return e},renderItem:function(e){var n=e.item,t=e.index;return S.a.createElement(Z,null,S.a.createElement($,null,t+1,". ",n))}})},ee=Object(C.a)(G.a.createAnimatedComponent(M.a))(x||(x=T()(["\n  background-color: rgba(255, 255, 255, 0.8);\n  width: 300px;\n  height: 100px;\n  position: absolute;\n  z-index: 10;\n  border-radius: 25px;\n  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.8);\n  align-items: center;\n  justify-content: center;\n"]))),ne=C.a.Text(d||(d=T()(["\n  font-size: 24px;\n  font-weight: 700;\n"]))),te=C.a.Text(g||(g=T()(["\n  color: #e74c3c;\n  font-size: 20px;\n  font-weight: 600;\n"]))),re=function(e){var n=e.opacity,t=e.color,r=e.comment,a=e.record;return S.a.createElement(ee,{style:{opacity:n}},S.a.createElement(ne,{style:{color:t}},r),S.a.createElement(te,null,a))},ae=C.a.View(b||(b=T()(["\n  flex: 1;\n  background-color: #2980b9;\n  justify-content: center;\n  align-items: center;\n  padding-top: 100px;\n"]))),ce=C.a.View(h||(h=T()(["\n  flex: 1.5;\n"]))),oe=C.a.View(E||(E=T()(["\n  flex: 1.5;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n"]))),ie=C.a.View(y||(y=T()(["\n  flex: 1;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n"]))),le=C.a.View(v||(v=T()(["\n  justify-content: center;\n  align-items: center;\n"]))),ue=C.a.Text(w||(w=T()(["\n  color: white;\n  font-size: 30px;\n  font-weight: 600;\n"]))),se=function(e){var n=e.navigation.setOptions,t=Object(O.useState)(!1),r=F()(t,2),a=r[0],c=r[1],o=Object(O.useState)(0),i=F()(o,2),l=i[0],u=i[1],s=Object(O.useState)(0),p=F()(s,2),m=p[0],f=p[1],x=Object(O.useState)(0),d=F()(x,2),g=d[0],b=d[1],h=Object(O.useState)([]),E=F()(h,2),y=E[0],v=E[1],w=Object(O.useMemo)((function(){return J[g].content.slice().sort((function(){return Math.random()-.5}))}),[g]);Object(O.useEffect)((function(){if(!a){var e=setInterval((function(){return f((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}}),[a]),Object(O.useEffect)((function(){n({title:J[g].name})}),[g]);var j=Object(O.useRef)(new G.a.Value(0)).current,V=Object(O.useRef)(new G.a.Value(0)).current,k=Object(O.useRef)(new G.a.Value(0)).current,z=function(e){e.length!==J[g].content.length?G.a.sequence([G.a.spring(j,{toValue:1,useNativeDriver:!0}),G.a.spring(j,{toValue:0,useNativeDriver:!0})]).start():!function(e,n){var t=e.slice(),r=n.slice();return t.splice(2,4),r.splice(2,4),JSON.stringify(t)===JSON.stringify(r)}(J[g].content,e)?G.a.sequence([G.a.spring(k,{toValue:1,useNativeDriver:!0}),G.a.spring(k,{toValue:0,useNativeDriver:!0})]).start():(g+1!==J.length?(G.a.sequence([G.a.spring(V,{toValue:1,useNativeDriver:!0}),G.a.spring(V,{toValue:0,useNativeDriver:!0})]).start(),b((function(e){return e+1}))):(G.a.spring(V,{toValue:1,useNativeDriver:!0}).start(),c(!0)),v([]))};return 60==m&&(u((function(e){return e+1})),f(0)),S.a.createElement(ae,null,S.a.createElement(le,null,S.a.createElement(ue,null,l," : ",m.toString().padStart(2,0))),S.a.createElement(ce,null,S.a.createElement(H,{randomRecipe:w,currentRecipe:g,choiceRecipe:[],result:y,stateFn:v})),S.a.createElement(re,{opacity:j,color:"#f0932b",comment:"\ub2f5\uc744 \ubaa8\ub450 \ucc44\uc6b0\uc138\uc694"}),S.a.createElement(re,{opacity:V,color:"#6ab04c",comment:"Success!!",record:l+" : "+m.toString().padStart(2,0)}),S.a.createElement(re,{opacity:k,color:"#eb4d4b",comment:"Retry!!"}),S.a.createElement(oe,null,S.a.createElement(_,{result:y})),S.a.createElement(ie,null,S.a.createElement(X,{onPress:function(){v([])},name:"close-circle",color:"#eb4d4b",word:"Cancle"}),S.a.createElement(X,{onPress:function(){return z(y)},name:"checkmark-circle",color:"#6ab04c",word:"Check"})))},pe=Object(k.a)(),me=function(){return S.a.createElement(pe.Navigator,{screenOptions:{headerTransparent:!0,headerTintColor:"rgba(255,255,255,0.8)",headerBackTitleVisible:!1}},S.a.createElement(pe.Screen,{name:"Home",component:P}),S.a.createElement(pe.Screen,{name:"Game",component:se}))};Object(j.a)((function(){return S.a.createElement(V.a,null,S.a.createElement(me,null))}))}},[[168,1,2]]]);
//# sourceMappingURL=app.5b940172.chunk.js.map
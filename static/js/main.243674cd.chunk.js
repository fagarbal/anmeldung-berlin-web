(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{160:function(e,a,t){e.exports=t(352)},167:function(e,a,t){},352:function(e,a,t){"use strict";t.r(a);var n,l,r,o,i,c,u,b=t(0),_=t.n(b),m=(t(162),t(20)),s=(t(167),t(84)),d=t.n(s),O=t(83),p=t.n(O),f=t(135),j=t(23),v=t(136),E=t(12);!function(e){e.ONLY="ONLY",e.MAIN="MAIN",e.SECONDARY="SECONDARY"}(n||(n={})),function(e){e.NO="NO",e.MAIN="MAIN",e.SECONDARY="SECONDARY"}(l||(l={})),function(e){e.NO="NO",e.YES="YES"}(r||(r={})),function(e){e.MALE="M\xe4nnlich",e.FEMALE="Weiblich"}(o||(o={})),function(e){e.SINGLE="Ledig",e.MARRIED="Whatever"}(i||(i={})),function(e){e.PERSONAL_ID="PA",e.PASSPORT="RP",e.CHILDREN_PASSPORT="KP"}(c||(c={})),function(e){e.CHILD="Kind",e.SPOUSE="Ehegatte",e.PARTNER="Lebenspartner"}(u||(u={}));var g={new_location_property:n.MAIN,new_location_date:"07.02.2019",new_location_city:"10430, Berlin, Berlin",new_location_street:"Christburgetstrasse 11 2SF",old_location_property:n.ONLY,old_location_date:"07.02.2019",old_location_city:"10430, Berlin, Berlin",old_location_street:"Christburgetstrasse 11 2SF",family_name_a:"Garcia Balbuena",first_name_a:"Fabio",last_name_a:"Garcia",gender_a:o.MALE,born_data_a:"06.06.1989",religion_a:"Kein",citizenship_a:"Spanier",relationship_b:u.CHILD,pseudo_name_a:"Fabiosoft",family_name_b:"Garcia Balbuena",first_name_b:"Fabio",last_name_b:"Garcia",gender_b:o.FEMALE,born_data_b:"06.06.1989",religion_b:"Kein",citizenship_b:"Spanier",pseudo_name_b:"Fabiosoft",keep_previous:l.NO,additional_apartments:r.NO,civil_status:i.SINGLE,partnership:"01.02.2022, Gijon, Spanien",date:"01.01.1989",document_type_a:c.CHILDREN_PASSPORT,document_authority_a:"321321312",document_number_a:"535555331-s",document_date_a:"10.10.2020",document_valid_a:"10.10.2020",document_type_b:c.PASSPORT,document_authority_b:"321321312",document_number_b:"535555331-s",document_date_b:"10.10.2020",document_valid_b:"10.10.2020"},h=Object(b.createContext)([g,function(){}]);function y(e){var a=e.children,t=Object(b.useState)(g),n=Object(E.a)(t,2),l=n[0],r=n[1];return _.a.createElement(h.Provider,{value:[l,function(e,a){r(function(t){return Object(v.a)({},t,Object(j.a)({},e,a))})}]},a)}var w=t(138),C=t.n(w),N=t(35),A=t.n(N),S=t(140),D=t.n(S),z=t(139),M=t.n(z),R=navigator.language.split("-")[0],T=Object(b.createContext)({});function x(e){var a=e.children,t=Object(b.useState)(R),n=Object(E.a)(t,2),l=n[0],r=n[1];return _.a.createElement(T.Provider,{value:[l,r]},a)}function I(e){return function(){var a=Object(b.useState)(e),t=Object(E.a)(a,1)[0],n=Object(b.useContext)(T);return t[Object(E.a)(n,1)[0]]}}var L=t(39),P=t.n(L),Y=P()({root:{flexGrow:1}}),k=I({es:{next:"Siguiente",back:"Atras"},en:{next:"Next",back:"Back"}});function B(e){var a=e.steps,t=Object(b.useState)(0),n=Object(E.a)(t,2),l=n[0],r=n[1],o=k(),i=Y();var c=a[l](l);return _.a.createElement("div",null,c,_.a.createElement(C.a,{variant:"progress",steps:a.length,position:"bottom",activeStep:l,className:i.root,nextButton:_.a.createElement(A.a,{size:"small",onClick:function(){r(l+1)},disabled:l===a.length-1},o.next,_.a.createElement(M.a,null)),backButton:_.a.createElement(A.a,{size:"small",onClick:function(){r(l-1)},disabled:0===l},_.a.createElement(D.a,null),o.back)}))}var U=t(46),F=t.n(U),G=t(50),W=t.n(G),H=t(49),V=t.n(H);var K=function(e){var a=e.label,t=e.name,n=e.value,l=e.onChange;return _.a.createElement(V.a,null,a?_.a.createElement(W.a,{htmlFor:t},a):null,_.a.createElement(F.a,{id:t,value:n,onChange:function(e){return l&&l(t,e.target.value)}}))},J=t(82),Z=t.n(J),$=t(51),q=t.n($);var Q=function(e){var a=e.label,t=e.name,n=e.value,l=e.values,r=e.onChange;return _.a.createElement(V.a,null,a?_.a.createElement(W.a,{htmlFor:t},a):null,_.a.createElement(Z.a,{value:n,onChange:function(e){return r&&r(t,e.target.value)},inputProps:{id:t}},Object.keys(l).map(function(e){return _.a.createElement(q.a,{value:e,key:e},_.a.createElement("em",null,l[e]))})))},X=t(141),ee=t.n(X),ae=t(58),te=t.n(ae);var ne,le,re=function(e){var a=e.label,t=e.name,n=e.value,l=e.onChange;return _.a.createElement(ee.a,{label:a,value:te()(n,"DD.MM.YYYY"),format:"DD/MM/YYYY",onChange:function(e){l&&l(t,e.format("DD.MM.YYYY"))}})},oe=t(19),ie=I({es:{new_location_property:"Nueva propiedad",new_location_property_values:(ne={},Object(j.a)(ne,n.ONLY,"Unica"),Object(j.a)(ne,n.MAIN,"Principal"),Object(j.a)(ne,n.SECONDARY,"Secundaria"),ne)},en:{new_location_property:"New Property",new_location_date:"New Date",new_location_property_values:(le={},Object(j.a)(le,n.ONLY,"Only"),Object(j.a)(le,n.MAIN,"Main"),Object(j.a)(le,n.SECONDARY,"Secondary"),le)}}),ce=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function ue(){var e=ce(),a=ie(),t=Object(b.useContext)(h),n=Object(E.a)(t,2),l=n[0],r=n[1];return _.a.createElement("div",{className:e.root},_.a.createElement(Q,{value:l.new_location_property,values:a.new_location_property_values,name:"new_location_property",label:a.new_location_property,onChange:r}),_.a.createElement(re,{value:l.new_location_date,name:"new_location_date",label:"NEW_LOCATION_DATE",onChange:r}),_.a.createElement(K,{value:l.new_location_city,name:"new_location_city",label:"NEW_LOCATION_CITY",onChange:r}),_.a.createElement(K,{value:l.new_location_street,name:"new_location_street",label:"NEW_LOCATION_STREET",onChange:r}))}var be=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function _e(){var e=be(),a=Object(b.useContext)(h),t=Object(E.a)(a,2),n=t[0],l=t[1];return _.a.createElement("div",{className:e.root},_.a.createElement(Q,{value:n.old_location_property,values:{},name:"old_location_property",label:"OLD_LOCATION_PROPERTY",onChange:l}),_.a.createElement(re,{value:n.old_location_date,name:"old_location_date",label:"OLD_LOCATION_DATE",onChange:l}),_.a.createElement(K,{value:n.old_location_city,name:"old_location_city",label:"OLD_LOCATION_CITY",onChange:l}),_.a.createElement(K,{value:n.old_location_street,name:"old_location_street",label:"OLD_LOCATION_STREET",onChange:l}))}var me=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function se(){var e=me(),a=Object(b.useContext)(h),t=Object(E.a)(a,2),n=t[0],l=t[1];return _.a.createElement("div",{className:e.root},_.a.createElement(K,{value:n.family_name_a,name:"family_name_a",label:"FAMILY_NAME_A",onChange:l}),_.a.createElement(K,{value:n.first_name_a,name:"first_name_a",label:"FIRST_NAME_A",onChange:l}),_.a.createElement(K,{value:n.last_name_a,name:"last_name_a",label:"LAST_NAME_A",onChange:l}),_.a.createElement(Q,{value:n.gender_a,values:{},name:"gender_a",label:"GENDER_A",onChange:l}),_.a.createElement(K,{value:n.born_data_a,name:"born_data_a",label:"BORN_DATA_A",onChange:l}),_.a.createElement(K,{value:n.religion_a,name:"religion_a",label:"RELIGION_A",onChange:l}),_.a.createElement(K,{value:n.citizenship_a,name:"citizenship_a",label:"CITIZENSHIP_A",onChange:l}),_.a.createElement(K,{value:n.pseudo_name_a,name:"pseudo_name_a",label:"PSEUDO_NAME_A",onChange:l}))}var de=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function Oe(){var e=de(),a=Object(b.useContext)(h),t=Object(E.a)(a,2),n=t[0],l=t[1];return _.a.createElement("div",{className:e.root},_.a.createElement(Q,{value:n.relationship_b,values:{},name:"relationship_b",label:"RELATIONSHIP_B",onChange:l}),_.a.createElement(K,{value:n.family_name_b,name:"family_name_b",label:"FAMILY_NAME_B",onChange:l}),_.a.createElement(K,{value:n.first_name_b,name:"first_name_b",label:"FIRST_NAME_B",onChange:l}),_.a.createElement(K,{value:n.last_name_b,name:"last_name_b",label:"LAST_NAME_B",onChange:l}),_.a.createElement(Q,{value:n.gender_b,values:{},name:"gender_b",label:"GENDER_B",onChange:l}),_.a.createElement(K,{value:n.born_data_b,name:"born_data_b",label:"BORN_DATA_B",onChange:l}),_.a.createElement(K,{value:n.religion_b,name:"religion_b",label:"RELIGION_B",onChange:l}),_.a.createElement(K,{value:n.citizenship_b,name:"citizenship_b",label:"CITIZENSHIP_B",onChange:l}),_.a.createElement(K,{value:n.pseudo_name_b,name:"pseudo_name_b",label:"PSEUDO_NAME_B",onChange:l}))}var pe=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function fe(){var e=pe(),a=Object(b.useContext)(h),t=Object(E.a)(a,2),n=t[0],l=t[1];return _.a.createElement("div",{className:e.root},_.a.createElement(Q,{value:n.document_type_a,values:{},name:"document_type_a",label:"DOCUMENT_TYPE_A",onChange:l}),_.a.createElement(K,{value:n.document_authority_a,name:"document_authority_a",label:"DOCUMENT_AUTHORITY_A",onChange:l}),_.a.createElement(K,{value:n.document_number_a,name:"document_number_a",label:"DOCUMENT_NUMBER_A",onChange:l}),_.a.createElement(re,{value:n.document_date_a,name:"document_date_a",label:"DOCUMENT_DATE_A",onChange:l}),_.a.createElement(re,{value:n.document_valid_a,name:"document_valid_a",label:"DOCUMENT_VALID_A",onChange:l}))}var je=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function ve(){var e=je(),a=Object(b.useContext)(h),t=Object(E.a)(a,2),n=t[0],l=t[1];return _.a.createElement("div",{className:e.root},_.a.createElement(Q,{value:n.document_type_b,values:{},name:"document_type_b",label:"DOCUMENT_TYPE_b",onChange:l}),_.a.createElement(K,{value:n.document_authority_b,name:"document_authority_b",label:"DOCUMENT_bUTHORITY_b",onChange:l}),_.a.createElement(K,{value:n.document_number_b,name:"document_number_b",label:"DOCUMENT_NUMBER_b",onChange:l}),_.a.createElement(re,{value:n.document_date_b,name:"document_date_b",label:"DOCUMENT_DATE_b",onChange:l}),_.a.createElement(re,{value:n.document_valid_b,name:"document_valid_b",label:"DOCUMENT_VALID_b",onChange:l}))}var Ee=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function ge(){var e=Ee(),a=Object(b.useContext)(h),t=Object(E.a)(a,2),n=t[0],l=t[1];return _.a.createElement("div",{className:e.root},_.a.createElement(Q,{value:n.civil_status,values:{},name:"civil_status",label:"CIVIL_STATUS",onChange:l}),_.a.createElement(K,{value:n.partnership,name:"partnership",label:"PARTNERSHIP",onChange:l}))}var he=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function ye(){var e=he(),a=Object(b.useContext)(h),t=Object(E.a)(a,2),n=t[0],l=t[1];return _.a.createElement("div",{className:e.root},_.a.createElement(Q,{value:n.keep_previous,values:{},name:"keep_previous",label:"KEEP_PREVIOUS",onChange:l}),_.a.createElement(Q,{value:n.additional_apartments,values:{},name:"additional_apartments",label:"ADDITIONAL_APARTMENTS",onChange:l}))}var we=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function Ce(){var e=we(),a=Object(b.useContext)(h),t=Object(E.a)(a,2),n=t[0],l=t[1];return _.a.createElement("div",{className:e.root},_.a.createElement(re,{value:n.date,name:"date",label:"DATE",onChange:l}))}var Ne=t(7),Ae=t(61),Se=t(153),De=t(142),ze=t(6),Me=t(152),Re=t(8),Te=(t(349),t(88)),xe=t.n(Te),Ie=t(143),Le=t(144),Pe=t(145),Ye=t.n(Pe);var ke=function(e){return new Promise(function(a){var t=new Image;t.crossOrigin="anonymous",t.onload=function(){var e=document.createElement("canvas");e.width=t.naturalWidth,e.height=t.naturalHeight,e.getContext("2d").drawImage(t,0,0),a(e.toDataURL("image/png"))},t.src=e})};function Be(e){return function(a,t){var n=Reflect.getMetadata(t,a)||{};n.fontSize=e,Reflect.defineMetadata(t,n,a)}}function Ue(e,a){return function(t,n){var l=Reflect.getMetadata(n,t)||{};l.position=[e,a],Reflect.defineMetadata(n,l,t)}}function Fe(e,a,t){return function(n,l){var r=Reflect.getMetadata(l,n)||{};r.checkbox||(r.checkbox=[]),r.checkbox.push({value:e,x:a,y:t}),Reflect.defineMetadata(l,r,n)}}var Ge,We,He,Ve,Ke,Je,Ze,$e,qe,Qe,Xe,ea,aa,ta,na,la,ra,oa,ia,ca,ua,ba,_a,ma,sa,da,Oa,pa,fa,ja,va,Ea,ga,ha,ya,wa,Ca,Na,Aa,Sa,Da,za,Ma,Ra,Ta,xa,Ia,La,Pa,Ya,ka,Ba,Ua,Fa,Ga,Wa,Ha,Va,Ka,Ja,Za,$a,qa,Qa,Xa,et,at,tt,nt,lt,rt,ot,it,ct,ut,bt,_t,mt,st,dt,Ot,pt,ft,jt,vt,Et,gt,ht,yt,wt,Ct,Nt,At,St,Dt,zt,Mt,Rt,Tt,xt=function(){function e(a){var t=this;Object(Ae.a)(this,e);var n=new Promise(function(e){setTimeout(function(){var n=Object.keys(a),l=[];n.forEach(function(e){var n=Reflect.getMetadata(e,t);n&&(n.key=e,l.push(n),t[e]=a[e])}),e(l)})});Reflect.defineMetadata("pdf:configValues",n,this)}return Object(Le.a)(e,[{key:"generatePdf",value:function(){var e=Object(Ie.a)(xe.a.mark(function e(){var a,t,n,l,r,o,i=this;return xe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=Reflect.getMetadata("pdf:configValues",this),t=Reflect.getMetadata("pdf:file",this),n=Reflect.getMetadata("pdf:fontSize",this),e.next=5,ke(t);case 5:return l=e.sent,e.next=8,a;case 8:return r=e.sent,(o=new Ye.a({unit:"pt",compress:!0})).addImage(l,"PNG",0,0,595.28,841.89),r.forEach(function(e){(n&&o.setFontSize(n),e.fontSize&&o.setFontSize(e.fontSize),e.checkbox)?e.checkbox.filter(function(a){return a.value===i[e.key]}).forEach(function(e){return o.text("x",e.x,e.y)}):o.text(i[e.key],e.position[0],e.position[1])}),o.save("output.pdf"),e.abrupt("return",o.output("datauristring"));case 14:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()}]),e}(),It=(Ge=function(e,a){return function(t){Reflect.defineMetadata("pdf:file",e,t.prototype),a&&a.fontSize&&Reflect.defineMetadata("pdf:fontSize",a.fontSize,t.prototype)}}("forms/anmeldung.png",{fontSize:9}),We=Be(12),He=Fe(n.ONLY,135.5,104),Ve=Fe(n.MAIN,194.5,104),Ke=Fe(n.SECONDARY,249.5,104),Je=Ue(45,139),Ze=Ue(105,139),$e=Ue(45,168),qe=Be(12),Qe=Fe(n.ONLY,415.5,104),Xe=Fe(n.MAIN,465.5,104),ea=Fe(n.SECONDARY,518,104),aa=Ue(313,139),ta=Ue(375,139),na=Ue(313,168),la=Be(12),ra=Fe(l.NO,208.5,211),oa=Fe(l.MAIN,242.5,211),ia=Fe(l.SECONDARY,242.5,211),ca=Fe(l.MAIN,342,211),ua=Fe(l.SECONDARY,448,211),ba=Be(12),_a=Fe(r.NO,342,226),ma=Fe(r.YES,393,226),sa=Be(11),da=Ue(145,261),Oa=Ue(145,294),pa=Ue(145,315),fa=Ue(145,329),ja=Ue(145,343),va=Ue(145,357),Ea=Ue(145,371),ga=Ue(145,386),ha=Be(6),ya=Ue(208,400),wa=Be(11),Ca=Ue(145,420),Na=Ue(145,449),Aa=Ue(145,470),Sa=Ue(145,484),Da=Ue(145,498),za=Ue(145,512),Ma=Ue(145,526),Ra=Ue(145,541),Ta=Ue(45,571),xa=Ue(145,571),Ia=Ue(41,650),La=Ue(65,650),Pa=Ue(325,650),Ya=Ue(445,650),ka=Ue(510,650),Ba=Ue(41,715),Ua=Ue(65,715),Fa=Ue(325,715),Ga=Ue(445,715),Wa=Ue(510,715),Ha=Ue(325,793),Ge((Ka=function(e){function a(){var e,t;Object(Ae.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return t=Object(Se.a)(this,(e=Object(De.a)(a)).call.apply(e,[this].concat(l))),Object(Ne.a)(t,"new_location_property",Ja,Object(ze.a)(t)),Object(Ne.a)(t,"new_location_date",Za,Object(ze.a)(t)),Object(Ne.a)(t,"new_location_city",$a,Object(ze.a)(t)),Object(Ne.a)(t,"new_location_street",qa,Object(ze.a)(t)),Object(Ne.a)(t,"old_location_property",Qa,Object(ze.a)(t)),Object(Ne.a)(t,"old_location_date",Xa,Object(ze.a)(t)),Object(Ne.a)(t,"old_location_city",et,Object(ze.a)(t)),Object(Ne.a)(t,"old_location_street",at,Object(ze.a)(t)),Object(Ne.a)(t,"keep_previous",tt,Object(ze.a)(t)),Object(Ne.a)(t,"additional_apartments",nt,Object(ze.a)(t)),Object(Ne.a)(t,"family_name_a",lt,Object(ze.a)(t)),Object(Ne.a)(t,"first_name_a",rt,Object(ze.a)(t)),Object(Ne.a)(t,"last_name_a",ot,Object(ze.a)(t)),Object(Ne.a)(t,"gender_a",it,Object(ze.a)(t)),Object(Ne.a)(t,"born_data_a",ct,Object(ze.a)(t)),Object(Ne.a)(t,"religion_a",ut,Object(ze.a)(t)),Object(Ne.a)(t,"citizenship_a",bt,Object(ze.a)(t)),Object(Ne.a)(t,"pseudo_name_a",_t,Object(ze.a)(t)),Object(Ne.a)(t,"relationship_b",mt,Object(ze.a)(t)),Object(Ne.a)(t,"family_name_b",st,Object(ze.a)(t)),Object(Ne.a)(t,"first_name_b",dt,Object(ze.a)(t)),Object(Ne.a)(t,"last_name_b",Ot,Object(ze.a)(t)),Object(Ne.a)(t,"gender_b",pt,Object(ze.a)(t)),Object(Ne.a)(t,"born_data_b",ft,Object(ze.a)(t)),Object(Ne.a)(t,"religion_b",jt,Object(ze.a)(t)),Object(Ne.a)(t,"citizenship_b",vt,Object(ze.a)(t)),Object(Ne.a)(t,"pseudo_name_b",Et,Object(ze.a)(t)),Object(Ne.a)(t,"civil_status",gt,Object(ze.a)(t)),Object(Ne.a)(t,"partnership",ht,Object(ze.a)(t)),Object(Ne.a)(t,"document_type_a",yt,Object(ze.a)(t)),Object(Ne.a)(t,"document_authority_a",wt,Object(ze.a)(t)),Object(Ne.a)(t,"document_number_a",Ct,Object(ze.a)(t)),Object(Ne.a)(t,"document_date_a",Nt,Object(ze.a)(t)),Object(Ne.a)(t,"document_valid_a",At,Object(ze.a)(t)),Object(Ne.a)(t,"document_type_b",St,Object(ze.a)(t)),Object(Ne.a)(t,"document_authority_b",Dt,Object(ze.a)(t)),Object(Ne.a)(t,"document_number_b",zt,Object(ze.a)(t)),Object(Ne.a)(t,"document_date_b",Mt,Object(ze.a)(t)),Object(Ne.a)(t,"document_valid_b",Rt,Object(ze.a)(t)),Object(Ne.a)(t,"date",Tt,Object(ze.a)(t)),t}return Object(Me.a)(a,e),a}(xt),Ja=Object(Re.a)(Ka.prototype,"new_location_property",[We,He,Ve,Ke],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Za=Object(Re.a)(Ka.prototype,"new_location_date",[Je],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),$a=Object(Re.a)(Ka.prototype,"new_location_city",[Ze],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),qa=Object(Re.a)(Ka.prototype,"new_location_street",[$e],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Qa=Object(Re.a)(Ka.prototype,"old_location_property",[qe,Qe,Xe,ea],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Xa=Object(Re.a)(Ka.prototype,"old_location_date",[aa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),et=Object(Re.a)(Ka.prototype,"old_location_city",[ta],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),at=Object(Re.a)(Ka.prototype,"old_location_street",[na],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),tt=Object(Re.a)(Ka.prototype,"keep_previous",[la,ra,oa,ia,ca,ua],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),nt=Object(Re.a)(Ka.prototype,"additional_apartments",[ba,_a,ma],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),lt=Object(Re.a)(Ka.prototype,"family_name_a",[sa,da],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),rt=Object(Re.a)(Ka.prototype,"first_name_a",[Oa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ot=Object(Re.a)(Ka.prototype,"last_name_a",[pa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),it=Object(Re.a)(Ka.prototype,"gender_a",[fa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ct=Object(Re.a)(Ka.prototype,"born_data_a",[ja],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ut=Object(Re.a)(Ka.prototype,"religion_a",[va],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),bt=Object(Re.a)(Ka.prototype,"citizenship_a",[Ea],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_t=Object(Re.a)(Ka.prototype,"pseudo_name_a",[ga],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),mt=Object(Re.a)(Ka.prototype,"relationship_b",[ha,ya],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),st=Object(Re.a)(Ka.prototype,"family_name_b",[wa,Ca],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),dt=Object(Re.a)(Ka.prototype,"first_name_b",[Na],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ot=Object(Re.a)(Ka.prototype,"last_name_b",[Aa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),pt=Object(Re.a)(Ka.prototype,"gender_b",[Sa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ft=Object(Re.a)(Ka.prototype,"born_data_b",[Da],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),jt=Object(Re.a)(Ka.prototype,"religion_b",[za],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),vt=Object(Re.a)(Ka.prototype,"citizenship_b",[Ma],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Et=Object(Re.a)(Ka.prototype,"pseudo_name_b",[Ra],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),gt=Object(Re.a)(Ka.prototype,"civil_status",[Ta],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),ht=Object(Re.a)(Ka.prototype,"partnership",[xa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),yt=Object(Re.a)(Ka.prototype,"document_type_a",[Ia],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),wt=Object(Re.a)(Ka.prototype,"document_authority_a",[La],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ct=Object(Re.a)(Ka.prototype,"document_number_a",[Pa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Nt=Object(Re.a)(Ka.prototype,"document_date_a",[Ya],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),At=Object(Re.a)(Ka.prototype,"document_valid_a",[ka],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),St=Object(Re.a)(Ka.prototype,"document_type_b",[Ba],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Dt=Object(Re.a)(Ka.prototype,"document_authority_b",[Ua],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),zt=Object(Re.a)(Ka.prototype,"document_number_b",[Fa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Mt=Object(Re.a)(Ka.prototype,"document_date_b",[Ga],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Rt=Object(Re.a)(Ka.prototype,"document_valid_b",[Wa],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Tt=Object(Re.a)(Ka.prototype,"date",[Ha],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Va=Ka))||Va),Lt=Object(oe.a)({root:{display:"flex",flexDirection:"column"}});function Pt(){var e=Lt(),a=Object(b.useContext)(h),t=Object(E.a)(a,1)[0];return _.a.createElement("div",{className:e.root},_.a.createElement(A.a,{variant:"contained",color:"primary",onClick:function(){new It(t).generatePdf()}},"Download PDF"))}var Yt=t(148),kt=t.n(Yt),Bt=t(85),Ut=t.n(Bt),Ft=t(34),Gt=t.n(Ft),Wt=t(47),Ht=t.n(Wt),Vt=t(149),Kt=t.n(Vt),Jt=t(151),Zt=Object(Jt.a)(b,{useCssModules:!1}),$t=P()({grow:{flexGrow:1}});function qt(){var e=Object(b.useContext)(T),a=Object(E.a)(e,2),t=a[0],n=a[1],l=Object(b.useState)(null),r=Object(E.a)(l,2),o=r[0],i=r[1],c=Object(b.useState)("en"===t?"gb":t),u=Object(E.a)(c,2),m=u[0],s=u[1],d=$t();function O(e,a){s(e),n(a),i(null)}return _.a.createElement(kt.a,{position:"static",color:"primary"},_.a.createElement(Ut.a,{variant:"dense"},_.a.createElement(Gt.a,{variant:"h6",color:"inherit"},"Anmeldung Berlin"),_.a.createElement("div",{className:d.grow}),_.a.createElement(Ht.a,{onClick:function(e){i(e.currentTarget)}},_.a.createElement(Zt,{code:m}))),_.a.createElement(Kt.a,{anchorEl:o,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},onClose:function(){i(null)},open:Boolean(o)},_.a.createElement(q.a,{onClick:function(){return O("es","es")}},_.a.createElement(Zt,{code:"es"})),_.a.createElement(q.a,{onClick:function(){return O("gb","en")}},_.a.createElement(Zt,{code:"gb"}))))}function Qt(){return _.a.createElement(_.a.Fragment,null,_.a.createElement(qt,null),_.a.createElement(B,{steps:[function(){return _.a.createElement(ue,null)},function(){return _.a.createElement(_e,null)},function(){return _.a.createElement(ye,null)},function(){return _.a.createElement(ge,null)},function(){return _.a.createElement(se,null)},function(){return _.a.createElement(Oe,null)},function(){return _.a.createElement(fe,null)},function(){return _.a.createElement(ve,null)},function(){return _.a.createElement(Ce,null)},function(){return _.a.createElement(Pt,null)}]}))}var Xt=t(48),en=t(150),an=t.n(en),tn=Object(Xt.createMuiTheme)({palette:{primary:an.a},typography:{useNextVariants:!0}});var nn=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ln(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}Object(m.render)(_.a.createElement(function(){return _.a.createElement(p.a,{utils:f.a},_.a.createElement(d.a,{theme:tn},_.a.createElement(y,null,_.a.createElement(x,null,_.a.createElement(Qt,null)))))},null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");nn?(function(e,a){fetch(e).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ln(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):ln(a,e)})}}()}},[[160,1,2]]]);
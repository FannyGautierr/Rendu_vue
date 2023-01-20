(function(){"use strict";var e={1687:function(e,t,n){var r=n(9963),o=n(6252);const a={class:"h-20 bg-gray-800 flex justify-center items-center gap-20 m-center"};function l(e,t){const n=(0,o.up)("router-link"),r=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("nav",a,[(0,o.Wm)(n,{to:"/clavier",class:"text-lg text-white"},{default:(0,o.w5)((()=>[(0,o.Uk)("Clavier")])),_:1}),(0,o.Wm)(n,{to:"/journal",class:"text-lg text-white"},{default:(0,o.w5)((()=>[(0,o.Uk)("Journal")])),_:1}),(0,o.Wm)(n,{to:"/contact",class:"text-lg text-white"},{default:(0,o.w5)((()=>[(0,o.Uk)("Contacts")])),_:1})]),(0,o.Wm)(r)],64)}var c=n(3744);const s={},u=(0,c.Z)(s,[["render",l]]);var i=u,m=n(2201),d=n(3577);const b={class:"border-1 border-white border p-4"};function f(e,t,n,r,a,l){return(0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.journal,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"text-white m-4",key:t},[(0,o._)("div",b,[(0,o._)("span",null,(0,d.zw)(e.name)+" vous a appeler le "+(0,d.zw)(e.date)+" à "+(0,d.zw)(e.hour),1)])])))),128)}var p={name:"JournalView",components:{},computed:{journal(){return this.$store.state.journal}}};const h=(0,c.Z)(p,[["render",f]]);var x=h;const w={key:0,class:"personn-name"},g={key:0,class:"flex flex-col gap-4 justify-center items-center"},v={class:"text-white text-2xl border-b-2 m-4"},y={class:"text-gray-900"},k={key:1,class:"flex flex-col gap-4 justify-center items-center"},_=(0,o._)("span",{class:"text-white text-2xl border-b-2 m-4"},"Inconnu",-1),j={class:"text-gray-900"},C={class:"grid gap-2 grid-cols-3 w-1/2 m-center"};function N(e,t,n,r,a,l){const c=(0,o.up)("displayNumber"),s=(0,o.up)("CallButton");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(c),l.number.length<11?((0,o.wg)(),(0,o.iD)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.contacts,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t},[e.number===l.number?((0,o.wg)(),(0,o.iD)("div",g,[(0,o._)("span",v,(0,d.zw)(e.name),1),(0,o.Wm)(s,{number:l.number,name:e.name},null,8,["number","name"]),(0,o._)("span",y,(0,d.zw)(a.find=!0),1)])):(0,o.kq)("",!0)])))),128))])):(0,o.kq)("",!0),l.number.length<11&&!a.find?((0,o.wg)(),(0,o.iD)("div",k,[_,(0,o.Wm)(s,{number:l.number,name:l.number},null,8,["number","name"]),(0,o._)("span",j,(0,d.zw)(a.find=!1),1)])):(0,o.kq)("",!0),(0,o._)("div",C,[(0,o._)("div",{onClick:t[0]||(t[0]=e=>l.addNumber(1)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"1"),(0,o._)("div",{onClick:t[1]||(t[1]=e=>l.addNumber(2)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"2"),(0,o._)("div",{onClick:t[2]||(t[2]=e=>l.addNumber(3)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"3"),(0,o._)("div",{onClick:t[3]||(t[3]=e=>l.addNumber(4)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"4"),(0,o._)("div",{onClick:t[4]||(t[4]=e=>l.addNumber(5)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"5"),(0,o._)("div",{onClick:t[5]||(t[5]=e=>l.addNumber(6)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"6"),(0,o._)("div",{onClick:t[6]||(t[6]=e=>l.addNumber(7)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"7"),(0,o._)("div",{onClick:t[7]||(t[7]=e=>l.addNumber(8)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"8"),(0,o._)("div",{onClick:t[8]||(t[8]=e=>l.addNumber(9)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center drop-shadow-2xl text-2xl font-bold"},"9"),(0,o._)("div",{onClick:t[9]||(t[9]=e=>l.addNumber(0)),class:"p-2 bg-gray-800 rounded-full w-20 h-20 text-white m-center flex items-center justify-center col-start-2 drop-shadow-2xl text-2xl font-bold"},"0")]),(0,o._)("div",{onClick:t[10]||(t[10]=e=>l.deleteNumber()),class:"text-xl font-bold bg-red-300 w-1/3 h-20 my-5 m-center rounded-full flex items-center justify-center text-red-500"},"Delete")],64)}const D={class:"h-20 bg-gray-800 border-2 border-solid border-black m-10 text-white text-2xl flex justify-center items-center font-bold"};function F(e,t,n,r,a,l){return(0,o.wg)(),(0,o.iD)("div",D,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.number,((e,t)=>((0,o.wg)(),(0,o.iD)("span",{key:t},(0,d.zw)(e),1)))),128))])}var O={name:"displayNumber",computed:{number(){return this.$store.state.number}}};const z=(0,c.Z)(O,[["render",F]]);var $=z;const H=(0,o._)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-10 h-10 text-white"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"})],-1),W=[H];function Y(e,t,n,r,a,l){return(0,o.wg)(),(0,o.iD)("button",{onClick:t[0]||(t[0]=e=>l.callSomeone()),class:"m-10 p-4"},W)}var S={name:"CallButton",props:["number","name"],data(){return{callForm:{name:this.name,number:this.number,date:"",hour:""}}},methods:{callSomeone(){this.$store.commit("callSomeone",this.callForm)}}};const Z=(0,c.Z)(S,[["render",Y]]);var B=Z,U={name:"ClavierView",data(){return{find:!1}},methods:{addNumber(e){this.$store.commit("addNumber",e)},deleteNumber(){this.$store.commit("deleteNumber")}},computed:{number(){return this.$store.state.number},contacts(){return this.$store.state.contacts}},components:{displayNumber:$,CallButton:B}};const V=(0,c.Z)(U,[["render",N]]);var K=V;const M={class:"mt-10"},q={class:"home"},A=(0,o._)("h1",{class:"text-white text-2xl mt-20"},"Your contact",-1),J={class:"text-white text-2xl"},T={class:"text-white text-2xl"};function L(e,t,n,r,a,l){const c=(0,o.up)("router-link"),s=(0,o.up)("CallButton");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",M,[(0,o.Wm)(c,{to:"/contactForm",class:"text-black text-2xl p-2 bg-white"},{default:(0,o.w5)((()=>[(0,o.Uk)("+ Add a new Contact")])),_:1})]),(0,o._)("div",q,[A,((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(l.contacts,((e,t)=>((0,o.wg)(),(0,o.iD)("div",{key:t,class:"flex flex-row items-center justify-center gap-10"},[(0,o._)("h2",J,(0,d.zw)(e.name),1),(0,o._)("p",T,(0,d.zw)(e.number),1),(0,o.Wm)(s,{number:e.number,name:e.name},null,8,["number","name"])])))),128))])],64)}var P={name:"ContactView",components:{CallButton:B},computed:{contacts(){return this.$store.state.contacts}}};const E=(0,c.Z)(P,[["render",L]]);var I=E;const G=(0,o._)("input",{type:"submit",value:"+ Add",class:"p-2 rounded-xl w-1/3 text-lg"},null,-1);function Q(e,t,n,a,l,c){return(0,o.wg)(),(0,o.iD)("form",{action:"",onSubmit:t[2]||(t[2]=(0,r.iM)((e=>c.submitForm()),["prevent"])),class:"flex flex-col justify-items items-center gap-4 p-4 bg-gray-800 w-1/2 m-center mt-10"},[(0,o.wy)((0,o._)("input",{type:"text",placeholder:"name","onUpdate:modelValue":t[0]||(t[0]=e=>l.contactForm.name=e),class:"p-2"},null,512),[[r.nr,l.contactForm.name]]),(0,o.wy)((0,o._)("input",{type:"tel",placeholder:"phone number","onUpdate:modelValue":t[1]||(t[1]=e=>l.contactForm.number=e),class:"p-2"},null,512),[[r.nr,l.contactForm.number]]),G],32)}n(7658);var R={name:"ContactForm",data(){return{contactForm:{name:"",number:""}}},methods:{submitForm(){this.$store.commit("submitForm",this.contactForm),this.contactForm={name:"",number:""},this.$router.push("contact")}}};const X=(0,c.Z)(R,[["render",Q]]);var ee=X;const te=[{path:"/",name:"clavier",component:K},{path:"/journal",name:"about",component:x},{path:"/clavier",name:"clavier",component:K},{path:"/contact",name:"contact",component:I},{path:"/contactForm",name:"contactForm",component:ee}],ne=(0,m.p7)({history:(0,m.r5)(),routes:te});var re=ne,oe=n(3907),ae=(0,oe.MT)({state:{contacts:[{name:"Fanny",number:"0724569876"},{name:"Lucas",number:"0990876543"}],journal:[{date:"21/11/2023",hour:"21h32",name:"Fanny"}],number:""},getters:{},mutations:{addNumber(e,t){e.number.length<10&&(e.number+=t)},submitForm(e,t){e.contacts.push(t)},callSomeone(e,t){var n=new Date,r=(new Date).toJSON().slice(0,10).replace(/-/g,"/"),o=n.getHours()+":"+n.getMinutes()+":"+n.getSeconds();t.date=r,t.hour=o,e.journal.push(t)},deleteNumber(e){e.number=e.number.slice(0,-1)}},actions:{},modules:{}});(0,r.ri)(i).use(ae).use(re).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var l=1/0;for(i=0;i<e.length;i++){r=e[i][0],o=e[i][1],a=e[i][2];for(var c=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(c=!1,a<l&&(l=a));if(c){e.splice(i--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var i=e.length;i>0&&e[i-1][2]>a;i--)e[i]=e[i-1];e[i]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,l=r[0],c=r[1],s=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var i=s(n)}for(t&&t(r);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(i)},r=self["webpackChunkrendu_vue"]=self["webpackChunkrendu_vue"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1687)}));r=n.O(r)})();
//# sourceMappingURL=app.c680def3.js.map
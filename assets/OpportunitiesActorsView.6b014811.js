import{_ as f,e as m,f as g,B as x,T as y,h as v,o as r,c as n,b as e,w as b,F as p,r as u,G as w,H as S,d as D,t as a,E as B}from"./index.94d5233a.js";const k=l=>(w("data-v-780af85c"),l=l(),S(),l),O=k(()=>e("div",{class:"flex flex-col w-full px-20 sm:px-44 mt-14 mb-6 gap-4"},[e("h1",{class:"text-primary text-4xl sm:text-5xl font-semibold text-center tacking-wide"},"Opportunities to Act"),e("p",{class:"text-md text-gray-500"},"On this page, you will find a list of current open roles for student film sets. These roles range from directing and producing to cinematography and editing, and offer a unique opportunity for you to gain valuable experience and build your portfolio while working on a variety of exciting projects with a team of talented and dedicated student filmmakers."),e("p",{class:"text-md text-gray-500"},"To apply for a role, simply email the contact listed on the position and production you are interested in and be sure to mention the specific role.")],-1)),T={class:"productions"},E={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"},V={class:"bg-white shadow rounded-lg p-6 flex flex-col"},A={class:"text-2xl text-primary-light font-bold mb-2"},I={class:"text-gray-700 mb-2"},$={class:"text-gray-700 mb-2"},F={class:"text-gray-700 mb-2"},j=B("Contact: "),L=["href"],N={class:"text-sm text-gray-700 mb-6 italic"},q={class:"list-disc px-5"},C={class:"text-md font-bold"},G={class:"text-gray-700"},H={__name:"OpportunitiesActorsView",setup(l){const _=m([]);g(async()=>{const c=await x(y(D,"productions"));let o=[];c.forEach(s=>{const t={id:s.id,title:s.data().title,director:s.data().director,description:s.data().description,shootStart:s.data().shootStart,shootEnd:s.data().shootEnd,positions:s.data().positions,contact:s.data().contact,roles:s.data().roles};t.roles&&Object.keys(t.roles).length>0&&o.push(t)}),_.value=o});function h(c){try{if(c==="TBD")return"TBD";const o=c.toDate(),s=o.toLocaleString("default",{month:"long"}),t=o.getDate();let i="th";t===1||t===21||t===31?i="st":t===2||t===22?i="nd":(t===3||t===23)&&(i="rd");const d=o.getFullYear();return`${s} ${t}${i}, ${d}`}catch(o){return console.log(o),"TBD"}}return(c,o)=>{const s=v("auto-animate");return r(),n(p,null,[O,e("div",T,[b((r(),n("div",E,[(r(!0),n(p,null,u(_.value,t=>(r(),n("div",V,[e("h2",A,a(t.title),1),e("p",I,"dir. "+a(t.director),1),e("p",$,"Shooting Period: "+a(h(t.shootStart))+" to "+a(h(t.shootEnd)),1),e("p",F,[j,e("a",{class:"text-primary-light font-medium underline decoration-2",href:"mailto:"+t.contact},a(t.contact),9,L)]),e("p",N,a(t.description),1),e("ul",q,[(r(!0),n(p,null,u(t.roles,(i,d)=>(r(),n("li",{key:d,class:"mb-2"},[e("h3",C,a(d),1),e("p",G,a(i),1)]))),128))])]))),256))])),[[s]])])],64)}}};var P=f(H,[["__scopeId","data-v-780af85c"]]);export{P as default};

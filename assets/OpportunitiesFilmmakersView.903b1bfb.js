import{e as m,f,B as g,T as x,h as _,o as i,c as s,w as v,F as d,r as u,a as y,d as w,b as n,t as r,E as k}from"./index.94d5233a.js";const S=y('<div class="flex flex-col w-full px-20 sm:px-44 mt-14 gap-4"><h1 class="text-primary text-4xl sm:text-5xl font-semibold text-center tacking-wide">Opportunities to Join a Set</h1><p class="text-md text-gray-500">On this page, you will find a list of current open roles for student film sets. These roles range from directing and producing to cinematography and editing, and offer a unique opportunity for you to gain valuable experience and build your portfolio while working on a variety of exciting projects with a team of talented and dedicated student filmmakers.</p><p class="text-md text-gray-500">To apply for a role, simply email the contact listen on the position and production you are interested in.</p><p class="text-md text-gray-500">We encourage all students, regardless of their major or experience level, to apply. We value diversity and are committed to creating a welcoming and inclusive environment for all. We look forward to receiving your application and potentially working with you on a film set in the near future!</p></div>',1),b={class:"grid grid-cols-3 gap-16 mt-16 m-auto max-w-3xl"},E={class:"text-primary-light text-3xl font-extrabold tracking-tighter sm:text-4xl mb-3"},D={class:"font-medium italic text-lg"},B={class:"text-gray-500"},M=k("Contact: "),O=["href"],F={__name:"OpportunitiesFilmmakersView",setup(T){const h=m([]),p=m(new Map);return f(async()=>{const l=await g(x(w,"productions"));let c=[],a=new Map;l.forEach(e=>{const o={id:e.id,title:e.data().title,shootStart:e.data().shootStart,shootEnd:e.data().shootEnd,positions:e.data().positions,contact:e.data().contact};c.push(o);for(const t of o.positions)a.has(t)?a.get(t).push(o):a.set(t,[o])}),h.value=c,p.value=a}),(l,c)=>{const a=_("auto-animate");return i(),s(d,null,[S,v((i(),s("div",b,[(i(!0),s(d,null,u(p.value,([e,o])=>(i(),s("div",{class:"col-span-1",key:l.index},[n("h2",E,r(e),1),(i(!0),s(d,null,u(o,t=>(i(),s("div",{class:"mb-4",key:t.id},[n("p",D,' "'+r(t.title)+'"',1),n("p",B,"Shooting Period: "+r(typeof t.shootStart=="string"?t.shootStart:t.shootStart.toDate().toDateString())+" to "+r(typeof t.shootEnd=="string"?t.shootEnd:t.shootEnd.toDate().toDateString()),1),n("p",null,[M,n("a",{class:"text-primary-light font-medium underline decoration-2",href:"mailto:"+t.contact},r(t.contact),9,O)])]))),128))]))),128))])),[[a]])],64)}}};export{F as default};
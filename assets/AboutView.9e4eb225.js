import{_ as m,B as p,T as x,d as g,o as a,c as i,b as e,F as n,r as d,a as h,t as l}from"./index.94d5233a.js";const u={data(){return{leadership:[],members:[]}},mounted(){this.fetchMembersFromFirestore()},methods:{async fetchMembersFromFirestore(){try{(await p(x(g,"members"))).forEach(s=>{const r={name:s.data().name,email:s.data().email,classYear:s.data().classYear,role:s.data().role,imageURL:s.data().imageURL};s.data().role?this.leadership.push(r):this.members.push(r)})}catch(o){console.log(o)}}}},y={class:"about"},f={class:"bg-white"},_={class:"flex flex-col"},b=h('<div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-16"><div class="gap-10 flex flex-col md:flex-row md:gap-30"><div class="flex-1 space-y-5 sm:space-y-4"><h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">About Us</h2><p class="text-md text-gray-500">The Yale Cinematic Productions - A Student Alliance (&quot;The Cinemat&quot;) is a 501(c)3 focused on film production education through technical training and community building.</p><p class="text-md text-gray-500">We are Yale University\u2019s only film production organization. Our mission is to provide accessible practical film education and support film productions on campus with technical know-how, equipment, and financial aid.</p><p class="text-sm italic text-gray-500">Founded in 2021 by Annaelise Kennedy in association with Evelyn Larson and the \u2018Founding Members\u2019 below:</p><ul><li class="text-sm text-gray-500">Jonas Kilga (Vice President)</li><li class="text-sm text-gray-500">Charlie Gleberman (Director of Development/Developed Workshops)</li><li class="text-sm text-gray-500">Annelise Ratner (Developed Workshops)</li><li class="text-sm text-gray-500">Kari Hustad (Head of Education)</li><li class="text-sm text-gray-500">Maggie Schyner (Director of Marketing &amp; Communications)</li></ul></div><div class="flex-1 space-y-5 sm:space-y-4"><h2 class="text-3xl font-extrabold tracking-tight sm:text-4xl">Offerings</h2><ul class="list-disc px-6"><li class="text-md text-gray-500">Biannaul 24-hour Film Festival</li><li class="text-md text-gray-500">Workshops on a variety of technical and artistic film skills</li><li class="text-md text-gray-500">Hands-on production opportunities to apply skills learned in workshops</li><li class="text-md text-gray-500">Community building events, including trivia nights, meet and greets, screenings, and more</li><li class="text-md text-gray-500">Promotional, financial, technical, and material support for film productions on campus</li><li class="text-md text-gray-500">A Fro-Film curriculum, specifically mentoring first-years through pre-production, production, and post</li></ul></div></div></div><div class="pb-12 px-6 lg:px-8 lg:pb-18 max-w-7xl self-center"><p class="text-lg text-primary text-center">Our continous support to the Yale community is in great thanks to our affiliation with <a class="text-primary-light font-medium underline decoration-2" href="https://ccam.yale.edu/" target="_blank" rel="noopener noreferrer"> Yale\u2019s Center for Collaborative Arts and Media (CCAM) </a> and <a class="text-primary-light font-medium underline decoration-2" href="https://fms.yale.edu/" target="_blank" rel="noopener noreferrer"> Yale\u2019s Film and Media Studies Program </a>.</p></div><hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">',3),v={class:"mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-18"},k={class:"grid grid-cols-1 gap-12 lg:grid-cols-3 lg:gap-8"},w=e("div",{class:"space-y-5 sm:space-y-4"},[e("h2",{class:"text-3xl font-bold tracking-tight sm:text-4xl"},"Meet our leadership"),e("p",{class:"text-xl text-gray-500"},"The 2022-2023 board is incredibly excited to support The Cinemat through the academic year. Please reach out if you have any questions!")],-1),F={class:"lg:col-span-2"},C={role:"list",class:"space-y-12 sm:grid sm:grid-cols-2 sm:gap-12 sm:space-y-0 lg:gap-x-8"},M={class:"flex items-center space-x-4 lg:space-x-6"},A=["src"],T={class:"space-y-1 text-lg font-medium leading-6"},Y={class:"text-indigo-600"},B=e("hr",{class:"h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"},null,-1),D={class:"mx-auto max-w-7xl py-12 px-6 text-center lg:px-8 lg:py-18"},L={class:"space-y-8 sm:space-y-12"},P=e("div",{class:"space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl"},[e("h2",{class:"text-3xl font-bold tracking-tight sm:text-4xl"},"Members"),e("p",{class:"text-xl text-gray-500"},"The 2022-2023 memeber cohort. Take a look at this page for some information on how to become a member.")],-1),S={role:"list",class:"mx-auto grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-4 md:gap-x-6 lg:max-w-5xl lg:gap-x-8 lg:gap-y-12 xl:grid-cols-6"},U={class:"space-y-4"},q={class:"space-y-2"},E={class:"text-xs font-medium lg:text-sm"},R={class:"text-indigo-600"};function V(o,s,r,W,c,H){return a(),i("div",y,[e("div",f,[e("div",_,[b,e("div",v,[e("div",k,[w,e("div",F,[e("ul",C,[(a(!0),i(n,null,d(c.leadership,t=>(a(),i("li",{key:t.name},[e("div",M,[e("img",{class:"h-16 w-16 rounded-full lg:h-20 lg:w-20 object-cover",src:t.imageURL,alt:""},null,8,A),e("div",T,[e("h3",null,l(t.name),1),e("p",Y,l(t.role),1)])])]))),128))])])])])]),B,e("div",D,[e("div",L,[P,e("ul",S,[(a(!0),i(n,null,d(c.members,t=>(a(),i("li",{key:t.name},[e("div",U,[e("div",q,[e("div",E,[e("h3",null,l(t.name),1),e("p",R,l(t.classYear),1)])])])]))),128))])])])])])}var O=m(u,[["render",V]]);export{O as default};
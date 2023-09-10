import{_ as S,L as b,M as y,N as m,O as x,Q as _,S as C,T as U,h as E,o as c,c as a,b as e,U as k,w as r,V as l,W as f,X as h,F as w,r as P,d as V}from"./index.94d5233a.js";const A=b([]),F={data(){return{showModal:A,title:"",tagline:"",contact:"",description:"",director:"",producer:"",genre:"",posterUrl:"",mediaUrls:[],shootStart:"",shootEnd:"",positions:[],vacancies:!1,screening:!1,actors:!1,screenDate:"",user:y.getters.userEmail,characters:[{name:"",description:""}]}},methods:{async createFilm(){const n=this.$refs.posterInput.files[0];if(n&&!n.type.startsWith("image/")){alert("Only images are accepted for the poster.");return}const s=b(m,`${this.title}/poster`);await x(s,n).then(async i=>{const o=await _(s);this.posterUrl=o});const g=this.$refs.mediaInput.files;for(let i=0;i<g.length;i++){const o=g[i],p=b(m,`${this.title}/media/${o.name}`);await x(p,o).then(async u=>{const D=await _(p);this.mediaUrls.push(D)})}document.querySelectorAll('input[type="checkbox"]:checked').forEach(i=>{i.value!="on"&&this.positions.push(i.value)});const t={title:this.title,tagline:this.tagline,contact:this.contact,description:this.description,director:this.director,producer:this.producer,positions:this.positions,genre:this.genre,posterUrl:this.posterUrl,mediaUrls:this.mediaUrls,shootStart:this.shootStart===""?"TBD":new Date(Date.parse(this.shootStart)),shootEnd:this.shootEnd===""?"TBD":new Date(Date.parse(this.shootEnd)),vacancies:this.vacancies,screening:this.screening,actors:this.actors,screenDate:this.screenDate===""?"TBD":new Date(Date.parse(this.screenDate)),user:y.getters.userEmail,roles:this.characters},d=this.characters.reduce((i,o)=>(i[o.name]=o.description,i),{});t.roles=d,document.getElementById("my-modal").checked=!0,console.log(this.characters),await C(U(V,"productions"),t)},addCharacter(){this.characters.push({name:"",description:""})},redirectToOpportunitiesForFilmmakers(){this.$router.push({name:"opportunitiesFilmmakers"})}}},G=e("input",{type:"checkbox",id:"my-modal",class:"modal-toggle"},null,-1),I={class:"modal"},L={class:"modal-box"},T=e("h3",{class:"font-bold text-lg"},"Congratulations!",-1),B=e("p",{class:"py-4"},'Your film has been submitted to our system! If you are looking to complete your crew, vacancies for your set have been published on the "Set Opportunities" page.',-1),N={class:"modal-action"},q={class:"flex flex-col items-center min-h-screen py-2 pt-14"},R=e("h1",{class:"text-3xl font-bold text-primary-light"},"Create a Production",-1),M=e("p",{class:"text-primary-light"},"Fill out the form below to list a screeening, open positions on your set, or both.",-1),O={class:"flex flex-col gap-2 w-full px-4 py-4"},j=e("label",{class:"text-primary-light",for:"title"},"Title",-1),J={class:"flex flex-row gap-4 w-full px-4 py-4"},Q={class:"flex flex-col gap-2 w-1/2"},W=e("label",{class:"text-primary-light",for:"director"},"Director",-1),X={class:"flex flex-col gap-2 w-1/2"},Y=e("label",{class:"text-primary-light",for:"producer"},"Producer",-1),z={class:"flex flex-row gap-4 w-full px-4 py-4"},H={class:"flex flex-col gap-2 w-3/4"},K=e("label",{class:"text-primary-light",for:"tagline"},"Tagline",-1),Z={class:"flex flex-col gap-2 w-1/4"},$=e("label",{class:"text-primary-light",for:"genre"},"Genre",-1),ee={class:"flex flex-col gap-2 w-full px-4 py-4"},oe=e("label",{class:"text-primary-light",for:"contact"},"Contact",-1),se={class:"flex flex-col gap-2 w-full px-4 py-4"},te=e("label",{class:"text-primary-light",for:"description"},"Description",-1),re={class:"flex flex-row gap-4 w-full px-4 py-4"},ie={class:"flex flex-col w-1/2"},le=e("label",{class:"block mb-2 text-primary-light",for:"poster"},"Upload Poster",-1),ce={class:"block w-full text-primary-light border border-gray-300 rounded-lg cursor-pointer focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"file",id:"poster",ref:"posterInput"},ae=e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help"},"PNG or JPEG.",-1),ne={class:"flex flex-col w-1/2"},de=e("label",{class:"block mb-2 text-primary-light"},"Additional Media (select up to 5)",-1),pe={class:"block w-full text-primary-light border border-gray-300 rounded-lg cursor-pointer focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"file",id:"media",ref:"mediaInput",multiple:""},ue=e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300",id:"file_input_help"},"Up to 5 files. PNG, JPEG, or PDF.",-1),he={class:"flex flex-row gap-4 w-full px-4 py-4"},ge={class:"flex flex-col gap-2 w-1/2"},fe=e("label",{class:"text-primary-light",for:"shootStart"},"Shoot Start",-1),be={class:"flex flex-col gap-2 w-1/2"},ye=e("label",{class:"text-primary-light",for:"shootEnd"},"Shoot End",-1),me={class:"px-4 py-4"},xe={class:"flex flex-row items-center gap-4 justify-center label cursor-pointer text-primary-light",for:"vacancies"},_e=e("span",{class:""},"Looking for additional crew members?",-1),ke={key:0,class:"flex flex-col w-full px-4 py-4 gap-4"},we=e("label",{class:"text-primary-light"},"Positions Available",-1),ve={class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50"},De={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Se={class:"flex items-center py-2 gap-2"},Ce={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Director of Photography",id:"Director of Photography"},Ue=e("label",{for:"Director of Photography"},"Director of Photography",-1),Ee={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Pe={class:"flex items-center py-2 gap-2"},Ve={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Assistant Camera",id:"Assistant Camera"},Ae=e("label",{for:"Assistant Camera"},"Assistant Camera",-1),Fe={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Ge={class:"flex items-center py-2 gap-2"},Ie={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Gaffer",id:"Gaffer"},Le=e("label",{for:"Gaffer"},"Gaffer",-1),Te={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Be={class:"flex items-center py-2 gap-2"},Ne={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Sound Designer",id:"Sound Designer"},qe=e("label",{for:"Sound Designer"},"Sound Designer",-1),Re={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Me={class:"flex items-center py-2 gap-2"},Oe={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Sound Editor",id:"Sound Editor"},je=e("label",{for:"Sound Editor"},"Sound Editor",-1),Je={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Qe={class:"flex items-center py-2 gap-2"},We={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Editor (General)",id:"Editor (General)"},Xe=e("label",{for:"Editor (General)"},"Editor (General)",-1),Ye={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},ze={class:"flex items-center py-2 gap-2"},He={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Colorist",id:"Colorist"},Ke=e("label",{for:"Colorist"},"Colorist",-1),Ze={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},$e={class:"flex items-center py-2 gap-2"},eo={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Assistant Director",id:"Assistant Director"},oo=e("label",{for:"Assistant Director"},"Assistant Director",-1),so={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},to={class:"flex items-center py-2 gap-2"},ro={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Assistant Producer",id:"Assistant Producer"},io=e("label",{for:"Assistant Producer"},"Assistant Producer",-1),lo={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},co={class:"flex items-center py-2 gap-2"},ao={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"PA",id:"PA"},no=e("label",{for:"PA"},"Production Assistant (PA)",-1),po={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},uo={class:"flex items-center py-2 gap-2"},ho={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Grip",id:"Grip"},go=e("label",{for:"Grip"},"Grip",-1),fo={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},bo={class:"flex items-center py-2 gap-2"},yo={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Composer",id:"Composer"},mo=e("label",{for:"Composer"},"Composer",-1),xo={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},_o={class:"flex items-center py-2 gap-2"},ko={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Production (Set) Designer",id:"Production (Set) Designer"},wo=e("label",{for:"Production (Set) Designer"},"Production (Set) Designer",-1),vo={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Do={class:"flex items-center py-2 gap-2"},So={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Sound Recordist",id:"Sound Recordist"},Co=e("label",{for:"Sound Recordist"},"Sound Recordist",-1),Uo={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Eo={class:"flex items-center py-2 gap-2"},Po={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Costume Designer",id:"Costume Designer"},Vo=e("label",{for:"Costume Designer"},"Costume Designer",-1),Ao={class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600"},Fo={class:"flex items-center py-2 gap-2"},Go={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Intimacy Coordinator",id:"Intimacy Coordinator"},Io=e("label",{for:"Intimacy Coordinator"},"Intimacy Coordinator",-1),Lo={class:"w-full rounded-t-lg border-gray-200 dark:border-gray-600"},To={class:"flex items-center py-2 gap-2"},Bo={class:"checkbox checkbox-xs",type:"checkbox",ref:"checkbox",name:"position",value:"Fight Coordinator",id:"Fight Coordinator"},No=e("label",{for:"Fight Coordinator"},"Fight Coordinator",-1),qo={class:"px-4 py-4"},Ro={class:"flex flex-row items-center gap-4 justify-center label cursor-pointer text-primary-light",for:"actors"},Mo=e("span",{class:""},"Looking for actors?",-1),Oo={key:0,class:"flex flex-col w-full px-4 py-4 gap-4"},jo=e("label",{class:"text-primary-light"},"Characters Needed",-1),Jo={class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50"},Qo={class:"flex flex-col py-2 gap-2"},Wo=e("label",{class:"text-primary-light",for:"characterName"},"Character Name",-1),Xo=["onUpdate:modelValue"],Yo=e("label",{class:"text-primary-light",for:"characterDescription"},"Description",-1),zo=["onUpdate:modelValue"],Ho={class:"px-4 py-4"},Ko={class:"flex flex-row items-center gap-4 justify-center label cursor-pointer text-primary-light",for:"screening"},Zo=e("span",{class:"text-primary-light",for:"screening"},"Is the film screening?",-1),$o={key:0,class:"flex flex-col gap-2 w-full px-4 py-4"},es=e("label",{class:"text-primary-light",for:"screeningDate"},"Screening Date",-1),os={key:0,class:"flex flex-col gap-2 w-full px-4 py-4"},ss=e("label",{class:"text-primary-light",for:"screeningLocation"},"Screening Location",-1),ts=e("div",{class:"flex flex-row justify-center w-full px-4 py-4"},[e("button",{for:"my-modal",class:"btn w-full px-4 py-2 text-white bg-primary-light rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50"},"Submit")],-1);function rs(n,s,g,v,t,d){const i=E("auto-animate");return c(),a(w,null,[G,e("div",I,[e("div",L,[T,B,e("div",N,[e("label",{onClick:s[0]||(s[0]=(...o)=>d.redirectToOpportunitiesForFilmmakers&&d.redirectToOpportunitiesForFilmmakers(...o)),class:"btn"},"Go to your published production")])])]),e("div",q,[R,M,e("form",{class:"flex flex-col flex-wrap min-w-full px-96 py-4",onSubmit:s[17]||(s[17]=k((...o)=>d.createFilm&&d.createFilm(...o),["prevent"]))},[e("div",O,[j,r(e("input",{required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"text",id:"title","onUpdate:modelValue":s[1]||(s[1]=o=>t.title=o),placeholder:""},null,512),[[l,t.title]])]),e("div",J,[e("div",Q,[W,r(e("input",{required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"text",id:"director","onUpdate:modelValue":s[2]||(s[2]=o=>t.director=o),placeholder:""},null,512),[[l,t.director]])]),e("div",X,[Y,r(e("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"text",id:"producer","onUpdate:modelValue":s[3]||(s[3]=o=>t.producer=o),placeholder:""},null,512),[[l,t.producer]])])]),e("div",z,[e("div",H,[K,r(e("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"text",id:"tagline","onUpdate:modelValue":s[4]||(s[4]=o=>t.tagline=o),placeholder:""},null,512),[[l,t.tagline]])]),e("div",Z,[$,r(e("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"text",id:"genre","onUpdate:modelValue":s[5]||(s[5]=o=>t.genre=o),placeholder:""},null,512),[[l,t.genre]])])]),e("div",ee,[oe,r(e("input",{required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"email",id:"contact","onUpdate:modelValue":s[6]||(s[6]=o=>t.contact=o),placeholder:"email@yale.edu"},null,512),[[l,t.contact]])]),e("div",se,[te,r(e("textarea",{required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",id:"description","onUpdate:modelValue":s[7]||(s[7]=o=>t.description=o),placeholder:"Description"},null,512),[[l,t.description]])]),e("div",re,[e("div",ie,[le,e("input",ce,null,512),ae]),e("div",ne,[de,e("input",pe,null,512),ue])]),e("div",he,[e("div",ge,[fe,r(e("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"date",id:"shootStart","onUpdate:modelValue":s[8]||(s[8]=o=>t.shootStart=o),placeholder:"Shoot Start"},null,512),[[l,t.shootStart]])]),e("div",be,[ye,r(e("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"date",id:"shootEnd","onUpdate:modelValue":s[9]||(s[9]=o=>t.shootEnd=o),placeholder:"Shoot End"},null,512),[[l,t.shootEnd]])])]),e("div",me,[e("label",xe,[_e,r(e("input",{class:"checkbox checkbox-sm",type:"checkbox",id:"vacancies","onUpdate:modelValue":s[10]||(s[10]=o=>t.vacancies=o)},null,512),[[f,t.vacancies]])])]),r((c(),a("div",null,[t.vacancies?(c(),a("div",ke,[we,e("ul",ve,[e("li",De,[e("div",Se,[e("input",Ce,null,512),Ue])]),e("li",Ee,[e("div",Pe,[e("input",Ve,null,512),Ae])]),e("li",Fe,[e("div",Ge,[e("input",Ie,null,512),Le])]),e("li",Te,[e("div",Be,[e("input",Ne,null,512),qe])]),e("li",Re,[e("div",Me,[e("input",Oe,null,512),je])]),e("li",Je,[e("div",Qe,[e("input",We,null,512),Xe])]),e("li",Ye,[e("div",ze,[e("input",He,null,512),Ke])]),e("li",Ze,[e("div",$e,[e("input",eo,null,512),oo])]),e("li",so,[e("div",to,[e("input",ro,null,512),io])]),e("li",lo,[e("div",co,[e("input",ao,null,512),no])]),e("li",po,[e("div",uo,[e("input",ho,null,512),go])]),e("li",fo,[e("div",bo,[e("input",yo,null,512),mo])]),e("li",xo,[e("div",_o,[e("input",ko,null,512),wo])]),e("li",vo,[e("div",Do,[e("input",So,null,512),Co])]),e("li",Uo,[e("div",Eo,[e("input",Po,null,512),Vo])]),e("li",Ao,[e("div",Fo,[e("input",Go,null,512),Io])]),e("li",Lo,[e("div",To,[e("input",Bo,null,512),No])])])])):h("",!0)])),[[i]]),e("div",qo,[e("label",Ro,[Mo,r(e("input",{class:"checkbox checkbox-sm",type:"checkbox",id:"actors","onUpdate:modelValue":s[11]||(s[11]=o=>t.actors=o)},null,512),[[f,t.actors]])])]),r((c(),a("div",{onSubmit:s[13]||(s[13]=k((...o)=>n.submitForm&&n.submitForm(...o),["prevent"]))},[t.actors?(c(),a("div",Oo,[jo,e("ul",Jo,[(c(!0),a(w,null,P(t.characters,(o,p)=>(c(),a("li",{class:"w-full rounded-t-lg border-b border-gray-200 dark:border-gray-600",key:p},[e("div",Qo,[Wo,r(e("input",{required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50","onUpdate:modelValue":u=>o.name=u,placeholder:"Enter character name"},null,8,Xo),[[l,o.name]]),Yo,r(e("textarea",{required:"",class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50","onUpdate:modelValue":u=>o.description=u,placeholder:"Enter character description"},null,8,zo),[[l,o.description]])])]))),128))]),e("button",{type:"button",onClick:s[12]||(s[12]=(...o)=>d.addCharacter&&d.addCharacter(...o)),class:"btn w-full px-4 py-2 text-white bg-primary-light rounded-md shadow-sm hover:bg-primary-dark focus:outline-none focus:ring focus:ring-primary-light focus:ring-opacity-50"},"Add Another Character")])):h("",!0)],32)),[[i]]),e("div",Ho,[e("label",Ko,[Zo,r(e("input",{class:"checkbox checkbox-sm",type:"checkbox",id:"screening","onUpdate:modelValue":s[14]||(s[14]=o=>t.screening=o),placeholder:"Screening"},null,512),[[f,t.screening]])])]),r((c(),a("div",null,[t.screening?(c(),a("div",$o,[es,r(e("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"date",id:"screeningDate","onUpdate:modelValue":s[15]||(s[15]=o=>t.screenDate=o),placeholder:"Screening Date"},null,512),[[l,t.screenDate]])])):h("",!0)])),[[i]]),r((c(),a("div",null,[t.screening?(c(),a("div",os,[ss,r(e("input",{class:"w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-primary-light focus:ring focus:ring-primary-light focus:ring-opacity-50",type:"text",id:"screeningLocation","onUpdate:modelValue":s[16]||(s[16]=o=>n.screenLocation=o),placeholder:"Screening Location"},null,512),[[l,n.screenLocation]])])):h("",!0)])),[[i]]),ts],32)])],64)}var ls=S(F,[["render",rs]]);export{ls as default};
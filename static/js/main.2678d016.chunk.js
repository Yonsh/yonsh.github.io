(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,a,t){e.exports=t(40)},24:function(e,a,t){},38:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(11),i=t.n(l),m=(t(24),t(12)),s=t(13),c=t(16),o=t(14),d=t(17),u=t(1),g=t.n(u),h=t(15),p=t.n(h),E=(t(38),function(e){return r.a.createElement(g.a,{duration:200},r.a.createElement("div",{className:"modal is-active"},r.a.createElement("div",{className:"modal-background"}),r.a.createElement("div",{className:"modal-content",style:{width:"auto",height:"auto"}},e.children),r.a.createElement("button",{className:"modal-close is-large",ariaLabel:"close",onClick:e.onClose})))}),v=function(e){return r.a.createElement(g.a,{duration:200},r.a.createElement("div",{className:"modal is-active"},r.a.createElement("div",{className:"modal-background",onClick:e.onClose}),r.a.createElement("div",{className:"modal-content",style:{maxHeight:"100%"}},e.children),r.a.createElement("button",{className:"modal-close is-large",ariaLabel:"close",onClick:e.onClose})))},y=function(e){return r.a.createElement(g.a,{bottom:!0,distance:"1.5em",duration:1500},r.a.createElement("div",{className:"column is-half is-one-third-widescreen"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image"},r.a.createElement("img",{src:e.cover,alt:"Placeholder"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:"title"},e.title),r.a.createElement("p",{className:"subtitle has-text-grey"},e.genre),e.children)))))},f=function(e){return r.a.createElement(g.a,null,r.a.createElement("div",{className:"card",style:{margin:20,borderRadius:5}},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image",style:{backgroundColor:"#000",textAlign:"center"}},r.a.createElement("a",{href:e.img,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:e.img,alt:e.alt,style:{maxHeight:window.innerHeight/2,width:"auto",display:"inline-block"}})))),r.a.createElement("div",{className:"card-content"},e.children)))},b=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(t=Object(c.a)(this,(e=Object(o.a)(a)).call.apply(e,[this].concat(r)))).state={modal:null,imageIsReady:!1},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=new Image;a.src="img/my_pic.jpg",a.onload=function(){e.setState({imageIsReady:!0})}}},{key:"closeModal",value:function(){this.setState({modal:null})}},{key:"modalRtsrpg",value:function(){var e=this;return r.a.createElement(E,{onClose:function(){return e.closeModal()}},r.a.createElement("div",{style:{width:800,height:500,position:"relative"}},r.a.createElement(p.a,{size:100,color:"#FFF",css:{display:"block",position:"absolute",top:"50%",left:"50%"}}),r.a.createElement("iframe",{title:"game",src:"games/rtsrpg",style:{width:"100%",height:"100%",position:"relative"}})),r.a.createElement("div",{className:"box content"},r.a.createElement("h3",null,"Controls:"),r.a.createElement("p",null,"WASD: Movements"),r.a.createElement("p",null,"Left Click: Select / Move to"),r.a.createElement("p",null,"F1: Select the Ranger"),r.a.createElement("p",null,"F2: Select the Warrior"),r.a.createElement("p",null,"Space: Pause"),r.a.createElement("p",null,"U: Mute / Unmute")))}},{key:"modalDiary",value:function(){var e=this;return r.a.createElement(v,{onClose:function(){return e.closeModal()}},r.a.createElement(f,{img:"img/diary_game/character_creation.jpg",alt:"character creation"},"Character creation. You can input the character's name and choose a style here."),r.a.createElement(f,{img:"img/diary_game/menu.jpg",alt:"game's menu"},"The game's menu."),r.a.createElement(f,{img:"img/diary_game/diary_1.jpg",alt:"diary"},"Diary event: First encounter."),r.a.createElement(f,{img:"img/diary_game/diary_2.jpg",alt:"diary"},"Diary event: Strange chest."),r.a.createElement(f,{img:"img/diary_game/diary_3.jpg",alt:"diary"},"Diary event: Ancient structure."),r.a.createElement(f,{img:"img/diary_game/equipments.jpg",alt:"equipments"},"Equipment queue: Setup equipments for multiple adventures."),r.a.createElement(f,{img:"img/diary_game/info.jpg",alt:"character info"},"Character overview: Infos about your character's level, status, and skills."),r.a.createElement(f,{img:"img/diary_game/shop.jpg",alt:"shop"},"Shop: Allow buying and selling in an easy way."),r.a.createElement(f,{img:"img/diary_game/trophies.jpg",alt:"trophies"},"Trophies from adventures."),r.a.createElement(f,{img:"img/diary_game/iap.jpg",alt:"in app purchase and rewarding ads"},"Trophies from adventures."),r.a.createElement(f,{img:"img/diary_game/event_data.jpg",alt:"event data"},"Game event data made with Google Sheet. The game can parse codes from the data, allowing detailed event design."),r.a.createElement(f,{img:"img/diary_game/diary_debug.jpg",alt:"diary debug"},"Development version of the diary page: Allow manual adventure progressions and diary managements."),r.a.createElement(f,{img:"img/diary_game/debug_panel.jpg",alt:"debug panel"},"Debug panel: Allow manually invoking events, and changing/viewing game variables."),r.a.createElement(g.a,null,r.a.createElement("div",{className:"card",style:{margin:20,borderRadius:5}},r.a.createElement("div",{className:"card-content"},r.a.createElement("p",null,"If you like to try it out, here are the APKs:"),r.a.createElement("a",{href:"https://drive.google.com/open?id=10vyjVFN1KzZ7uiqvTtdR2Bmh6YGVf53o",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,"Release version")),r.a.createElement("a",{href:"https://drive.google.com/open?id=1_2FptH_0fdzUjNxbX--gGxmo1MAusY_s",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("p",null,"Development version")),r.a.createElement("p",null,r.a.createElement("b",null,"Note:")," The development version uses the save from the release version, so it requires you to install the release version and create a character from there.")))))}},{key:"renderModal",value:function(){switch(this.state.modal){case"rtsrpg":return this.modalRtsrpg();case"diary_game":return this.modalDiary();default:return null}}},{key:"renderInfo",value:function(){return r.a.createElement("section",{className:"hero is-primary is-fullheight"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container has-text-centered"},r.a.createElement(g.a,null,r.a.createElement("figure",{className:"image",style:{maxWidth:512,margin:"0 auto"}},r.a.createElement("img",{alt:"Yonsh Lin",src:"img/my_pic.jpg",className:"is-rounded"}))),r.a.createElement(g.a,{left:!0,delay:200,distance:"0.6em"},r.a.createElement("h2",{className:"subtitle is-size-4",style:{marginTop:20}},"Hi, I'm")),r.a.createElement(g.a,{left:!0,delay:400,distance:"0.6em"},r.a.createElement("h1",{className:"title is-size-1"},"Yonsh Lin")))))}},{key:"renderProjects",value:function(){var e=this;return r.a.createElement("section",{className:"hero is-warning"},r.a.createElement("div",{className:"hero-body"},r.a.createElement("div",{className:"container"},r.a.createElement(g.a,{bottom:!0,distance:"1em",duration:500},r.a.createElement("h1",{className:"title has-text-centered"},"Take a look at some of my indie game projects")),r.a.createElement("div",{className:"columns is-multiline"},r.a.createElement(y,{title:"Defenders of the Realm",genre:"RTS/RPG",cover:"img/rtsrpg.jpg"},r.a.createElement("p",null,"A game I made when"," ",r.a.createElement("a",{href:"https://esotericsoftware.com",target:"_blank",rel:"noopener noreferrer"},"Spine")," ","was just released."),r.a.createElement("p",{style:{marginBottom:0}},"Features & Techs:"),r.a.createElement("ul",{style:{marginTop:0}},r.a.createElement("li",null,"Threat system"),r.a.createElement("li",null,"Can issue commands when paused"),r.a.createElement("li",null,"The warrior has an AI that protects the ranger"),r.a.createElement("li",null,"Spine animations")),r.a.createElement("button",{className:"button is-primary",onClick:function(){return e.setState({modal:"rtsrpg"})}},"Try it out!")),r.a.createElement(y,{cover:"img/diary_game/cover.jpg",title:"Adventurer's Diary",genre:"Adventure/Idle"},r.a.createElement("p",null,"A mobile game I made with a guy I found on PTT (an online forum in Taiwan)."),r.a.createElement("p",{style:{marginBottom:0}},"Features & Techs:"),r.a.createElement("ul",{style:{marginTop:0}},r.a.createElement("li",null,"The game progresses even when it's closed"),r.a.createElement("li",null,"Event driven adventures"),r.a.createElement("li",null,"Parses programs from the data"),r.a.createElement("li",null,"Banner ads and rewarding video ads")),r.a.createElement("button",{className:"button is-primary",onClick:function(){return e.setState({modal:"diary_game"})}},"Details"))))))}},{key:"render",value:function(){return this.state.imageIsReady?r.a.createElement("div",{className:"App"},this.renderInfo(),this.renderProjects(),this.renderModal()):null}}]),a}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.2678d016.chunk.js.map
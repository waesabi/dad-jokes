(window["webpackJsonpdad-jokes"]=window["webpackJsonpdad-jokes"]||[]).push([[0],{21:function(e,t,o){e.exports=o.p+"static/media/happy.9f6dc92a.png"},24:function(e,t,o){e.exports=o(53)},29:function(e,t,o){},31:function(e,t,o){},32:function(e,t,o){},52:function(e,t,o){},53:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),s=o(17),r=o.n(s),i=(o(29),o(18)),c=o(7),l=o.n(c),u=o(23),p=o(19),m=o(2),d=o(3),h=o(5),f=o(4),k=o(6),j=(o(31),function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(k.a)(t,e),Object(d.a)(t,[{key:"getColor",value:function(){return this.props.votes>=15?"#4CAF50":this.props.votes>=12?"#8BC34A":this.props.votes>=9?"#CDDC39":this.props.votes>=6?"#FFEB3B":this.props.votes>=3?"#FFC107":this.props.votes>=0?"#FF9800":"#f44336"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=9?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){return a.a.createElement("div",{className:"joke"},a.a.createElement("div",{className:"joke-buttons"},a.a.createElement("i",{className:"fas fa-arrow-up",onClick:this.props.upVote}),a.a.createElement("span",{className:"joke-votes",style:{borderColor:this.getColor()}},this.props.votes),a.a.createElement("i",{className:"fas fa-arrow-down",onClick:this.props.downVote})),a.a.createElement("div",{className:"joke-text"},this.props.text),a.a.createElement("div",{className:"joke-emoji"},a.a.createElement("i",{className:this.getEmoji()})))}}]),t}(n.Component)),v=(o(32),o(20)),g=o.n(v),b=o(21),w=o.n(b),O=o(22),E=o.n(O);function y(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)}return o}var N="https://icanhazdadjoke.com/",J=function(e){function t(e){var o;Object(m.a)(this,t),(o=Object(h.a)(this,Object(f.a)(t).call(this,e))).loadJokes=Object(p.a)(l.a.mark(function e(){var t,n,a;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,t=[];case 2:if(!(t.length<o.props.numJokesToGet)){e.next=10;break}return e.next=5,g.a.get(N,{headers:{Accept:"application/json"}});case 5:n=e.sent,a=n.data.joke,o.seenJokes.has(a)?console.log("Found a duplicate :- ",a):t.push({id:E()(),text:a,votes:0}),e.next=2;break;case 10:o.setState(function(e){return{jokes:[].concat(Object(u.a)(e.jokes),t),loading:!1}},function(){window.localStorage.setItem("jokes",JSON.stringify(o.state.jokes))}),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(0),alert(e.t0),o.setState({loading:!1});case 17:case"end":return e.stop()}},e,null,[[0,13]])})),o.handleVote=function(e,t){o.setState(function(o){return{jokes:o.jokes.map(function(o){return o.id===e?function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?y(o,!0).forEach(function(t){Object(i.a)(e,t,o[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):y(o).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))})}return e}({},o,{votes:o.votes+t}):o})}},function(){console.log(o.state.jokes),window.localStorage.setItem("jokes",JSON.stringify(o.state.jokes))})},o.handleLoadJokes=function(){o.setState({loading:!0},o.loadJokes)};var n=JSON.parse(window.localStorage.getItem("jokes"));return null===n&&(n=[]),o.state={jokes:n,loading:!1},o.seenJokes=new Set(o.state.jokes.map(function(e){return e.text})),console.log(o.seenJokes),o}return Object(k.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.loadJokes()}},{key:"render",value:function(){var e=this;if(this.state.loading)return a.a.createElement("div",{className:"jokeList-spinner"},a.a.createElement("i",{className:"far fa-8x fa-laugh fa-spin"}),a.a.createElement("h1",{className:"jokeList-title"},"Loading..."));var t=this.state.jokes.sort(function(e,t){return t.votes-e.votes});return a.a.createElement("div",{className:"jokeList"},a.a.createElement("div",{className:"jokeList-sidebar"},a.a.createElement("h1",{className:"jokeList-title"},a.a.createElement("span",null,"Dad")," Jokes!"),a.a.createElement("img",{className:"jokeList-img",src:w.a,alt:"Smile Emoji"}),a.a.createElement("button",{className:"jokeList-loadMore",onClick:this.handleLoadJokes},"Fetch Jokes")),a.a.createElement("div",{className:"jokeList-jokes"},t.map(function(t){return a.a.createElement(j,{key:t.id,id:t.id,votes:t.votes,text:t.text,upVote:function(){return e.handleVote(t.id,1)},downVote:function(){return e.handleVote(t.id,-1)}})}),console.log(typeof this.state.jokes),console.log(this.state.jokes.length)))}}]),t}(n.Component);J.defaultProps={numJokesToGet:10};var x=J;o(52);var S=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(x,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[24,1,2]]]);
//# sourceMappingURL=main.1324820e.chunk.js.map
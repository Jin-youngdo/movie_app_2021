(this.webpackJsonpmovie_app_2021=this.webpackJsonpmovie_app_2021||[]).push([[0],{37:function(e,t,n){},58:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s),c=n(25),r=n.n(c),i=n(8),o=n(2),l=(n(37),n(1));var j=function(){return Object(l.jsxs)("div",{className:"about__container",children:[Object(l.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(l.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},m=n(13),d=n.n(m),u=n(26),b=n(27),h=n(28),v=n(32),p=n(31),O=n(29),x=n.n(O);n(58);var f=function(e){var t=e.id,n=e.year,s=e.title,a=e.summary,c=e.poster,r=e.genres;return Object(l.jsx)("div",{className:"movie",children:Object(l.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:n,title:s,summary:a,poster:c,genres:r}},children:[Object(l.jsx)("img",{src:c,alt:s,title:s}),Object(l.jsxs)("div",{className:"movie__data",children:[Object(l.jsx)("h3",{className:"movie__title",children:s}),Object(l.jsx)("h5",{className:"movie__year",children:n}),Object(l.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(l.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(l.jsxs)("p",{className:"movie__summary",children:[a.slice(0,180),"..."]})]})]})})},_=(n(64),function(e){Object(v.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(b.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).state={isLoading:!0,movies:[]},e.getMovies=Object(u.a)(d.a.mark((function t(){var n,s;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts-proxy.nomadcoders1.now.sh/list_movies.json?sort_by=rating");case 2:n=t.sent,s=n.data.data.movies,e.setState({movies:s,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.movies;return Object(l.jsx)("section",{className:"container",children:t?Object(l.jsx)("div",{className:"loader",children:Object(l.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(l.jsx)("div",{className:"movies",children:n.map((function(e){return Object(l.jsx)(f,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),n}(a.a.Component));var g=function(e){return console.log(e),Object(l.jsx)("span",{children:"Hello!"})};n(65);var y=function(){return Object(l.jsxs)("div",{className:"nav",children:[Object(l.jsx)(i.b,{to:"/",children:"Home"}),Object(l.jsx)(i.b,{to:"/about",children:"About"})]})};n(66);var N=function(){return Object(l.jsxs)(i.a,{children:[Object(l.jsx)(y,{}),Object(l.jsx)(o.a,{path:"/",exact:!0,component:_}),Object(l.jsx)(o.a,{path:"/about",component:j}),Object(l.jsx)(o.a,{path:"/movie-detail",component:g})]})};r.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.c537c568.chunk.js.map
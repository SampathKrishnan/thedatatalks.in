(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{442:function(t,s,a){"use strict";a.r(s);a(168),a(22),a(169),a(45),a(331),a(170);var i={computed:{blogPosts:function(){for(var t=this.$site.pages.filter((function(t){return t.path.includes("/politics/")})),s=this.$site.pages.filter((function(t){return t.path.includes("/economics/")})),a=this.$site.pages.filter((function(t){return t.path.includes("/education/")})),i=this.$site.pages.filter((function(t){return t.path.includes("/others/")})),r=t.concat(s,a,i),e=r.length;e--;)(r[e].frontmatter.isHome||r[e].frontmatter.articleLang!==this.$lang)&&r.splice(e,1);return r},blogsSplit:function(){var t=this.blogPosts.length,s=Math.floor(40*t/100),a=Math.floor(50*t/100),i=Math.floor(80*t/100);return{firstBlog:this.blogPosts.slice(0,1),leftBlogs:this.blogPosts.slice(1,s),rightTopBlogs:this.blogPosts.slice(s,a),rightMiddleBlogs:this.blogPosts.slice(a,i),rightBottomBlogs:this.blogPosts.slice(i,t)}}},methods:{imgPath:function(t,s){return a(332)("./".concat(s,"/").concat(t,"/_thumbnail.png"))}}},r=a(42),e=Object(r.a)(i,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("main",{staticClass:"theme-container"},[a("article",[a("div",{staticClass:"row"},[a("div",{staticClass:"leftcolumn"},[t._l(t.blogsSplit.firstBlog,(function(s){return a("div",{key:s.key,staticClass:"card__first"},[a("img",{staticClass:"card-img__first",attrs:{src:t.imgPath(s.frontmatter.id,s.frontmatter.topic)}}),t._v(" "),a("div",{staticClass:"card-txt"},[a("h1",{staticClass:"card-txt__title"},[t._v(" "+t._s(s.title)+" ")]),t._v(" "),a("div",[a("span",{staticClass:"card-txt__dateTime"},[t._v(" "+t._s(s.frontmatter.author))]),t._v(" • \n              "),a("span",{staticClass:"card-txt__dateTime"},[t._v(t._s(s.frontmatter.date))]),t._v(" •             \n            ")]),t._v(" "),a("p",{staticClass:"card-txt__imgDesc"},[t._v(" "+t._s(s.frontmatter.imgDesc))]),t._v(" "),a("p",{staticClass:"card-txt__desc"},[t._v(" "+t._s(s.frontmatter.desc)+" ")]),t._v(" "),a("a",{staticClass:"card-txt__lnk",attrs:{href:s.path}},[t._v(" Read → ")])])])})),t._v(" "),t._l(t.blogsSplit.leftBlogs,(function(s){return a("div",{key:s.key,staticClass:"card"},[a("img",{staticClass:"card-img",attrs:{src:t.imgPath(s.frontmatter.id,s.frontmatter.topic)}}),t._v(" "),a("div",{staticClass:"card-txt"},[a("h1",{staticClass:"card-txt__title"},[t._v(" "+t._s(s.title)+" ")]),t._v(" "),a("p",{staticClass:"card-txt__imgDesc"},[t._v(t._s(s.frontmatter.imgDesc))]),t._v(" "),a("div",[a("span",{staticClass:"card-txt__dateTime"},[t._v(t._s(s.frontmatter.author))]),t._v(" • \n                "),a("span",{staticClass:"card-txt__dateTime"},[t._v(t._s(s.frontmatter.date))]),t._v(" •   \n              ")]),t._v(" "),a("p",{staticClass:"card-txt__desc"},[t._v(" "+t._s(s.frontmatter.desc)+" ")]),t._v(" "),a("a",{staticClass:"card-txt__lnk",attrs:{href:s.path}},[t._v(" Read → ")])])])}))],2),t._v(" "),a("div",{staticClass:"rightcolumn"},[t._l(t.blogsSplit.rightTopBlogs,(function(s){return a("div",{key:s.key,staticClass:"card__first"},[a("img",{staticClass:"card-img__first",attrs:{src:t.imgPath(s.frontmatter.id,s.frontmatter.topic)}}),t._v(" "),a("h1",{staticClass:"card-txt__title"},[t._v(" "+t._s(s.title)+" ")]),t._v(" "),a("div",[a("span",{staticClass:"card-txt__dateTime"},[t._v(t._s(s.frontmatter.author))]),t._v(" • \n              "),a("span",{staticClass:"card-txt__dateTime"},[t._v(t._s(s.frontmatter.date))]),t._v(" •            \n            ")]),t._v(" "),a("p",{staticClass:"card-txt__imgDesc"},[t._v(t._s(s.frontmatter.imgDesc))]),t._v(" "),a("a",{staticClass:"card-txt__lnk",attrs:{href:s.path}},[t._v(" Read → ")])])})),t._v(" "),t._l(t.blogsSplit.rightMiddleBlogs,(function(s){return a("div",{key:s.key,staticClass:"card__right"},[a("h1",{staticClass:"card-txt__title"},[t._v(" "+t._s(s.title)+" ")]),t._v(" "),a("p",{staticClass:"card-txt__desc"},[t._v(" "+t._s(s.frontmatter.desc)+" ")]),t._v(" "),a("a",{staticClass:"card-txt__lnk",attrs:{href:s.path}},[t._v(" Read → ")])])})),t._v(" "),t._l(t.blogsSplit.rightBottomBlogs,(function(s){return a("div",{key:s.key,staticClass:"card__right"},[a("h1",{staticClass:"card-txt__title"},[t._v(" "+t._s(s.title)+" ")]),t._v(" "),a("p",{staticClass:"card-txt__desc"},[t._v(" "+t._s(s.frontmatter.desc)+" ")]),t._v(" "),a("a",{staticClass:"card-txt__lnk",attrs:{href:s.path}},[t._v(" Read → ")])])}))],2)])])])}),[],!1,null,null,null);s.default=e.exports}}]);
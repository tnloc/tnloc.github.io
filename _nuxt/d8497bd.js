(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{313:function(t,e,n){"use strict";var d=n(314),o=n.n(d);n(315);e.a={mounted:function(){o.a.init({})}}},320:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(65).default)("3bed08ad",content,!0,{sourceMap:!1})},327:function(t,e,n){"use strict";n(320)},328:function(t,e,n){var d=n(64)((function(i){return i[1]}));d.push([t.i,"/*purgecss start ignore*/\n.separatorheader[data-v-a2a176ae]{\n  background-color:#fff;\n  background-image:linear-gradient(1turn,#fff,#fdfbfb 29%,#ebedee 61%,#fdfbfb 80%,#fff)\n}\n.title-solid[data-v-a2a176ae]{\n  font-family:KgSecondChancesSolid\n}\n.title-sketch[data-v-a2a176ae]{\n  font-family:KgSecondChancesSketch\n}\n.tn-section[data-v-a2a176ae]{\n  min-height:calc(1vh - 2.5rem)\n}\n\n/*purgecss end ignore*/",""]),d.locals={},t.exports=d},349:function(t,e,n){"use strict";n.r(e);var d=n(7),o=(n(46),{mixins:[n(313).a],colorMode:"light",asyncData:function(t){return Object(d.a)(regeneratorRuntime.mark((function e(){var n,d,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,d=t.params,o=t.app,e.next=3,n(o.i18n.locale,"bookmarks",d.slug).only(["title","description","cover","url","tag","author","createdAt"]).sortBy("createdAt","desc").fetch();case 3:return r=e.sent,e.abrupt("return",{bookmarks:r});case 5:case"end":return e.stop()}}),e)})))()}}),r=o,l=(n(327),n(16)),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-p-8 tw-min-h-screen separatorheader"},[t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"md:tw-container md:tw-mx-auto tw-p-5 md:tw-mb-24 tw-mb-8 tn-section",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[t._m(2),t._v(" "),n("div",{staticClass:"tw-m-5 md:tw-m-4 md:tw-container md:tw-mx-auto md:tw-grid md:tw-grid-cols-2 tw-gap-6"},t._l(t.bookmarks,(function(e){return n("div",{key:e.slug,staticClass:"tw-bg-white tw-rounded-xl tw-shadow-md tw-overflow-hidden tw-mb-6 tw-bg-opacity-25 hover:tw-shadow-xl",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[n("div",{class:e.cover.src?"md:tw-grid md:tw-grid-cols-2":""},[e.cover.src?n("div",{staticClass:"tw-flex tw-items-stretch"},[n("img",{staticClass:"tw-w-full tw-rounded-xl tw-self-centers",attrs:{src:e.cover.src,alt:e.cover.alt}})]):t._e(),t._v(" "),n("div",{staticClass:"tw-p-6"},[n("div",{staticClass:"tw-uppercase tw-tracking-wide tw-text-sm tw-text-indigo-500 tw-font-semibold"},[t._v("\n              "+t._s(e.tag)+"\n            ")]),t._v(" "),n("a",{staticClass:"tw-block tw-mt-1 tw-text-lg tw-leading-tight tw-font-medium tw-text-black hover:tw-underline",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.title))]),t._v(" "),e.description?n("div",[n("p",{staticClass:"tw-mt-2 tw-text-gray-900"},[t._v("\n                "+t._s(e.description)+"\n              ")])]):t._e()])])])})),0)]),t._v(" "),t._m(3)])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-m-3 md:tw-container md:tw-mx-auto tw-mb-24",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"linetebel"}),t._v(" "),n("div",{staticClass:"linetipis"}),t._v(" "),n("div",[n("h1",{staticClass:"tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased tw-text-center"},[n("span",{staticClass:"title-solid"},[t._v("Playlist")]),t._v(" &\n        "),n("span",{staticClass:"title-sketch"},[t._v("Bookmarks")]),n("span",{staticClass:"blink_me"},[t._v("_")])])]),t._v(" "),n("div",{staticClass:"linetipis"}),t._v(" "),n("div",{staticClass:"linetebel"})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-container md:tw-mx-auto tw-p-5 md:tw-mb-24 tw-mb-8 tn-section",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down"}},[n("div",{staticClass:"tw-mb-10 md:tw-mb-14"},[n("h1",{staticClass:"tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n        Quotes"),n("span",{staticClass:"blink_me"},[t._v("_")])])]),t._v(" "),n("div",{staticClass:"tw-mb-8"},[n("div",{staticClass:"tw-grid tw-grid-cols-5 tw-gap-4"},[n("div",{staticClass:"tw-text-2xl tw-text-gray-800 tw-font-light"},[t._v("\n          Fred Jung\n        ")]),t._v(" "),n("div",{staticClass:"tw-text-justify tw-col-span-5 md:tw-col-span-4 tw-text-xl md:tw-text-4xl tw-text-gray-900 tw-font-light tw-subpixel-antialiased"},[t._v("\n          Sometimes you're flush and sometimes you're bust, and when you're\n          up, it's never as good as it seems, and when you're down, you never\n          think you'll be up again, but life goes on.\n        ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tw-mb-10 md:tw-mb-14"},[n("h1",{staticClass:"tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n        Bookmark"),n("span",{staticClass:"blink_me"},[t._v("_")])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"md:tw-container md:tw-mx-auto tw-p-5 md:tw-mb-24 tw-mb-8 tn-section",attrs:{"data-aos":"fade-up","data-aos-easing":"fade-down","data-aos-duration":"900"}},[n("div",{staticClass:"tw-mb-10 md:tw-mb-14"},[n("h1",{staticClass:"tw-text-4xl tw-font-bold md:tw-text-6xl tw-subpixel-antialiased"},[t._v("\n        Podcast"),n("span",{staticClass:"blink_me"},[t._v("_")])])]),t._v(" "),n("div",{staticClass:"tw-m-5 md:tw-m-4 md:tw-container md:tw-mx-auto md:tw-grid md:tw-grid-cols-2 tw-gap-6"},[n("div",{staticClass:"tw-mb-8"},[n("iframe",{attrs:{src:"https://open.spotify.com/embed-podcast/show/56emqEDuawIbeO5mdLkNoD",width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}})]),t._v(" "),n("div",{staticClass:"tw-mb-8"},[n("iframe",{attrs:{src:"https://open.spotify.com/embed-podcast/show/6wPSMH6Yg6ghl4yPZ9YWMf",width:"100%",height:"232",frameborder:"0",allowtransparency:"true",allow:"encrypted-media"}})])])])}],!1,null,"a2a176ae",null);e.default=component.exports}}]);
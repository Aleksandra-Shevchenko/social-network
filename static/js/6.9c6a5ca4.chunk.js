(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[6],{110:function(e,t,n){"use strict";var r=n(95),a=n(1),o=n.n(a),i=n(111),s=n.n(i),c=n(0);t.a=function(e){for(var t=e.totalCount,n=e.pageSize,a=e.currentPage,i=e.onClick,u=e.portionSize,l=void 0===u?10:u,d=Math.ceil(t/n),f=[],g=1;g<=d;g++)f.push(g);var b=o.a.useState(1),_=Object(r.a)(b,2),j=_[0],p=_[1],h=Math.ceil(d/l),v=(j-1)*l+1,O=j*l;return o.a.useEffect((function(){p(Math.ceil(a/l))}),[a,l]),Object(c.jsxs)("div",{className:s.a.paginator,children:[j>1&&Object(c.jsx)("button",{className:"".concat(s.a.left," ").concat(s.a.arrow),onClick:function(){p(j-1),i((j-2)*l+1)}}),f.filter((function(e){return e>=v&&e<=O})).map((function(e){return Object(c.jsx)("button",{className:"".concat(s.a.page," ").concat(e===a&&s.a.page_active),onClick:function(){return i(e)},children:e},e)})),h>j&&Object(c.jsx)("button",{className:"".concat(s.a.right," ").concat(s.a.arrow),onClick:function(){p(j+1),i(j*l+1)}})]})}},111:function(e,t,n){e.exports={page:"Pagination_page__3ALm-",page_active:"Pagination_page_active__5YgsH",paginator:"Pagination_paginator__2lOiO",arrow:"Pagination_arrow__2JBNs",left:"Pagination_left__3OWz-",right:"Pagination_right__itvgQ"}},112:function(e,t,n){e.exports={list:"UsersList_list__j40dD"}},113:function(e,t,n){e.exports={card:"UsersCard_card__i2_cK",avatar_box:"UsersCard_avatar_box__1h0zi",avatar:"UsersCard_avatar__7Wzzt",info_box:"UsersCard_info_box__3oB1Q",name:"UsersCard_name__1I9y8",status:"UsersCard_status__1J429",button:"UsersCard_button__2-_RS",button_add:"UsersCard_button_add__2WRNP",button_delete:"UsersCard_button_delete__3p_Tz"}},123:function(e,t,n){"use strict";var r=n(112),a=n.n(r),o=(n(1),n(113)),i=n.n(o),s=n(40),c=n(10),u=n(0);var l=function(e){var t=e.user,n=e.followingInProgress,r=e.follow,a=e.unfollow,o=e.friend;return Object(u.jsxs)("div",{className:i.a.card,children:[Object(u.jsx)("div",{className:i.a.avatar_box,children:Object(u.jsx)(c.c,{to:"/profile/"+t.id,children:Object(u.jsx)("img",{src:t.photos.small?t.photos.small:s.a,alt:"user",className:i.a.avatar})})}),Object(u.jsxs)("div",{className:i.a.info_box,children:[Object(u.jsx)("p",{className:i.a.name,children:t.name}),o&&Object(u.jsx)("p",{className:i.a.status,children:t.status}),t.followed?Object(u.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return a(t.id)},className:"".concat(i.a.button," ").concat(i.a.button_delete),children:"Unfollow"}):Object(u.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){return r(t.id)},className:"".concat(i.a.button," ").concat(i.a.button_add),children:"Follow"})]})]})};t.a=function(e){var t=e.users,n=e.followingInProgress,r=e.unfollow,o=e.follow,i=e.friend;return Object(u.jsx)("div",{className:a.a.list,children:t.map((function(e){return Object(u.jsx)(l,{user:e,followingInProgress:n,follow:o,unfollow:r,friend:i},e.id)}))})}},155:function(e,t,n){e.exports={avatar:"Friends_avatar__FU8fM",page:"Friends_page__2aqf4",page_active:"Friends_page_active__1Ptoi"}},269:function(e,t,n){"use strict";n.r(t);var r=n(2);function a(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=n(20),i=n(29),s=n(1),c=n.n(s),u=(n(155),n(110)),l=n(123),d=n(0);var f=function(e){var t=e.totalFriendsCount,n=e.pageFriendsSize,r=e.currentFriendsPage,a=e.onPageChanged,o=e.friends,i=e.followingInProgress,s=e.unfollow,c=e.follow;return Object(d.jsxs)("div",{children:[Object(d.jsx)(u.a,{totalCount:t,pageSize:n,currentPage:r,onClick:a}),Object(d.jsx)(l.a,{users:o,followingInProgress:i,follow:c,unfollow:s,friend:!0})]})},g=n(19),b=n(18),_=n(3),j=n(96);t.default=Object(b.d)(Object(o.b)((function(e){return{totalFriendsCount:e.usersPage.totalFriendsCount,pageFriendsSize:e.usersPage.pageFriendsSize,currentFriendsPage:e.usersPage.currentFriendsPage,friends:e.usersPage.friends,isFetching:e.usersPage.isFetching,followingInProgress:e.usersPage.followingInProgress}}),{setCurrentFriendsPage:i.e,getUserFriends:i.c,follow:i.b,unfollow:i.h,toggleFollowingProgress:i.g}),_.f,j.a)((function(e){var t=e.currentFriendsPage,n=e.pageFriendsSize,o=e.getUserFriends,i=e.setCurrentFriendsPage,s=a(e,["currentFriendsPage","pageFriendsSize","getUserFriends","setCurrentFriendsPage"]);return c.a.useEffect((function(){o(t,n)}),[o,t,n]),Object(d.jsx)(d.Fragment,{children:s.isFetching?Object(d.jsx)(g.a,{}):Object(d.jsx)(f,Object(r.a)(Object(r.a)({},s),{},{onPageChanged:function(e){i(e),o(e,n)},currentFriendsPage:t,pageFriendsSize:n}))})}))},95:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(38);function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(c){a=!0,o=c}finally{try{r||null==s.return||s.return()}finally{if(a)throw o}}return n}}(e,t)||Object(r.a)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var r=n(2),a=n(25),o=n(26),i=n(27),s=n(28),c=n(1),u=n.n(c),l=n(3),d=n(20),f=n(0),g=function(e){return{isAuth:e.auth.isAuth,id:e.auth.id}},b=function(e){var t=function(t){Object(i.a)(c,t);var n=Object(s.a)(c);function c(){return Object(a.a)(this,c),n.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){return this.props.isAuth?Object(f.jsx)(e,Object(r.a)({},this.props)):Object(f.jsx)(l.a,{to:"/login"})}}]),c}(u.a.Component);return Object(d.b)(g)(t)}}}]);
//# sourceMappingURL=6.9c6a5ca4.chunk.js.map
(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[2],{12:function(e,t,n){e.exports={header:"Header_header__1wvV2",logo_box:"Header_logo_box__3Uutf",logo:"Header_logo__2rM5x",logo_text:"Header_logo_text__2S9gQ",avatar:"Header_avatar__20hQt",avatarNotAuth:"Header_avatarNotAuth__21vIS",user_box:"Header_user_box__1ks-9",name:"Header_name__3CMva",login:"Header_login__FBYHa",hidden_box:"Header_hidden_box__11vvz",logout:"Header_logout__2E1oC"}},19:function(e,t,n){"use strict";n(1);var a=n.p+"static/media/preloader.85b18b8e.svg",r=n(57),s=n.n(r),c=n(0);t.a=function(e){return Object(c.jsx)("img",{className:s.a.preloader,src:a,alt:"#"})}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"c",(function(){return x})),n.d(t,"d",(function(){return _})),n.d(t,"g",(function(){return N})),n.d(t,"e",(function(){return w})),n.d(t,"f",(function(){return S}));var a=n(4),r=n.n(a),s=n(9),c=n(17),i=n(2),o=n(7),u="profile/ADD-POST",l="profile/SET_USER_PROFILE",d="profile/SET_STATUS",p="profile/SAVE_PHOTO_SUCCESS",f="profile/SET_ERROR",j="profile/TOGGLE_IS_FETCHING",b="profile/TOGGLE_IS_SAVING",h={posts:[{id:"1",text:"How are you?"},{id:"2",text:"Hellow world!"},{id:"3",text:"Hi"}],profile:null,status:"",error:"",isFetching:!1,isSaving:!1},O=function(e){return{type:u,newText:e}},m=function(e){return{type:j,isFetching:e}},v=function(e){return{type:b,isSaving:e}},g=function(e){return{type:d,status:e}},x=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(m(!0)),t.next=3,o.d.getUserInfo(e);case 3:a=t.sent,n({type:l,profile:a}),n(m(!1));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},_=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,o.b.getStatus(e);case 3:a=t.sent,n(g(a.data)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},N=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(g("Saving...")),t.next=3,o.b.updateStatus(e);case 3:t.sent.data.resultCode||n(g(e));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},w=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(v(!0)),t.next=3,o.b.savePhoto(e);case 3:(a=t.sent).data.resultCode||n((r=a.data.data.photos,{type:p,photos:r})),n(v(!1));case 6:case"end":return t.stop()}var r}),t)})));return function(e){return t.apply(this,arguments)}}()},S=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,o.b.saveProfile(e);case 2:if((s=n.sent).data.resultCode){n.next=7;break}a(x(t)),n.next=9;break;case 7:return a((r=s.data.messages[0],{type:f,errorMessage:r})),n.abrupt("return",Promise.reject(s.data.messages[0]));case 9:case"end":return n.stop()}var r}),n)})));return function(e){return n.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(c.a)(e.posts),[{id:4,text:t.newText}])});case l:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case d:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case p:return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});case f:return Object(i.a)(Object(i.a)({},e),{},{error:t.errorMessage});case j:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case b:return Object(i.a)(Object(i.a)({},e),{},{isSaving:t.isSaving});default:return e}}},22:function(e,t,n){"use strict";n.d(t,"e",(function(){return j})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return h})),n.d(t,"d",(function(){return O}));var a=n(4),r=n.n(a),s=n(9),c=n(2),i=n(7),o=n(21),u="auth/SET_AUTH_USER_DATA",l="auth/SET_ERROR",d="auth/GET_CAPTCHA_URL",p={id:null,email:null,login:null,isAuth:!1,isFetching:!1,error:"",captchaUrl:null},f=function(e){return{type:u,data:e}},j=function(e){return{type:l,errorMessage:e}},b=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.authUser();case 2:if((n=e.sent).data.resultCode){e.next=6;break}return t(f(Object(c.a)(Object(c.a)({},n.data.data),{},{isAuth:!0}))),e.abrupt("return",n.data.data);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},h=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.a.login(e);case 2:if((a=t.sent).data.resultCode){t.next=9;break}return n(b()).then((function(e){e&&n(Object(o.c)(e.id))})),n(j("")),t.abrupt("return",Promise.resolve(a.data));case 9:10===a.data.resultCode&&n(function(){var e=Object(s.a)(r.a.mark((function e(t){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.c.getCaptchaUrl();case 2:n=e.sent,a=n.data.url,console.log(a),t({type:d,captchaUrl:a});case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),n(j(a.data.messages[0]));case 11:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},O=function(){return function(){var e=Object(s.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:e.sent.data.resultCode||t(f({id:null,email:null,login:null,isAuth:!1,error:"",captchaUrl:null}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(c.a)(Object(c.a)(Object(c.a)({},e),t.data),{},{error:""});case l:return Object(c.a)(Object(c.a)({},e),{},{error:t.errorMessage});case d:return Object(c.a)(Object(c.a)({},e),{},{captchaUrl:t.captchaUrl});default:return e}}},30:function(e,t,n){"use strict";n.d(t,"f",(function(){return S})),n.d(t,"e",(function(){return y})),n.d(t,"g",(function(){return C})),n.d(t,"d",(function(){return A})),n.d(t,"c",(function(){return L})),n.d(t,"b",(function(){return H})),n.d(t,"h",(function(){return R}));var a=n(4),r=n.n(a),s=n(9),c=n(17),i=n(2),o=n(7),u=function(e,t,n,a){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),a):e}))},l="user/FOLLOW",d="user/UNFOLLOW",p="user/SET_USERS",f="user/SET_FRIENDS",j="user/SET_FRIENDS_AFTER_DELETE",b="user/SET_CURRENT_PAGE",h="user/SET_CURRENT_FRIENDS_PAGE",O="user/SET_TOTAL_USERS_COUNT",m="user/SET_TOTAL_FRIENDS_COUNT",v="user/TOGGLE_IS_FETCHING",g="user/TOGGLE_IS_FOLLOWING_PROGRESS",x={users:[],pageSize:20,totalUsersCount:1,currentPage:1,isFetching:!1,followingInProgress:[],friends:[],currentFriendsPage:1,pageFriendsSize:10,totalFriendsCount:0},_=function(e){return{type:l,userId:e}},N=function(e){return{type:d,userId:e}},w=function(e){return{type:p,users:e}},S=function(e){return{type:b,page:e}},y=function(e){return{type:h,page:e}},E=function(e){return{type:O,num:e}},k=function(e){return{type:v,isFetching:e}},C=function(e,t){return{type:g,progress:e,userId:t}},T=function(e){return{type:f,friends:e}},U=function(e){return{type:j,userId:e}},F=function(e){return{type:m,num:e}},P=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a,s,c,i){var o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(k(!0)),e.next=3,s(n,a);case 3:o=e.sent,t(k(!1)),t(c(o.items)),t(i(o.totalCount));case 7:case"end":return e.stop()}}),e)})));return function(t,n,a,r,s,c){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(r.a.mark((function e(t,n,a,s){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(C(!0,n)),e.next=3,a(n);case 3:e.sent.data.resultCode||t(s(n)),t(C(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}(),A=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s=o.d.getUsers.bind(o.d),P(a,e,t,s,w,E);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},L=function(e,t){return function(){var n=Object(s.a)(r.a.mark((function n(a){var s;return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:s=o.d.getFriends.bind(o.d),P(a,e,t,s,T,F);case 2:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},H=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=o.d.followFriend.bind(o.d),I(n,e,a,_);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},R=function(e){return function(){var t=Object(s.a)(r.a.mark((function t(n){var a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=o.d.unfollowFriend.bind(o.d),I(n,e,a,N),n(U(e));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!0}),totalFriendsCount:e.totalFriendsCount+1});case d:return Object(i.a)(Object(i.a)({},e),{},{users:u(e.users,t.userId,"id",{followed:!1}),totalFriendsCount:e.totalFriendsCount-1});case p:return Object(i.a)(Object(i.a)({},e),{},{users:Object(c.a)(t.users)});case f:return Object(i.a)(Object(i.a)({},e),{},{friends:Object(c.a)(t.friends)});case j:return Object(i.a)(Object(i.a)({},e),{},{friends:e.friends.filter((function(e){return e.id!==t.userId}))});case b:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.page});case h:return Object(i.a)(Object(i.a)({},e),{},{currentFriendsPage:t.page});case O:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.num});case m:return Object(i.a)(Object(i.a)({},e),{},{totalFriendsCount:t.num});case v:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case g:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.progress?[].concat(Object(c.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},40:function(e,t,n){"use strict";t.a=n.p+"static/media/avatarDefault.b6ecac72.svg"},51:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var a=n(17),r=n(2),s="dialogs/SEND-MESSAGE",c={messages:[{id:"1",text:"Hi"},{id:"2",text:"How are you?"},{id:"3",text:"Hellow world! Hellow world! Hellow world!}Hellow world! Hellow world!\n    Hellow world! Hellow world!"}],dialogs:[{id:"1",name:"Sasha"},{id:"2",name:"Kolya"},{id:"3",name:"Sveta"},{id:"4",name:"Tanya"},{id:"5",name:"Medok"}]},i=function(e){return{type:s,newText:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object(r.a)(Object(r.a)({},e),{},{messages:[].concat(Object(a.a)(e.messages),[{id:"6",text:t.newText}])});default:return e}}},57:function(e,t,n){e.exports={preloader:"Preloader_preloader__GEOde"}},59:function(e,t,n){},6:function(e,t,n){e.exports={menu:"Navbar_menu__3tK4E",menu_nav:"Navbar_menu_nav__3EcIa",menu_list:"Navbar_menu_list__2lM7s",item:"Navbar_item__1P1wq",link:"Navbar_link__2nDx-",active:"Navbar_active__1ofAm",picture:"Navbar_picture__3x2Dp"}},7:function(e,t,n){"use strict";n.d(t,"d",(function(){return s})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return i})),n.d(t,"b",(function(){return o}));var a=n(54),r=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"15561bb6-da04-4759-83e8-0491bebdaf61"}}),s={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},getFriends:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return r.get("users?page=".concat(e,"&count=").concat(t,"&friend=true")).then((function(e){return e.data}))},getUserInfo:function(e){return o.getProfile(e)},followFriend:function(e){return r.post("follow/".concat(e),{}).then((function(e){if(!e.data.resultCode)return e.data}))},unfollowFriend:function(e){return r.delete("follow/".concat(e)).then((function(e){if(!e.data.resultCode)return e.data}))}},c={authUser:function(){return r.get("auth/me")},login:function(e){return r.post("auth/login",e)},logout:function(){return r.delete("auth/login")}},i={getCaptchaUrl:function(){return r.get("security/get-captcha-url")}},o={getProfile:function(e){return r.get("profile/".concat(e)).then((function(e){return e.data}))},getStatus:function(e){return r.get("profile/status/".concat(e))},updateStatus:function(e){return r.put("profile/status",{status:e})},savePhoto:function(e){var t=new FormData;return t.append("image",e),r.put("profile/photo",t,{"Content-Type":"multipart/form-data"})},saveProfile:function(e){return r.put("profile",e)}}},8:function(e,t,n){e.exports={introduce:"Landing_introduce__3-NDZ",text_box:"Landing_text_box__wEPvO",title:"Landing_title__31zGb",subtitle:"Landing_subtitle__3rb2_",link:"Landing_link__xYGqK",data:"Landing_data__2asvw",data_item:"Landing_data_item__3qhKN",data_nums:"Landing_data_nums__35Jm0",liner:"Landing_liner__1Q7-t",data_text:"Landing_data_text__3YH8R"}},83:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);n(59);var a=n(1),r=n.n(a),s=function(e){e&&e instanceof Function&&n.e(10).then(n.bind(null,269)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))},c=n(31),i=n.n(c),o=n(18),u=n(21),l=n(51),d=n(30),p=n(22),f=n(55),j=n(2),b="app/SET_INITIALIZED",h={initialized:!1},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b:return Object(j.a)(Object(j.a)({},e),{},{initialized:!0});default:return e}},m=Object(o.c)({profilePage:u.b,dialogsPage:l.a,usersPage:d.a,auth:p.a,app:O}),v=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||o.d,g=Object(o.e)(m,v(Object(o.a)(f.a))),x=n(26),_=n(27),N=n(28),w=n(29),S=(n(83),n(3)),y=n(20),E=n(6),k=n.n(E),C=n(10),T=n.p+"static/media/email.1ba0e733.svg",U=n.p+"static/media/settings.22afaeb4.svg",F=n.p+"static/media/friends.c34571e0.svg",P=n.p+"static/media/user.2e054d03.svg",I=n.p+"static/media/news.8904c144.svg",A=n(0);var L=function(e){return Object(A.jsx)("div",{className:k.a.menu,children:Object(A.jsx)("nav",{className:k.a.menu_nav,children:Object(A.jsxs)("ul",{className:k.a.menu_list,children:[Object(A.jsx)("li",{className:k.a.item,children:Object(A.jsx)(C.c,{to:"/profile",className:k.a.link,activeClassName:k.a.active,children:"Profile"})}),Object(A.jsx)("li",{className:k.a.item,children:Object(A.jsxs)(C.c,{to:"/dialogs",className:k.a.link,activeClassName:k.a.active,children:[Object(A.jsx)("img",{className:k.a.picture,src:T,alt:""}),"Messanger"]})}),Object(A.jsx)("li",{className:k.a.item,children:Object(A.jsxs)(C.c,{to:"/friends",className:k.a.link,activeClassName:k.a.active,children:[Object(A.jsx)("img",{className:k.a.picture,src:F,alt:""}),"Friends"]})}),Object(A.jsx)("li",{className:k.a.item,children:Object(A.jsxs)(C.c,{to:"/users",className:k.a.link,activeClassName:k.a.active,children:[Object(A.jsx)("img",{className:k.a.picture,src:P,alt:""}),"Users"]})}),Object(A.jsx)("li",{className:k.a.item,children:Object(A.jsxs)(C.c,{to:"/news",className:k.a.link,activeClassName:k.a.active,children:[Object(A.jsx)("img",{className:k.a.picture,src:I,alt:""}),"News"]})}),Object(A.jsx)("li",{className:k.a.item,children:Object(A.jsxs)(C.c,{to:"/settings",className:k.a.link,activeClassName:k.a.active,children:[Object(A.jsx)("img",{className:k.a.picture,src:U,alt:""}),"Settings"]})})]})})})};n(89);var H=function(e){return Object(A.jsx)("div",{children:"News"})};n(90);var R=function(e){return Object(A.jsx)("div",{children:"Settings"})},D=n.p+"static/media/logo.37c24b2d.svg",G=n(40),z=n(12),M=n.n(z);var K=function(e){var t=e.isAuth,n=(e.login,e.logout),a=e.photo,r=e.name;return Object(A.jsxs)("header",{className:M.a.header,children:[Object(A.jsxs)("div",{className:M.a.logo_box,children:[Object(A.jsx)("img",{className:M.a.logo,src:D,alt:""}),Object(A.jsx)(C.b,{to:t?"/profile":"/",className:M.a.logo_text,children:"TravelBook"})]}),!t&&Object(A.jsxs)("div",{className:M.a.user_box,children:[Object(A.jsx)("img",{className:"".concat(M.a.avatar," ").concat(M.a.avatarNotAuth),src:P,alt:""}),Object(A.jsx)(C.b,{className:M.a.login,to:"/",children:"Sign up"})]}),Object(A.jsxs)("div",{className:t?M.a.user_box:M.a.hidden_box,children:[Object(A.jsx)(C.b,{to:"/profile",className:M.a.name,children:r||"loading..."}),Object(A.jsx)("img",{className:M.a.avatar,src:a||G.a,alt:""}),Object(A.jsx)("button",{className:M.a.logout,onClick:n,type:"button"})]})]})},B=function(e){Object(N.a)(n,e);var t=Object(w.a)(n);function n(e){var a;return Object(x.a)(this,n),(a=t.call(this,e)).state={photo:null,name:""},a}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.profile&&this.setState({photo:this.props.photo,name:this.props.fullName})}},{key:"componentDidUpdate",value:function(e,t,n){this.props.profile&&(this.props.profile.userId!==this.props.authUserId||this.props.fullName===e.fullName&&this.props.photo===e.photo||this.setState({name:this.props.fullName,photo:this.props.photo}))}},{key:"render",value:function(){return Object(A.jsx)(K,Object(j.a)(Object(j.a)({},this.props),{},{photo:this.state.photo,name:this.state.name}))}}]),n}(r.a.Component),V=Object(y.b)((function(e){return{login:e.auth.login}}),{logout:p.d})(Object(S.f)(B)),W=n(8),Y=n.n(W);var q=function(e){var t=function(){var t=String(e.totalUsersCount).split("").reverse().join("");return(t.slice(0,3)+" "+t.slice(3)).split("").reverse().join("")};return Object(A.jsxs)("div",{className:Y.a.content,children:[Object(A.jsx)("div",{className:Y.a.introduce,children:Object(A.jsxs)("div",{className:Y.a.text_box,children:[Object(A.jsx)("h1",{className:Y.a.title,children:"See the world of amazind travel"}),Object(A.jsx)("p",{className:Y.a.subtitle,children:"Social network of travel lovers"}),Object(A.jsx)(C.b,{to:"/login",className:Y.a.link,children:"Sign in"})]})}),Object(A.jsxs)("div",{className:Y.a.data,children:[Object(A.jsxs)("div",{className:Y.a.data_item,children:[Object(A.jsx)("p",{className:Y.a.data_nums,children:t()<=1?"11 300":t()}),Object(A.jsx)("div",{className:Y.a.liner}),Object(A.jsxs)("p",{className:Y.a.data_text,children:["registered",Object(A.jsx)("br",{}),"users"]})]}),Object(A.jsxs)("div",{className:Y.a.data_item,children:[Object(A.jsx)("p",{className:Y.a.data_nums,children:"5 300"}),Object(A.jsx)("div",{className:Y.a.liner}),Object(A.jsxs)("p",{className:Y.a.data_text,children:["reviews from",Object(A.jsx)("br",{}),"different countries"]})]}),Object(A.jsxs)("div",{className:Y.a.data_item,children:[Object(A.jsx)("p",{className:Y.a.data_nums,children:"54 008"}),Object(A.jsx)("div",{className:Y.a.liner}),Object(A.jsxs)("p",{className:Y.a.data_text,children:["beautiful",Object(A.jsx)("br",{}),"user photo"]})]})]})]})},J=n(19),Q=r.a.lazy((function(){return Promise.all([n.e(0),n.e(8)]).then(n.bind(null,272))})),X=r.a.lazy((function(){return n.e(6).then(n.bind(null,273))})),Z=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,271))})),$=r.a.lazy((function(){return n.e(7).then(n.bind(null,274))})),ee=r.a.lazy((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,270))})),te=function(e){Object(N.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(x.a)(this,n);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).catchAllUnhandleErrors=function(e){console.log(e)},e}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandleErrors)}},{key:"render",value:function(){return this.props.initialized?Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)(V,Object(j.a)({},this.props)),this.props.isAuth&&Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)(L,{}),Object(A.jsxs)("div",{className:"app-content",children:[Object(A.jsx)(S.b,{path:"/profile/:userId?",children:Object(A.jsx)(a.Suspense,{fallback:Object(A.jsx)(J.a,{}),children:Object(A.jsx)(Z,{})})}),Object(A.jsx)(S.b,{exact:!0,path:"/",children:Object(A.jsx)(S.a,{to:"/profile"})}),Object(A.jsx)(S.b,{path:"/dialogs",children:Object(A.jsx)(a.Suspense,{fallback:Object(A.jsx)(J.a,{}),children:Object(A.jsx)(Q,{})})}),Object(A.jsx)(S.b,{path:"/friends",children:Object(A.jsx)(a.Suspense,{fallback:Object(A.jsx)(J.a,{}),children:Object(A.jsx)(X,{})})}),Object(A.jsx)(S.b,{path:"/news",children:Object(A.jsx)(H,{})}),Object(A.jsx)(S.b,{path:"/settings",children:Object(A.jsx)(R,{})}),Object(A.jsx)(S.b,{path:"/users",children:Object(A.jsx)(a.Suspense,{fallback:Object(A.jsx)(J.a,{}),children:Object(A.jsx)($,{})})})]})]}),Object(A.jsxs)("div",{className:"app-landing",children:[Object(A.jsx)(S.b,{exact:!0,path:"/login",children:this.props.isAuth?Object(A.jsx)(S.a,{to:"/profile"}):Object(A.jsx)(a.Suspense,{fallback:Object(A.jsx)(J.a,{}),children:Object(A.jsx)(ee,{})})}),Object(A.jsx)(S.b,{exact:!0,path:"/",children:!this.props.isAuth&&Object(A.jsx)(q,{totalUsersCount:this.props.totalUsersCount})})]}),Object(A.jsx)(S.b,{children:this.props.isAuth?Object(A.jsx)(S.a,{to:"/profile"}):Object(A.jsx)(S.a,{to:"/"})})]}):Object(A.jsx)(J.a,{})}}]),n}(r.a.Component),ne=Object(y.b)((function(e){return{isAuth:e.auth.isAuth,profile:e.profilePage.profile,photo:e.profilePage.profile?e.profilePage.profile.photos.small:null,fullName:e.profilePage.profile?e.profilePage.profile.fullName:null,login:e.auth.login,authUserId:e.auth.id,initialized:e.app.initialized,totalUsersCount:e.usersPage.totalUsersCount}}),{initializeApp:function(){return function(e){e(Object(d.d)()),e(Object(p.b)()).then((function(t){t&&e(Object(u.c)(t.id)),e({type:b})}))}}})(Object(S.f)(te));i.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(C.a,{basename:"/social-network",children:Object(A.jsx)(y.a,{store:g,children:Object(A.jsx)(ne,{})})})}),document.getElementById("root")),s()}},[[91,3,4]]]);
//# sourceMappingURL=main.e9428729.chunk.js.map
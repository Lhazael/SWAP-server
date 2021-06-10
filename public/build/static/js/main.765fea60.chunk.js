(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,n){},59:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(34),r=n.n(s),i=n(8),o=n(2),l=n(3),u=n(5),j=n(4),h=n(18),d=n.n(h),f=d.a.create({baseURL:"https://swap-lh.herokuapp.com/api",withCredentials:!0});function b(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var O={service:f,signup:function(e){return f.post("/auth/signup",e).then((function(e){return e.data})).catch(b)},signin:function(e){return f.post("/auth/signin",e).then((function(e){return e.data})).catch(b)},isLoggedIn:function(){return f.get("/auth/isLoggedIn").then((function(e){return e.data})).catch(b)},logout:function(){return f.get("/auth/logout").then((function(e){return e.data})).catch(b)},getSneakers:function(){return f.get("/sneakers").then((function(e){return e.data})).catch(b)},getOffers:function(){return f.get("/offers").then((function(e){return e.data})).catch(b)},deleteOffer:function(e){return f.delete("/offers/".concat(e)).then((function(e){return e.data})).catch(b)},updateOffer:function(e,t){return f.patch("/offers/".concat(e),t).then((function(e){return e.data})).catch(b)},addOffer:function(e){return f.post("/offers",e).catch(b)},getUserInfos:function(){return f.get("/users").then((function(e){return e.data})).catch(b)},updateUser:function(e,t){return f.patch("/users",t).then((function(e){return e.data})).catch(b)},getUserOffers:function(){return f.get("/users/offers").then((function(e){return e.data})).catch(b)}},p=c.a.createContext(),m=n(0),x=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={user:null,isLoggedIn:!1,isLoading:!0},e.setUser=function(t){e.setState({user:t,isLoggedIn:!0})},e.removeUser=function(){e.setState({user:null,isLoggedIn:!1})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.isLoggedIn().then((function(t){e.setState({user:t,isLoggedIn:!0,isLoading:!1})})).catch((function(t){e.setState({user:null,isLoggedIn:!1,isLoading:!1})}))}},{key:"render",value:function(){var e={user:this.state.user,setUser:this.setUser,removeUser:this.removeUser,isLoggedIn:this.state.isLoggedIn,isLoading:this.state.isLoading};return Object(m.jsx)(p.Provider,{value:e,children:this.props.children})}}]),n}(a.Component),g=n(6),v=n(9),N=function(e){return function(t){return Object(m.jsx)(p.Consumer,{children:function(n){return Object(m.jsx)(e,Object(v.a)(Object(v.a)({},t),{},{context:n}))}})}},k=(n(59),N((function(e){var t=e.context;return Object(m.jsxs)("nav",{className:"NavMain",children:[Object(m.jsx)(i.c,{exact:!0,to:"/",children:Object(m.jsx)("h3",{className:"logo",children:"SWAP"})}),Object(m.jsxs)("ul",{className:"nav-list",children:[Object(m.jsx)("li",{}),Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/discover",children:"Discover"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/about",children:"About"})}),t.isLoggedIn&&Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/create-offer",children:"+ New Offer"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/me",children:t.user&&t.user.username})}),Object(m.jsx)("li",{children:Object(m.jsx)("p",{onClick:function(){O.logout().then((function(){t.removeUser()})).catch((function(e){console.log(e)}))},children:"Logout"})})]}),!t.isLoggedIn&&Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/signin",children:"Log in"})}),Object(m.jsx)("li",{children:Object(m.jsx)(i.c,{to:"/signup",children:"Create account"})})]})]})]})}))),y=(n(65),n(66),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("img",{className:"background-home",src:"https://wallpapercave.com/wp/wp3631175.jpg",alt:"sneakerwall"})})}}]),n}(c.a.Component)),S=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("section",{className:"home",children:Object(m.jsx)("div",{children:Object(m.jsx)(y,{})})})}}]),n}(c.a.Component),C=n(14),w=n(16),F=(n(67),["children","className"]),L=function(e){var t=e.children,n=e.className,a=Object(w.a)(e,F);return Object(m.jsx)("button",Object(v.a)(Object(v.a)({},a),{},{className:"Button ".concat(n||""),children:t}))},U=(n(21),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){var n=t.target.name,a=t.target.value;e.setState(Object(C.a)({},n,a))},e.handleSubmit=function(t){t.preventDefault(),O.signin(e.state).then((function(t){e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.context.user?Object(m.jsx)(g.a,{to:"/"}):Object(m.jsxs)("section",{className:"form-section",children:[Object(m.jsx)("div",{class:"left"}),Object(m.jsxs)("form",{onChange:this.handleChange,onSubmit:this.handleSubmit,children:[Object(m.jsxs)("h4",{children:["Ready to ",Object(m.jsx)("span",{children:"SWAP"})," again?"]}),Object(m.jsxs)("div",{className:"floating-label",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{type:"email",id:"email",name:"email"})]}),Object(m.jsxs)("div",{className:"floating-label",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{type:"password",id:"password",name:"password"})]}),Object(m.jsx)("div",{className:"form-section-1 link",children:Object(m.jsxs)("p",{children:["Don't have an account yet? ",Object(m.jsx)("br",{}),Object(m.jsx)(i.b,{to:"/signup",children:Object(m.jsx)("b",{children:"Register"})})]})}),Object(m.jsx)(L,{children:"Submit"})]})]})}}]),n}(a.Component)),I=Object(g.g)(N(U)),R=function(e){return Object(m.jsx)(I,{})},A=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={firstName:"",lastName:"",username:"",email:"",password:""},e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(C.a)({},a,n))},e.handleSubmit=function(t){t.preventDefault(),O.signup(e.state).then((function(t){e.props.context.setUser(t)})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){return this.props.context.user?Object(m.jsx)(g.a,{to:"/"}):Object(m.jsxs)("section",{className:"form-section",children:[Object(m.jsx)("div",{class:"left"}),Object(m.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(m.jsxs)("h4",{children:["Start to ",Object(m.jsx)("span",{children:"SWAP"})," your sneakers"]}),Object(m.jsxs)("div",{className:"floating-label",children:[Object(m.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(m.jsx)("input",{onChange:this.handleChange,value:this.state.firstName,type:"firstName",id:"firstName",name:"firstName"})]}),Object(m.jsxs)("div",{className:"floating-label",children:[Object(m.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(m.jsx)("input",{onChange:this.handleChange,value:this.state.lastName,type:"lastName",id:"lastName",name:"lastName"})]}),Object(m.jsxs)("div",{className:"floating-label",children:[Object(m.jsx)("label",{htmlFor:"username",children:"Username"}),Object(m.jsx)("input",{onChange:this.handleChange,value:this.state.username,type:"username",id:"username",name:"username"})]}),Object(m.jsxs)("div",{className:"floating-label",children:[Object(m.jsx)("label",{htmlFor:"email",children:"Email"}),Object(m.jsx)("input",{onChange:this.handleChange,value:this.state.email,type:"email",id:"email",name:"email"})]}),Object(m.jsxs)("div",{className:"floating-label",children:[Object(m.jsx)("label",{htmlFor:"password",children:"Password"}),Object(m.jsx)("input",{onChange:this.handleChange,value:this.state.password,type:"password",id:"password",name:"password"})]}),Object(m.jsx)("div",{className:"form-section-1 link",children:Object(m.jsxs)("p",{children:["Already have an account? ",Object(m.jsx)("br",{}),Object(m.jsx)(i.b,{to:"/signin",children:Object(m.jsx)("b",{children:"Sign in!"})})]})}),Object(m.jsx)(L,{children:"Submit"})]})]})}}]),n}(a.Component),P=Object(g.g)(N(A)),D=function(e){return Object(m.jsx)(P,{})},W=["component","context"],E=N((function(e){var t=e.component,n=e.context,a=Object(w.a)(e,W);return n.isLoading?null:n.isLoggedIn?Object(m.jsx)(g.b,Object(v.a)(Object(v.a)({},a),{},{render:function(e){return Object(m.jsx)(t,Object(v.a)({},e))}})):Object(m.jsx)(g.a,{to:"/signin"})})),M=n(19),z=function(e){return console.log(e,"props in card offer"),Object(m.jsxs)("div",{className:"CardOffer",children:[Object(m.jsx)("div",{children:"Nikes"}),Object(m.jsx)("div",{children:Object(m.jsx)("h2",{children:e.offer.title})})]})},T=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Wishlist"})})}}]),n}(a.Component),Y=N(function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={userOffers:[],httpResponse:null},e.deleteOffer=function(t){O.deleteOffer(t).then((function(){var n=Object(M.a)(e.state.userOffers).filter((function(e){return e._id!==t}));e.setState({userOffers:n})}))},e.onOfferSelect=function(t){var n=e.state.userOffers.find((function(e){return e._id===t}));e.setState({selectedOffer:n})},e.handleOfferUpdate=function(t){var n=Object(M.a)(e.state.userOffers).map((function(e){return e._id===t._id?t:e}));e.setState({userOffers:n})},e.addOffer=function(t){e.setState({userOffers:[].concat(Object(M.a)(e.state.userOffers),[t])})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;Promise.all([O.getUserInfos(),O.getUserOffers()]).then((function(t){var n=t[0],a=t[1];e.setState({user:n,userOffers:a})}))}},{key:"componentWillUnmount",value:function(){this.timeoutId&&clearTimeout(this.timeoutId)}},{key:"render",value:function(){var e=this,t=this.state,n=(t.httpResponse,t.userOffers);return t.user?Object(m.jsxs)("section",{className:"Profile",children:[Object(m.jsxs)("div",{className:"wishlist",children:[Object(m.jsx)("h2",{children:"Your wishlist"}),Object(m.jsx)(T,{})]}),!n.length&&Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"Your offers"})}),Object(m.jsx)("p",{children:"You don't have any offer yet :("})]}),!!n.length&&Object(m.jsxs)("div",{className:"CardOffers",children:[Object(m.jsx)("h1",{children:"Your offers"}),n.map((function(t,n){return Object(m.jsx)(z,Object(v.a)(Object(v.a)({},t),{},{handleDelete:e.deleteOffer,handleEdit:e.onOfferSelect}),n)}))]})]}):null}}]),n}(a.Component)),B=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsx)("div",{children:Object(m.jsx)("h1",{children:"SWAP YOUR SNEAKERS"})})}}]),n}(c.a.Component),_=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={offers:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;O.getOffers().then((function(t){console.log(t),e.setState({offers:t})}))}},{key:"render",value:function(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("h1",{children:"Latest Offers"}),Object(m.jsx)("ul",{children:this.state.offers.map((function(e){return Object(m.jsx)("li",{children:Object(m.jsx)(z,{offer:e})})}))})]})}}]),n}(a.Component),J=d.a.create({baseURL:"https://swap-lh.herokuapp.com",withCredentials:!0});function V(e){if(e.response.data)throw console.log(e.response&&e.response.data),e;throw e}var q={service:J,findOne:function(e){return J.get("/api/sneakers/id/".concat(e)).then((function(e){return e.data})).catch(V)},getMostPopular:function(){return J.get("/api/sneakers/home").then((function(e){return e.data})).catch(V)},getProducts:function(e){return J.get("/api/sneakers/search/".concat(e)).then((function(e){return e.data})).catch(V)},getProductprices:function(e){return J.get("/api/sneakers/id/".concat(e,"/prices")).then((function(e){return e.data})).catch(V)}},G=(n(68),function(e){return Object(m.jsx)("div",{className:"CardSneaker",children:Object(m.jsxs)("div",{className:"description",children:[Object(m.jsx)("div",{className:"sneaker-thumbnail",children:Object(m.jsx)("img",{src:e.sneaker.thumbnail,alt:e.sneaker.shoeName})}),Object(m.jsxs)("div",{className:"description-sneaker",children:[Object(m.jsx)("h4",{children:e.sneaker.styleID}),Object(m.jsx)("h3",{children:e.sneaker.shoeName})]})]})})}),K=(n(69),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={sneakers:[]},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;q.getMostPopular().then((function(t){console.log(t),e.setState({sneakers:t})}))}},{key:"render",value:function(){return Object(m.jsxs)("section",{className:"container-most-popular",children:[Object(m.jsx)("div",{className:"container-most-popular",children:Object(m.jsx)("h1",{children:"Most popular sneakers on the market"})}),Object(m.jsx)("div",{className:"wrapper",children:Object(m.jsx)("ul",{children:this.state.sneakers.map((function(e){return Object(m.jsx)("li",{className:"box",children:Object(m.jsx)(G,{sneaker:e})})}))})})]})}}]),n}(a.Component)),H=(n(70),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(m.jsxs)("section",{className:"discover-page",children:[Object(m.jsx)("div",{className:"latest-offers",children:Object(m.jsx)(_,{})}),Object(m.jsx)("div",{className:"most-popular",children:Object(m.jsx)(K,{})})]})}}]),n}(c.a.Component));function Q(e,t,n){if(!t||"object"!==typeof t||t instanceof Date||t instanceof File){var a=null==t?"":t;e.append(n,a)}else Object.keys(t).forEach((function(a){Q(e,t[a],n?"".concat(n,"[").concat(a,"]"):a)}))}var X=function(e){var t=e.status,n=e.message;return Object(m.jsx)("div",{className:"FeedBack ".concat(t),children:Object(m.jsx)("p",{children:n})})},Z=c.a.forwardRef((function(e,t){return Object(m.jsxs)(c.a.Fragment,{children:[Object(m.jsx)("label",{className:"UploadWidget label",htmlFor:e.name,children:e.children}),Object(m.jsx)("input",{onChange:function(t){var n=t.target.files[0],a=URL.createObjectURL(n);e.onFileSelect&&e.onFileSelect(a)},ref:t,className:"UploadWidget input",id:e.name,name:e.name,type:"file"})]})})),$=(n(71),function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={value:"",sneakers:[]},e.handleChange=function(t){var n=t.target.value;e.setState({value:n}),e.performSearch(t.target.value)},e.handleSneakerClick=function(t){e.props.onSelect(t),e.setState({value:t.shoeName})},e.performSearch=function(t){q.getProducts(t).then((function(t){e.setState({sneakers:t.slice(0,10)})})).catch((function(e){console.log(e)}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"autocomplete",children:[Object(m.jsx)("input",{placeholder:"e.g.: Air Jordan 1 Union Blue Storm",onChange:this.handleChange,value:this.state.value,type:"text"}),Object(m.jsx)("ul",{children:this.state.sneakers.map((function(t){return Object(m.jsx)("li",{onClick:function(){return e.handleSneakerClick(t)},children:t.shoeName})}))}),Object(m.jsx)("span",{className:"close",children:"Cancel"}),Object(m.jsx)("div",{className:"dialog"})]})}}]),n}(a.Component)),ee=["36","36.5","37.5","38","38.5","39","40","40.5","41","42","42.5","43","44","44.5","45","46","47","48"],te=["httpResponse"],ne={title:"",description:"",condition:"",size:"",lookingFor:"",picture:[],price:"",selectedSneaker:null},ae=N(function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,s=new Array(a),r=0;r<a;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state=ne,e.imageRef=c.a.createRef(),e.handleChange=function(t){var n=t.target.value,a=t.target.name;e.setState(Object(C.a)({},a,n))},e.handleSubmit=function(t){if(t.preventDefault(),e.state.title){var n=new FormData,a=e.state;a.httpResponse;Q(n,Object(w.a)(a,te)),n.append("picture",e.imageRef.current.files[0]),O.addOffer(n).then((function(t){e.props.addOffer(t),e.setState(Object(v.a)(Object(v.a)({},ne),{},{httpResponse:{status:"success",message:"Item successfully added."}})),e.timeoutId=setTimeout((function(){e.setState({httpResponse:null})}),1e3)})).catch((function(t){e.setState({httpResponse:{status:"failure",message:"An error occured, try again later."}}),e.timeoutId=setTimeout((function(){e.setState({httpResponse:null})}),1e3)}))}else e.setState({error:"All categories are required !"},(function(){e.timeoutId=setTimeout((function(){e.setState({error:null})}),1e3)}))},e.handleSelectedSneaker=function(t){e.setState({selectedSneaker:t,title:t.shoeName})},e.handleFileSelect=function(t){t.tmpUrl;var n=t.file;e.setState({picture:n})},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.httpResponse,n=e.error;return Object(m.jsx)("div",{className:"FormOffer-container",children:Object(m.jsxs)("form",{className:"FormOffer",onSubmit:this.handleSubmit,children:[Object(m.jsx)("h4",{children:"Create your offer"}),t&&Object(m.jsx)(X,{message:t.message,status:t.status}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{className:"label",htmlFor:"title",children:"Title"}),Object(m.jsx)($,{onSelect:this.handleSelectedSneaker})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{className:"label",htmlFor:"description",children:"Description:"}),Object(m.jsx)("textarea",{value:this.state.description,onChange:this.handleChange,name:"description",id:"description",className:"text-area",placeholder:"e.g.: Worn a few times, great condition"})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{className:"label",htmlFor:"condition",children:"Condition:"}),Object(m.jsxs)("select",{name:"condition",id:"condition",onChange:this.handleChange,value:this.state.condition,children:[Object(m.jsx)("option",{value:"",disabled:!0,children:"What's the shoes condition?"}),Object(m.jsx)("option",{value:"new-with-tags",children:"New with tags"}),Object(m.jsx)("option",{value:"new-without-tags",children:"New without tags"}),Object(m.jsx)("option",{value:"very-good",children:"Very good"}),Object(m.jsx)("option",{value:"good",children:"Good"}),Object(m.jsx)("option",{value:"very-used",children:"Very used"})]})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{className:"label",htmlFor:"size",children:"Size (EU):"}),Object(m.jsx)("select",{name:"size",id:"size",onChange:this.handleChange,value:this.state.size,children:ee.map((function(e){return Object(m.jsx)("option",{value:e,children:e})}))})]}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{className:"label",htmlFor:"lookingFor",children:"Looking for:"}),Object(m.jsx)("textarea",{value:this.state.lookingFor,onChange:this.handleChange,name:"lookingFor",id:"lookingFor",className:"text-area",placeholder:"What are you looking for?"})]}),Object(m.jsx)("div",{className:"form-group",children:Object(m.jsx)(Z,{onFileSelect:this.handleFileSelect,ref:this.imageRef,name:"picture",children:"Upload picture"})}),Object(m.jsxs)("div",{className:"form-group",children:[Object(m.jsx)("label",{className:"label",htmlFor:"price",children:"Price"}),Object(m.jsx)("input",{value:this.state.price,onChange:this.handleChange,className:"input",type:"number",name:"price"})]}),n&&Object(m.jsx)(X,{message:n,status:"failure"}),Object(m.jsx)(L,{primary:!0,children:"Add"})]})})}}]),n}(a.Component));var ce=function(){return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)(k,{}),Object(m.jsxs)(g.d,{children:[Object(m.jsx)(g.b,{exact:!0,path:"/",component:S}),Object(m.jsx)(g.b,{exact:!0,path:"/signin",component:R}),Object(m.jsx)(g.b,{exact:!0,path:"/signup",component:D}),Object(m.jsx)(E,{path:"/profile",component:Y}),Object(m.jsx)(E,{exact:!0,path:"/create-offer",component:ae}),Object(m.jsx)(g.b,{exact:!0,path:"/about",component:B}),Object(m.jsx)(g.b,{exact:!0,path:"/discover",component:H})]})]})};n(72),n(73);r.a.render(Object(m.jsx)(i.a,{children:Object(m.jsx)(x,{children:Object(m.jsx)(ce,{})})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.765fea60.chunk.js.map
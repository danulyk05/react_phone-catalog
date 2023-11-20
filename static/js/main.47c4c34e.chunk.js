(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],{37:function(e,t,c){},57:function(e,t,c){"use strict";c.r(t);var s=c(18),a=c.n(s),n=c(24),i=c(40),r=c(12),o=c(19),l=c(41),d=c.n(l),j=c(35),u=c(13),b=Object(o.b)({name:"cart",initialState:[],reducers:{addCart:function(e,t){e.push(Object(u.a)(Object(u.a)({},t.payload),{},{amount:1}))},removeCart:function(e,t){return e.filter((function(e){return e.phoneId!==t.payload.phoneId}))},clearCart:function(){return[]},addAmountCart:function(e,t){return e.map((function(e){return e.phoneId===t.payload.phoneId?Object(u.a)(Object(u.a)({},t.payload),{},{amount:t.payload.amount?t.payload.amount+1:1}):e}))},removeAmountCart:function(e,t){return e.map((function(e){return e.phoneId===t.payload.phoneId?Object(u.a)(Object(u.a)({},t.payload),{},{amount:t.payload.amount?t.payload.amount-1:1}):e}))}}}),m=b.reducer,h=b.actions,p=h.addCart,O=h.removeCart,_=(h.clearCart,h.addAmountCart),x=h.removeAmountCart,g=Object(o.b)({name:"favorites",initialState:[],reducers:{addFavorites:function(e,t){e.push(t.payload)},removeFavorites:function(e,t){return e.filter((function(e){return e.id!==t.payload.id}))},clearFavorites:function(){return[]}}}),v=g.reducer,f=g.actions,N=f.addFavorites,y=f.removeFavorites,C=(f.clearFavorites,{key:"root",storage:d.a}),w=Object(r.b)({cart:m,favorites:v}),P=Object(j.a)(C,w),k=Object(o.a)({reducer:P}),S=Object(j.b)(k),A=k,L=c(4),D=c(5),T=c(3),E=c(1),F=(c(37),c(7)),I=c.n(F),R=c(0),B=function(e){var t=e.isActive;return I()("navigation__link",{activeLink:t})},M=function(){return Object(R.jsx)("nav",{className:"navigation",children:Object(R.jsxs)("ul",{className:"navigation__list",children:[Object(R.jsx)("li",{className:"navigation__item",children:Object(R.jsx)(D.c,{to:"/",className:B,children:"home"})}),Object(R.jsx)("li",{className:"navigation__item",children:Object(R.jsx)(D.c,{to:"/phones",className:B,children:"Phones"})}),Object(R.jsx)("li",{className:"navigation__item",children:Object(R.jsx)(D.c,{to:"/tablets",className:B,children:"tablets"})}),Object(R.jsx)("li",{className:"navigation__item",children:Object(R.jsx)(D.c,{to:"/accessories",className:B,children:"accessories"})})]})})},H=n.b,$=n.c,q=c(42),W=c.n(q);function Y(e,t){var c=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(L.a)(e,2),s=t[0],a=t[1];null===a?c.delete(s):Array.isArray(a)?(c.delete(s),a.forEach((function(e){c.append(s,e)}))):c.set(s,a)})),c.toString()}var V=function(){var e=Object(D.d)(),t=Object(L.a)(e,2),c=t[0],s=t[1],a=Object(E.useState)(c.get("query")||""),n=Object(L.a)(a,2),i=n[0],r=n[1],o=Object(T.n)().pathname,l=c.get("query");Object(E.useEffect)((function(){null===l&&r("")}),[l]);var d=Object(E.useCallback)(W()(s,1e3),[o]);return Object(R.jsx)("div",{className:"search",children:Object(R.jsxs)("form",{action:"",className:"search__form",children:[Object(R.jsx)("input",{type:"text",value:i,className:"search__input",name:"search",placeholder:"Search in ".concat(Object(T.n)().pathname.slice(1),"..."),onChange:function(e){var t=e.target.value;if(!t)return r(""),void d(Y(c,{query:null}));r(t),d(Y(c,{query:t}))}}),Object(R.jsx)("div",{className:"icon",children:i?Object(R.jsx)("button",{type:"button",onClick:function(){return r("")},"data-cy":"searchDelete",children:Object(R.jsx)("img",{src:"./images/icons/Close.svg",alt:"search",className:"icon__img","data-cy":"searchDelete"})}):Object(R.jsx)("img",{src:"./images/icons/Search.svg",alt:"search",className:"icon__img"})})]})})},G=function(e){var t=e.isActive;return I()("header__icon",{activeLink:t})},U=function(){var e=$((function(e){return e})),t=e.cart,c=e.favorites,s=Object(T.o)("phones"),a=Object(T.o)("tablets"),n=Object(T.o)("accessories"),i=Object(T.o)("favorites"),r=Object(T.o)("cart"),o=s||n||i||a,l=t.reduce((function(e,t){return void 0!==t.amount?e+t.amount:0}),0);return Object(R.jsxs)("header",{className:"header",children:[Object(R.jsxs)("div",{className:"header__container",children:[Object(R.jsx)("div",{className:"logo header__logo",children:Object(R.jsx)(D.c,{to:"/",className:"logo__link",children:Object(R.jsx)("img",{src:"./images/LOGO.svg",alt:"logo",className:"logo__img"})})}),!r&&Object(R.jsx)("div",{className:"header__navigation",children:Object(R.jsx)(M,{})})]}),Object(R.jsxs)("div",{className:"header__action",children:[o&&Object(R.jsx)(V,{}),!r&&Object(R.jsxs)(D.c,{to:"/favorites",className:G,children:[Object(R.jsx)("img",{src:"./images/icons/Favourites.svg",alt:"favorite",className:"icon"}),!!c.length&&Object(R.jsx)("div",{className:"header__iconRed",children:c.length})]}),Object(R.jsxs)(D.c,{to:"/cart",className:G,children:[Object(R.jsx)("img",{src:"./images/icons/Shopping.svg",alt:"cart",className:"icon"}),!!t.length&&Object(R.jsx)("div",{className:"header__iconRed",children:l})]})]})]})},J=function(){return Object(R.jsx)("footer",{className:"footer",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"footer__wrapper",children:[Object(R.jsx)("div",{className:"logo",children:Object(R.jsx)(D.c,{to:"/",className:"logo__link",children:Object(R.jsx)("img",{src:"./images/LOGO.svg",alt:"logo",className:"logo__img"})})}),Object(R.jsx)("nav",{className:"navigation",children:Object(R.jsxs)("ul",{className:"navigation__list",children:[Object(R.jsx)("li",{className:"navigation__item",children:Object(R.jsx)("a",{href:"https://github.com/danulyk05",className:"navigation__link",target:"_blank",rel:"noopener noreferrer",children:"Github"})}),Object(R.jsx)("li",{className:"navigation__item",children:Object(R.jsx)("a",{href:"https://github.com/danulyk05",className:"navigation__link",target:"_blank",rel:"noopener noreferrer",children:"Contacts"})}),Object(R.jsx)("li",{className:"navigation__item",children:Object(R.jsx)("a",{href:"/",className:"navigation__link",children:"rights"})})]})}),Object(R.jsxs)("div",{className:"footer__backTop",children:[Object(R.jsx)("div",{className:"footer__textBack",children:"Back to top"}),Object(R.jsx)("button",{type:"button",className:"footer__button",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:Object(R.jsx)("img",{src:"./images/icons/ArrowTop.svg",alt:"back to top"})})]})]})})})},X=function(){return Object(R.jsxs)("div",{className:"App",children:[Object(R.jsx)(U,{}),Object(R.jsx)("main",{className:"main",children:Object(R.jsx)(T.a,{})}),Object(R.jsx)(J,{})]})},z=[{url:"./images/SliderImages/banner-phones.png",title:"phone",id:0},{url:"./images/SliderImages/banner-tablets.png",title:"tablets",id:1},{url:"./images/SliderImages/banner-accessories.png",title:"accessories",id:2}],Q=function(){var e=Object(E.useState)(0),t=Object(L.a)(e,2),c=t[0],s=t[1],a=Object(E.useRef)(null),n=Object(E.useCallback)((function(){var e=c===z.length-1;s(e?0:c+1)}),[c,z]);return Object(E.useEffect)((function(){return a.current&&clearTimeout(a.current),a.current=setTimeout((function(){n()}),5e3),function(){a.current&&clearTimeout(a.current)}}),[n]),Object(R.jsx)("section",{className:"slider homePage__slider",children:Object(R.jsxs)("div",{className:"slider__wrapper",children:[Object(R.jsxs)("div",{className:"slider__photoBlock",children:[Object(R.jsx)("div",{className:"slider__arrowLeft",children:Object(R.jsx)("button",{type:"button",className:"slider__button",onClick:function(){var e=0===c?z.length-1:c-1;s(e)},children:Object(R.jsx)("img",{src:"./images/icons/ArrowLeft.svg",alt:"ArrowLeft"})})}),Object(R.jsx)("div",{className:"slider__photosWrap",children:Object(R.jsx)("div",{className:"slider__photos",style:{transform:"translateX(-".concat(100*c,"%)")},children:z.map((function(e){return Object(R.jsx)("img",{src:e.url,alt:e.title,className:"slider__img"})}))})}),Object(R.jsx)("div",{className:"slider__arrowRight",children:Object(R.jsx)("button",{type:"button",className:"slider__button",onClick:n,children:Object(R.jsx)("img",{src:"./images/icons/ArrowRight.svg",alt:"ArrowRight"})})})]}),Object(R.jsx)("div",{className:"slider__switchers",children:z.map((function(e){return Object(R.jsx)("button",{type:"button",className:I()("slider__switch",{"slider__switch--selected":e.id===c}),onClick:function(){return s(e.id)},"aria-label":"Go to slide ".concat(e.id)},e.id)}))})]})})},Z="https://mate-academy.github.io/react_phone-catalog",K=function(e){var t=e.phone,c=Object(E.useState)(!1),s=Object(L.a)(c,2),a=s[0],n=s[1],i=Object(E.useState)(!1),r=Object(L.a)(i,2),o=r[0],l=r[1],d=H(),j=$((function(e){return e})),u=j.cart,b=j.favorites,m=t.image,h=t.price,_=t.fullPrice,x=t.name,g=t.screen,v=t.capacity,f=t.ram,C=t.phoneId;return Object(E.useEffect)((function(){u.some((function(e){return e.id===t.id}))?n(!0):n(!1),b.some((function(e){return e.id===t.id}))?l(!0):l(!1)}),[u,b]),Object(R.jsxs)("div",{className:"productCard","data-cy":"cardsContainer",children:[Object(R.jsx)(D.b,{to:"/phones/".concat(C),className:"productCard__photo",children:Object(R.jsx)("img",{src:"".concat(Z,"/_new/").concat(m),alt:x,className:"productCard__img"})}),Object(R.jsx)("div",{className:"productCard__name",children:Object(R.jsx)(D.b,{to:"/phones/".concat(C),className:"productCard__linkName",children:x})}),t.fullPrice<1200?Object(R.jsxs)("div",{className:"productCard__price",children:[Object(R.jsx)("span",{className:"productCard__fullPrice",children:"$".concat(h)}),Object(R.jsx)("span",{className:"productCard__discountedPrice",children:"$".concat(_)})]}):Object(R.jsx)("div",{className:"productCard__price",children:Object(R.jsx)("span",{className:"productCard__fullPrice",children:"$".concat(_)})}),Object(R.jsxs)("div",{className:"productCard__technicInfo",children:[Object(R.jsxs)("div",{className:"productCard__info productCard__info--left",children:[Object(R.jsx)("span",{children:"Screen"}),Object(R.jsx)("span",{children:"Capacity"}),Object(R.jsx)("span",{children:"RAM"})]}),Object(R.jsxs)("div",{className:"productCard__info productCard__info--right",children:[Object(R.jsx)("span",{children:g}),Object(R.jsx)("span",{children:v}),Object(R.jsx)("span",{children:f})]})]}),Object(R.jsxs)("div",{className:"productCard__action",children:[a?Object(R.jsx)("button",{type:"button",className:I()("productCard__addToCard","productCard__addToCard--selected"),onClick:function(){d(O(t))},children:"Added to cart"}):Object(R.jsx)("button",{type:"button",className:I()("productCard__addToCard"),onClick:function(){d(p(t))},children:"Add to cart"}),o?Object(R.jsx)("button",{type:"button",className:I()("productCard__addToFavorite","productCard__addToFavorite--selected"),onClick:function(){d(y(t))},"data-cy":"addToFavorite",children:Object(R.jsx)("img",{src:"./images/icons/FavouritesSelected.svg",alt:"Favourites Selected",className:"icon"})}):Object(R.jsx)("button",{type:"button",className:I()("productCard__addToFavorite"),onClick:function(){d(N(t))},"data-cy":"addToFavorite",children:Object(R.jsx)("img",{src:"./images/icons/Favourites.svg",alt:"Favourites",className:"icon"})})]})]})},ee=function(e){var t=e.phones,c=e.title,s=Object(E.useState)(0),a=Object(L.a)(s,2),n=a[0],i=a[1];return Object(R.jsx)("section",{className:"productSlider homePage__productSlider",children:Object(R.jsxs)("div",{className:"productSlider__wrapper",children:[Object(R.jsxs)("div",{className:"productSlider__topPart",children:[Object(R.jsx)("h1",{className:"title",children:c}),Object(R.jsxs)("div",{className:"productSlider__actionBlock",children:[Object(R.jsx)("button",{type:"button",className:I()("productSlider__button",{"productSlider__button--disabled":0===n}),disabled:0===n,onClick:function(){0===n||i((function(e){return e-1}))},children:0!==n?Object(R.jsx)("img",{src:"./images/icons/ArrowLeft.svg",alt:"ArrowLeft",className:"icon"}):Object(R.jsx)("img",{src:"./images/icons/ArrowLeftDisabled.svg",alt:"ArrowLeft",className:"icon"})}),Object(R.jsx)("button",{type:"button",className:I()("productSlider__button",{"productSlider__button--disabled":n===t.length-4}),disabled:n===t.length-4,onClick:function(){n===t.length-4||i((function(e){return e+1}))},children:n!==t.length-4?Object(R.jsx)("img",{src:"./images/icons/ArrowRight.svg",alt:"ArrowRight",className:"icon"}):Object(R.jsx)("img",{src:"./images/icons/ArrowRightDisabled.svg",alt:"ArrowRight",className:"icon"})})]})]}),Object(R.jsx)("div",{className:"productSlider__phoneListWrap",children:Object(R.jsx)("div",{className:"productSlider__phoneList",style:{transform:"translateX(-".concat(288*n,"px)")},children:t.map((function(e){return Object(R.jsx)(K,{phone:e},e.id)}))})})]})})},te=function(e){var t=e.phones;return Object(R.jsx)("section",{className:"byCategories homePage__byCategories",children:Object(R.jsxs)("div",{className:"byCategories__wrapper",children:[Object(R.jsx)("div",{className:"byCategories__top",children:Object(R.jsx)("h1",{className:"title",children:"Shop by category"})}),Object(R.jsxs)("div",{className:"byCategories__categories","data-cy":"categoryLinksContainer",children:[Object(R.jsxs)("div",{className:"byCategories__block",children:[Object(R.jsx)(D.b,{to:"/phones",className:"byCategories__photoLink",children:Object(R.jsx)("img",{src:"./images/categories/Phones.png",alt:"Phones",className:"byCategories__img"})}),Object(R.jsx)("h2",{className:"byCategories__title",children:"Mobile phones"}),Object(R.jsx)("span",{className:"byCategories__countModels",children:"".concat(t.length," models")})]}),Object(R.jsxs)("div",{className:"byCategories__block",children:[Object(R.jsx)(D.b,{to:"/tablets",className:"byCategories__photoLink",children:Object(R.jsx)("img",{src:"./images/categories/Tablets.png",alt:"Tablets",className:"byCategories__img"})}),Object(R.jsx)("h2",{className:"byCategories__title",children:"Tablets"}),Object(R.jsx)("span",{className:"byCategories__countModels",children:"".concat(0," models")})]}),Object(R.jsxs)("div",{className:"byCategories__block",children:[Object(R.jsx)(D.b,{to:"/accessories",className:"byCategories__photoLink",children:Object(R.jsx)("img",{src:"./images/categories/Accessories.png",alt:"Accessories",className:"byCategories__img"})}),Object(R.jsx)("h2",{className:"byCategories__title",children:"Accessories"}),Object(R.jsx)("span",{className:"byCategories__countModels",children:"".concat(0," models")})]})]})]})})},ce=function(){return Object(R.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(R.jsx)("div",{className:"Loader__content"})})},se=function(e){var t=e.phones,c=e.isLoading,s=Object(E.useMemo)((function(){return t.filter((function(e){return 2019===e.year})).sort((function(e,t){return t.fullPrice-e.fullPrice}))}),[t]),a=Object(E.useMemo)((function(){return t.filter((function(e){return e.fullPrice<1200})).sort((function(e,t){return t.fullPrice-e.fullPrice}))}),[t]);return c?Object(R.jsx)(ce,{}):Object(R.jsx)("main",{className:"homePage",children:Object(R.jsxs)("div",{className:"container",children:[Object(R.jsx)(Q,{}),Object(R.jsx)(ee,{title:"Hot prices",phones:a}),Object(R.jsx)(te,{phones:t}),Object(R.jsx)(ee,{title:"Brand new models",phones:s})]})})};function ae(e){return new Promise((function(t){setTimeout(t,e)}))}var ne,ie,re=function(e){return function(e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,c={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return t&&(c.body=JSON.stringify(t),c.headers={"Content-Type":"application/json; charset=UTF-8"}),ae(500).then((function(){return fetch(Z+e,c)})).then((function(e){var t;if(!e.ok)throw new Error("".concat(e.status," - ").concat(e.statusText));return null!==(t=e.headers.get("content-type"))&&void 0!==t&&t.includes("application/json")?e.json():new Error("Content-type is not supported")}))}(e)},oe=function(e){var t=e.phone,c=Object(T.n)(),s="",a=c.pathname.split("/").filter((function(e){return""!==e}));function n(e){return e.charAt(0).toUpperCase()+e.slice(1)}var i=function(e,t){return t===e.itemId?e.name:n(t)};return Object(R.jsxs)("div",{className:"breadcrumbs","data-cy":"breadCrumbs",children:[Object(R.jsx)(D.b,{to:"/",children:Object(R.jsx)("img",{src:"./images/icons/Home.svg",alt:"home"})}),a.map((function(e,c){return s+="/".concat(e),Object(R.jsxs)("div",{className:"breadcrumbs__item",children:[Object(R.jsx)("img",{src:"./images/icons/ArrowRightDisabled.svg",alt:"ArrowRightDisabled"}),Object(R.jsx)(D.b,{to:s,className:I()("breadcrumbs__crumb",{"breadcrumbs__crumb--disabled":c===a.length-1}),children:t?i(t,e):n(e)},e)]})}))]})},le=c(8),de=function(e){var t=e.phones,c=e.arrayValues,s=e.param,a=e.selectValue,n=e.title,i=Object(E.useState)(!0),r=Object(L.a)(i,2),o=r[0],l=r[1],d=Object(D.d)(),j=Object(L.a)(d,2),u=j[0],b=j[1],m=Object(E.useRef)(null);return Object(E.useEffect)((function(){var e=function(e){m.current&&!m.current.contains(e.target)&&l(!0)};return document.addEventListener("mousedown",e),function(){document.removeEventListener("mousedown",e)}}),[]),Object(R.jsxs)("div",{className:I()("dropdown",{"dropdown--sortby":"Sort by"===n,"dropdown--onpage":"Items on page"===n}),ref:m,children:[Object(R.jsx)("span",{className:"dropdown__title",children:n}),Object(R.jsxs)("button",{type:"button",className:I()("dropdown__value",{"dropdown__value--focused":!o}),onClick:function(){return o?l(!1):(b(Y(u,{page:"1"})),l(!0))},children:[a,o?Object(R.jsx)("img",{src:"./images/icons/ArrowDown.svg",alt:""}):Object(R.jsx)("img",{src:"./images/icons/ArrowTop.svg",alt:""})]}),!o&&Object(R.jsx)("ul",{className:I()("dropdown__select",{"hidden-select":o}),children:c.map((function(e){return Object(R.jsx)("li",{className:"dropdown__option",children:Object(R.jsx)(D.b,{to:{search:Y(u,Object(le.a)({},s,"All"!==e?e:t.length.toString()))},className:"dropdown__link",onClick:function(){return l(!0)},children:e})},e)}))})]})};!function(e){e.NEWEST="Newest",e.ALPHABETICALLY="Alphabetically",e.CHEAPEST="Cheapest"}(ne||(ne={})),function(e){e.All="All",e.Four="4",e.Eight="8",e.Sixteen="16"}(ie||(ie={}));var je=function(e){for(var t=e.phonesPerPage,c=e.totalPhones,s=Object(D.d)(),a=Object(L.a)(s,1)[0],n=+(a.get("page")||1),i=[],r=Math.ceil(c/t),o=1;o<=r;o+=1)i.push(o);return Object(R.jsxs)("div",{className:"pagination","data-cy":"pagination",children:[Object(R.jsx)(D.b,{to:{search:Y(a,{page:"".concat(n-1)})},className:I()("pagination__arrow",{"pagination__arrow--disable":1===n}),"data-cy":"paginationLeft",children:1!==n?Object(R.jsx)("img",{src:"./images/icons/ArrowLeft.svg",alt:"prev page"}):Object(R.jsx)("img",{src:"./images/icons/ArrowLeftDisabled.svg",alt:"prev page"})}),Object(R.jsx)("ul",{className:"pagination__list",children:i.map((function(e){return Object(R.jsx)("li",{className:"pagination__li",children:Object(R.jsx)(D.b,{to:{search:Y(a,{page:"".concat(e)})},className:I()("pagination__link",{"pagination__link--active":n===e}),children:e})},e)}))}),Object(R.jsx)(D.b,{to:{search:Y(a,{page:"".concat(n+1)})},className:I()("pagination__arrow",{"pagination__arrow--disable":n===i.length}),"data-cy":"paginationRight",children:n!==i.length?Object(R.jsx)("img",{src:"./images/icons/ArrowRight.svg",alt:"prev page"}):Object(R.jsx)("img",{src:"./images/icons/ArrowRightDisabled.svg",alt:"prev page"})})]})};var ue=function(e){var t=e.products;return Object(R.jsx)("div",{className:"productsList","data-cy":"productList",children:t.map((function(e){return Object(R.jsx)(K,{phone:e},e.id)}))})},be=c(17),me=c.n(be),he=function(e){var t=e.title;return Object(R.jsx)("div",{className:"pageEmpty",children:Object(R.jsx)(me.a,{strings:[t],typeSpeed:75,className:"title",showCursor:!1})})},pe=function(e){var t=e.phones,c=e.isLoading,s=Object(D.d)(),a=Object(L.a)(s,2),n=a[0],i=a[1],r=+(n.get("page")||1),o=+(n.get("perPage")||16),l=n.get("query"),d=r*o,j=d-o,u=n.get("sort")||ne.NEWEST,b=+(n.get("perPage")||ie.Sixteen),m=function(e,t){switch(t){case ne.NEWEST:return e.sort((function(e,t){return t.year-e.year}));case ne.CHEAPEST:return e.sort((function(e,t){return e.fullPrice-t.fullPrice}));case ne.ALPHABETICALLY:return e.sort((function(e,t){return e.name.localeCompare(t.name)}));default:return e}}(t,u),h=l?m.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())})):m,p=h.slice(j,d),O=Object.values(ie),_=Object.values(ne);return Object(E.useEffect)((function(){var e=new URLSearchParams(n);e.set("page","1"),i(e)}),[b]),c?Object(R.jsx)(ce,{}):Object(R.jsx)("main",{className:"phonesPage",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"phonesPage__wrapper",children:[Object(R.jsx)(oe,{phone:null}),!!p.length&&Object(R.jsxs)("div",{className:"phonePage__all",children:[Object(R.jsx)("h2",{className:"title phonesPage__title",children:"Mobile phones"}),Object(R.jsx)("span",{className:"phonesPage__itemsAmount",children:"".concat(h.length," models")}),Object(R.jsxs)("div",{className:"phonesPage__dropDownContainer",children:[Object(R.jsx)(de,{title:"Sort by",arrayValues:_,phones:t,selectValue:u,param:"sort"}),Object(R.jsx)(de,{title:"Items on page",arrayValues:O,phones:t,selectValue:b,param:"perPage"})]}),Object(R.jsx)("div",{className:"phonesPage__listPhones",children:Object(R.jsx)(ue,{products:p})}),Object(R.jsx)("div",{className:"phonesPage__pagination",children:Object(R.jsx)(je,{phonesPerPage:o,totalPhones:h.length})})]}),!p.length&&Object(R.jsx)(he,{title:"Phone was not found"})]})})})},Oe=function(){var e=Object(T.q)();return Object(R.jsxs)("button",{type:"button",className:"buttonBack","data-cy":"backButton",onClick:function(){e(-1)},children:[Object(R.jsx)("img",{src:"./images/icons/ArrowLeft.svg",alt:"back button",className:"buttonBack__img icon"}),"Back"]})},_e=function(e){var t=e.phone,c=Object(E.useState)(null===t||void 0===t?void 0:t.images[0]),s=Object(L.a)(c,2),a=s[0],n=s[1];return Object(R.jsxs)("div",{className:"imageSwitcher",children:[Object(R.jsx)("div",{className:"imageSwitcher__vertical",children:t&&t.images.map((function(e){return Object(R.jsx)("button",{type:"button",className:I()("imageSwitcher__smallImg",{"imageSwitcher__smallImg--selected":e===a}),onClick:function(){return function(e){n(e)}(e)},children:Object(R.jsx)("img",{src:"https://mate-academy.github.io/react_phone-catalog/_new/".concat(e),alt:t.name,className:"imageSwitcher__optionsImg"})},e)}))}),Object(R.jsx)("div",{className:"imageSwitcher__main",children:t&&Object(R.jsx)("img",{src:"https://mate-academy.github.io/react_phone-catalog/_new/".concat(a),alt:t.name,className:"imageSwitcher__mainImg"})})]})},xe={rosegold:"#F9D2CD",gold:"#F3DBC4",silver:"#D9DADB",black:"#363539",green:"#BEE8D5",yellow:"#FEE889",white:"#FCF7F4",purple:"#CCC2D6",red:"#CD283F",spacegray:"#4E4D4B",midnightgreen:"#5F6960",coral:"#FD6A56"},ge=function(e){var t=e.phone,c=e.phoneN,s=Object(T.s)().phoneId,a=Object(E.useState)(!1),n=Object(L.a)(a,2),i=n[0],r=n[1],o=Object(E.useState)(!1),l=Object(L.a)(o,2),d=l[0],j=l[1],u=H(),b=$((function(e){return e})),m=b.cart,h=b.favorites;Object(E.useEffect)((function(){c&&(m.some((function(e){return e.id===c.id}))?r(!0):r(!1),h.some((function(e){return e.id===c.id}))?j(!0):j(!1))}),[m,h]);var _=null===s||void 0===s?void 0:s.split("-"),x="/phones/".concat(null===s||void 0===s?void 0:s.split("-").slice(0,-2).join("-")),g=_&&_[_.length-2],v=_&&_[_.length-1];return Object(R.jsxs)("div",{className:"productOption","data-cy":"productDescription",children:[Object(R.jsxs)("div",{className:"productOption__colorsContainer",children:[Object(R.jsx)("h3",{className:"productOption__titleH3",children:"Available colors"}),Object(R.jsx)("ul",{className:"productOption__colors",children:t&&t.colorsAvailable.map((function(e){return Object(R.jsx)("li",{className:I()("productOption__color",{"productOption__color--isActive":e===v}),style:{backgroundColor:xe[e]},children:Object(R.jsx)(D.b,{to:"".concat(x,"-").concat(g,"-").concat(e),className:"productOption__colorInside"})},e)}))})]}),Object(R.jsxs)("div",{className:"productOption__capacityContainer",children:[Object(R.jsx)("h3",{className:"productOption__titleH3",children:"Select capacity"}),Object(R.jsx)("ul",{className:"productOption__capacities",children:null===t||void 0===t?void 0:t.capacityAvailable.map((function(e){return Object(R.jsx)("li",{children:Object(R.jsx)(D.b,{to:"".concat(x,"-").concat(e.toLowerCase(),"-").concat(v),className:I()("productOption__capacity",{"productOption__capacity--isActive":e.toLowerCase()===g}),children:e})},e)}))})]}),Object(R.jsxs)("div",{className:"productOption__priceSection",children:[Object(R.jsx)("div",{className:"productOption__prices",children:t&&(null===t||void 0===t?void 0:t.priceRegular)<1200?Object(R.jsxs)("div",{className:"productOption__price",children:[Object(R.jsx)("span",{className:"productOption__fullPrice",children:"$".concat(t.priceDiscount)}),Object(R.jsx)("span",{className:"productOption__discountedPrice",children:"$".concat(t.priceRegular)})]}):Object(R.jsx)("div",{className:"productOption__price",children:Object(R.jsx)("span",{className:"productOption__fullPrice",children:"$".concat(null===t||void 0===t?void 0:t.priceRegular)})})}),Object(R.jsxs)("div",{className:"productOption__action",children:[i&&c?Object(R.jsx)("button",{type:"button",className:I()("productOption__addToCard","productOption__addToCard--selected"),onClick:function(){u(O(c))},children:"Added to cart"}):Object(R.jsx)("button",{type:"button",className:I()("productOption__addToCard"),onClick:function(){var e;(e=c)&&u(p(e))},children:"Add to cart"}),d&&c?Object(R.jsx)("button",{type:"button",className:I()("productOption__addToFavorite","productOption__addToFavorite--selected"),onClick:function(){u(y(c))},children:Object(R.jsx)("img",{src:"./images/icons/FavouritesSelected.svg",alt:"Favourites Selected",className:"icon"})}):Object(R.jsx)("button",{type:"button",className:I()("productOption__addToFavorite"),onClick:function(){var e;(e=c)&&u(N(e))},children:Object(R.jsx)("img",{src:"./images/icons/Favourites.svg",alt:"Favourites",className:"icon"})})]})]}),Object(R.jsxs)("div",{className:"productOption__infoSection",children:[Object(R.jsxs)("div",{className:"productOption__infoLeft",children:[Object(R.jsx)("span",{className:"productOption__infoLeftP",children:"Screen"}),Object(R.jsx)("span",{className:"productOption__infoLeftP",children:"Resolution"}),Object(R.jsx)("span",{className:"productOption__infoLeftP",children:"Processor"}),Object(R.jsx)("span",{className:"productOption__infoLeftP",children:"RAM"})]}),Object(R.jsxs)("div",{className:"productOption__infoRight",children:[Object(R.jsx)("p",{className:"productOption__infoRightP",children:null===t||void 0===t?void 0:t.screen}),Object(R.jsx)("p",{className:"productOption__infoRightP",children:null===t||void 0===t?void 0:t.resolution}),Object(R.jsx)("p",{className:"productOption__infoRightP",children:null===t||void 0===t?void 0:t.processor}),Object(R.jsx)("p",{className:"productOption__infoRightP",children:null===t||void 0===t?void 0:t.ram})]})]})]})},ve=function(e){var t=e.phones,c=Object(E.useState)(!1),s=Object(L.a)(c,2),a=s[0],n=s[1],i=Object(T.s)().phoneId,r=Object(E.useState)(null),o=Object(L.a)(r,2),l=o[0],d=o[1],j=t.find((function(e){return e.itemId===i}))||null;return Object(E.useEffect)((function(){n(!0),i&&function(e){return re("/_new/products/".concat(e,".json"))}(i).then((function(e){d(e),n(!1)})).finally((function(){n(!1)}))}),[i]),a?Object(R.jsx)(ce,{}):Object(R.jsx)("div",{className:"productDetail",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"productDetail__wrapper",children:[j&&Object(R.jsx)("div",{className:"productDetail__breadcrumbs",children:Object(R.jsx)(oe,{phone:j})}),Object(R.jsx)("div",{className:"productDetail__back",children:Object(R.jsx)(Oe,{})}),j&&Object(R.jsxs)("div",{className:"productDetail__all",children:[Object(R.jsx)("h1",{className:"title productDetail__titleMain",children:null===l||void 0===l?void 0:l.name}),Object(R.jsxs)("section",{className:"productDetail__infoTop",children:[Object(R.jsx)(_e,{phone:l}),Object(R.jsx)(ge,{phone:l,phoneN:j})]}),Object(R.jsxs)("section",{className:"productDetail__infoBottom",children:[Object(R.jsxs)("aside",{className:"productDetail__infoBottomLeft",children:[Object(R.jsx)("h2",{className:"productDetail__titleH2",children:"About"}),null===l||void 0===l?void 0:l.description.map((function(e){return Object(R.jsxs)("div",{className:"productDetail__description",children:[Object(R.jsx)("h3",{className:"productDetail__titleH3",children:e.title}),Object(R.jsx)("p",{className:"productDetail__p",children:e.text})]})}))]}),Object(R.jsxs)("aside",{className:"productDetail__infoBottomRight",children:[Object(R.jsx)("h2",{className:"productDetail__titleH2",children:"Tech specs"}),Object(R.jsxs)("div",{className:"productDetail__specs",children:[Object(R.jsxs)("div",{className:"productDetail__blokL",children:[Object(R.jsx)("p",{children:"Screen"}),Object(R.jsx)("p",{children:"Resolution"}),Object(R.jsx)("p",{children:"Processor"}),Object(R.jsx)("p",{children:"RAM"}),Object(R.jsx)("p",{children:"Built in memory"}),Object(R.jsx)("p",{children:"Camera"}),Object(R.jsx)("p",{children:"Zoom"}),Object(R.jsx)("p",{children:"Cell"})]}),Object(R.jsxs)("div",{className:"productDetail__blokR",children:[Object(R.jsx)("p",{children:null===l||void 0===l?void 0:l.screen}),Object(R.jsx)("p",{children:null===l||void 0===l?void 0:l.resolution}),Object(R.jsx)("p",{children:null===l||void 0===l?void 0:l.processor}),Object(R.jsx)("p",{children:null===l||void 0===l?void 0:l.ram}),Object(R.jsx)("p",{children:null===j||void 0===j?void 0:j.capacity}),Object(R.jsx)("p",{children:null===l||void 0===l?void 0:l.camera}),Object(R.jsx)("p",{children:null===l||void 0===l?void 0:l.zoom}),Object(R.jsx)("p",{children:null===l||void 0===l?void 0:l.cell.join(", ")})]})]})]})]}),Object(R.jsx)("div",{className:"productDetail__slider",children:Object(R.jsx)(ee,{title:"You may also like",phones:t})})]}),!j&&Object(R.jsx)(he,{title:"Phone was not found"})]})})})},fe=function(e){return e.isLoading?Object(R.jsx)(ce,{}):Object(R.jsx)("div",{children:Object(R.jsx)("div",{className:"container",children:Object(R.jsx)("h2",{className:"title title--notYet",children:"We are sorry, but this page is not implemented yet"})})})},Ne=function(e){return e.isLoading?Object(R.jsx)(ce,{}):Object(R.jsx)("div",{children:Object(R.jsx)("div",{className:"container",children:Object(R.jsx)("h2",{className:"title title--notYet",children:"We are sorry, but this page is not implemented yet"})})})},ye=function(e){var t=e.isLoading,c=Object(D.d)(),s=Object(L.a)(c,1)[0],a=$((function(e){return e.favorites})),n=s.get("query"),i=n?a.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):a;return t?Object(R.jsx)(ce,{}):Object(R.jsx)("div",{className:"favoritePage",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"favoritePage__wrapper",children:[Object(R.jsx)("div",{className:"favoritePage__breadCrumb",children:Object(R.jsx)(oe,{phone:null})}),!!i.length&&Object(R.jsxs)("div",{className:"favoritePage__all",children:[Object(R.jsx)("h2",{className:"title favoritePage__title",children:"Favorites"}),!!i.length&&Object(R.jsx)("span",{className:"favoritePage__itemCount",children:"".concat(i.length," items")}),i.length&&Object(R.jsx)("div",{className:"favoritePage__list",children:Object(R.jsx)(ue,{products:i})})]}),!i.length&&null===n&&Object(R.jsx)("div",{className:"pageEmpty",children:Object(R.jsx)(me.a,{strings:["Your favorites is empty"],typeSpeed:75,className:"title",showCursor:!1})}),!i.length&&null!==n&&Object(R.jsx)(he,{title:"Favorite products were not found"})]})})})},Ce=function(e){var t=e.phone,c=H();return Object(R.jsxs)("div",{className:"cartItem",children:[Object(R.jsx)("button",{type:"button",className:"cartItem__close",onClick:function(){c(O(t))},"data-cy":"cartDeleteButton",children:Object(R.jsx)("img",{src:"./images/icons/Close.svg",alt:"close"})}),Object(R.jsx)("div",{className:"cartItem__photo",children:Object(R.jsx)("img",{src:"".concat(Z,"/_new/").concat(t.image),alt:"item img",className:"cartItem__img"})}),Object(R.jsx)("div",{className:"cartItem__itemName",children:t.name}),Object(R.jsxs)("div",{className:"cartItem__action",children:[Object(R.jsx)("button",{type:"button",className:"cartItem__button",onClick:function(){c(x(t))},disabled:1===t.amount,children:"-"}),Object(R.jsx)("span",{className:"cartItem__itemAmount",children:t.amount}),Object(R.jsx)("button",{type:"button",className:"cartItem__button",onClick:function(){c(_(t))},children:"+"})]}),Object(R.jsx)("span",{className:"cartItem__totalPrice",children:t.amount&&(t.fullPrice<1200&&t.amount?"$".concat(t.price*t.amount):"$".concat(t.fullPrice*t.amount))})]})},we=function(e){var t=e.isLoading,c=$((function(e){return e.cart})),s=c.reduce((function(e,t){return void 0!==t.amount?t.fullPrice<1200?e+t.amount*t.price:e+t.amount*t.fullPrice:0}),0),a=c.reduce((function(e,t){return void 0!==t.amount?e+t.amount:0}),0);return t?Object(R.jsx)(ce,{}):Object(R.jsx)("main",{className:"cart",children:Object(R.jsx)("div",{className:"container",children:Object(R.jsxs)("div",{className:"cart__wrapper",children:[Object(R.jsx)(Oe,{}),Object(R.jsx)("h2",{className:"title cart__title",children:"Cart"}),c.length?Object(R.jsxs)("div",{className:"cart__content",children:[Object(R.jsx)("div",{className:"cart__list",children:c.map((function(e){return Object(R.jsx)(Ce,{phone:e},e.id)}))}),Object(R.jsxs)("div",{className:"cart__total",children:[Object(R.jsxs)("div",{className:"cart__info",children:[Object(R.jsx)("span",{className:"cart__amount","data-cy":"productQauntity",children:"$".concat(s)}),Object(R.jsx)("span",{className:"cart__itemsAmount",children:"Total for ".concat(a," items")})]}),Object(R.jsx)("button",{type:"button",className:"cart__button",children:"Checkout"})]})]}):Object(R.jsx)("div",{className:"pageEmpty",children:Object(R.jsx)(me.a,{strings:["Your cart is empty"],typeSpeed:75,className:"title",showCursor:!1})})]})})})},Pe=function(){return Object(R.jsx)("div",{className:"pageEmpty",children:Object(R.jsx)(me.a,{strings:["Page is not found"],typeSpeed:75,className:"title",showCursor:!1})})},ke=function(){var e=Object(E.useState)([]),t=Object(L.a)(e,2),c=t[0],s=t[1],a=Object(E.useState)(!0),n=Object(L.a)(a,2),i=n[0],r=n[1];return Object(E.useEffect)((function(){re("/_new/products.json").then(s).finally((function(){return r(!1)}))}),[]),Object(R.jsx)(D.a,{children:Object(R.jsxs)(T.d,{children:[Object(R.jsxs)(T.b,{path:"/",element:Object(R.jsx)(X,{}),children:[Object(R.jsx)(T.b,{index:!0,element:Object(R.jsx)(se,{phones:c,isLoading:i})}),Object(R.jsxs)(T.b,{path:"phones",children:[Object(R.jsx)(T.b,{index:!0,element:Object(R.jsx)(pe,{phones:c,isLoading:i})}),Object(R.jsx)(T.b,{path:":phoneId",element:Object(R.jsx)(ve,{phones:c})})]}),Object(R.jsx)(T.b,{path:"tablets",element:Object(R.jsx)(fe,{isLoading:i})}),Object(R.jsx)(T.b,{path:"accessories",element:Object(R.jsx)(Ne,{isLoading:i})}),Object(R.jsx)(T.b,{path:"favorites",element:Object(R.jsx)(ye,{isLoading:i})}),Object(R.jsx)(T.b,{path:"cart",element:Object(R.jsx)(we,{isLoading:i})})]}),Object(R.jsx)(T.b,{path:"*",element:Object(R.jsx)(Pe,{})})]})})},Se=i.a;a.a.render(Object(R.jsx)(n.a,{store:A,children:Object(R.jsx)(Se,{loading:Object(R.jsx)(ce,{}),persistor:S,children:Object(R.jsx)(ke,{})})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.47c4c34e.chunk.js.map
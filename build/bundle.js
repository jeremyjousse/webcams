var app=function(){"use strict";function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function a(){return Object.create(null)}function s(e){e.forEach(n)}function r(e){return"function"==typeof e}function c(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function o(e,t){e.appendChild(t)}function l(e,t,n){e.insertBefore(t,n||null)}function i(e){e.parentNode.removeChild(e)}function u(e){return document.createElement(e)}function m(e){return document.createTextNode(e)}function p(){return m(" ")}function w(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function f(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function d(e,t,n,a){e.style.setProperty(t,n,a?"important":"")}function h(e,t,n){e.classList[n?"add":"remove"](t)}let b;function g(e){b=e}const y=[],v=[],$=[],_=[],x=Promise.resolve();let k=!1;function F(e){$.push(e)}let S=!1;const L=new Set;function j(){if(!S){S=!0;do{for(let e=0;e<y.length;e+=1){const t=y[e];g(t),M(t.$$)}for(g(null),y.length=0;v.length;)v.pop()();for(let e=0;e<$.length;e+=1){const t=$[e];L.has(t)||(L.add(t),t())}$.length=0}while(y.length);for(;_.length;)_.pop()();k=!1,S=!1,L.clear()}}function M(e){if(null!==e.fragment){e.update(),s(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(F)}}const A=new Set;let z;function E(e,t){e&&e.i&&(A.delete(e),e.i(t))}function B(e,t,n,a){if(e&&e.o){if(A.has(e))return;A.add(e),z.c.push((()=>{A.delete(e),a&&(n&&e.d(1),a())})),e.o(t)}}function C(e,t){B(e,1,1,(()=>{t.delete(e.key)}))}function H(e,t,a){const{fragment:c,on_mount:o,on_destroy:l,after_update:i}=e.$$;c&&c.m(t,a),F((()=>{const t=o.map(n).filter(r);l?l.push(...t):s(t),e.$$.on_mount=[]})),i.forEach(F)}function N(e,t){const n=e.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function D(e,t){-1===e.$$.dirty[0]&&(y.push(e),k||(k=!0,x.then(j)),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function P(t,n,r,c,o,l,u=[-1]){const m=b;g(t);const p=n.props||{},w=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:o,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(m?m.$$.context:[]),callbacks:a(),dirty:u,skip_bound:!1};let f=!1;if(w.ctx=r?r(t,p,((e,n,...a)=>{const s=a.length?a[0]:n;return w.ctx&&o(w.ctx[e],w.ctx[e]=s)&&(!w.skip_bound&&w.bound[e]&&w.bound[e](s),f&&D(t,e)),n})):[],w.update(),f=!0,s(w.before_update),w.fragment=!!c&&c(w.ctx),n.target){if(n.hydrate){const e=function(e){return Array.from(e.childNodes)}(n.target);w.fragment&&w.fragment.l(e),e.forEach(i)}else w.fragment&&w.fragment.c();n.intro&&E(t.$$.fragment),H(t,n.target,n.anchor),j()}g(m)}class T{$destroy(){N(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const R=[{id:"annecy",name:"Annecy",country:"France",state:"Haute-Savoie",url:"https://www.lac-annecy.com/webcams.html",webcams:[{name:"Le lac",url:"https://www.trinum.com/ibox/ftpcam/mega_annecy.jpg"}]},{id:"autrans",name:"Autrans",country:"France",state:"Isère",url:"https://autrans-meaudre.com/",webcams:[{name:"Le tremplin",url:"https://www.trinum.com/ibox/ftpcam/mega_meaudre_front.jpg"}]},{id:"bessan",name:"Bessan",country:"France",state:"Savoie",url:"https://www.haute-maurienne-vanoise.com/hiver/bessans/webcam/",webcams:[{name:"Bessan",url:"https://bit.ly/2DWLnKa",type:"viewsurf"}]},{id:"chamrousse",name:"Chamrousse",country:"France",state:"Isère",url:"https://www.chamrousse.com/webcams.html",webcams:[{name:"Les crêtes",url:"https://www.skaping.com/chamrousse/les-cretes",type:"viewsurf"}]},{id:"corrancon",name:"Corrançon",country:"France",state:"Isère",url:"https://www.villarddelans.com/hiver/webcams.html",webcams:[{name:"Les hauts plateaux",url:"https://srv06.trinum.com/ibox/ftpcam/mega_correncon_plateau.jpg"}]},{id:"flaine",name:"Flaine",country:"France",state:"Haute-Savoie",url:"https://www.flaine.com/",webcams:[{name:"Secteur Platières",url:"https://www.trinum.com/ibox/grand-massif/images/flaine-1600/grand-massif_flaine-16002.jpg"}]},{id:"grand-bornand",name:"Le Grand-Bornand",country:"France",state:"Savoie",url:"https://www.legrandbornand.com/webcams.html",webcams:[{name:"Lormay",url:"https://www.skaping.com/le-grand-bornand/chinaillon",type:"viewsurf"}]},{id:"isola-2000",name:"Isola 2000",country:"France",state:"Alpes-Maritimes",url:"https://www.isola2000.com/",webcams:[{name:"Tête Cabane",url:"https://www.trinum.com/ibox/ftpcam/mega_isola-2000_tete-cabane.jpg"}]},{id:"lac-blan",name:"La lac blanc",country:"France",state:"Haut-Rhin",url:"https://www.lac-blanc.com/",webcams:[{name:"1200",url:"https://m.webcam-hd.com/lac-blanc/lac-blanc-1200",type:"viewsurf"}]},{id:"lake-louise",name:"Lake Louise",country:"Canada",state:"Alberta",url:"https://www.skilouise.com/",webcams:[{name:"Ptarmigan Webcam",url:"https://cams.skilouise.com/cam3.jpg"}]},{id:"marseille",name:"Marseille",country:"France",state:"Bouche du Rhon",url:"https://www.marseille.fr/nos-webcams/",webcams:[{name:"Notre-Dame de la Garde",url:"https://pv.viewsurf.com/742/Marseille-Notre-Dame-de-la-Garde-1?i=NDU5NDp1bmRlZmluZWQ",type:"viewsurf"}]},{id:"megeve",name:"Megève",country:"France",state:"Savoie",url:"https://megeve.com/",webcams:[{name:"Rochebrune",url:"https://srv06.trinum.com/ibox/ftpcam/mega_arbois.jpg"}]},{id:"menuires",name:"Les Menuires",country:"France",state:"Savoie",url:"https://lesmenuires.com/fr/webcams",webcams:[{name:"La croisette",url:"https://www.skaping.com/lesmenuires/croisette",type:"skaping"}]},{id:"metabief",name:"Metabief",country:"France",state:"Doubs",url:"https://www.tourisme-metabief.com/webcams.html",webcams:[{name:"Station",url:"https://www.trinum.com/ibox/ftpcam/mega_orex_metabief_front-de-neige.jpg"}]},{id:"praz-de-lys",name:"Praz de Lys",country:"France",state:"Haute-Savoie",url:"https://www.prazdelys-sommand.com/explorer/la-station/le-domaine-skiable/webcams/",webcams:[{name:"Chevaly",url:"https://www.trinum.com/ibox/ftpcam/praz_lys_sommand_chevally.jpg"}]},{id:"les-rousses",name:"Les Rousses",country:"France",state:"Jura",url:"https://www.lesrousses.com/",webcams:[{name:"Porte du Balancier",url:"https://www.trinum.com/ibox/ftpcam/mega_lesroussesdarbella.jpg"}]},{id:"saint-gervais",name:"Saint Gervais Mont-Blanc",country:"France",state:"Haute-Savoie",url:"https://www.saintgervais.com",webcams:[{name:"Le Bettex Front de Neige",url:"https://www.trinum.com/ibox/ftpcam/mega_st-gervais_mont-joux-fixe.jpg"}]},{id:"saint-veran",name:"Saint Veran",country:"France",state:"Hautes-Alpes",url:"https://www.saintveran.com",webcams:[{name:"Village",url:"https://live.neos360.com/queyras/fixes/veran.jpg"}]},{id:"saisies",name:"Les Saisies",country:"France",state:"Savoie",url:"https://www.lessaisies.com/webcams-les-saisies-hauteluce-bisanne1500-espace-diamant.html",webcams:[{name:"Espace Erwin Eckl",url:"https://www.trinum.com/ibox/ftpcam/mega_les_saisies_espace-erwineckl.jpg"}]},{id:"serre-chevalier",name:"Serre Chevalier",country:"France",state:"Hautes-Alpes",url:"https://www.serre-chevalier.com/fr/webcam-serre-chevalier-briancon-direct",webcams:[{name:"Monetier",url:"https://www.skaping.com/serrechevalier/monetier",type:"skaping"}]},{id:"soelden",name:"Soelden",country:"Austria",state:"Tyrol",url:"https://soelden.com",webcams:[{name:"Tiefenbachgletscher 2.800m",url:"https://panodata.panomax.com/cams/195/recent_h572.jpg"}]},{id:"super-devoluy",name:"Super Dévoluy",country:"France",state:"Hautes-Alpes",url:"https://www.ledevoluy.com/fr",webcams:[{name:"Pied des pistes",url:"https://www.trinum.com/ibox/ftpcam/mega_superdevoluy_superdevoluy.jpg"}]},{id:"tignes",name:"Tignes",country:"France",state:"Savoie",url:"https://www.tignes.net/",webcams:[{name:"Le Lac",url:"https://backend.roundshot.com/cams/221/default"}]}];function G(e){let t,n;return{c(){t=u("img"),t.src!==(n=e[5][0].url)&&w(t,"src",n),w(t,"class","webcam-image svelte-1lzo1p9"),w(t,"alt",e[1])},m(e,n){l(e,t,n)},p(e,a){32&a&&t.src!==(n=e[5][0].url)&&w(t,"src",n),2&a&&w(t,"alt",e[1])},d(e){e&&i(t)}}}function I(e){let t,n,a;return{c(){t=u("iframe"),w(t,"title",n=e[5][0].name),d(t,"width","100%"),d(t,"height","100%"),d(t,"min-height","400px"),d(t,"top","0"),d(t,"left","0"),d(t,"right","0"),d(t,"bottom","0"),d(t,"border","none"),t.allowFullscreen=!0,w(t,"allow","autoplay; fullscreen"),w(t,"scrolling","no"),t.src!==(a=e[5][0].url)&&w(t,"src",a),w(t,"class","svelte-1lzo1p9")},m(e,n){l(e,t,n)},p(e,s){32&s&&n!==(n=e[5][0].name)&&w(t,"title",n),32&s&&t.src!==(a=e[5][0].url)&&w(t,"src",a)},d(e){e&&i(t)}}}function O(t){let n,a,s,r,c,d,b,g,y,v,$,_,x,k;function F(e,t){return(null==_||32&t)&&(_=!!["skaping","viewsurf"].includes(e[5][0].type)),_?I:G}let S=F(t,-1),L=S(t);return{c(){n=u("div"),a=u("h3"),s=u("a"),r=m(t[1]),c=p(),d=u("p"),b=m(t[2]),g=m(" - "),y=m(t[3]),v=p(),$=u("div"),L.c(),w(s,"href",t[4]),w(s,"target","_blank"),w(s,"class","svelte-1lzo1p9"),w(a,"class","svelte-1lzo1p9"),w(d,"class","svelte-1lzo1p9"),w($,"class","webcam-image-container svelte-1lzo1p9"),w(n,"class","city-container  svelte-1lzo1p9"),w(n,"id",t[0]),h(n,"full-screen",!0===t[6])},m(e,i){var u,m,p,w;l(e,n,i),o(n,a),o(a,s),o(s,r),o(n,c),o(n,d),o(d,b),o(d,g),o(d,y),o(n,v),o(n,$),L.m($,null),x||(u=n,m="click",p=t[7],u.addEventListener(m,p,w),k=()=>u.removeEventListener(m,p,w),x=!0)},p(e,[t]){2&t&&f(r,e[1]),16&t&&w(s,"href",e[4]),4&t&&f(b,e[2]),8&t&&f(y,e[3]),S===(S=F(e,t))&&L?L.p(e,t):(L.d(1),L=S(e),L&&(L.c(),L.m($,null))),1&t&&w(n,"id",e[0]),64&t&&h(n,"full-screen",!0===e[6])},i:e,o:e,d(e){e&&i(n),L.d(),x=!1,k()}}}function W(e,t,n){let{id:a}=t,{name:s}=t,{country:r}=t,{state:c}=t,{url:o}=t,{webcams:l}=t,i=!1;return e.$$set=e=>{"id"in e&&n(0,a=e.id),"name"in e&&n(1,s=e.name),"country"in e&&n(2,r=e.country),"state"in e&&n(3,c=e.state),"url"in e&&n(4,o=e.url),"webcams"in e&&n(5,l=e.webcams)},[a,s,r,c,o,l,i,function(){n(6,i=!i),console.log(i)}]}class q extends T{constructor(e){super(),P(this,e,W,O,c,{id:0,name:1,country:2,state:3,url:4,webcams:5})}}function V(e,t,n){const a=e.slice();return a[1]=t[n],a}function Z(e,n){let a,s,r;const c=[n[1]];let o={};for(let e=0;e<c.length;e+=1)o=t(o,c[e]);return s=new q({props:o}),{key:e,first:null,c(){var e;a=m(""),(e=s.$$.fragment)&&e.c(),this.first=a},m(e,t){l(e,a,t),H(s,e,t),r=!0},p(e,t){const n=1&t?function(e,t){const n={},a={},s={$$scope:1};let r=e.length;for(;r--;){const c=e[r],o=t[r];if(o){for(const e in c)e in o||(a[e]=1);for(const e in o)s[e]||(n[e]=o[e],s[e]=1);e[r]=o}else for(const e in c)s[e]=1}for(const e in a)e in n||(n[e]=void 0);return n}(c,[(a=e[1],"object"==typeof a&&null!==a?a:{})]):{};var a;s.$set(n)},i(e){r||(E(s.$$.fragment,e),r=!0)},o(e){B(s.$$.fragment,e),r=!1},d(e){e&&i(a),N(s,e)}}}function J(e){let t,n,a=[],r=new Map,c=e[0];const o=e=>e[1].id;for(let t=0;t<c.length;t+=1){let n=V(e,c,t),s=o(n);r.set(s,a[t]=Z(s,n))}return{c(){t=u("main");for(let e=0;e<a.length;e+=1)a[e].c();w(t,"class","svelte-1yp98yd")},m(e,s){l(e,t,s);for(let e=0;e<a.length;e+=1)a[e].m(t,null);n=!0},p(e,[n]){if(1&n){const c=e[0];z={r:0,c:[],p:z},a=function(e,t,n,a,s,r,c,o,l,i,u,m){let p=e.length,w=r.length,f=p;const d={};for(;f--;)d[e[f].key]=f;const h=[],b=new Map,g=new Map;for(f=w;f--;){const e=m(s,r,f),o=n(e);let l=c.get(o);l?a&&l.p(e,t):(l=i(o,e),l.c()),b.set(o,h[f]=l),o in d&&g.set(o,Math.abs(f-d[o]))}const y=new Set,v=new Set;function $(e){E(e,1),e.m(o,u),c.set(e.key,e),u=e.first,w--}for(;p&&w;){const t=h[w-1],n=e[p-1],a=t.key,s=n.key;t===n?(u=t.first,p--,w--):b.has(s)?!c.has(a)||y.has(a)?$(t):v.has(s)?p--:g.get(a)>g.get(s)?(v.add(a),$(t)):(y.add(s),p--):(l(n,c),p--)}for(;p--;){const t=e[p];b.has(t.key)||l(t,c)}for(;w;)$(h[w-1]);return h}(a,n,o,1,e,c,r,t,C,Z,null,V),z.r||s(z.c),z=z.p}},i(e){if(!n){for(let e=0;e<c.length;e+=1)E(a[e]);n=!0}},o(e){for(let e=0;e<a.length;e+=1)B(a[e]);n=!1},d(e){e&&i(t);for(let e=0;e<a.length;e+=1)a[e].d()}}}function K(e){return[R.filter((e=>e.webcams.length>0&&null==e.webcams[0].type))]}return new class extends T{constructor(e){super(),P(this,e,K,J,c,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map

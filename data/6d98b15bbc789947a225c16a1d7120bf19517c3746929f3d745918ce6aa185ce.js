var i=Object.defineProperty;var p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var o=(e,t,n)=>(p(e,typeof t!="symbol"?t+"":t,n),n);import{j as a,k as c}from"./LoginWidget-34fb458a.js";import{D as s}from"./I18nDeclination-29407ff3.js";const u=e=>`<span>${e}</span>`,[r]=[" "];class L{constructor(){o(this,"rate");o(this,"count")}getDescription(){const t=new s(null,{SINGULAR:"ocena społeczności",DUAL:"oceny społeczności",PLURAL:"ocen społeczności"});return{formattedRate:`${a(this.rate)} / 5`,formattedCount:c(this.count),ratedBy:t.get(this.count)}}getRate(t=1){const n=new s(null,{SINGULAR:"ocena społeczności",DUAL:"oceny społeczności",PLURAL:"ocen społeczności"});return{value:this.rate,valueFormatted:a(this.rate,t),descriptionHTML:`<span>${c(this.count)}</span><span>${n.get(this.count).split(r).map(u).join(r)}</span>`}}}export{L as R};
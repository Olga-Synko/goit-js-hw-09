import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */const a={email:"",message:"",setData(e,m){this.email=e,this.message=m}},t=document.querySelector(".feedback-form"),s="feedback-form-state";t.addEventListener("input",r);function r(e){switch(e.target.name){case"email":a.email=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(a));break;case"message":a.message=e.target.value.trim(),localStorage.setItem(s,JSON.stringify(a));break}}function l(){const e=JSON.parse(localStorage.getItem(s));e!==null&&(a.setData(e.email,e.message),t.email.value=e.email,t.message.value=e.message)}l();t.addEventListener("submit",i);function i(e){if(e.preventDefault(),a.email===""||a.message==="")return alert("Fill please all fields");console.table(a),a.setData("",""),localStorage.removeItem(s),t.reset()}l();
//# sourceMappingURL=commonHelpers2.js.map

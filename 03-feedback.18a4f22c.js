!function(){function e(e){return e&&e.__esModule?e.default:e}var t;function a(e,t,a){var n,o,l,r,u;function s(){var c=Date.now()-r;c<t&&c>=0?n=setTimeout(s,t-c):(n=null,a||(u=e.apply(l,o),l=o=null))}null==t&&(t=100);var c=function(){l=this,o=arguments,r=Date.now();var c=a&&!n;return n||(n=setTimeout(s,t)),c&&(u=e.apply(l,o),l=o=null),u};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(u=e.apply(l,o),l=o=null,clearTimeout(n),n=null)},c}a.debounce=a,t=a;var n,o,l=document.querySelector(".feedback-form"),r=document.querySelector("input"),u=document.querySelector("textarea"),s="feedback-form-state",c={};l.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.currentTarget),a={email:t.get("email"),message:t.get("message")};console.log(a),e.currentTarget.reset(),localStorage.removeItem(s)})),l.addEventListener("input",e(t)((function(e){c[e.target.name]=e.target.value,console.log("OnFormChange  e.target.name",e.target.name),localStorage.setItem(s,JSON.stringify(c)),console.log("formData",c)}),500)),n=localStorage.getItem(s),o=JSON.parse(n),console.log("MessageOutput  psrsData",o),console.log("MessageOutput  savedMessage",n),o&&(r.value=o.email,u.value=o.message)}();
//# sourceMappingURL=03-feedback.18a4f22c.js.map
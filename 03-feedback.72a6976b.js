!function(){function e(e){return e&&e.__esModule?e.default:e}var t;function a(e,t,a){var n,l,o,r,u;function s(){var c=Date.now()-r;c<t&&c>=0?n=setTimeout(s,t-c):(n=null,a||(u=e.apply(o,l),o=l=null))}null==t&&(t=100);var c=function(){o=this,l=arguments,r=Date.now();var c=a&&!n;return n||(n=setTimeout(s,t)),c&&(u=e.apply(o,l),o=l=null),u};return c.clear=function(){n&&(clearTimeout(n),n=null)},c.flush=function(){n&&(u=e.apply(o,l),o=l=null,clearTimeout(n),n=null)},c}a.debounce=a,t=a;var n,l,o=document.querySelector(".feedback-form"),r=document.querySelector("input"),u=document.querySelector("textarea"),s="feedback-form-state";o.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.currentTarget),a={email:t.get("email"),message:t.get("message")};console.log(a),e.currentTarget.reset(),localStorage.removeItem(s)})),o.addEventListener("input",e(t)((function(e){console.log("onChangeForm  e",e);var t=new FormData(o),a=t.get("email").trim(),n=t.get("message").trim();localStorage.setItem(s,JSON.stringify({email:a,message:n}))}),500)),n=localStorage.getItem(s),l=JSON.parse(n),console.log("MessageOutput  psrsData",l),console.log("MessageOutput  savedMessage",n),l&&(r.value=l.email,u.value=l.message)}();
//# sourceMappingURL=03-feedback.72a6976b.js.map
(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds"),a=e=>(e<10&&(e="0"+e),e),r=()=>{let e=(()=>{let e=(new Date("25 march 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:o,seconds:t}})();t.textContent=a(e.hours),o.textContent=a(e.minutes),c.textContent=a(e.seconds),e.timeRemaining>0?setTimeout(r,1e3):e.timeRemaining<0&&(t.textContent="00",o.textContent="00",c.textContent="00")};r()})(),(()=>{const e=document.querySelector("menu");document.addEventListener("click",(t=>{(t.target.closest(".menu, .close-btn, ul>li>a")||e.classList.contains("active-menu")&&!t.target.closest(".menu"))&&(t.preventDefault(),e.classList.toggle("active-menu"))}))})(),(()=>{const e=document.querySelectorAll(".popup-btn"),t=document.querySelector(".popup");let o,c=0;const a=()=>{c+=.05,o=requestAnimationFrame(a),c<1?t.style.opacity=c:(t.style.opacity=1,cancelAnimationFrame(o))};e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",screen.width>768&&a()}))})),t.addEventListener("click",(e=>{e.target.closest(".popup-content")&&!e.target.classList.contains("popup-close")||(t.style.display="none")}))})(),(()=>{const e=[document.querySelector(".calc-square"),document.querySelector(".calc-count"),document.querySelector(".calc-day")],t=document.querySelectorAll(".form-name"),o=document.querySelectorAll(".form-phone"),c=document.querySelectorAll(".form-email"),a=document.querySelector(".top-form"),r=document.querySelector(".mess");t.forEach((e=>{const t=[];t.push(e,a),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/g,"")}))}))})),c.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-Z\-\.\!\~\*\'\@\_\d]/g,"")}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]/g,"")}))})),r.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s\-]/g,"")})),e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelector(".portfolio-dots");let c,a,r=0;const n=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},s=()=>{n(t,r,"portfolio-item-active"),n(a,r,"dot-active"),r++,r>=t.length&&(r=0),l(t,r,"portfolio-item-active"),l(a,r,"dot-active")},i=(e=1500)=>{c=setInterval(s,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,r,"portfolio-item-active"),n(a,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&a.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),l(t,r,"portfolio-item-active"),l(a,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(c)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&i(2e3)}),!0),(()=>{for(let e=0;e<t.length;e++){const t=document.createElement("li");t.classList.add("dot"),0==e&&t.classList.add("dot-active"),o.append(t)}a=document.querySelectorAll(".dot")})(),i(2e3)})()})();
import{b as p}from"./assets/brick--TnHdcyv.js";/* empty css                      */import{f as d,i as b}from"./assets/vendor-BbbuE1sJ.js";const u=document.querySelector("#datetime-picker"),o=document.querySelector(".btn-start");let r,s=null;o.disabled=!0;const l={dateFormat:"Y-m-d H:i",enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t[0].getTime()<Date.now()?(b.show({title:"Error",iconUrl:p,message:"Please choose a date in the future",backgroundColor:"#ef4040",timeout:null,class:"message-warning",position:"topRight",titleColor:"white",messageColor:"white"}),o.disabled=!0):(o.disabled=!1,r=t[0])}};let i=d(u,l);o.addEventListener("click",t=>{r&&(o.disabled=!0,i.destroy(),s=setInterval(()=>{const e=r.getTime()-Date.now();if(e<=0){clearInterval(s),c({days:"00",hours:"00",minutes:"00",seconds:"00"}),i=d(u,l);return}const n=g(S(e));c(n)},1e3))});function c({days:t,hours:e,minutes:n,seconds:a}){document.querySelector("[data-days]").textContent=t,document.querySelector("[data-hours]").textContent=e,document.querySelector("[data-minutes]").textContent=n,document.querySelector("[data-seconds]").textContent=a}function g(t){for(const e of Object.keys(t))t[e]=t[e].toString().padStart(2,"0");return t}function S(t){const m=Math.floor(t/864e5),f=Math.floor(t%864e5/36e5),h=Math.floor(t%864e5%36e5/6e4),y=Math.floor(t%864e5%36e5%6e4/1e3);return{days:m,hours:f,minutes:h,seconds:y}}
//# sourceMappingURL=1-timer.js.map

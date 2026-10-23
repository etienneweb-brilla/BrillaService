const toggle=document.querySelector('.menu-toggle');
const nav=document.getElementById('main-nav');
function closeMenu(){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');nav.classList.toggle('open',open)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav.classList.contains('open')){closeMenu();toggle.focus()}});
document.addEventListener('click',e=>{if(!e.target.closest('.header')&&nav.classList.contains('open'))closeMenu()});
matchMedia('(min-width:901px)').addEventListener('change',e=>{if(e.matches)closeMenu()});
const path=location.pathname.replace(/\/$/,'')||'/';
document.querySelectorAll('#main-nav a').forEach(a=>{const href=a.getAttribute('href').replace(/\/$/,'');if(path===href||path.startsWith(href+'/'))a.setAttribute('aria-current','page')});
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){
 document.documentElement.classList.add('motion-ready');
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});
 document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
}
const form=document.getElementById('quote-form');
if(form){
 form.querySelector('button[type="submit"]').disabled=false;
 const wanted=new URLSearchParams(location.search).get('service');
 const service=form.elements.service;
 if(wanted){if([...service.options].some(o=>o.value===wanted))service.value=wanted;else {service.value='Multiple services / not sure';form.elements.details.value='I am enquiring about cleaning for '+wanted.toLowerCase()+'.'}}
 const start=form.elements.start;start.min=new Date().toLocaleDateString('en-CA');
 form.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const data=new FormData(form);
  const names={name:'Name',company:'Company',email:'Email',phone:'Phone',service:'Service',property:'Property type',location:'Location',size:'Size / number of properties',frequency:'Frequency',start:'Preferred start',details:'Additional information'};
  const lines=Object.entries(names).filter(([key])=>String(data.get(key)||'').trim()).map(([key,label])=>label+': '+String(data.get(key)).trim());
  const message='Hello Brilla, I would like to request a cleaning quotation.\n\n'+lines.join('\n');
  window.location.assign('https://wa.me/35699999572?text='+encodeURIComponent(message));
 });
}

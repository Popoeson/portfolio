const nav=document.getElementById('nav');
document.getElementById('menu').onclick=()=>nav.classList.toggle('open');
nav.addEventListener('click',e=>{if(e.target.tagName==='A')nav.classList.remove('open')});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('on');io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const links=[...nav.querySelectorAll('a[href^="#"]')];
const spy=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)links.forEach(l=>l.classList.toggle('active',l.getAttribute('href')==='#'+e.target.id))}),{rootMargin:'-45% 0px -50% 0px'});
document.querySelectorAll('section[id]').forEach(s=>spy.observe(s));
document.querySelectorAll('.pv img').forEach(i=>{if(i.complete&&!i.naturalWidth)i.remove();else i.addEventListener('error',()=>i.remove())});
const header=document.querySelector('.site-header');
const btn=document.querySelector('.menu-btn');
btn?.addEventListener('click',()=>{const open=header.classList.toggle('open');btn.setAttribute('aria-expanded',open?'true':'false')});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>header.classList.remove('open')));
const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}})},{threshold:.14});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

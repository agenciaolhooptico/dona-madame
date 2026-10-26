const menu=document.querySelector('.menu-toggle');
const header=document.querySelector('header');
const dropdowns=[...document.querySelectorAll('.dropdown')];
function closeDropdowns(except){dropdowns.forEach(dropdown=>{if(dropdown!==except)dropdown.open=false})}
function closeMobileMenu(){menu?.setAttribute('aria-expanded','false');header?.classList.remove('menu-open');closeDropdowns()}
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';closeDropdowns();menu.setAttribute('aria-expanded',String(open));header?.classList.toggle('menu-open',open)});
dropdowns.forEach(dropdown=>{
 const summary=dropdown.querySelector('summary');
 summary?.setAttribute('aria-expanded',String(dropdown.open));
 summary?.addEventListener('click',event=>{event.preventDefault();const open=!dropdown.open;closeDropdowns(dropdown);dropdown.open=open;summary.setAttribute('aria-expanded',String(open))});
 dropdown.addEventListener('toggle',()=>summary?.setAttribute('aria-expanded',String(dropdown.open)));
 dropdown.addEventListener('focusout',event=>{if(event.relatedTarget&&!dropdown.contains(event.relatedTarget))dropdown.open=false});
});
document.addEventListener('pointerdown',event=>{if(!event.target.closest('.dropdown'))closeDropdowns();if(header&&!header.contains(event.target))closeMobileMenu()});
document.querySelector('#nav')?.addEventListener('click',event=>{if(event.target.closest('a'))closeMobileMenu()});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){const active=dropdowns.find(dropdown=>dropdown.open);const mobileOpen=menu?.getAttribute('aria-expanded')==='true';closeMobileMenu();if(active)active.querySelector('summary')?.focus();else if(mobileOpen)menu?.focus()}});
matchMedia('(min-width:761px)').addEventListener('change',()=>closeMobileMenu());
document.querySelectorAll('[data-scroll]').forEach(b=>b.addEventListener('click',()=>{const c=document.querySelector('.carousel');c.scrollBy({left:Number(b.dataset.scroll)*(c.querySelector('article').offsetWidth+24),behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'})}));
let selected=new URLSearchParams(location.search).get('categoria')||'Todos';
const buttons=[...document.querySelectorAll('[data-filter]')];
if(!buttons.some(b=>b.dataset.filter===selected))selected='Todos';
function filter(){const q=(document.querySelector('#search')?.value||'').toLocaleLowerCase('pt-BR').normalize('NFD').replace(/[\u0300-\u036f]/g,'');let count=0;document.querySelectorAll('.catalog-grid .care-card').forEach(c=>{const name=c.dataset.name.normalize('NFD').replace(/[\u0300-\u036f]/g,'');c.hidden=!((selected==='Todos'||c.dataset.cat===selected)&&name.includes(q));if(!c.hidden)count++});buttons.forEach(b=>{b.classList.toggle('active',selected===b.dataset.filter);b.setAttribute('aria-pressed',String(selected===b.dataset.filter))});if(document.querySelector('#result-count'))document.querySelector('#result-count').textContent=count===1?'1 cuidado encontrado':count+' cuidados encontrados';if(document.querySelector('#empty'))document.querySelector('#empty').hidden=count>0;}
buttons.forEach(b=>b.addEventListener('click',()=>{selected=b.dataset.filter;history.replaceState(null,'',location.pathname+(selected==='Todos'?'':'?categoria='+encodeURIComponent(selected)));filter()}));
document.querySelector('#search')?.addEventListener('input',filter);if(buttons.length)filter();
// Na Home, pequenos grupos entram em sequência; o conteúdo permanece acessível.
if('IntersectionObserver' in window){
 const preference=matchMedia('(prefers-reduced-motion: reduce)');
 const isHome=Boolean(document.querySelector('.hero'));
 const targets=[];
 if(isHome){
  const groups=[
   '.care-universe .section-heading > *, .services-intro, .services-grid, .services-closing',
   '.clinic-experience > img, .experience-panel',
   '.cares .section-heading > *, .cares .care-card',
   '.founder-photo, .founder-copy > *',
   '.ritual-invite > img, .ritual-invite > div > *'
  ];
  groups.forEach(selector=>document.querySelectorAll(selector).forEach((element,index)=>{
   element.style.setProperty('--reveal-delay',Math.min(index%3*85,170)+'ms');
   targets.push(element);
  }));
 }else targets.push(...document.querySelectorAll('.reveal'));
 const show=element=>{element.classList.add('visible');observer.unobserve(element)};
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)show(entry.target)}),{threshold:.06,rootMargin:'0px 0px -24px 0px'});
 targets.forEach(element=>{
  if(preference.matches)return;
  const rect=element.getBoundingClientRect();
  // Não esconder o que já está visível ao carregar ou restaurar a rolagem.
  if(rect.top<innerHeight&&rect.bottom>0)return;
  element.classList.add(isHome?'scroll-reveal':'will-reveal');
  observer.observe(element);
 });
 document.addEventListener('focusin',event=>{
  const element=event.target.closest('.scroll-reveal,.will-reveal');
  if(element)show(element);
 });
 preference.addEventListener('change',event=>{if(event.matches){targets.forEach(show);observer.disconnect()}});
 window.addEventListener('beforeprint',()=>targets.forEach(show));
}

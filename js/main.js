const v7Phase1Stylesheet=document.createElement('link');
v7Phase1Stylesheet.rel='stylesheet';
v7Phase1Stylesheet.href='/css/v7-phase1.css?v=20260921-1';
document.head.appendChild(v7Phase1Stylesheet);

const v7Phase2Stylesheet=document.createElement('link');
v7Phase2Stylesheet.rel='stylesheet';
v7Phase2Stylesheet.href='/css/v7-phase2.css?v=20260921-1';
document.head.appendChild(v7Phase2Stylesheet);

const v7ImageSwaps=[
  ['#risk .image-card img','/images/v7-risk.webp','図面と見積資料を確認する積算担当者'],
  ['#ai .side-image img','/images/v7-ai.webp','BIM画面を見ながらAI導入を検討する建設担当者'],
  ['.contact-person img','/images/v7-contact.webp','建設業の相談に対応する担当者']
];
v7ImageSwaps.forEach(([selector,src,alt])=>{
  const img=document.querySelector(selector);
  if(img){
    img.src=src;
    img.alt=alt;
    img.removeAttribute('width');
    img.removeAttribute('height');
  }
});

document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    const id=a.getAttribute('href');
    if(!id || id==="#") return;
    const el=document.querySelector(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({behavior:'smooth',block:'start'});
      const nav=document.getElementById('mobile-nav');
      if(nav) nav.classList.remove('open');
      const btn=document.querySelector('.menu-toggle');
      if(btn) btn.setAttribute('aria-expanded','false');
    }
  });
});

const toggle=document.querySelector('.menu-toggle');
const mobileNav=document.getElementById('mobile-nav');
if(toggle && mobileNav){
  toggle.addEventListener('click',()=>{
    const open=mobileNav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

const checks=[...document.querySelectorAll('.risk-check')];
const countEl=document.getElementById('risk-count');
const messageEl=document.getElementById('risk-message');
function updateRiskCheck(){
  if(!countEl || !messageEl) return;
  const count=checks.filter(el=>el.checked).length;
  countEl.textContent=`${count} / ${checks.length}`;
  if(count <= 1){
    messageEl.textContent='現時点で該当は少なめです。今後のために、積算工程と担当範囲を整理しておくとAI導入判断がしやすくなります。';
  }else if(count <= 3){
    messageEl.textContent='いくつか改善余地があります。どの工程に時間や属人化が集中しているか、一度棚卸しする価値があります。';
  }else{
    messageEl.textContent='複数の課題が重なっています。製品選びの前に、現在の積算体制とAI化できる範囲を整理することをおすすめします。';
  }
}
checks.forEach(el=>el.addEventListener('change',updateRiskCheck));
updateRiskCheck();

document.querySelectorAll('.faq-list details').forEach(detail=>{
  detail.addEventListener('toggle',()=>{
    if(!detail.open) return;
    document.querySelectorAll('.faq-list details').forEach(other=>{
      if(other!==detail) other.removeAttribute('open');
    });
  });
});

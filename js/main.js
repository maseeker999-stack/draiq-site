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

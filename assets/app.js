// Latest LP sections and cleanup
(function(){
  const heroPanel=document.querySelector('.floating-panel');
  if(heroPanel) heroPanel.remove();

  const orange=document.querySelector('.section-orange');
  if(orange){
    orange.insertAdjacentHTML('beforebegin', `
    <section class="section impact-section" id="impact">
      <div class="container">
        <div class="section-heading center impact-heading">
          <p class="eyebrow">IMPACT SIMULATION</p>
          <h2>数字で見る、<br><span>積算AI導入のインパクト。</span></h2>
          <p>見積作成10時間、月20件、1時間あたり3,000円として算出した導入シミュレーション例です。</p>
        </div>
        <div class="impact-table-wrap">
          <table class="impact-table">
            <thead><tr><th>指標</th><th>導入前</th><th>導入後</th><th>効果</th></tr></thead>
            <tbody>
              <tr><th>見積1件の作業時間</th><td>10時間</td><td>1時間</td><td><strong>9時間削減</strong></td></tr>
              <tr><th>作業時間</th><td>100%</td><td>10%</td><td><strong>90%削減</strong></td></tr>
              <tr><th>月20件の見積工数</th><td>200時間</td><td>20時間</td><td><strong>月180時間削減</strong></td></tr>
              <tr><th>年間削減時間</th><td>—</td><td>—</td><td><strong>2,160時間削減</strong></td></tr>
              <tr><th>人件費換算</th><td>—</td><td>—</td><td><strong>月54万円相当</strong></td></tr>
              <tr><th>年間人件費換算</th><td>—</td><td>—</td><td><strong>年648万円相当</strong></td></tr>
            </tbody>
          </table>
        </div>
        <div class="impact-metrics">
          <article><span>MONTHLY TIME SAVED</span><strong>180<em>時間</em></strong><p>月20件の見積を想定した場合</p></article>
          <article><span>YEARLY TIME SAVED</span><strong>2,160<em>時間</em></strong><p>年間で削減できる作業時間の想定</p></article>
          <article><span>YEARLY LABOR VALUE</span><strong>648<em>万円相当</em></strong><p>1時間あたり3,000円で換算</p></article>
        </div>
        <div class="impact-note"><strong>シミュレーション条件</strong><p>見積作成10時間 → 1時間、月20件、1時間あたり3,000円として算出しています。上記は導入効果をイメージするためのシミュレーション例であり、実際の削減効果は業務内容・案件数・運用体制・対象工程などによって異なります。</p></div>
      </div>
    </section>

    <section class="section workflow-section" id="workflow">
      <div class="container">
        <div class="section-heading center workflow-heading">
          <p class="eyebrow">BEFORE / AFTER</p>
          <h2>導入前と導入後で、<br><span>積算業務はこう変わります。</span></h2>
          <p>見積作成の時間を減らすだけではありません。積算工程そのものを整理し、人が行う判断とAIが担う処理を分けることで、業務全体の流れを変えていきます。</p>
        </div>
        <div class="workflow-compare">
          <div class="workflow-column before">
            <div class="workflow-column-head"><span>BEFORE</span><h3>導入前</h3><p>確認・検索・転記・整理まで、人が抱え込みやすい状態。</p></div>
            <ol class="workflow-list">
              <li><span class="workflow-num">01</span><div><h4>図面・仕様書の確認</h4><p>担当者が図面や仕様書を見ながら、必要な情報を手作業で整理する。</p></div></li>
              <li><span class="workflow-num">02</span><div><h4>数量拾い</h4><p>図面を見ながら数量を拾い、対象項目を一つずつ確認する。</p></div></li>
              <li><span class="workflow-num">03</span><div><h4>単価・内訳確認</h4><p>過去見積や資料を探しながら、単価や内訳を手動で確認する。</p></div></li>
              <li><span class="workflow-num">04</span><div><h4>見積作成</h4><p>Excelなどで見積書を作成し、転記や記載漏れに注意しながらまとめる。</p></div></li>
              <li><span class="workflow-num">05</span><div><h4>ダブルチェック</h4><p>数量、単価、仕様、抜け漏れを人が再確認する。</p></div></li>
              <li><span class="workflow-num">06</span><div><h4>修正・再提出</h4><p>指摘や変更があれば、再度手作業で修正する。</p></div></li>
            </ol>
          </div>
          <div class="workflow-arrow-center" aria-hidden="true">→</div>
          <div class="workflow-column after">
            <div class="workflow-column-head"><span>AFTER</span><h3>導入後</h3><p>AIが一次処理を支え、人は確認・判断・最終調整に集中。</p></div>
            <ol class="workflow-list">
              <li><span class="workflow-num">01</span><div><h4>図面・情報整理</h4><p>図面や情報の一次整理をAIで支援し、確認すべきポイントを見えやすくする。</p></div></li>
              <li><span class="workflow-num">02</span><div><h4>数量拾いの効率化</h4><p>数量拾いの一部をAIで支援し、担当者は確認と判断に集中する。</p></div></li>
              <li><span class="workflow-num">03</span><div><h4>単価・過去見積の活用</h4><p>過去データや見積情報を参照しやすくし、確認工数を減らす。</p></div></li>
              <li><span class="workflow-num">04</span><div><h4>見積作成の高速化</h4><p>見積作成の下準備や整理を効率化し、作成スピードを上げる。</p></div></li>
              <li><span class="workflow-num">05</span><div><h4>人による最終確認</h4><p>最終判断や重要な確認は人が行い、精度を担保する。</p></div></li>
              <li><span class="workflow-num">06</span><div><h4>修正対応の負担軽減</h4><p>変更や修正にも対応しやすくし、再提出までの時間を短縮する。</p></div></li>
            </ol>
          </div>
        </div>
        <div class="workflow-summary">
          <article><span>01</span><div><h3>作業時間を削減</h3><p>繰り返し発生する確認・整理の工数を減らす。</p></div></article>
          <article><span>02</span><div><h3>属人化を軽減</h3><p>一人の経験だけに依存しにくい体制へ近づける。</p></div></article>
          <article><span>03</span><div><h3>人は判断に集中</h3><p>重要な確認や最終判断に時間を使いやすくする。</p></div></article>
        </div>
        <div class="workflow-note"><p>実際の効率化範囲は、図面、案件内容、運用方法、既存データの状態によって異なります。最終的な見積内容の確認と判断は、人による確認を前提としています。</p></div>
      </div>
    </section>

    <section class="section implementation-section" id="implementation">
      <div class="container">
        <div class="section-heading center implementation-heading">
          <p class="eyebrow">IMPLEMENTATION FLOW</p>
          <h2>いきなりAIを入れません。<br><span>まず、積算業務を整理します。</span></h2>
          <p>現在の積算体制を確認し、AI化できる工程と人が判断すべき工程を切り分けながら、段階的に導入していきます。</p>
        </div>
        <div class="implementation-grid">
          <article class="implementation-step"><span>01</span><h3>現状ヒアリング</h3><p>現在の積算体制、担当人数、案件数、困っていることを確認します。</p></article>
          <article class="implementation-step"><span>02</span><h3>積算工程を整理</h3><p>図面確認、数量拾い、単価確認、見積作成など、現在の業務フローを整理します。</p></article>
          <article class="implementation-step"><span>03</span><h3>AI化できる範囲を確認</h3><p>AIに任せられる工程と、人が判断すべき工程を切り分けます。</p></article>
          <article class="implementation-step"><span>04</span><h3>図面・過去見積を確認</h3><p>現在使用している図面、過去見積、単価データなどの状態を確認します。</p></article>
          <article class="implementation-step"><span>05</span><h3>導入設計</h3><p>御社の業務に合わせて、どの工程でAIを活用するかを設計します。</p></article>
          <article class="implementation-step"><span>06</span><h3>テスト運用</h3><p>実際の業務に近い形で試し、精度や使い勝手を確認します。</p></article>
          <article class="implementation-step"><span>07</span><h3>本運用</h3><p>運用方法を固め、積算業務へ本格的に組み込みます。</p></article>
          <article class="implementation-step"><span>08</span><h3>改善</h3><p>運用状況を見ながら、精度や業務フローを継続的に改善します。</p></article>
        </div>
        <div class="implementation-message"><strong>製品を入れることが目的ではありません。</strong><p>御社の積算業務を整理し、AIを使う意味がある工程から導入していきます。</p></div>
      </div>
    </section>`);
    orange.remove();
  }

  const contact=document.getElementById('contact');
  if(contact && !document.getElementById('consultation')){
    contact.insertAdjacentHTML('beforebegin', `
    <section class="section consultation-section" id="consultation">
      <div class="container">
        <div class="consultation-layout">
          <div class="section-heading consultation-heading">
            <p class="eyebrow">WHAT WE REVIEW</p>
            <h2>相談したら、<br><span>まず何を見るのか。</span></h2>
            <p>相談したからといって、いきなり導入を勧めるわけではありません。まず現在の積算業務を一緒に整理し、AI化を検討する意味があるかを確認します。</p>
            <div class="consultation-message"><span>POINT</span><strong>「相談＝営業」ではなく、まず現状整理から。</strong></div>
          </div>
          <div class="consultation-items">
            <article><span>01</span><div><h3>現在の積算工程</h3><p>図面確認から見積提出まで、今どのような流れで進めているか。</p></div></article>
            <article><span>02</span><div><h3>担当人数</h3><p>積算を何人で担当し、特定の人へ業務が偏っていないか。</p></div></article>
            <article><span>03</span><div><h3>月間見積件数</h3><p>毎月どれくらいの見積依頼があり、繁忙時にどこへ負荷が集中するか。</p></div></article>
            <article><span>04</span><div><h3>1件あたりの所要時間</h3><p>見積1件に何時間かかり、特に時間を使っている工程はどこか。</p></div></article>
            <article><span>05</span><div><h3>過去データの状態</h3><p>過去見積、単価、図面などが、どこにどのような形で残っているか。</p></div></article>
            <article><span>06</span><div><h3>AI化できそうな工程</h3><p>AIへ任せられる作業と、人が判断すべき作業を一緒に切り分けます。</p></div></article>
          </div>
        </div>
        <div class="consultation-bottom"><div><span>FIRST STEP</span><strong>まずは、現在の積算体制を見える化するところから。</strong></div><a class="btn" href="#contact">自社の場合を相談する</a></div>
      </div>
    </section>`);
  }
})();

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

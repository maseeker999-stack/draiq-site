document.addEventListener("DOMContentLoaded", function () {
  const patchStylesheet = document.createElement("link");
  patchStylesheet.rel = "stylesheet";
  patchStylesheet.href = "css/patch.css?v=20260920-mobile-1";
  document.head.appendChild(patchStylesheet);

  const heroBg = document.querySelector(".hero-bg");
  if (heroBg) {
    heroBg.style.backgroundImage = 'url("https://draiq-partner.netlify.app/images/hero.webp")';
  }

  const beforeAfterHeading = document.querySelector(".change .section-heading h2");
  if (beforeAfterHeading) {
    beforeAfterHeading.innerHTML = '<span>積算業務は、</span><span>こう変わる。</span>';
    beforeAfterHeading.classList.add("change-title");
  }

  const mobileMedia = window.matchMedia("(max-width: 640px)");
  const mobileChanges = [];

  function rememberAndSet(element, html) {
    if (!element) return;
    mobileChanges.push({ element: element, original: element.innerHTML, html: html });
  }

  const introParagraphs = document.querySelectorAll(".intro .copy > p:not(.eyebrow)");
  const featureIntroParagraphs = document.querySelectorAll(".feature-hero .copy > p:not(.eyebrow)");
  const humanParagraphs = document.querySelectorAll(".human .copy > p:not(.eyebrow)");
  const benefitCards = document.querySelectorAll(".management .benefit");

  rememberAndSet(
    document.querySelector(".hero-lead"),
    '図面確認、数量拾い、単価確認、見積作成まで。<br>積算業務をAIで支援し、<br>人が本来向き合う仕事へ時間を戻す。'
  );

  rememberAndSet(
    introParagraphs[0],
    '図面を見る。数量を拾う。単価を調べる。<br>数字を入力する。'
  );
  rememberAndSet(
    introParagraphs[1],
    '積算には、細やかな作業が何度も発生します。<br>DRAIQは、その負担をAIで軽くすることを目指します。'
  );

  rememberAndSet(
    document.querySelector(".problem .wide-heading h2"),
    '<span class="mobile-line">見積作成の遅れが、</span><span class="mobile-line">受注機会を奪っている。</span>'
  );
  rememberAndSet(
    document.querySelector(".problem .wide-heading > p:not(.eyebrow)"),
    '積算業務の処理能力が足りず、<br>受注したい案件があっても対応できない。<br>見積作成の負担が、<br>売上を伸ばすうえでの制約になっていませんか。'
  );

  rememberAndSet(
    document.querySelector(".problem-focus h3"),
    '<span class="mobile-line">見積作成の負担が、</span><span class="mobile-line">機会損失を生み出す</span>'
  );
  const problemFocusDescription = document.querySelector(".problem-focus > p");
  if (problemFocusDescription) {
    problemFocusDescription.classList.add("mobile-copy-hidden");
  }
  rememberAndSet(
    document.querySelector(".problem-focus ul"),
    '<li>図面や仕様の確認に時間がかかる</li><li>数量拾いや単価の照合に手間がかかる</li><li>見積対応が重なると残業が増える</li><li>対応できず、受注の機会を逃してしまう</li>'
  );

  rememberAndSet(
    document.querySelector(".change .section-heading h2"),
    '<span class="mobile-line">積算業務は、</span><span class="mobile-line">こう変わる。</span>'
  );
  rememberAndSet(
    document.querySelector(".workflow.old > p"),
    '人が順番に処理するため、<br>案件が増えるほど時間も増えやすい。'
  );

  rememberAndSet(
    featureIntroParagraphs[0],
    '図面から見積までの流れを一つずつ支援。<br>AIを実務で使える形へ。'
  );

  rememberAndSet(
    document.querySelector(".feature-row:nth-child(1) p"),
    '建築図面の情報を確認し、<br>積算業務のスタートを支援。'
  );
  rememberAndSet(
    document.querySelector(".feature-row:nth-child(2) p"),
    '図面情報をもとに、<br>数量算出作業の効率化を支援。'
  );
  rememberAndSet(
    document.querySelector(".feature-row:nth-child(4) p"),
    '数量や単価情報を整理し、<br>見積作成までの流れを効率化。'
  );

  rememberAndSet(
    humanParagraphs[0],
    '積算に使っていた時間を、<br>現場、営業、判断、顧客対応へ。'
  );
  rememberAndSet(
    humanParagraphs[1],
    'DRAIQが目指すのは、人を減らすことではなく、<br>人の時間を取り戻すことです。'
  );

  rememberAndSet(
    document.querySelector(".management .section-heading h2"),
    '<span class="mobile-line">積算の効率化は</span><span class="mobile-line">経営の効率化に</span>'
  );
  if (benefitCards[2]) {
    rememberAndSet(
      benefitCards[2].querySelector("p"),
      '経営陣の大切な時間を<br>本来業務へ戻しやすくなる。'
    );
  }
  if (benefitCards[3]) {
    rememberAndSet(
      benefitCards[3].querySelector("p"),
      '採用だけに頼らない<br>業務改善を進めやすくなる。'
    );
  }

  rememberAndSet(
    document.querySelector(".flow .section-heading h2"),
    '<span class="mobile-line">業務に合わせて</span><span class="mobile-line">DRAIQを活用</span>'
  );

  rememberAndSet(
    document.querySelector(".contact-copy h2"),
    '<span class="mobile-line">その積算業務、</span><span class="mobile-line">一度DRAIQに</span><span class="mobile-line">相談してみませんか。</span>'
  );
  rememberAndSet(
    document.querySelector(".contact-copy > p:not(.eyebrow)"),
    '現在の積算・見積業務をお聞きしたうえで、<br>DRAIQをどのように活用できるかご案内します。'
  );

  function applyMobileCopy() {
    mobileChanges.forEach(function (change) {
      change.element.innerHTML = mobileMedia.matches ? change.html : change.original;
    });
  }

  applyMobileCopy();
  if (typeof mobileMedia.addEventListener === "function") {
    mobileMedia.addEventListener("change", applyMobileCopy);
  } else if (typeof mobileMedia.addListener === "function") {
    mobileMedia.addListener(applyMobileCopy);
  }

  const menuButton = document.querySelector(".menu-btn");
  const mobileNav = document.querySelector(".mobile-nav");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", function () {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      mobileNav.hidden = isOpen;
    });

    mobileNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mobileNav.hidden = true;
        menuButton.setAttribute("aria-expanded", "false");
      });
    });
  }

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach(function (element) {
    observer.observe(element);
  });
});
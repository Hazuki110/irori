const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".header__nav");
const navLinks = nav.querySelectorAll("a");

function setMenu(isOpen) {
  hamburger.classList.toggle("is-open", isOpen);
  nav.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("is-lock", isOpen);
  hamburger.setAttribute("aria-expanded", String(isOpen));
  hamburger.setAttribute(
    "aria-label",
    isOpen ? "メニューを閉じる" : "メニューを開く",
  );
}

// ボタンで開閉
hamburger.addEventListener("click", () => {
  setMenu(!hamburger.classList.contains("is-open"));
});

// メニューのリンクを押したら閉じる
navLinks.forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// PC幅に広げたら閉じた状態に戻す
window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) setMenu(false);
});


// スクロールでふわっと表示
const fadeTargets = document.querySelectorAll(".js-fade");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-show");
        observer.unobserve(entry.target); // 一度出たら監視をやめる
      }
    });
  },
  {
    threshold: 0.15, // 要素が15%見えたら発動
  }
);

fadeTargets.forEach((target) => observer.observe(target));
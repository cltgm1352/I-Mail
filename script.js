// ローディング → メイン画面へ
window.addEventListener("load", () => {
  setTimeout(() => {
    document.getElementById("loading-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  }, 2000); // 2秒でローディング終了
});

// 偽リンククリック → 警告画面へ
document.addEventListener("DOMContentLoaded", () => {
  const fakeLink = document.getElementById("fake-link");
  fakeLink.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("main-content").style.display = "none";
    document.getElementById("alert-screen").style.display = "flex";
  });
});

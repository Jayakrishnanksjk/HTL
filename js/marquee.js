window.addEventListener("DOMContentLoaded", (event) => {
  const slides = document.getElementsByClassName("slides");

  for (let i = 0; i < slides.length; ++i) {
    // 対象ラッパー要素
    const target = slides[i];
    // ループ1回分の時間
    const duration = parseInt(target.dataset.duration) * 1000 || 10000;
    // スライダーの進行方向(右から左 or 左から右)
    const isAlternate = target.classList.contains("alternate");
    // ロゴ数の取得
    const childNum = target.firstElementChild.children.length;
    // ロゴの幅の算出
    const logoWidth = (((100 / childNum) * 100) / 100).toFixed(2);
    // ロゴの幅をセット
    target.style.setProperty("--logo-width", `${logoWidth}%`);

    // 開始時間
    let startTime = 0;
    // 経過時間
    let elapsed = 0;
    // 進捗(0-1)
    let progress = 0;

    const loop = (currentTime) => {
      if (!startTime) {
        startTime = currentTime;
      }
      // 現在の経過時間
      elapsed = currentTime - startTime;
      // 現在の進捗
      progress = Math.min(1, elapsed / duration);

      // 進捗が 100%(位置が 50%)になったらリセットして再ループ
      if (progress >= 1) {
        startTime = 0;
        elapsed = 0;
        progress = 0;
      }

      // スライドの位置を更新
      if (isAlternate) {
        // 左から右の場合
        target.style.transform = `translate3d(${-50 + progress * 50}%, 0, 0)`;
      } else {
        // 右から左の場合
        target.style.transform = `translate3d(-${progress * 50}%, 0, 0)`;
      }

      // 次のフレームをリクエストする
      window.requestAnimationFrame(loop);
    };

    // ループを開始
    window.requestAnimationFrame(loop);
  }
});

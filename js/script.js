// HTMLから要素を特定するための設定
const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const menuOverlay = document.getElementById('menu-overlay');

// 3本線ボタンをクリックしたらメニューを開く（クラスを追加）
openBtn.addEventListener('click', () => {
  menuOverlay.classList.add('is-open');
});

// ×ボタンをクリックしたらメニューを閉じる（クラスを削除）
closeBtn.addEventListener('click', () => {
  menuOverlay.classList.remove('is-open');
});


// BBBが選ばれる理由コンテンツのアニメーション
$(function() {
  $('.reason-list-item').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('is-show');
      // 1回だけアニメーションさせる場合
      $(this).off('inview');
    }
  });
});

// 受講生の声コンテンツのアニメーション
$(function() {
  // .voice-list-item が画面内に表示されたときに処理を実行
  $('.voice-list-item').on('inview', function(event, isInView) {
    if (isInView) {
      // 画面内に入ったら .is-show を追加
      $(this).addClass('is-show');
      // イベントを解除（1回だけ発火）
      $(this).off('inview');
    }
  });
});
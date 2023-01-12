"use strict";

// スクロールアニメーション（SP時フッター）
(function() {
    const fh = document.querySelector('.sp-footerBtns');
    const isUp = (function() {
      const scrollElement = document.scrollingElement;
      let flag, prePoint, scrollPoint;
      return function() {
        scrollPoint = scrollElement.scrollTop;
        flag = prePoint > scrollPoint ? true : false;
        prePoint = scrollPoint;
        return flag;
      }
    }());
    
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 900) {
        if (isUp()) {
          fh.classList.remove('is-show');
            } else {
          fh.classList.add('is-show')
            }
        } else {
        fh.classList.remove('is-show');
        }

        if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.scrollHeight) {
          fh.classList.add('is-show')
      }
    })
}());
  

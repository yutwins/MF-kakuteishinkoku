"use strict";

// 「マネーフォワード クラウド確定申告を選ぶ理由」セクションのクリックアニメーション
const reasonItem = document.querySelectorAll('.reason__item');
const reasonHead = document.querySelectorAll('.reason__itemHead');
const reasonItemCloseBtn = document.querySelectorAll('.reason-item__closeBtn');

for (let i = 0; i < reasonHead.length; i++) {
    reasonHead[i].addEventListener('click', function() {
        // console.log(this);
        this.classList.toggle("is-active");
        this.parentNode.classList.toggle("is-active");
    });
}
for (let i = 0; i < reasonItemCloseBtn.length; i++) {
    reasonItemCloseBtn[i].addEventListener('click', function() {
        // console.log(this);
        this.parentNode.classList.remove('is-active');
        this.parentNode.firstElementChild.classList.remove('is-active');
    });
}

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
  

// planセクション タブ切り替えアニメーション実装
document.addEventListener('DOMContentLoaded', function(){
    // タブに対してクリックイベントを適用
    const tabs = document.getElementsByClassName('plan__tab');
    for(let i = 0; i < tabs.length; i++) {
      tabs[i].addEventListener('click', tabSwitch, false);
    }
  
    // タブをクリックすると実行する関数
    function tabSwitch(){
      // タブのclassの値を変更
      document.getElementsByClassName('is-active')[0].classList.remove('is-active');
      this.classList.add('is-active');
      // コンテンツのclassの値を変更
      document.getElementsByClassName('is-show')[0].classList.remove('is-show');
      const arrayTabs = Array.prototype.slice.call(tabs);
      const index = arrayTabs.indexOf(this);
      document.getElementsByClassName('plan-list')[index].classList.add('is-show');
    };
}, false);



//qaセクション
const qaQ = document.querySelectorAll(".qa-item__q");

// 質問1に回答すれば、質問2を出力する関数
function addClassToTarget() {
    const radio1 = document.getElementById("answer01");
    const radio2 = document.getElementById("answer02");
    const target = document.getElementById("q-2");
  
    radio1.addEventListener("click", function() {
      target.classList.add("is-show");
    });
    radio2.addEventListener("click", function() {
      target.classList.add("is-show");
    });
  }
  
// Call the function
addClassToTarget();
// 質問1に回答すれば、質問2を出力する関数ここまで

for (let i = 0; i < qaQ.length; i++) {
    qaQ[i].addEventListener('click', function() {
        this.parentNode.classList.toggle('is-active');
    });
}

const radio1 = document.querySelector('.simulation-a__input01');
const radio2 = document.querySelector('.simulation-a__input02');
const radio3 = document.querySelector('.simulation-a__input03');
const radio4 = document.querySelector('.simulation-a__input04');
function showItems() {
    if (radio1.checked && radio3.checked) {
        // 「お得に〜〜」と「はい」を選択した場合
        document.querySelector('.simulation-result__container01').classList.add('is-selected');
        document.querySelector('.simulation-result__container02').classList.remove('is-selected');
        document.querySelector('.simulation-result__container03').classList.remove('is-selected');
    } else if (radio1.checked && radio4.checked) {
        // 「お得に〜〜」と「いいえ」を選択した場合
        document.querySelector('.simulation-result__container01').classList.remove('is-selected');
        document.querySelector('.simulation-result__container02').classList.add('is-selected');
        document.querySelector('.simulation-result__container03').classList.remove('is-selected');
    } else if (radio2.checked && radio3.checked) {
        // 「所得税だけではなく〜〜」と「はい」を選択した場合
        document.querySelector('.simulation-result__container01').classList.remove('is-selected');
        document.querySelector('.simulation-result__container02').classList.remove('is-selected');
        document.querySelector('.simulation-result__container03').classList.add('is-selected');
    } else if (radio2.checked && radio4.checked) {
        // 「所得税だけではなく〜〜」と「いいえ」を選択した場合
        document.querySelector('.simulation-result__container01').classList.add('is-selected');
        document.querySelector('.simulation-result__container02').classList.remove('is-selected');
        document.querySelector('.simulation-result__container03').classList.remove('is-selected');
    }
}
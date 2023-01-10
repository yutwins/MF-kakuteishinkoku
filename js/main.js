"use strict";

// 「マネーフォワード クラウド確定申告を選ぶ理由」セクションの
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


//qaセクション
const qaQ = document.querySelectorAll(".qa-item__q");

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
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
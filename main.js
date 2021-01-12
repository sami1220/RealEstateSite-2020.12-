'use strict'

// ボタン要素を取得
let $btnAll = document.getElementById('js-btn');
let $btn = $btnAll.querySelectorAll('[data-btn]');

let $tabAll = document.getElementById('js-tab');
let $tab = $tabAll.querySelectorAll('[data-tab]');

let ACTIVE_CLASS = 'is-active';
let tabLen =$tab.length;

// 初期化する
const init = () => {
  $tab[0].style.display = 'none';
};
init();

// クリックして動くイベント
let handleClick = (e) => {
  e.preventDefault();

// クリックされたボタンと要素を取得
  const $this = e.target;
  const targetVal = $this.dataset.btn;

  
  let index = 0;
  while(index < tabLen) {
    $tab[index].style.display = "none";
    $tab[index].classList.remove(ACTIVE_CLASS);
    index++;
  };

  $tabAll.querySelectorAll('[data-tab="' + targetVal + '"]')[0].style.display = 'block';
  $tabAll[index].classList.add(ACTIVE_CLASS);
};

// 全部のボタンに対して関数を適用
let index = 0;
while(index < $btn.length) {
  $btn[index].addEventListener('click', (e) => handleClick(e)); 
  index++;
};


// ナビゲーションタブの動き
// const navTitle = document.querySelectorAll('.js-nav-title');

// function toggle() {
//   const content = this.nextElementSibling;
//   this.classList.toggle('is-active');
//   content.classList.toggle('is-open');
//   console.log('HELLO');
// }

// for(let i = 0; i < navTitle.length; i++){
//   navTitle[i].addEventListener('click', toggle)
// }


/*
  const title = document.querySelectorAll('.js-accordion-title');

  function toggle(){
  const content = this.nextElementSibling;
  this.classList.toggle('is-active');
  content.classList.toggle('is-open');
  }

  for (let i = 0; i < title.length; i ++){
    title[i].addEventListener('click', toggle)
  }

*/
const title = document.getElementById('title');
title.textContent = 'JSで変更した後のタイトル';

const description = document.getElementById('description');
description.innerHTML = 'JSで変更した後の<strong>説明文</strong>';

const profileImg = document.getElementById('profile');
profileImg.setAttribute('src', 'https://www.pakutaso.com/shared/img/thumb/TOMnemuiDSC01757_TP_V1.jpg');

title.classList.add('bg-yellow');
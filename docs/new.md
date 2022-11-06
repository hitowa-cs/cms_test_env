---
title: new
layout: full-width
categories:
  - new
date: 2022-10-27T01:33:18.922Z
---


<html> 

<head> 

<title>Tailwind CSS Accordion</title>

 <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"> <style> /* Tab content - closed */.tab-content { max-height: 0; -webkit-transition: max-height .35s; -o-transition: max-height .35s; transition: max-height .35s; } /* :checked - resize to full height */ .tab input:checked ~ .tab-content { max-height: 100vh; } /* Label formatting when open */ .tab input:checked + label{ /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/ font-size: 1.25rem; /*.text-xl*/ padding: 1.25rem; /*.p-5*/ border-left-width: 2px; /*.border-l-2*/ border-color: #6574cd; /*.border-indigo*/ background-color: #f8fafc; /*.bg-gray-100 */ color: #6574cd; /*.text-indigo*/ } /* Icon */ .tab label::after { float:right; right: 0; top: 0; display: block; width: 1.5em; height: 1.5em; line-height: 1.5; font-size: 1.25rem; text-align: center; -webkit-transition: all .35s; -o-transition: all .35s; transition: all .35s; } /* Icon formatting - closed */ .tab input[type=checkbox] + label::after { content: "+"; font-weight:bold; /*.font-bold*/ border-width: 1px; /*.border*/ border-radius: 9999px; /*.rounded-full */ border-color: #b8c2cc; /*.border-grey*/ } .tab input[type=radio] + label::after { content: "\25BE"; font-weight:bold; /*.font-bold*/ border-width: 1px; /*.border*/ border-radius: 9999px; /*.rounded-full */ border-color: #b8c2cc; /*.border-grey*/ } /* Icon formatting - open */ .tab input[type=checkbox]:checked + label::after { transform: rotate(315deg); background-color: #6574cd; /*.bg-indigo*/ color: #f8fafc; /*.text-grey-lightest*/ } .tab input[type=radio]:checked + label::after { transform: rotateX(180deg); background-color: #6574cd; /*.bg-indigo*/ color: #f8fafc; /*.text-grey-lightest*/ } </style> 

</head> <body class="font-sans container"> 

<div class="w-full  mx-auto p-8"> 

<div class="shadow-md">

 <div class="tab w-full overflow-hidden border-t"><input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs"> <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-one">Label One</label> <div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal"><p class="p-5"><p style="text-align: left; background: #ffecbf;" data-mce-style="text-align: left; background: #ffecbf;"><span style="text-decoration: underline;" data-mce-style="text-decoration: underline;">■Care Innovation Team<br></span>介護現場の抱える課題（サービス品質・人員確保・情報共有など）についてテクノロジーを活用した解決策を立案し、導入から活用支援までを行っております。また企業と協働で新たな技術開発も行なっています。</p><br><p style="text-align: left; background: #ffecbf;" data-mce-style="text-align: left; background: #ffecbf;"><span style="text-decoration: underline;" data-mce-style="text-decoration: underline;">■Public Relations Team</span><br> HITOWAケアサービスとイリーゼの（ブランド）価値を、進化するメディアに対応しながら魅力的に発信していきます。</p><!--吹き出しはじまり--><br><div style="background: #c6e6f5; padding: 10px;" data-mce-style="background: #c6e6f5; padding: 10px;"><span style="font-size: 18px;" data-mce-style="font-size: 18px;"><strong>今月のニュース</strong></span></div><!--吹き出しはじまり--><br>

<div class="balloon5"><div class="faceicon"><img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s96da70f606bae585/image/if1f118f923f4dcea/version/1556099238/image.jpg" alt="Testさん" data-mce-src="https://image.jimcdn.com/app/cms/image/transf/none/path/s96da70f606bae585/image/if1f118f923f4dcea/version/1556099238/image.jpg"><br> 

<span style="font-xs text-align center vertical-align  text-bottom " data-mce-style="font-size: 14px; text-align: center; vertical-align: text-bottom;">Test部長</span></div><div class="chatting"><div class="says">スマート介護士という資格をご存じですか？少ない人員で効率的な業務遂行がもとめられるなか、DX化を図り介護の質の向上と効率化を実行できる介護士が「スマート介護士」です。興味があれば事業企画室までお問合わせ下さい。</div></div><br>

<div class="md:flex  bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <div class="w-6/12 sm:w-4/12 px-2">
    <img src="/images/s1.png" alt="Test部長" class="shadow rounded-full max-w-full h-auto align-middle border-sky-500" />

</div></div><div class="rounded-md bg-blue-300  bg-opacity-50 p-2 w-full h-full">スマート介護士という資格をご存じですか？少ない人員で効率的な業務遂行がもとめられるなか、DX化を図り介護の質の向上と効率化を実行できる介護士が「スマート介護士」です。興味があれば事業企画室までお問合わせ下さい。</div><br>

 </div>
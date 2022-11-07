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

    <script src="https://cdn.tailwindcss.com"></script>

 <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"> <style> /* Tab content - closed */.tab-content { max-height: 0; -webkit-transition: max-height .35s; -o-transition: max-height .35s; transition: max-height .35s; } /* :checked - resize to full height */ .tab input:checked ~ .tab-content { max-height: 100vh; } /* Label formatting when open */ .tab input:checked + label{ /*@apply text-xl p-5 border-l-2 border-indigo-500 bg-gray-100 text-indigo*/ font-size: 1.25rem; /*.text-xl*/ padding: 1.25rem; /*.p-5*/ border-left-width: 2px; /*.border-l-2*/ border-color: #6574cd; /*.border-indigo*/ background-color: #f8fafc; /*.bg-gray-100 */ color: #6574cd; /*.text-indigo*/ } /* Icon */ .tab label::after { float:right; right: 0; top: 0; display: block; width: 1.5em; height: 1.5em; line-height: 1.5; font-size: 1.25rem; text-align: center; -webkit-transition: all .35s; -o-transition: all .35s; transition: all .35s; } /* Icon formatting - closed */ .tab input[type=checkbox] + label::after { content: "+"; font-weight:bold; /*.font-bold*/ border-width: 1px; /*.border*/ border-radius: 9999px; /*.rounded-full */ border-color: #b8c2cc; /*.border-grey*/ } .tab input[type=radio] + label::after { content: "\25BE"; font-weight:bold; /*.font-bold*/ border-width: 1px; /*.border*/ border-radius: 9999px; /*.rounded-full */ border-color: #b8c2cc; /*.border-grey*/ } /* Icon formatting - open */ .tab input[type=checkbox]:checked + label::after { transform: rotate(315deg); background-color: #6574cd; /*.bg-indigo*/ color: #f8fafc; /*.text-grey-lightest*/ } .tab input[type=radio]:checked + label::after { transform: rotateX(180deg); background-color: #6574cd; /*.bg-indigo*/ color: #f8fafc; /*.text-grey-lightest*/ } </style> 

</head> 

<body class="font-sans container">

<div class="">

<div class="shadow-md">

<div class="tab w-full bg-green-500 overb cxflow-hidden border-t"> <input class="absolute opacity-0 " id="tab-multi-one" type="checkbox" name="tabs"> <label class="block p-5 leading-normal cursor-pointer" for="tab-multi-one"><span class="text-xl text-black text-center">事業企画室</span><span class="text-xl text-red-600 text-center">NEW!!</span></label><div class="tab-content overflow-hidden border-l-2 bg-gray-100 border-indigo-500 leading-normal"> </label><div class="cp_actab-content"><div style="margin-left: 2em;" data-mce-style="margin-left: 2em;"><p><a name="unei1" id="uneikanri" class="mce-item-anchor"></a></p><div style="background: #c6e6f5; padding: 10px;" data-mce-style="background: #c6e6f5; padding: 10px;"><span style="font-size: 18px;" data-mce-style="font-size: 18px;"><strong>仕事内容</strong></span></div><br>

<p style="text-align: left; background: #ffecbf;" data-mce-style="text-align: left; background: #ffecbf;"><span style="text-decoration: underline;" data-mce-style="text-decoration: underline;">■Care Innovation Team<br></span>介護現場の抱える課題（サービス品質・人員確保・情報共有など）についてテクノロジーを活用した解決策を立案し、導入から活用支援までを行っております。また企業と協働で新たな技術開発も行なっています。</p><br>

<p style="text-align: left; background: #ffecbf;" data-mce-style="text-align: left; background: #ffecbf;"><span style="text-decoration: underline;" data-mce-style="text-decoration: underline;">■Public Relations Team</span><br> HITOWAケアサービスとイリーゼの（ブランド）価値を、進化するメディアに対応しながら魅力的に発信していきます。</p>

<!--吹き出しはじまり--><br>

<div style="background: #c6e6f5; padding: 10px;" data-mce-style="background: #c6e6f5; padding: 10px;"><span style="font-size: 18px;" data-mce-style="font-size: 18px;"><strong>今月のニュース</strong></span></div><!--吹き出しはじまり--><br>

<!--StartFragment-->

    <div class="mx-auto overflow-hidden">

        <div class="flex flex-row flex-nowrap">

          <div class="md:shrink-0">

            <figure class="p-8 h-32 w-32"><img src="https://image.jimcdn.com/app/cms/image/transf/none/path/s96da70f606bae585/image/if1f118f923f4dcea/version/1556099238/image.jpg" class="rounded-full border-2 border-sky-500" /><figcaption class="text-center">金子年長</figcaption></figure>

        </div>

        <div class="">

          <div class="p-5 rounded-md bg-blue-300 bg-opacity-50 text-black">

            <p class="text-lg"> スマート介護士という資格をご存じですか？少ない人員で効率的な業務遂行がもとめられるなか、DX化を図り介護の質の向上と効率化を実行できる介護士が「スマート介護士」です。興味があれば事業企画室までお問合わせ下さい。</p>

          </div>

        </div>

      </div>

    </div><br></div>
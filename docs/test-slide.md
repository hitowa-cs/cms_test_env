---
title: test slide
layout: full-width
categories:
  - new
date: 2022-12-05T02:07:43.455Z
---
<!DOCTYPE html>

<html>

<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta http-equiv="X-UA-Compatible" content="ie=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet" /><script src="https://cdn.tailwindcss.com"></script><script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script><script src="https://unpkg.com/tailwindcss-jit-cdn"></script><link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css" /><script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script><style>.swiper--wrapper {/\* wrapperのサイズを調整 \*/width: 100%;
height: 300px;}.swiper-slide {/\* スライドのサイズを調整、中身のテキスト配置調整、背景色 \*/color: #ffffff;width: 100%;height: 100%;text-align: center;line-height: 400px;}.swiper-slide:nth-child(3n + 1) {background-color: #de4439;}.swiper-slide:nth-child(3n + 2) {
background-color: #fcd500;}.swiper-slide:nth-child(3n + 3) {background-color: #53c638;}.mySwiper2 {height: 400px;width: 100%;}.mySwiper {height: 100px;box-sizing: border-box;padding: 10px 0;}.mySwiper .swiper-slide {width: 25%;height: 100%;
opacity: 0.4;line-height: 80px;}.mySwiper .swiper-slide-thumb-active {opacity: 1;}
</style></head>

<body>

<div class="swiper mySwiper2">

<!-- Additional required wrapper -->

<div class="swiper-wrapper">

<!-- Slides -->

<div class="swiper-slide">Slide 1</div>

<div class="swiper-slide">Slide 2</div>

<div class="swiper-slide">Slide 3</div>

<div class="swiper-slide">Slide ４</div>

</div>

<!-- 必要に応じてナビボタン -->

<div class="swiper-button-prev"></div>

<div class="swiper-button-next"></div>

</div>

<div class="swiper mySwiper">

<!-- Additional required wrapper -->

<div class="swiper-wrapper">

<!-- Slides -->

<div class="swiper-slide">Slide 1</div>

<div class="swiper-slide">Slide 2</div>

<div class="swiper-slide">Slide 3</div>

<div class="swiper-slide">Slide ４</div>

</div>

</div>

<script>

const swiper = new Swiper(".mySwiper", {

spaceBetween: 10,

slidesPerView: 4

});



const swiper2 = new Swiper(".mySwiper2", {

thumbs: {

swiper: swiper

},

navigation: {

nextEl: ".swiper-button-next",

prevEl: ".swiper-button-prev"

}

});
</script>

</body>

</html>
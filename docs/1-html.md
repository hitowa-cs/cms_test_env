---
title: 1.html
layout: full-width
categories:
  - new
date: 2022-12-12T04:05:56.967Z
---
<head><link rel="stylesheet" href="https://unpkg.com/swiper@8/swiper-bundle.min.css"/><script src="https://unpkg.com/swiper@8/swiper-bundle.min.js"></script></head><body><style>.slider {max-width: 100rem;height: 50rem;margin: 0 auto;position: relative;/* IN THE END */overflow: hidden;}.slide {position: absolute;top: 0;width: 100%;height: 50rem;display: flex;align-items: center;justify-content: center;/* THIS creates the animation! */transition: transform 1s;}.slide>img {/* Only for images that have different size than slide */width: 80%;height: 80%;object-fit: cover;}.slider__btn {position: absolute;top: 50%;z-index: 10;border: none;background-color: black;/* // your was "inherit" . changed this for my visibility. *//* background: rgba(255, 255, 255, 0.7); */font-family: inherit;color: white;border-radius: 50%;height: 5.5rem;width: 5.5rem;font-size: 3.25rem;cursor: pointer;}.slider__btn--left {left: 6%;transform: translate(-50%, -50%);}.slider__btn--right {right: 6%;transform: translate(50%, -50%);}.dots {position: absolute;bottom: 5%;left: 50%;transform: translateX(-50%);display: flex;}.dots__dot {border: none;background-color: #b9b9b9;opacity: 0.7;height: 1rem;width: 1rem;border-radius: 50%;margin-right: 1.75rem;cursor: pointer;transition: all 0.5s;/* Only necessary when overlying images *//* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */}.dots__dot:last-child {margin: 0;}.dots__dot--active {/* background-color: #fff; */background-color: blue;opacity: 1;}.slideshow-container {max-width: 1000px;position: relative;margin: auto;}/* Next & previous buttons */.prev,.next {cursor: pointer;position: absolute;top: 50%;width: auto;padding: 16px;margin-top: -22px;color: white;font-weight: bold;font-size: 18px;transition: 0.6s ease;border-radius: 0 3px 3px 0;user-select: none;}/* Position the "next button" to the right */.next {right: 0;border-radius: 3px 0 0 3px;}/* On hover, add a grey background color */.prev:hover,.next:hover {background-color: #f1f1f1;color: black;}</style>

<div class="slider">

<div class="slide">

<img src="/images/1574302761.png" alt="">

</div>

<div class="slide">

<img src="/images/1574302761.png" alt="">

</div>

<div class="slide">

<img src="/images/1574302761.png" alt="">

</div>

<div class="slide">

<img src="img/photo4.jpg" alt="">

</div>

<button class="slider__btn slider__btn--left">&#10094;</button>

<button class="slider__btn slider__btn--right">&#10095;</button>

<div class="dots"></div>

</div>

<hr> <!-- This to separate the slider (optional)-->

<div class="slider">

<div class="slide">

<img src="img/photo1.jpg" alt="">

</div>

<div class="slide">

<img src="img/photo2.jpg" alt="">

</div>

<div class="slide">

<img src="img/photo3.jpg" alt="">

</div>

<div class="slide">

<img src="img/photo4.jpg" alt="">

</div>

<button class="slider__btn slider__btn--left">&#10094;</button>

<button class="slider__btn slider__btn--right">&#10095;</button>

<div class="dots"></div>

</div>

<hr> <!-- This to separate the slider (optional)-->

<div class="slider">

<div class="slide">

<img src="img/photo1.jpg" alt="">

</div>

<div class="slide">

<img src="img/photo2.jpg" alt="">

</div>

<div class="slide">

<img src="img/photo3.jpg" alt="">

</div>

<div class="slide">

<img src="img/photo4.jpg" alt="">

</div>

<button class="slider__btn slider__btn--left">&#10094;</button>

<button class="slider__btn slider__btn--right">&#10095;</button>

<div class="dots"></div>

</div>

<link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet"> <style>
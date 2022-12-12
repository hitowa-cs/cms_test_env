---
title: w3slide
layout: full-width
categories:
  - new
date: 2022-12-12T01:36:46.820Z
---
<html xmlns="http://www.w3.org/1999/xhtml"><head><meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" /><title>w3web.net -- jquery multiple sliders on same page </title><script type="text/javascript" src="http://w3web.net/wp-includes/js/jquery-1.7.1.min.js"></script><script type="text/javascript" src="js/multipleSliderScript.js"></script><link rel="stylesheet" href="css/multipleSliderStyle.css" type="text/css" media="all">

<style>

html, body {

background-color: blueviolet;

margin: 0;

padding: 0;

}



\* {

box-sizing: border-box;

}



p {

text-align: center;

font-size: 20px;

font-weight: 700;

}



.simple-slider-wrapper {

width: 100%;

max-width: 500px;

height: 300px;

margin: 0 auto 30px auto;

position: relative;

}



.control_prev,

.control_next {

display: none;

position: absolute;

top: 50%;

transform: translateY(-50%);

z-index: 99999;

width:48px;

height: 48px;

color: #fff;

text-decoration: none;

font-weight: 700;

font-size: 38px;

overflow: hidden;

cursor: pointer;

}



.control_prev {

left: 0;

}



.control_next {

right: 0;

}



.control_prev span:before,

.control_next span:before {

content: "";

width: 48px;

height: 48px;

position: absolute;

}



.control_prev span:before {

background: url('https://www.flaticon.com/svg/static/icons/svg/271/271218.svg') no-repeat;

top: 0;

right: 0;

}



.control_next span:before {

background: url('https://www.flaticon.com/svg/static/icons/svg/271/271226.svg') no-repeat;

top: 0;

left: 0;

}



.simple-slider-overflow-hidden {

overflow: hidden;

width: 100%;

height: 100%;

padding: 0 50px;

}



.simple-slider {

display: flex;

overflow: hidden;

position: relative;

margin: 0;

padding: 0;

list-style: none;

width: 100%;

height: 100%;

}



.simple-slider-element {

width: 100%;

flex-shrink: 0;

display: flex;

justify-content: center;

align-items: center;

position: relative;

overflow: hidden;

}



.slide-image {

object-fit: cover;

height: 150%;

width: auto

}

</style>



<div class="simple-slider-wrapper">

<div class="control_prev"><span></span></div>

<div class="control_next"><span></span></div>

<div class="simple-slider-overflow-hidden">

<ul class="simple-slider">

<li class="simple-slider-element 1">

<image class="slide-image" src="https://images.unsplash.com/photo-1590508292979-a30664cfdb51" />

</li>

<li class="simple-slider-element 2">

<image class="slide-image" src="https://images.unsplash.com/photo-1548658166-136d9f6a7e76" />

</li>

<li class="simple-slider-element 3">

<image class="slide-image" src="https://images.unsplash.com/photo-1504595403659-9088ce801e29" />

</li>

<li class="simple-slider-element 4">

<image class="slide-image" src="https://images.unsplash.com/photo-1562462863-42d40916e6b8" />

</li>

<li class="simple-slider-element 5">

<image class="slide-image" src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a" />

</li>

<li class="simple-slider-element 5">

<image class="slide-image" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a" />

</li>

</ul>

</div>

</div>

<!-- slider 2 -->

<div class="simple-slider-wrapper">

<div class="control_prev"><span></span></div>

<div class="control_next"><span></span></div>

<div class="simple-slider-overflow-hidden">

<ul class="simple-slider">

<li class="simple-slider-element 1">

<image class="slide-image" src="https://images.unsplash.com/photo-1590508292979-a30664cfdb51" />

</li>

<li class="simple-slider-element 2">

<image class="slide-image" src="https://images.unsplash.com/photo-1548658166-136d9f6a7e76" />

</li>

<li class="simple-slider-element 3">

<image class="slide-image" src="https://images.unsplash.com/photo-1504595403659-9088ce801e29" />

</li>

<li class="simple-slider-element 4">

<image class="slide-image" src="https://images.unsplash.com/photo-1562462863-42d40916e6b8" />

</li>

<li class="simple-slider-element 5">

<image class="slide-image" src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a" />

</li>

<li class="simple-slider-element 5">

<image class="slide-image" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a" />

</li>

</ul>

</div>

</div>

<!-- slider 3 -->

<div class="simple-slider-wrapper">

<div class="control_prev"><span></span></div>

<div class="control_next"><span></span></div>

<div class="simple-slider-overflow-hidden">

<ul class="simple-slider">

<li class="simple-slider-element 1">

<image class="slide-image" src="https://images.unsplash.com/photo-1590508292979-a30664cfdb51" />

</li>

<li class="simple-slider-element 2">

<image class="slide-image" src="https://images.unsplash.com/photo-1548658166-136d9f6a7e76" />

</li>

<li class="simple-slider-element 3">

<image class="slide-image" src="https://images.unsplash.com/photo-1504595403659-9088ce801e29" />

</li>

<li class="simple-slider-element 4">

<image class="slide-image" src="https://images.unsplash.com/photo-1562462863-42d40916e6b8" />

</li>

<li class="simple-slider-element 5">

<image class="slide-image" src="https://images.unsplash.com/photo-1535930891776-0c2dfb7fda1a" />

</li>

<li class="simple-slider-element 5">

<image class="slide-image" src="https://images.unsplash.com/photo-1507146426996-ef05306b995a" />

</li>

</ul>

</div>

</div>
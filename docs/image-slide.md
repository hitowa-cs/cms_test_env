---
title: image slide
layout: full-width
categories:
  - new
date: 2022-11-04T07:52:18.645Z
---
<!doctype html>

<html lang="en">

<head>

<meta charset="utf-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1">

<link href="https://cdn.tailwindcss.com" rel="stylesheet">

</head>

<body class="h-screen overflow-hidden flex items-center justify-center" style="background: #edf2f7;">

<script defer src="https://unpkg.com/alpinejs@3.2.3/dist/cdn.min.js"></script>



<main class="grid min-h-screen w-full place-content-center bg-gray-900">

<div

x-data="imageSlider"

class="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4"

\>

<div

class="absolute top-5 right-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white"

\>

<span x-text="currentIndex"></span>/<span x-text="images.length"></span>

</div>



<button

@click="previous()"

class="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"

\>

<svg

class="h-8 w-8 font-bold text-gray-500"

fill="none"

stroke="currentColor"

viewBox="0 0 24 24"

xmlns="http://www.w3.org/2000/svg"

\>

<path

stroke-linecap="round"

stroke-linejoin="round"

stroke-width="2.5"

d="M15 19l-7-7 7-7"

\></path>

</svg>

</button>



<button

@click="forward()"

class="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"

\>

<svg

class="h-8 w-8 font-bold text-gray-500"

fill="none"

stroke="currentColor"

viewBox="0 0 24 24"

xmlns="http://www.w3.org/2000/svg"

\>

<path

stroke-linecap="round"

stroke-linejoin="round"

stroke-width="2.5"

d="M9 5l7 7-7 7"

\></path>

</svg>

</button>



<div class="relative h-80" style="width: 30rem">

<template x-for="(image, index) in images">

<div

x-show="currentIndex == index + 1"

x-transition:enter="transition transform duration-300"

x-transition:enter-start="opacity-0"

x-transition:enter-end="opacity-100"

x-transition:leave="transition transform duration-300"

x-transition:leave-start="opacity-100"

x-transition:leave-end="opacity-0"

class="absolute top-0"

\>

<img :src="image" alt="image" class="rounded-sm" />

</div>

</template>

</div>

</div>

</main>



<script>

document.addEventListener("alpine:init", () => {

Alpine.data("imageSlider", () => ({

currentIndex: 1,

images: [

"https://unsplash.it/640/425?image=30",

"https://unsplash.it/640/425?image=40",

"https://unsplash.it/640/425?image=50",

],

previous() {

if (this.currentIndex > 1) {

this.currentIndex = this.currentIndex - 1;

}

},

forward() {

if (this.currentIndex < this.images.length) {

this.currentIndex = this.currentIndex + 1;

}

},

}));

});

</script>

</body>

</html>
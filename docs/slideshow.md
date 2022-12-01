---
title: SlideShow
layout: full-width
categories:
  - New
date: 2022-11-15T05:24:00.565Z
---
<!doctype html>

<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <title>KindaCode.com</title>

<script src="https://hitowa-cms-test.s3.ap-northeast-1.amazonaws.com/images/scripts.js"></script>
</head>

<body>
    <h1 class="my-4 text-center text-4xl">KindaCode.com</h1>
    <h2 class="mb-10 text-center text-xl">Carousel Example</h2>
    <div class="relative w-[600px] mx-auto">
        <div class="slide relative">
            <img class="w-full h-\\\\\[300px] object-cover"
                src="/images/1599540407.png">
            <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower One Caption</div>
        </div>
        <div class="slide relative">
            <img class="w-full h-\\\\\[300px] object-cover"
                src="/images/1599540773.png">
            <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower Two Caption</div>
        </div>
        <div class="slide relative">
            <img class="w-full h-\\\\\[300px] object-cover"
                src="/images/1574302761.png">
            <div class="absolute bottom-0 w-full px-5 py-3 bg-black/40 text-center text-white">Flower Three Caption
            </div>
        </div>
        <a class="absolute left-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
            onclick="moveSlide(-1)">❮</a>
        <a class="absolute right-0 top-1/2 p-4 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white hover:text-amber-500 cursor-pointer"
            onclick="moveSlide(1)">❯</a>
    </div>
    <br>
    <div class="flex justify-center items-center space-x-5">
        <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(1)"></div>
        <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(2)"></div>
        <div class="dot w-4 h-4 rounded-full cursor-pointer" onclick="currentSlide(3)"></div>
    </div>
</body>
</html>
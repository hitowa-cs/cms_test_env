---
title: new
layout: full-width
categories:
  - new
date: 2022-10-27T01:33:18.922Z
---
<!--StartFragment-->

<!DOCTYPE html>

<html>

  <head>

    <script src="https://cdn.tailwindcss.com">

    </script>

\    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tailwind Accordion Tutorial</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="//unpkg.com/alpinejs" defer></script>
    <style>
        [x-cloak]{
            display: none;
        }
    </style>
</head>
<body>
    <!-- <p class="text-5xl">Tailwind Accordion Tutorial</p> -->
    <div x-data="{open:false}" class="w-\\\[60vw] mx-auto bg-red-50 mt-16">
        <div class="flex justify-between items-center bg-red-200">
            <p class="px-4">Accordion 1</p>
            <button @click="open=!open" x-html="open ? '-' :'+' " class="px-2 text-black hover:text-gray-500 font-bold text-3xl"></button>
        </div>
        <div x-show="open" x-cloak  class="mx-4 py-4" x-transition>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae ut dolores totam nobis molestias!</div>
        <hr class="h-[0.1rem] bg-slate-500">
    </div>
    <div x-data="{open:false}" class="w-\\\[60vw] mx-auto  bg-red-50">
        <div class="flex justify-between items-center bg-red-200">
            <p class="px-4">Accordion 2</p>
            <button @click="open=!open" x-html="open ? '-' :'+' " class="px-2 text-black hover:text-gray-500 font-bold text-3xl"></button>
        </div>
        <div x-show="open" x-cloak class="mx-4 py-4" x-transition>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae ut dolores totam nobis molestias!</div>
        <hr class="h-[0.1rem] bg-slate-500">
    </div>
    <div x-data="{open:false}" class="w-\\\[60vw] mx-auto  bg-red-50">
        <div class="flex justify-between items-center bg-red-200">
            <p class="px-4">Accordion 3</p>
            <button @click="open=!open" x-html="open ? '-' :'+' " class="px-2 text-black hover:text-gray-500 font-bold text-3xl"></button>
        </div>
        <div x-show="open" x-cloak class="mx-4 py-4" x-transition>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta repudiandae ut dolores totam nobis molestias!</div>
        <hr>
    </div>
</body>
</html>
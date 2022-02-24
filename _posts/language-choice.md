---
title: 'The Languages of Snapping Rails'
excerpt: ''
coverImage: '/assets/blog/language-choice/cover.png'
date: '2022-02-23T20:45:12.238Z'
author:
  name: Matt Thornton
  picture: '/assets/blog/authors/matt.png'
ogImage:
  url: '/assets/blog/language-choice/cover.png'
---

## Frontend

Snapping Rails will be utilizing the React framework to create its user interface. As a result, the majority of my logic will be written in Javascript/JSX which will be compiled using Babel. 
Javascript is simply the front-runner whenever it comes to web (and beyond) frontend (and sometimes backend 🥴) development, and it has numerous libraries and resources available in its ecosystem that I aim
to take advantage of to ease the course I will take towards developing a minimum viable product.

If you are curious as to why I've chosen to use the React framework over Angular, Vue.js, or many others, it simply comes down to the fact that the project I am working on at my host company utilizes React. Although I am much
more experienced with Vue.js, I want to become more adept at the particular technical stack I will be using at my "day job".

## Backend

For Snapping Rails' backend I will also be making a language choice based on a choice in framework/library. I will be employing FastAPI to build the RestAPI that my application will rely upon. FastAPI has a rich set of default features, and
is extremely performant as it's able to handle requests asynchronously. I have gotten very familiar with it in another project I am a part of, where we ported our backend to FastAPI from Flask, and I have seen first-hand what an improvement FastAPI can offer in a high request volume environment. Along with the SQLAlchemy and asyncpg libraries I expect to be able to handle the large amount of data transfer my application will require!

So long story short, I will be writing my backend in Python! 🐍 Despite what the cover image may suggest, it is by far my favorite language and what I am most comfortable with. It is what I consider to be a mix of the best
object oriented and functional programming has to offer!

***

To follow along with the fun, be sure to check out the [Snapping Rails repository](https://github.com/ThorntonMatthewD/snapping-rails), and be on the lookout for the first public alpha to be released soon!


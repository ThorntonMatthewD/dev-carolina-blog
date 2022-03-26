---
title: "The True Test"
excerpt: "Is the code really what is being tested?"
coverImage: "/assets/blog/the-true-test/cover.png"
date: "2022-03-26T12:16:37.948Z"
author:
  name: Matt Thornton
  picture: "/assets/blog/authors/matt.png"
ogImage:
  url: "/assets/blog/the-true-test/cover.png"
---

In pursuing test-driven development, I am still trying to build intuition around being able to identify where and when tests, and types of tests, are appropriate in my projects. My strategy for finding the most useful tests, at least, is to list the type of components that seem to break most often and figure out how to target their behaviors with tests. These tend to be areas dependent on certain states, or at the "joints" between different services. Unfortunately, these areas rarely break down into simple mathematical computations which are easy to test; often I am having to work hard to setup each test with various renderings, mocks, monkeypatches, you-name-it, to get to the part where I can execute a simple `expect(this).toBe(that)`. Having done this far too many times for my liking now, as well as trying to write tests **before** actually churning out code, I have found that the most trying test of them all isn't one dealing with objective equalities, but the one dealing with the subjective measurement of toil needed to cover an application in tests. In other words, the actual test case at hand is the design of the application itself!

Writing tests forces a developer to confront the layout of the code, its structure, and its dependencies. In my experience these last few weeks, by writing tests before my code, I am finding myself breaking my classes and methods into much smaller chunks with fewer (ideally one) responsibilities. It just becomes too painful and cumbersome to write tests otherwise! This has, after much reflection (letting the initial frustration simmer down), been my favorite outcome of attempting to adopt test-driven development.

- MT

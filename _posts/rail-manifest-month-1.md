---
title: 'Rail Ledger - Month 1'
excerpt: 'March 2022 - Snapping Rails Update'
coverImage: '/assets/blog/umbrella-update-1/cover.png'
date: '2022-03-04T14:12:23.845Z'
author:
  name: 'Matt Thornton'
  picture: '/assets/blog/authors/matt.png'
ogImage:
  url: '/assets/blog/umbrella-update-1/og.png'
---

## The useState(new Date()) of Snapping Rails 

Snapping Rails is off to a great start! The basic layout of the frontend, backend, and database are all semi-functional and it is now time to refactor and polish before proceeding with adding new features.

Whenever I first embarked down the line 🚆 of creating this application it was only my second time developing with React.js (the first being the "[Login Screen with Material Design](https://github.com/engineerkit/engineerkit/blob/main/exercises/human-experience/login-screen-ui.md)" exercise in our Human Experience module), and as a result I really struggled with the passing of props and knowing how to split up my interfaces into smaller components properly. In turn I now have some redundant business logic that needs consolidated, and some **omni-components** 🦖 that need to be split up into manageable pieces 🐔.

On the backend side, this is also my first time managing my own Oauth2 flow, and now that I *kind of* (I hope?) understand what's going on there, I see opportunities to clean that code up also.

 It is very important that I take the time now, while my application is still fairly simple and I do not have any user data stored except my own, to address the lingering technical debt I have racked up before it becomes any more difficult to do so. Having a clean code base means also having a testable code base, and by reducing duplicate logic and concerns I can reduce the number of tests I have to write while making each test more impactful. These will act as the guardrails to keep me from swerving off course and hopefully keep bugs from slipping into my code!


 ## The Next 30 Days' Railmap

 My end goal in the next month is to have my application deployed and accessible to the public at [https://www.snappingrails.com](https://www.snappingrails.com); however, before that there are a few tasks I'd like to tackle before launching:

    1.  Refactor frontend code base (2 hours)
    2.  Refactor backend auth.py (.5 hours)
    3.  Implement my first Jest test and add Jest CI workflow (1 hour)
    4.  Add database schema with fake data to repo. Allow for end-to-end testing by having the 3 services be launched to run tests. (1 hour)
    5.  Add as many tests as appropriate to the frontend and backends. Use TDD!! (ongoing, so hard to estimate)
    6.  Add Registration form (the route has been already created) (.5 hours)
    7.  Work on theming; light mode/dark mode toggle? (.75 hours)
    8.  Implement issuing of refresh tokens with token rotation (since SR is a SPA) and automatic reuse detection. (3+ hours)
    9.  Add in Profile, Posts, Contact pages. The first two largely depend on the token rework (1.5 hours)
    10. Decide where I want to host this bad boy. (???? hours)
    11. Set DNS record for domain to point at the chosen hosted platform (1 hour, depending on location)
    12. Create a CD workflow for master branch (1 hour)

    ==============================================

    Grand Total Hours for March: 14-ish


I think this will be pretty doable as a lot of my objectives coincide with what we will be learning in our Engineerkit modules over the next few weeks, as well as what I am working on at my host company (Jest tests for days). I'm willing to shave off a few points to retain my sanity, but if the last month is any indicator I think this set of tasks will be doable. I'm mostly just worried about that refresh tokens portion. 😅


I will keep you all posted on efforts with Snapping Rails, but if you'd rather follow along on your own I have my code and project board available for viewing below:

[Snapping Rails: The Code](https://github.com/ThorntonMatthewD/snapping-rails)

[Snapping Rails: The Project Board](https://github.com/users/ThorntonMatthewD/projects/1)

Thanks for stopping by! See you again on Monday!




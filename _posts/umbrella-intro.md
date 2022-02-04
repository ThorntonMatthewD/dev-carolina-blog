---
title: 'All Aboard!!'
excerpt: ''
coverImage: '/assets/blog/umbrella-intro/cover.jpg'
date: '2022-02-04T12:01:54.612Z'
author:
  name: Matt Thornton
  picture: '/assets/blog/authors/matt.png'
ogImage:
  url: '/assets/blog/umbrella-intro/snapping-rails-logo-v1.png'
---

I am pleased to announce a new project aimed at railway enthusiasts that will allow you to place markers onto a map of the North American rail network and attach URLs, photos, videos, and events along rail lines, at railroad museums, and any other locations related to the rail industry. The goal is to build a sort of visual, collaborative time table of rail activity to see where ideal vantage points for railfanning lie and to be able to connect with others in the railfanning community. I would also love to work with small businesses and economic development agencies to drive rail-based tourism to areas with locomotive action!


Coming soon: Snapping Rails!


![Snapping Rails' First Logo Attempt](/assets/blog/umbrella-intro/snapping-rails-logo-v1.png "Snapping Rails' First Logo Attempt")


The project is still in its infancy, and I will begin by getting a basic React SPA setup which includes the railway map. From there I will add the ability to place markers on to the map and attach links to various types of media onto them. Users will need to sign up for an account in order to place markers; I will be using Google's Oauth2 service to handle authentication, and by extension authorization. I feel this will be a solid starting point, and it will act as my minimum viable product before moving onto more complex features.

For the curious, the general technical stack I will be using is in the graphic below: 

![I will be using React with Leaflet.js and Material UI for my frontend. My API will be set up to use FastAPI and run with uvicorn. I will set up SQLAlchemy with the asyncpg dialect in order to facilitate object relational mapping and asynchronous connections with a Postresql database.](/assets/blog/umbrella-intro/tech-stack.png "Snapping Rails' Tech Stack")

I'm excited to drop the hammer and get this application chugging along! Stay tuned as I will be posting updates to this blog as features are released.
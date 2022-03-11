---
title: "Taking the Plunge"
excerpt: "The best way to learn is often through immersion."
coverImage: "/assets/blog/taking-the-plunge/cover.jpg"
date: "2022-03-11T13:12:32.531Z"
author:
  name: Matt Thornton
  picture: "/assets/blog/authors/matt.png"
ogImage:
  url: "/assets/blog/taking-the-plunge/cover.jpg"
---

The best way to learn is often through immersion. Winding up working in an unfamiliar tech stack can be disorienting, and it can be overwhelming at first. But "living" within that realm for a time and with a shorter feedback loop for testing assumptions and experimentation allows for a much quicker attainment of understanding than studying the technology at hand from a theoretical, outsider perspective. It adds the element of drive and motivation and gives immediate purpose to the knowledge being gathered, and I find that helps me find the will to dig and synthesize my findings. With each discovery the momentum builds, much like the pace of completing a jigsaw puzzle, and it becomes easier to find where a new piece of information "fits" into the larger picture. It takes a bit to get the foundation laid, but once the fundamentals of a concept are grasped learning greatly accelerates.

My experience with my host company has been nothing but immersive. The tools and frameworks being used for our project are ones I've not had any experience with, and it was nerve-racking whenever I first began to look through the code. I distinctly remember the feeling of sliding into a ditch as I cloned the git repository for the application--it just seemed to keep on downloading and the scale was astounding to me! Soon, however, with the help of my team and available documentation, I was able to orient myself somewhat to be able to trace various components in the code base and understand the processes at hand. The general steps I took to get to this point are as follows:

0 - Understand what technologies are being used. What are they used for?

0.1 - Find some good resources on these topics. Repeatedly visit them to learn best practices (asynchronous to the rest of these steps).

1 - Where are the docs for the tools, and the project itself? Bookmark these, because you'll be here often!

2 - Get comfortable with the file structure of the project. What lives where? Know where to find things. Check the docs to see if there is a "project map".

3 - What tools are we using that have the same purposes as other tools I've used before? How are they similar, and how do they differ? (Ex: Rails vs. Django, ActiveRecord smells a lot like SQLAlchemy, etc...)

3.1 - After comparing and contrasting tools, figure out the lingo specific to the new tools. It'll help with searching for answers!

4 - Pick a thing the application already does, preferably related to your first tasks/tickets. Start from the UI, do the thing, and follow method calls and data from there. Make a flowchart! What parts are involved?

4.1 - Get to know diagnostic tools here for use in tracing. We use the React Dev Tools, Redux Dev Tools, and RailsPanel Chrome extensions up front and the byebug gem in the back. Getting comfortable with these will help with debugging later.

5 - Change stuff/break stuff/fix stuff. Try to change existing behavior. Make the application do silly things! Build an understanding of cause and effect.

∞ - Can't figure it out on your own? Ask someone who might know! You'll both end up learning something new!

∞ times ∞ - DOCUMENT EVERYTHING. KEEP YOUR DOCUMENTS ORGANIZED AND CENTRALIZED. YOU **WILL** FORGET. Don't make yourself start all over again whenever you have to revisit a portion of the code later on!

Point #3 is huge because, over your entire development career, as you experience new things it inches up your "jumping off point" for mastering future technologies by allowing you to draw parallels of understanding.

The more you go through these steps, the easier (and more fun) they become! This is certainly true as I go through the various components of my host company's application.

Happy Learnin'!

-MT

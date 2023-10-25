---
title: 'Learning through Open Source'
date: 'September 18, 2023'
description: 'How to learn through Open Source, the right mindset for Open Source'
---

In August 2023 I graduated as an LFX mentee under the CIlium project. It was three months of an astonishing learning curve, I started with only knowing Go programming language and the Basics of Kubernetes and ended up building a Kubernetes Operator using Go. So, I am relevant enough to share a Guide on how to get started with Open Source.

In the next 9 minutes, you will come to know how an individual can learn through open-source programs and build meaningful connections. The Key Takeaway should be, "Open Source is for learning !".

## Getting Started 🏃🏻

### The Mindset

If you are someone trying to get into an Open Source mentorship program, you probably do not have a lot of experience with doing code contributions in large Open Source projects. But that is what open source is all about, it is not somewhere you apply your learnings, it is a place where you **"Learn and Apply".**

I have seen this happen a lot, newcomers in tech, start with a technology, maybe a programming language and follow publically available tutorials/resources. Eventually, they start looking for **"what can I solve with this knowledge"**, I believe it is very counter-intuitive. They might be able to find some issues and solve them, but the ratio between "Time Spent Searching" versus "Time Spent Learning" is bad.

Instead, the best thing to look for is an **Active community, where I can learn and contribute**. Start with Tough tasks, so that you can grow your skillset.

### What to look for in Projects

When searching for Open Source projects as a beginner, look for **Active** Communities. Projects that have **regular code contributions** and there is a good amount of **conversation** going on. Why? because in the initial steps, you will have a lot of doubts and questions, the community should be active enough to get your questions answered. There are a lot of organizations that are good projects but not beginner-friendly because people are busy with their commitments, which is OK, but not the best place for you.

### How to Look for Projects 🕵🏻

A simple Google search with your current skill set should work fine. Just type what programming language and domain you are comfortable with or want to get started, and just hit Google in search of Open Source projects around it, and skim through the listed results!

Another great place for this is the **GSoC** (Google Summer of Code) official website. Search the organizations based on your current skills, maybe start with a programming language and go through them one by one. YES, one by one. This is the place where you should try to invest your time well. Look for **Active** communities as mentioned above and make a list of at least 5 of them based on what you liked the most.

### Getting Involved 🙋🏻

From the top 3-5 organizations you selected, join their public communication channels. They might have a Slack, Discord, Mailing List etc. Introduce yourself there. A simple and concise introduction that may look something like this

*"Hey Everyone! My name is Prateek, I am new here and to Open Source. I have been watching this community for a few days and it is quite active! So I am here to learn and contribute. I have experience in JavaScript and have built a few projects. Looking forward to some directions from the community to get me started".*

After this, someone will most probably direct you toward their *good first Issues*, go ahead! Your learnings have already started. What will you learn here? *"How to use GitHub labels to search for issues".*

### Pick an Issue ⚒️

Now in the list of issues, look for something that you understand a little. There may be many or there might be none. If you understand the issues already, it's a great start! What if you don't understand any issue? That would make you just like me. But see, **"In every issue, there is an opportunity to learn something".** What I did was, pick any *good first issue* at random that I only understood a little. That might be related to writing tests or anything. On the other hand, if you understand nothing, try to pick another organization from the 3-5 you selected and repeat. In the end, you should have picked a *good first issue* related to either documentation or code (I would recommend code because... why not ?)

Pick one and comment on it something like this *"I am new to this project, and since this is a Good First Issue, I want to give it a try".* This is the step where you tell others that you want to work on this issue.

The maintainers will most likely assign you that issue. This is important because there are other contributors like you, in search of Good First Issues, so you need to publically mention that you are working on it so that someone else doesn't get it resolved without knowing that you were working on it.

### Start Learning 🧘🏻

This is the step where you try to picture a solution for the issue, the issue might be tough or it might be fairly easy. But to solve it, you need to understand **what it wants to do**, **how can it be solved** and finally, **write a solution for it.**

Being familiar with **Git** and **GitHub** already is a huge plus, but if not, **Learn**! There are multiple YouTube Tutorials, and online playgrounds to learn Git, you should learn and practice Git through that.

Check if the project has a **CONTRIBUTING.md** file, that contains general guidelines for contributing to their project. Every organization might have different guidelines but the overall procedure is similar. If it does not have that file, I am giving a General Guideline. At this point I expect you to understand what Fork, Clone, Branching, Commit, Push/Pull, Origin, and Upstream these conventions in Git mean.

Fork their Repo. so, if the project is named **cilium/tetragon**, on forking it will become **&lt;your GitHub username&gt;/tetragon**. Then clone this fork in your local machine. Create a new branch, Now any changes you make, be sure to be on the new branch you created.

What if you don't know how to solve it? Give it your best shot and spend some time and effort, Google or you can also use GPT at this point. Why? because here is a rule, **"Before asking for help from someone, do the due diligence to show that you are interested in learning. People don't like to spoon-feed"**. You should know something about the issue so that you can eventually reach them on Slack (or where you contacted them last time) and follow up on your last message with

*"I have picked this good first issue, I tried to understand it on my own. Searched so and so and I think I understand so and so. Please tell me if I am heading in the right direction and correct me if I'm wrong. Also, if someone could tell me what I need to know to better understand this issue, I would be very thankful."*

It is far better than simply asking *"Can someone help me get started with this issue ?"* right? This is how I did it.

Now comes the learning curve I mentioned, If you have done all the initial steps right, you will receive a reply with some directions, you just need to handle the conversation well to finally have some direction to head in and learn because it is impossible to solve an issue without knowing how to solve it. Get that knowledge.

This step cannot be mapped for you because everyone learns differently, use your way. I took almost two weeks to learn what I needed to solve that issue, although the issue was relatively tough for a beginner. The key takeaway is you should have a good conversation with the maintainer so they can direct you towards what to learn to solve that issue, then learn and solve that issue. Simple right? :D

### Create your First Pull Request 👨🏻‍💻

After making changes to your branch, commit them and Push on the new branch you created. Visit your GitHub and the fork you created there. There will be a popup suggesting you to **Create a Pull Request**. Create a Pull Request from the branch of your fork to the Main branch of the main Repo, no need to worry of course because you can change almost anything later.

This is the next step where you will learn a lot. It will probably have less to do with the issue, but more with Good Practices. This is the best kind of mentorship you can get, A senior developer with be reviewing the code you wrote, for FREE! They will list things you can change for better code quality, maybe syntax, unused code, better implementation, just name it!

This is the point where you will most probably be hit with a lot of failed CI checks, you will learn how to solve them which is yet another good code quality check. You will be spending a good amount of your time fixing things on this Pull Request (PR) and implementing suggestions the maintainers make. You will also learn about rebasing with the main branch and resolving merge conflicts. Don't run from them, and ask mentors for help while mentioning that this is the first time you are doing this. You will have to eventually learn it! Learn as much as you can and as fast as you can.

### Merged 🚀

Finally, after changing things for a while, there will be an LGTM comment on your Pull Request, which means, **Looks Good To Me**. This is the point where your Pull Request is ready to be merged with the main code. Resolve all the conversations on the Pull Request and wait for the approval of maintainers. They will merge it with their code. This will mark the end of a Journey out of many.

### What Next? 🤔

Come to a social media platform, X (formerly Twitter), Linkedin or Showwcase and show the entire world that you solved an issue! Write a brief of your Journey, drop the link of your merged Pull Request and maybe tag and thank the Project. **Learning in Public** is yet another very important part of a Developer's journey. Show the world what your approach looks like and you are eager to learn. Even better? write an article about **"Making my first Open Source Contribution"** and share your experiences.

Most importantly, don't stop here, repeat the same process of Getting started with the new skills and knowledge you have. That is how we **"Learn through Open Source"**.

On the side, you can look for Paid Mentorship programs all over the world, like LFX, GSoC and many more. Where you will have a mentor assigned to you, who will guide you through the entire process of solving that issue. How to do that? I will write a blog about how I did it, soon.

### Resources 📝

[**Paid Open Source Internship Programs**](https://www.youtube.com/watch?v=x4hsV_q_YQc&t=341s)

[**Git and GitHub**](https://www.youtube.com/watch?v=RGOj5yH7evk)

[**Advanced Git**](https://www.youtube.com/watch?v=Uszj_k0DGsg&t=8s)
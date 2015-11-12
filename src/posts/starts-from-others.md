---
title: Starts from Others
collection: posts
layout: post.nunj
tags: open source, branch
excerpt: So many go into making this site.
---

Having finally launched this modest blog, I sit back and reflect on how it came together.  Mostly it was a series of small questions I had, searches for options and testing a few.  

## What will generate the site?
Some software that generates static html so I don't have to fuss with extra services for now (database, script, ..). Something popular enough that it's supported and changes with requests. Something open source so I can peak at what's going on and participate when needed. It should be modular so that I can introduce parts I like to it in a pluggable way.

Of course, none of these refinements to the question come at once. Rather, I look for options, give them a go, progress somewhere with them and ...the important bit... get stuck. I then reflect on _why_ I'm stuck and refine my expectations to the question.

Having gone through this iteration a few times, I ended up going with Metalsmith, partly due to my preferences. In addition to being open source, active, it's stewards is a company that makes software that cares about optimizing and keeping things simple.  It's also very modular and plugin friendly.  That's nice when it comes to things like selecting a templating engine.  I can go with my current preference, nunjucks.

It's also friendly to local automation scripts like gulp.  Thanks to a gulp plugin called gulpsmith, I can have all my favorite automation creature comforts I'm familiar with available in a metalsmith pipeline.

There were plenty of other choices that were very close or that I just didn't research as well to go with them.  In the wonderful world of [static site generators](http://www.staticgen.com/), advantages will be missed.

Having said that, the best part of generating this site came in learning how _others_ have stitched parts that I like together. For example, I really want nunjucks. How can I use it? One approache is to just [search github](https://github.com/search) for "nunjucks" &amp;  "metalsmith" and stumble upon projects already using both of these packages.  Or how about a date formatting filter for nunjucks? Googling yielded packages like [here's](https://github.com/techmsi/nunjucks-date). How can i customize my gulp setup using gulpsmith.  Again, searching both via google and github I stumbled upon [this](https://github.com/everydayhero/oxjam-2015) great example from the folks at Everyday Hero.

The same goes for using the software. For example, in templating how do i access the content of my markdown file? It's probably somewhere in the docs. But if it's not immediatly obvious. There's a good chance others might have missed it. Searching the issues of an active project usually yields the result.  For example it's [contents](https://github.com/segmentio/metalsmith/issues/107#issuecomment-69931656).  

Use the source. Nunjucks has amazing filters. Get the [general gist](https://mozilla.github.io/nunjucks/templating.html#filters) of how they work. Then [_look at the source code_](https://github.com/mozilla/nunjucks/blob/master/src/filters.js) and be amazed at what they can do. You don't have to get what the function does.  Just try it out.  I recommend giving `dump` a go on any variable.

So that's just some of what went into bringing this humble post to life the way _I_ wanted to do so.  Let's see what it can help me get across.

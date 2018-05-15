# Lab 5: Blog API + Auth 🌁

## Author 👩🏻‍💻
Sofia Stanescu-Bellu

## Description
This is the API I created for the Redux blog I created in Lab 4. The newly hosted website that points to the API can be found here: [http://fancyreduxblogapi.surge.sh/](http://fancyreduxblogapi.surge.sh/). The URL to API hosted on Heroku can be found here: [https://lab5api.herokuapp.com/](https://lab5api.herokuapp.com/).

#### *Update for Lab 5 pt.2*
For Lab 5 pt.2 I added user authentication to my wonderful Redux blog. The new surge URL for the hosted website with auth integration can be found here: [http://reduxblog-api-auth.surge.sh/](http://reduxblog-api-auth.surge.sh/). The URL to the API with Auth hosted on Heroku can be found here: [https://lab5api-auth.herokuapp.com/](https://lab5api-auth.herokuapp.com/). 

### What worked
I think this lab went relatively smoothly. There weren't any major issues with the API or MongoDB, partly due to SA7 which really helped clarify API and Database concepts for me and partly due to my current DALI project, where I build an API for the REX Real Estate valuation app. Overall, the concepts behind an API seem pretty straightforward for me and I enjoyed working on this lab. Auth also wasn't too difficult. The concepts themselves were easy to grasp and building out the logic made sense. Overall, the pieces of the puzzle fit togther nicely to lead to this final project.🤓

### What didn't work
Some of my structre in my Lab 4 code for displaying an individual post had to be rewritten. I was storing props and state in a way that didn't give me desired output when using my own API and thus I modified a portion of my code to make all the API calls work with my blog. I actually like the new way I'm handling updates to an individual post much better than the old way so while it did take me some time to figure out what the most effective changes would be to get the web app work, the time and effort was worth it in the end! For Auth, the biggest issues were random errors that were difficult to debug. I got a `React.oneChild` error that took an hour to solve, a hash/salt issue with `bcrypt.js`, and some other erors that complicated the dev process. Overall though, Stack Overflow saved the day!

## Extra Credit attempted
None for the API 😢

## Sources
* DALI for my API knowledge.
* [Mongoose CRUD](https://coursework.vschool.io/mongoose-crud/)
* [Mongoose `findOneAndUpdate` doesn't return updated document](https://stackoverflow.com/questions/32811510/mongoose-findoneandupdate-doesnt-return-updated-document)
* [node.bcrypt.js](https://github.com/kelektiv/node.bcrypt.js/)
* [Password Authentication with Mongoose Part 1](https://www.mongodb.com/blog/post/password-authentication-with-mongoose-part-1)
* Shout out to Cristina Lu for the help (via Slack) with the password hashing bug!

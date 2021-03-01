<style type='text/css'>
p {margin: auto auto 1em 2em;}
blockquote {padding-left: 0em; margin: 0em;}
li {margin-bottom: 1em;}
h1, h2, h3 {font-weight: bold;}
details summary {background-color: #ff9; color:#000; display:inline; padding: 0em 0.75em; }
</style>
<!--
-->
# Capstone Proposal #

## The Summary: ##

---
## The Initial Short-Form Write-Up: ##
**Brief Description:**\
Private journaling/review app — allow user to rate and write honest reviews for products and/or restaurants for their own future reference, without having to worry about The Algorithm™ getting someone fired.\
 \
**Tech Stack:**\
ReactJS; CSS; My Tears\
 \
**MVP Features (1-3):**\
Create and write reviews w/ date, rating, name of product/restaurant (and owning company, if applicable), what Kind of Thing it is; Search by name/Kind of Thing, for future reference; Allow multiple reviews for the same Thing\
 \
**Stretch Goals (3+):**\
Implement functionality for both Products and Restaurants (tangible good vs experience @ location); Incorporate Barcode/UPC lookup (for products) to generate base product information; Enable exporting/importing data to allow friends to import their friends' reviews; Add ability to write supplementary reviews under restaurants for individual dishes, separate from overall rating"

---
## The Letter Proposal: ##
<details><summary>[ click to toggle visibility ] </summary>
<h3>Name of Student:</h3> 
<p>Shannon Grantski</p>

<h3>Name of Project:</h3> 
<p><em>Memento More-Eat</em> <br />
(Working Title. Not at all final. )</p>

<h3>Project's Purpose or Goal:</h3>
<p>This application will store a user's reviews and ratings for restaurants they visit: no aggregate feedback, no sponsored products, no guilt.

While there are a number of services that allow users to write reviews for X or Y restaurant, these can be difficult to reference later, and—due to their public nature—encourage users to polarize their opinions into blunt pass/fails. 

With this app, a user is instead writing to their own future self: to note dishes they've tried and didn't like, to make note of a server who has treated them well, to warn them away from locations they just don't like.</p>

<h3>The absolute minimum features the project requires to meet this purpose or goal:</h3>
<ol>
<li>Ability to create new entries with all base data needed for future reference: name and location of restaurant, date of visit, dishes tried, with space for long-form reviews.

<li> Implement a custom, "feelings-based" rating option to encourage more useful feedback. Rather than using a numeric satisfaction or N-out-of-N star system, users would rate their experience by mood-based emoji — for instance, maybe 🤩 ('stars in eyes' emoji) for a place they would be excited to go to again, 😒 (dissatisfied, or 'not amused' emoji) for "I'll go if someone else is buying"-type ratings, and so forth.

<li> Allow user to add multiple visits, entrees, or even locations to a given overall "restaurant." This would allow them to keep track of which dishes they have and haven't liked, or track if their overall experiences have gotten better or worse over time.
</ol>

<h3>The tools, frameworks, libraries, APIs, modules and/or other resources (whatever is specific to your track, and your language) you will use to create this MVP:</h3>
<ol>
<li> Base project will be written in React. It is possible the project may transition to React Native, as this may allow better production of a mobile experience. Front-end customization will be in CSS, and may utilize Bootstrap libraries for modular content.

<li> The database used for this software is expected to be Firebase; however, as this is not yet a fully-examined solution, other options such as Firestore, or WatermelonDB.\
\
While other technologies or outsourced data may be utilized for stretch goal functionality, these are the base necessities for this project's MVP.
</ol>

<h3>If you finish developing the minimum viable product (MVP) with time to spare, describe what features you will work on next:</h3>
<ol>
<li> Ability to export and import data for user backup. A record of this type should last longer than the lifespan of the user's device.

<li> Ability to pull standardized data — such as address, hours of operation, specific name — about a restaurant from an API source. Source may be an entity such as FourSquare, Google, or Yelp.

<li> If restaurant journal is fully functional, create separate review library for grocery store food items, with similar information structure.\
\
In this case, "restaurant" would instead be brand, dish the specific product, and so forth. Similar to the restaurant diary, this would allow users to reference products they have tried and liked — or hated — more easily.

<li> For product journal, if all other components are complete and application is built for mobile, implement camera functionality to scan and look up product by UPC barcode, to allow more specific and more effortless product creation.
</ol>

<h3>The additional tools, frameworks, libraries, APIs, or other resources these additional features will require:</h3>
<ol>
<li> Data backup would involve the saving and converting database information into a more accessible and transferable filetype, such as .csv, .xlsx, or .ods. The technology needed for this will depend on the final database type selected.

<li> Restaurant location data from API would require the application's ability to go online and make API calls; presently, due to familiarity with the product, the FourSquare API is known to contain the information this application's perceived implementation would require.

<li> Barcode scanning for the product library is a "pie in the sky" goal for this project; while preliminary research has been done to see what options are available, many products are built at too large an investment cost for this project, or require the use of, "we'll code your application for you" software, which would not be feasible for this product. Further research would be necessary.
</ol>

<h3>Anything else you'd like your instructor to know:</h3>
<p>Do you know how hard it is to come up with a punny title that hasn't been used for anything else before?</p></details>

---
## The Instructor Response: ##
<details open><summary>[ click to toggle visibility ] </summary>
<blockquote><p> Hey! I do believe it is hard to come up with a punny title that hasn't been used before. I believe in you!! </p>

<p>This is a great proposal. It's detailed and has a lot of stretch goals. I could see writing a backend in NoSQL or SQL. I think using firestore will reinforce the tooling (fresh in your mind) that you've learned in this recent module and that it will make an excellent project to add to you resume. That said, you are absolutely welcome to pick any NoSQL database of your choice, just keep in mind that there is a learning curve and each technology has their own way of interacting with the database (in contrast to SQL databases which all use Structured Query Language).</p>
<p>I don't suggest working with React Native (for mobile applications) unless that is the core of your MVP and you pare down some of the items that you have currently listed for your MVP. As always, a small MVP with many stretch goals is a good way to tackle your capstone project.</p>
<p>Well done with this proposal!</p></blockquote></details>

---

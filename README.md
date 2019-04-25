## Strapi with Gatsby Video Tutorial Series

From the [Gatsby / Strapi Video Tutorial Series](https://youtu.be/It4PRFJJaF0).

-   Code examples for the folder "cms". `Path: ./tutorial/cms` <- **Strapi Project**

-   Code examples for the folder "blog". `Path: ./tutorial/blog`. <- **Gatsby Project**

## Tutorial Branch Index

Each video has a Branch. Each branch contains the code at the **END** of the video. If there was no code changes within video. This will be noted.

1. [Introduction Video](https://youtu.be/It4PRFJJaF0) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/1-introduction)
2. [Installation Video](https://youtu.be/4QnDgxtWqOI) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/2-installation)
3. [Content Types Video](https://youtu.be/cPEkpfik6X4) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/3-content-types)
4. [Roles and Permissions Video](https://youtu.be/1jev6QRwcSo) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/4-roles-and-permissions)
5. [Setting up Gatsby Video](https://youtu.be/SnrEEW1uTlU) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/5-setting-up-gatsby)
6. [Create our Index Page Video](https://youtu.be/UaFgCubwRD8) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/6-create-our-index-page)
7. [Create the Article Page View Video](https://youtu.be/ub-uB17ufe0) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/7-create-the-article-page-view)

---

### 7. Create the Article page view

_Important links from Video:_

-   [Gatsby Project Structure](https://www.gatsbyjs.org/docs/gatsby-project-structure/#gatsby-project-structure)

#### Article view

Our website now starts looking like a blog which is a good thing. However, an important part is still missing: the article’s details page.

Let's create the template, containing a specific GraphQL request and defining the content displayed:

In order to do this, first create a folder called `templates` in your `src` directory. Then within `templates` create a file called `article.js`.

_Path: `blog/src/templates/article.js`_

<script src="https://gist.github.com/strapi-codesnipets/9735a941cdbf1947625c66c19e420e7f.js"></script>

That looks fine, but at this point, Gatsby does not know when this template should be displayed. Each article needs a specific URL. So, we are going to inform Gatsby about the new URLs we need thanks to the [`createPage` function](https://www.gatsbyjs.org/docs/creating-and-modifying-pages).

First, we are going to code a new function called `makeRequest` to execute the GraphQL request. Then, we export a function named `createPages` in which we get the list of articles and create a page for each of them. Here is the result:

_Path: `blog/gatsby-node.js`_

<script src="https://gist.github.com/strapi-codesnipets/c9c4212fcef1af5801195b9670c67dee.js"></script>

Restart the Gatsby server.

From now on, you should be able to visit the detail page by clicking on URLs displayed on the homepage.

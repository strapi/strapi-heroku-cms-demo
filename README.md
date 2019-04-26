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
8. [Create the Article Page View Video](https://youtu.be/mPyJrjD3oU0) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/8-gatsby-images-and-author-page)

---

### 8. Gatsby Images and author page

_Important links from Video:_

-   [Gatsby Image Plugin](https://www.gatsbyjs.org/packages/gatsby-image/)
-   [Gatsby Image Demo](https://using-gatsby-image.gatsbyjs.org/)
-   [Gatsby Code examples for Image Plugin](https://github.com/gatsbyjs/gatsby/tree/master/examples/using-gatsby-image/src/pages)

#### Author view

Articles are written by authors. They deserve a dedicated page.

The processes for creating author views and article pages are very similar. First, create a new file in our `templates` folder called, `author.js`. Add the code below to this file.

_Path: `blog/src/templates/author.js`_

<script src="https://gist.github.com/strapi-codesnipets/7a32216a4ccda60f3dc229294b19b444.js"></script>

Second, we update the `gatsby-node.js` file to create the URLs (with the below code):

_Path: `blog/gatsby-node.js`_

<script src="https://gist.github.com/strapi-codesnipets/d7fd2b3a1b24452acfe5b45854157780.js"></script>

Finally, restart the server and visit the author page from the article view's links.

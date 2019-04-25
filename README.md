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
6. [Create our Index Page Video](https://youtu.be/UaFgCubwRD8) - [Branch](#)

---

### 6. Create our Index Page

_Important links from Video:_

-   [The graphQL interface from your local host](http://localhost:8000/___graphql)

#### Articles list

First, we want to display the list of articles. To do so, add the following content in the existing home page file:

_Path: `blog/src/pages/index.js`_

<script src="https://gist.github.com/strapi-codesnipets/b539c29f405ed2cc202242ceb3c861df.js"></script>

##### What are we doing here?

At the end of the file, we export `pageQuery`, a GraphQL query which requests the entire list of articles. As you can see, we require only the `id`, `title` and `content` fields, thanks to the precise GraphQL query language.

Then, we pass the `{ data }` destructured object as parameter of `IndexPage` and loop on its `allStrapiArticle` object to display the data.

##### Tip: generate your GraphQL query in seconds!

Gatsby includes a useful GraphiQL interface. It makes GraphQL queries development way easier and intuitive. [Take look at it](http://localhost:8000/___graphql) and try to create some queries.

##### Adding images

To add images, we will need to import `Img` from package `gatsby-image` installed by default. Replace the content of `blog/src/pages/index.js` with the following :

Path: `blog/src/pages/index.js`

<script src="https://gist.github.com/strapi-codesnipets/9ddadb5e03de3e1e543b82a44b4c7695.js"></script>

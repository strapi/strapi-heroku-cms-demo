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

---

### 5. Setting up Gatsby

_Important links from Video:_

-   [Official Gatsby Documentation](https://www.gatsbyjs.org/docs/)
-   [Gatsby PWA support](https://gatsby.app/offline)

#### Install Gatsby

First, install Gatsby CLI:

```
npm install --global gatsby-cli
```

#### Generate a Gatsby project

In the folder `tutorial` that you previously created, generate your brand new blog:

```
gatsby new blog
```

#### Start in development mode

Enter in your project's folder:

```
cd blog
```

Start the server:

```
gatsby develop
```

At this point, you should already be able to get access to your Gatsby website at this address: http://localhost:8000.

#### Install the Strapi source plugin

When you manage a static website, your data can come from different sources: Markdown files, CSV files, a WordPress website (using the JSON REST API plugin), etc.

Gatsby understands this pretty well. So its creators decided to build a specific and independent layer: the data layer. This entire system is strongly powered by [GraphQL](http://graphql.org).

To connect Gatsby to a new source of data, you have to [develop a new source plugin](https://www.gatsbyjs.org/docs/create-source-plugin). Fortunately, [several source plugins already exist](https://www.gatsbyjs.org/docs/plugins), so one of them should fill your needs.

In this example, we are using Strapi. Obviously, we are going to need a source plugin for Strapi APIs. Good news: [we built it for you](https://github.com/strapi/gatsby-source-strapi)!

Let's install it:

```
npm install --save gatsby-source-strapi
```

This plugin needs to be configured. Replace the content of `gatsby-config.js` with:

_Path: `blog/gatsby-config.js`_

<script src="https://gist.github.com/strapi-codesnipets/d5cf303382d7dfbd7f61b005028ef143.js"></script>

#### Allow access to User

Remember, when we created the content type we created a relation between User and Articles.

Like `Article`,`User`, [link](http://localhost:1337/articles) is likewise, by default, restricted. But Gatsby needs access, so to allow access, visit the [Auth and Permissions section for Public role](http://localhost:1337/admin/plugins/users-permissions/roles), click on `Public`, select the `User - find` action and save. After saving; Gatsby will have access to all the necessary content types managed by Strapi (for this tutorial).

Restart Strapi from the command line, inside the `cms` folder - first by `Ctrl`+ `C` to stop the server; and then typing `strapi start`, to restart it.

Next, restart the server to ensure Gatsby registers these updates.

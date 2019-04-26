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

-   8B. [Specify Node Version](https://youtu.be/5uTR1uOZZQo) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/8b-specify-node-version)

### 8B. Specify Node Version

_Important links from Video:_

-   [Nodejs 12 Release Notes](https://nodejs.org/en/blog/release/v12.0.0/)
-   [Heroku Docs Deploying Nodejs](https://devcenter.heroku.com/articles/deploying-nodejs)

On April 23, 2019 Node v12.0.0 was released. There is an incompatibility or bug that is present regarding SQLite.

Therefore, make the following change to your `package.json` file found in your _Strapi_ project root:

_Path: `cms/package.json`_

Change the `engines`object from:

```json
  "engines": {
    "node": ">= 10.0.0",
    "npm": ">= 6.0.0"
  },
```

To:

```json
  "engines": {
    "node": "10.x",
    "npm": ">= 6.0.0"
  },
```

After changing your file and saving it, you may simply continue to the next section.

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

9. [Deploy to Heroku](https://youtu.be/M1rEwMXK2z4) - [Branch](#)

### 9. Deploy to Heroku

_Important links from Video:_

-   [Create Free Account with Heroku](https://signup.heroku.com/login)
-   [Strapi Documentation - Deploying to Heroku](https://strapi.io/documentation/3.x.x/guides/deployment.html#heroku)
-   [Heroku Postgress Add-on](https://elements.heroku.com/addons/heroku-postgresql)
-   [Heroku CLI Docmentation](https://devcenter.heroku.com/articles/heroku-cli)

We will deploy Strapi to Heroku. You will need a [free account with Heroku](https://signup.heroku.com/login).

Next install the [Heroku CLI](https://strapi.io/documentation/3.x.x/guides/deployment.html#_1-heroku-cli-installation).

These commands are to [login to Heroku](https://strapi.io/documentation/3.x.x/guides/deployment.html#_2-login-to-heroku-from-your-cli) and to [create a new Strapi Project](https://strapi.io/documentation/3.x.x/guides/deployment.html#_3-create-a-new-project-or-use-an-existing-one).

`Path: ./`

```
heroku login
```

Open your editor and add `package-lock.json` to the `.gitignore` file.

Next, you will need to init Git and [commit your project](https://strapi.io/documentation/3.x.x/guides/deployment.html#_5-init-a-git-repository-and-commit-your-project)

```
cd my-project
git init
git add .
git commit -am "Initial Commit"
```

Create a Heroku Project.

```
heroku create
```

You can set-up different databases to work with Strapi. Here are step-by-step instructions to [set-up a PostgreSQL](https://strapi.io/documentation/3.x.x/guides/deployment.html#heroku-postgresql) or a [MongoDB](https://strapi.io/documentation/3.x.x/guides/deployment.html#heroku-mongodb) database. Follow the steps in the links.

Lastly, [commit](https://strapi.io/documentation/3.x.x/guides/deployment.html#_8-commit-your-changes), [push to heroku](https://strapi.io/documentation/3.x.x/guides/deployment.html#_9-deploy), and open your project.

```
git commit -am "Update database config"
git push heroku master
heroku open
```

If your browser window open at the Heroku URL, congratulations. If not, please review [the documentation](https://strapi.io/documentation/3.x.x/guides/deployment.html#heroku) and [the video](https://www.youtube.com/watch?v=M1rEwMXK2z4) for additional details.

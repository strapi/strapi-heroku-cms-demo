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

-   8B. [Specify Node Version Video](https://youtu.be/5uTR1uOZZQo) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/8b-specify-node-version)

9. [Deploy to Heroku Video](https://youtu.be/M1rEwMXK2z4) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/9-deploy-to-heroku)

-   9A. [Configure Again Permissions](https://youtu.be/e_Edsv49BJ0) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/9a-configure-again-permissions)

10. [Set-up Cloudinary & Netlify Predeploy Video](https://youtu.be/n-_CzffU0xA) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/10-setup-cloudinary-and-netlify-predeploy)

11. [Deploy Gatgsby to Netlify Video](https://youtu.be/rzR3yn9Ej3o) - [Branch](#)

### 11. Deploy Gatsby to Netlify

_Important links from Video:_

-   [Create Free Account with Netlify](https://app.netlify.com/signup)
-   [Netlify CLI Documentation](https://www.netlify.com/docs/cli/)
-   [Video Demo URL](https://tutorial-netlify-demo.netlify.com/)
-   [This Video Tutorial GitHub DEMO](https://github.com/davidkartuzinski/tutorial-netlify-demo)
-   [Long-term Netlify Demo](https://strapi-gatsby-postgresql-demo.netlify.com/)
-   [Long-term Netlify Demo GitHub](https://github.com/davidkartuzinski/strapi-gatsby-postgresql-demo)

You are going to need to prepare a few things:

-   Sign-up for a [Free Account with Netlify](https://app.netlify.com/signup)
-   Create a [new GitHub Repo](https://help.github.com/en/articles/create-a-repo) where your Gatsby site will live and be updated from.

Next, the **Gatsby** part of your project, needs to be pushed to your new GitHub repo:

`Path: ./blog/`

```
git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:YOUR-NAME/YOUR-NEW-EMPTY-REPO.git
git push -u origin master
```

After setting up your Gatsby site on GitHub for deployment to Netlify, we need to edit the `gatsby-config.js`.

Locate `gatsby-source-strapi` plugin object and replace it with the following code:

`Path: ./blog/gatsby-config.js`

```js
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://YOUR-APP-URL.herokuapp.com"
          : "http://localhost:1337",
        contentTypes: [`article`, `user`],
        queryLimit: 1000,
      },
    },

```

Open your `.gitignore` file and add `package-lock.json` to the ignore list.

`Path: ./.gitignore`

```
...

# Yarn
yarn-error.log
.pnp/
.pnp.js
# Yarn Integrity file
.yarn-integrity

package-lock.json
```

Next, you need to `git add`, `git commit` and `git push` your new changes. From your command line:

`Path: ./blog/`

```
git add .
git commit -m "Update config-gatsby.js and .gitignore file"
git push
```

In order to easily push your Gatsby site to Netlify, you have to install and login to Netlify using the `Netlify CLI`:

From your command line:

```
npm install netlify-cli -g
netlify login
```

Press the `Authorize` button and close the tab or window.

Netlify is now set-up on your computer. It's time to initialize your project (Please pay close attention to the `build command` and `directory`):

`Path: ./blog/`

```
netlify init
? What would you like to do? + Create & configure a new site
? Site name (optional):
? Team: YOUR NAME HERE

Site Created

Admin url: https://app.netlify.com/sites/SITE-NAME
Site url:  https://SITE-NAME.netlify.com
Site ID: YOUR-UNIQUE-SITE-ID

? Your build command (hugo/yarn run build/etc): gatsby build
? Directory to deploy (blank for current dir): public
? No netlify.toml detected. Would you like to create one with these build settings? Yes

Creating Netlify Github Notification Hooks...
Netlify Notification Hooks configured!

Netlify CI/CD Configured!

The site is now configured to automatically deploy from github branches & pull requests

Next steps:

  git push       Push to your git repository to trigger new site builds
  netlify open   Open the Netlify adlin URL of your site

```

A last `git add`, `git commit` and `git push` are needed in order to finish the connection between your github and Netlify. Then open your `Netlify Deployment Console`.

From your command line:

`Path: ./blog/`

```
git add .
git commit -m "netlify config settings files"
git push
netlify open
```

After Netlify finishes deploying your site, you can click the green site link to see it.

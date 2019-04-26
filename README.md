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

10. [Set-up Cloudinary & Netlify Predeploy Video](https://youtu.be/n-_CzffU0xA) - [Branch](#)

### 10. Set-up Cloudinary & Netlify Predeploy

_Important links from Video:_

-   [Create Free Account with Cloudinary](https://cloudinary.com/signup)

DEMO Urls:

-   [Strapi Welcome on Heroku](https://strapi-gatsby-postgresql-demo.herokuapp.com/)
-   [Strapi Admin Login on Heroku](https://strapi-gatsby-postgresql-demo.herokuapp.com/admin/)

API demos:

-   [All Articles API](https://strapi-gatsby-postgresql-demo.herokuapp.com/articles)
-   [One Article API](https://strapi-gatsby-postgresql-demo.herokuapp.com/articles/1)

At this point, when you upload images to Strapi on Heroku, the images are not permanently saved. The reason is because they are saved to a temporary cache which gets deleted whenever Heroku goes to sleep.

Therefore, you will want to use a 3rd party service to upload to and then serve your images from. This tutorial continues with [Cloudinary](https://cloudinary.com/).

-   First, [create a Free Account with Cloudinary](https://cloudinary.com/signup)
-   Use NPM to install the Strapi Cloudinary plugin, from your command line:

`Path: ./`

```
cd plugins/upload
```

Next, install the plugin with npm, commit and push your changes to Heroku:

`Path: ./plugins/upload`

```
npm i --save strapi-provider-upload-cloudinary
git add .
git commit -m "Installed Cloudinary Plugin"
git push heroku master
```

Wait for Heroku to install the packages and to restart the server instance.

From your Cloudinary console, you will next enter your Cloudinary credentials so Strapi can properly send your images:

From the Strapi Dashboard, click on `Plugins` and then for `FILES UPLOAD` click the `cog` icon.

Select `Cloudinary` in the `Providers` dropdown and enter in your credentials:

-   Cloud name
-   API Key
-   API Secret

Then save your changes in the `Upload - Settings`.

Delete from `Files Upload` the references to previously uploaded images.

Now, for each content-type containing images, upload again the images that corresponds to your existing content:

From now on, new content will automatically have their images saved and served from Cloudinary.

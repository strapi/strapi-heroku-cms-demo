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

### 9A. Configure again Permissions

You have to allow access through the API under `Roles & Permission` from your Strapi Dashboard.

You have already set these permissions on your local Dev environment. But these settings need to be set again for Heroku as these settings are saved to a database and the Heroku PostgreSQL database is different than your local Dev environment.

-   Login to your Strapi Dashboard, from `https://your-heroku-url.herokuapp.com/admin`.
-   Go to `Roles and Permission` and then click on `Public`. Set your `Article` permissions so `find` and `findone` are checked.

-   Within `Roles and Permission` and `Public`, scroll to and click on `USERS-PERMISSIONS`, and set `User` permissions `find` to checked.

-   Save these changes

You have now allowed access through the API to `Articles`, `Article` and `Users`.

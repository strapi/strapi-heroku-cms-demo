## Strapi with Gatsby Video Tutorial Series

From the [Gatsby / Strapi Video Tutorial Series](https://youtu.be/It4PRFJJaF0).

-   Code examples for the folder "cms". `Path: ./tutorial/cms` <- **Strapi Project**

-   Code examples for the folder "blog". `Path: ./tutorial/blog`. <- **Gatsby Project**

## Instructions for installation this repo locally:

Note: Videos 1 - 4 only contain the Strapi install. From Videos 5 and forward, you still **must** first install _Strapi_ and **also** install _Gatsby_.

### Install this Strapi & Gatsby Project locally

From your command line, issue the following commands in order to install **_this Strapi and Gatsby project_**:

Path: `./my-project/`

**These commands install the Strapi part of the Project**

```
git clone git@github.com:strapi/strapi-heroku-cms-demo.git
cd strapi-heroku-cms-demo
cd cms
npm install
```

**These commands install the Gatsby part of the Project**

```
cd ..
cd blog
npm install
```

### Start Strapi & Gatsby locally

Once the are both installed, you start _Strapi_ in one command line window:

Path: `./cms/`

```
strapi start
```

Note: You will need to create a new Admin user. Then you will need to add content to the `Article` content type. Before starting Gatsby, you will then need to adjust the `Roles and Permissions` as per the [video](https://youtu.be/1jev6QRwcSo).

And then after Strapi has started **and after you have added content** and set the **Roles and Permissions**, then you can issue the `gatsby develop` from a different command line window:

Path: `./blog/`

```
gatsby develop
```

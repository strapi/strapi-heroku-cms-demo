## Strapi with Gatsby Video Tutorial Series

This REPO contains the latest example code from the [Gatsby / Strapi Video Tutorial Series](https://youtu.be/It4PRFJJaF0). You can review the code directly, within the following directories.

**NOTE:** This is the **BETA** version of Strapi, **ALPHA** is not being maintained.

-   Code examples for the folder "cms". `Path: ./tutorial/cms` <- **Strapi Project**

-   Code examples for the folder "blog". `Path: ./tutorial/blog`. <- **Gatsby Project**

## Instructions for cloning and using this repo locally

Create a folder, e.g. `./my-project` and `git clone` this repo.

```bash
cd my-project
git clone https://github.com/strapi/strapi-heroku-cms-demo.git
```

### Install this Strapi & Gatsby Project locally

From your command line, issue the following commands in order to install **_this Strapi and Gatsby project_**:

Path: `./my-project/`

### Install the Strapi part of the Project

```
git clone git@github.com:strapi/strapi-heroku-cms-demo.git
cd strapi-heroku-cms-demo
cd cms
npm install
strapi build
```

Once installed, you will need to do a few steps to replicate the final production environment (this steps are done also when you first upload and install to Heroku or other production environment):

-   Create a User: Under CONTENT TYPES -> **Users** - add a user.
-   Set WYIWYG to Visible: Under PLUGINS -> **Content Manager** -> Article -> [Tab] Edit View(Settings) -> Click on `content` -> Scroll down and toggle **Display as WYSIWYG** to `ON`.
-   Allow API Access: Under PLUGINS -> **Roles & Permissions** -> Public -> Article (check **find** and **findone**), User (check **find** and **findone**)
-   Enter your Cloudinary Credentials: Under PLUGINS -> **FILES UPLOAD - COGWHEEL**
-   Add Content: Under CONTENT TYPES -> **Articles** -> add content.

Test you [local API routes](http://localhost:1337/articles)

#### Upload to Heroku

You will need to have a Heroku account, and the Heroku CLI installed. [Heroku install instructions](https://strapi.io/documentation/3.0.0-beta.x/guides/deployment.html#heroku)

Do these steps to upload your Strapi project to Heroku:

-   Login to Heroku: `heroku login`
-   Initilize Git:

```
git init
git add .
git commit -am "Initial Commit"
```

-   Create a Heroku project (**with a unique name for the URL**)

```
heroku create my-uniquely-named-strapi-project
```

-   setup database configuration (**DO NOT CUT AND PASTE - USE OWN SETTINGS**)

```
heroku addons:create heroku-postgresql:hobby-dev
heroku config
heroku config:set DATABASE_USERNAME=example
heroku config:set DATABASE_PASSWORD=example
heroku config:set DATABASE_HOST=example.compute-2.amazonaws.com
heroku config:set DATABASE_PORT=5432
heroku config:set DATABASE_NAME=example
```

-   Push project to Heroku.

```
git push heroku master
```

-   Open your app project, and redo these steps to match your **Development Environment**:

-   Create a User: Under CONTENT TYPES -> **Users** - add a user.
-   Set WYIWYG to Visible: Under PLUGINS -> **Content Manager** -> Article -> [Tab] Edit View(Settings) -> Click on `content` -> Scroll down and toggle **Display as WYSIWYG** to `ON`.
-   Allow API Access: Under PLUGINS -> **Roles & Permissions** -> Public -> Article (check **find** and **findone**), User (check **find** and **findone**)
-   Enter your Cloudinary Credentials: Under PLUGINS -> **FILES UPLOAD - COGWHEEL**
-   Add Content: Under CONTENT TYPES -> **Articles** -> add content.

After you add content, you can go ahead and follow the next steps to create the Gatsby part of the project.

### Install the Gatsby part of the Project

Open a new tab in your command line, and navigate to `./strapi-heroku-cms-demo/blog/`:

`Path: ./strapi-heroku-cms-demo/blog`

```
npm install
gatsby develop
```

You can now check to see if Gatsby is running [http://localhost:8000](http://localhost:8000).

#### Push the Gatsby Project to a separate GitHub repo

You will need to create a separate repo to push just the Gatsby part of the project and which will link to Netlify.

```
git init
git add .
git commit -m "first commit"
git remote add origin git@github.com:YOUR-NAME/YOUR-NEW-EMPTY-REPO.git
git push -u origin master
```

#### Modify the Gatsby-Config file

Locate this code and replace the URL to match the URL from your Heroku install:

`Path: ./blog/gatsby-config.js`

```
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

#### Configure Netlfiy

-   Login to Netlify with `netlify login`.

You will need to link netlify to this repo. Use the **netlify init** to do so.

```
netlify init
```

After configuring Netlify (see tutorial), you need to commit all the changes:

Commit these changes:

```
git add .
git commit -m "git commit -m "netlify config settings files"
git push
netlify open
```

#### Set-up the Netlify WebHook URL

The last step is to set-up the Netlify Webhook URL so it updates:

-   From your App, go to: Settings -> Build & deploy -> Continuous deployment -> Build hooks

    -   Click Add build hook
    -   Give your app a build hook name, e.g. strapiUpdate
    -   Save it and then copy the issued URL to the clipboard

-   Change the **staticWebsiteBuildURL** variable found in `custom.json`.

These changes occur on your **Strapi Project**.

`Path: ./cms/config/environments/production/custom.json`

Replace the link with your link for the **staticWebsiteBuildURL**

Commit these changes:

```
git add .
git commit -m "Add webhook support"
git push heroku master
```

You are now ready to test and play with this installation. You can build or change this.

**NOTE:** You have NOT created a Repo for the Strapi part of the project, but this is highly recommended.

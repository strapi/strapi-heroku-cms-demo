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

11. [Deploy Gatgsby to Netlify Video](https://youtu.be/rzR3yn9Ej3o) - [Branch](https://github.com/strapi/strapi-heroku-cms-demo/tree/11-deploy-gatsby-to-netlify)

12. [Webhooks with Gatsby & Strapi Video](https://youtu.be/u5NQd8ruPl4) - [Branch](#)

### 12. Webhooks with Gatsby & Strapi

_Important links from Video:_

-   [Final Netlify Demo URL](https://strapi-gatsby-postgresql-demo.netlify.com/)
-   [Final Heroku Demo URL](https://strapi-gatsby-postgresql-demo.herokuapp.com/)
-   [Netlify Webhooks Doc](https://www.netlify.com/docs/webhooks/)
-   [Strapi Webhooks Doc](https://strapi.io/documentation/3.x.x/guides/webhooks.html)
-   [GitHub for Netlify hosted Demo](https://github.com/davidkartuzinski/strapi-gatsby-postgresql-demo)

#### Create and Copy a Netlify WebHook URL

1. Login into your [Netlify Login](https://app.netlify.com/)
2. From your App, go to: Settings -> Build & deploy -> Continuous deployment -> Build hooks

-   Click `Add build hook`
-   Give your app a `build hook name`, e.g. `strapiUpdate`
-   Save it and then copy the issued URL to the clipboard.

#### Add a Variable to your `custom.json` file

You will need to create a variable for the webhook. We will use this variable to update any content-type and their models. If the webhook changes, you will only need to change this variable.

`Path: ./cms/config/environments/production/custom.json`

Add the following line:

```json
  "staticWebsiteBuildURL": "https://api.netlify.com/build_hooks/5cc30b_YOUR_CUSTOM_URL_2a83"
```

And it should look like this after:

```json
{
	"myCustomConfiguration": "This configuration is accessible through strapi.config.environments.production.myCustomConfiguration",
	"staticWebsiteBuildURL": "https://api.netlify.com/build_hooks/5cc30b_YOUR_CUSTOM_URL_2a83"
}
```

#### Modify the model for the `Article` Content Type

The following is the new `Article.js` file. This file now has additional code that use the variable withe the netlify webhook. Whenever this Content Type is creates a new instance, updates one or deletes one of the content types, it will fire a `Post` request to Netlify using the Webhook URL.

`Path: ./cms/api/article/models/Article.js`

```js
"use strict";

const axios = require("axios");

/**
 * Lifecycle callbacks for the `Article` model.
 */

module.exports = {
	// Before saving a value.
	// Fired before an `insert` or `update` query.
	// beforeSave: async (model, attrs, options) => {},

	// After saving a value.
	// Fired after an `insert` or `update` query.
	// afterSave: async (model, response, options) => {},

	// Before fetching a value.
	// Fired before a `fetch` operation.
	// beforeFetch: async (model, columns, options) => {},

	// After fetching a value.
	// Fired after a `fetch` operation.
	// afterFetch: async (model, response, options) => {},

	// Before fetching all values.
	// Fired before a `fetchAll` operation.
	// beforeFetchAll: async (model, columns, options) => {},

	// After fetching all values.
	// Fired after a `fetchAll` operation.
	// afterFetchAll: async (model, response, options) => {},

	// Before creating a value.
	// Fired before an `insert` query.
	// beforeCreate: async (model, attrs, options) => {},

	// After creating a value.
	// Fired after an `insert` query.
	// afterCreate: async (model, attrs, options) => {
	afterCreate: async entry => {
		axios
			.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
			.catch(() => {
				// Ignore
			});
	},

	// Before updating a value.
	// Fired before an `update` query.
	// beforeUpdate: async (model, attrs, options) => {},

	// After updating a value.
	// Fired after an `update` query.
	// afterUpdate: async (model, attrs, options) => {
	afterUpdate: async entry => {
		axios
			.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
			.catch(() => {
				// Ignore
			});
	},

	// Before destroying a value.
	// Fired before a `delete` query.
	// beforeDestroy: async (model, attrs, options) => {},

	// After destroying a value.
	// Fired after a `delete` query.
	// afterDestroy: async (model, attrs, options) => {
	afterDestroy: async entry => {
		axios
			.post(strapi.config.currentEnvironment.staticWebsiteBuildURL, entry)
			.catch(() => {
				// Ignore
			});
	},
};
```

#### Install Axios

Your new code changes require the installation of an npm package called, `axios`.

From you command line:

`Path: ./cms`

```
npm i axios --save
```

#### Commit and Push to Heroku and Update Netlify

You will now need to `add`, `commit` and `push` your changes in the project. These changes were made in the Strapi files. Doing this will automatically fire a `Post` request to Netlify, which will update Netlify automatically.

From your command line:

`Path: ./cms/`

```
git add .
git commit -m “added webhook for netlify”
heroku login
git push heroku master
```

#### Webhooks configured

After Netlify has had a moment to issue the command to rebuild and has done so, you will be able to login into your Heroku based Strapi project and make updates which automatically update Netlify.

#### Additional Content Types

In this example tutorial we created one Content Type called, `article`. You will need to update the model file (as above) for every additional Content Type you create for your project AND which should trigger a `Gatsby rebuild`.

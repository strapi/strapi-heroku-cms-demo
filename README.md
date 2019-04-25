## Strapi with Gatsby Video Tutorial Series

From the [Gatsby / Strapi Video Tutorial Series](https://youtu.be/It4PRFJJaF0).

-   Code examples for the folder "cms". `Path: ./tutorial/cms` <- **Strapi Project**

-   Code examples for the folder "blog". `Path: ./tutorial/blog`. <- **Gatsby Project**

## Tutorial Branch Index

Each video has a Branch. Each branch contains the code at the **END** of the video. If there was no code changes within video. This will be noted.

1. [Introduction Video](https://youtu.be/It4PRFJJaF0) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/1-introduction)
2. [Installation Video](https://youtu.be/4QnDgxtWqOI) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/2-installation)
3. [Content Types Video](https://youtu.be/cPEkpfik6X4) - [Branch](#)

---

### 3. Content Types

_Important links from Video:_

-   [Sample Content for Demo](https://github.com/strapi/strapi-examples/tree/master/gatsby-strapi-tutorial/content-for-tutorial)

#### Create a Content Type

Strapi CMS projects are based on a data structure called Content Types (equivalent to models in frameworks and Content Types in Wordpress).

[Create a Content Type](http://localhost:1337/admin/plugins/content-type-builder/) named `article` with four fields:

-   `title` (type `string`)
-   `content` (type `text`)
-   `image` (type `media`)
-   `author` (type `relation`, many articles to one user)

After creating your fields, as above, save your new content type and wait for Strapi to restart.

#### Insert some entries

Add some articles in the database. To do so, follow these instructions:

1.  Visit the [articles list page](http://localhost:1337/admin/plugins/content-manager/article).
2.  Click on `Add New Article`.
3.  Insert values, link to an author and submit the form.
4.  Create two other articles.

Note: You can download the sample content from the video [here](https://github.com/strapi/strapi-examples/tree/master/gatsby-strapi-tutorial/content-for-tutorial).

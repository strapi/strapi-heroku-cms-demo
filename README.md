## Strapi with Gatsby Video Tutorial Series

From the [Gatsby / Strapi Video Tutorial Series](https://youtu.be/It4PRFJJaF0).

-   Code examples for the folder "cms". `Path: ./tutorial/cms` <- **Strapi Project**

-   Code examples for the folder "blog". `Path: ./tutorial/blog`. <- **Gatsby Project**

## Instructions for installation this repo locally:

Note: Videos 1 - 4 only contain the Strapi install. From Videos 5 and forward, you still **must** first install _Strapi_ and **also** install _Gatsby_.

### Install this Strapi & Gatsby Project locally

From your command line, issue the following commands in order to install **_this Strapi and Gatsby project_**:

Path: `./Path-To-Your-Project-Folder/`

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

12. [Webhooks with Gatsby & Strapi Video](https://youtu.be/u5NQd8ruPl4) - [Branch](https://github.com/strapi/strapi-heroku-cms-demo/tree/12-webhooks-with-gatsby-and-strapi)

13. [Add Markdown Support Video](https://youtu.be/LIrK5KxsUSE) - [Branch](https://github.com/strapi/strapi-heroku-cms-demo/tree/13-add-markdown-support)

### 13. Adding Markdown Support

_Important links from Video:_

-   [GitHub Tutorial Repo](https://github.com/strapi/strapi-heroku-cms-demo)
-   [Final Netlify Demo URL - Markdown Demo Page](https://strapi-gatsby-postgresql-demo.netlify.com/Article_4)
-   [React Markdown](https://github.com/rexxars/react-markdown)
-   [Cloudinary](https://cloudinary.com)
-   [Gatsby Environmental Variables](https://www.gatsbyjs.org/docs/environment-variables/)

#### Adding Markdown Support

The next steps involve adding Markdown support to the Gatsby build. In this way, your content from Strapi will properly transform from Markdown to HTML.

In this example, the tutorial article, "[Bed and breakfasts Give a Personal Touch](https://tutorial-netlify-demo.netlify.com/Article_1)", the main content area is not properly formatted.

At the end of this section, the content will properly transform Markdown to HTML. You can see the final transformation [here](https://strapi-gatsby-postgresql-demo.netlify.com/Article_1).

A React package called `React Markdown` needs to be installed in order properly parse the Markdown and transform it to HTML.

#### Install React Markdown

The package repo can be found at [React Markdown](https://github.com/rexxars/react-markdown).

From your command line:

`Path: ./blog/`

```
npm install --save react-markdown
```

#### Use React Markdown in a Component

Next, several steps need to occur. These steps inclide importing the package into each of the `index.js`, `article.js` and `author.js` template pages. And then, adding the React component.

The import statement looks like this:

```
import ReactMarkdown from "react-markdown"
```

And the ReactComponent for the `article.js` file looks like this:

```
<ReactMarkdown
   source={document.node.content}
/>
```

**Note:** The `source` option from `react-markdown` is simply accepting the content from the graphQL query. You will need to also **delete** `<p>{document.node.content}</p>` from the markup.

`Path: ./blog/src/templates/article.js`

The complete `article.js` code looks like this at this point:

```
import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Reactmarkdown from "react-markdown"

const ArticleTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiArticle.title}</h1>
    <p>
      by{" "}
      <Link to={`/authors/User_${data.strapiArticle.author.id}`}>
        {data.strapiArticle.author.username}
      </Link>
    </p>
    <Img fluid={data.strapiArticle.image.childImageSharp.fluid} />
    <Reactmarkdown source={data.strapiArticle.content} />
  </Layout>
)

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      content
      image {
        childImageSharp {
          fluid(maxWidth: 960) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      author {
        id
        username
      }
    }
  }
`
```

You have to repeat these steps for the `index.js` and `author.js`.

**Note:** There `source` option is different as each of these templates are querying the data differently than the `article.js` file.

`Path: ./blog/src/templates/author.js`

The complete `author.js` code looks like this at this point:

**Note:** You will need to also **delete** `<p>{article.content}</p>` from the markup.

```
import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Reactmarkdown from "react-markdown"

const UserTemplate = ({ data }) => (
  <Layout>
    <h1>{data.strapiUser.username}</h1>
    <ul>
      {data.strapiUser.articles.map(article => (
        <li key={article.id}>
          <h2>
            <Link to={`/Article_${article.id}`}>{article.title}</Link>
          </h2>
          <Reactmarkdown source={article.content} />
        </li>
      ))}
    </ul>
  </Layout>
)

export default UserTemplate

export const query = graphql`
  query UserTemplate($id: String!) {
    strapiUser(id: { eq: $id }) {
      id
      username
      articles {
        id
        title
        content
      }
    }
  }
`
```

`Path: ./blog/src/pages/index.js`

The complete `index.js` code looks like this at this point:

**Note:** You will need to also **delete** `<p>{document.node.content}</p>` from the markup.

```
import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout"
import Reactmarkdown from "react-markdown"

import "../styles/global.css"

const IndexPage = ({ data }) => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <ul>
      {data.allStrapiArticle.edges.map(document => (
        <li key={document.node.id}>
          <h2>
            <Link to={`/${document.node.id}`}>{document.node.title}</Link>
          </h2>
          <Img fixed={document.node.image.childImageSharp.fixed} />
          <Reactmarkdown source={document.node.content} />
        </li>
      ))}
    </ul>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiArticle {
      edges {
        node {
          id
          image {
            childImageSharp {
              fixed(width: 200, height: 125) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          title
          content
        }
      }
    }
  }
`
```

If you take a look at your project, you will see that the Markdown is now properly transforming into HTML. However, still missing is the ability to parse images from within the content.

#### Use Images with your Content

Strapi easily saves your images to whichever `Provider` is configured. In this tutorial, it is `Cloudinary`. However, not all projects will use `Cloudinary` and in **development**, images are often saved to Strapi locally. Therefore, you will need to set an environment variable and instruct Gatsby how to parse the `image path`.

Setting and using `environment variables` is a big subject. This [Gatsby article](https://www.gatsbyjs.org/docs/environment-variables/) does a good job explaining how Gatsby uses them.

In this tutorial, an environment variable is used to prepend `http:localhost:1337` to the `image path` for image uploaded in **Development** (`gatsby develop`) as Strapi is saving the images locally.

`Path: ./blog/`

In the Gatsby project `root` create a file and call it `.env.development`. Add the following line:

```
IMAGE_BASE_URL=http://localhost:1337
```

This has created a variable called `IMAGE_BASE_URL` which the `Reactmarkdown` component will use **IF** the image path does **not** have a complete URL.

`React-markdown` has an option called, [transformImageUri](https://github.com/rexxars/react-markdown#options). This option makes the image path available for use within the component and so within its value pair, a ternary operator will be used to provide the logic and check if its a complete path or not. If it is not a complete path, the env variable will be used to create one.

In `index.js` the component now looks like this:

`Path: ./blog/src/pages/index.js`

```
<ReactMarkdown
   source={document.node.content}
   transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
/>
```

Edit the `article.js` and `author.js` and add the `transformImageUri` option to their `<ReactMarkdown>` components:

`Path: ./blog/src/templates/article.js`

```
<ReactMarkdown
   source={data.strapiArticle.content}
   transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
/>
```

`Path: ./blog/src/templates/author.js`

```
<ReactMarkdown
   source={article.content}
   transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
/>
```

**NOTE:** This simple checks if `uri` starts with `http`, if it does then it's a complete path and if it doesn't then it is locally hosted with a relative path and the `IMAGE_BASE_URL` is prepended.

**Note:** You can check if this works by going to `Plugins > FILES UPLOAD > cog` and changing the Provider back from `Cloudinary` to `Local Provider`. You will need to add back your images from within your Content Types to test this.

You content is now properly parsed and transforming from Markdown to HTML. The following section is an **Optional** section that will provide some styling (and instruction) for the `index.js` and `author.js` pages and also implement and allow the use of **plain HTML** within the content.

#### OPTIONAL: Creating a Basic Blogroll

The `index.js` page currently displays every `article`. The issue is that the page displays the entire article. Normally, on this type of index page, a snippet is showed with a `Read more` link.

To accomplish this functionality various things need to be done:

1. Add a CSS class through the `react-markdown` package and component
2. This CSS class allows for removing the images as well as give a uniform height with CSS for the content in the `index` type pages.
3. Add JavaScript to omit any text after `500` characters and add `...` to the end of the snippet.
4. Add a link for the `Read more`.
5. Add a `global.css` stylesheet with a few styles.

These changes are the same for both the `index.js` page and the `author.js` template. Edit these files like this:

**index.js**

`Path: ./blog/src/pages/index.js`

```
<ReactMarkdown
   source={document.node.content.substring(0, 500).concat("...")}
   transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
   className="indexArticle"
/>

<Link to={`/${document.node.id}`}>Read more</Link>

```

**author.js**

`Path: ./blog/src/templates/author.js`

```
<ReactMarkdown
   source={article.content.substring(0, 500).concat("...")}
   transformImageUri={uri => uri.startsWith('http') ? uri :
   `${process.env.IMAGE_BASE_URL}${uri}`
   className="indexArticle" }
/>

<Link to={`/Article_${article.id}`}>Read more</Link>
```

**NOTE:** Make sure the above code is within the closing **li** tag.

**Add the CSS**

`Path: ./blog/src/`

Create a folder and call it `styles`.

`Path: ./blog/src/styles/`

Create a file called `global.css`

Within the `global.css` file, add the following styles to provide a uniform height to each of your `snippets` and `Read more` links. The CSS will also hide any images within the content there.

**Note:** The follow CSS styles target the `className` option above.

```
.indexArticle {
  max-height: 250px;
  overflow: hidden;
}

.indexArticle img {
  display: none;
}
```

Your project has `index` pages that show snippets and provide your users a link to read the full article. The next optional part of this section is to add `HTML-in-Markdown` support to your markdown.

#### OPTIONAL: Adding plain HTML support to the markdown

By default, `react-markdown` escapes HTML contained with the markdown. This is done when the editing environment is not controlled and unwanted code injections are being guarded against. However, with the `Strapi editor` this is not a problem and there are various scenarios where supporting `HTML-in-Markdown` is desirable.

In this tutorial, the use case demonstrated is the ability to add classes to the images within the content. It is expected that your CSS will have a default size for the content images. In this case, using markdown syntax for the images is perfect.

For smaller, larger or floated images, for example, HTML support is needed as markdown does not natively support adding classes within the editing experience.

There are two steps to configure your project to allow `HTML-in-Markdown`:

1. Add the `react-markdown` option that sets the `escapeHTML={false}` from `{true}`
2. Add a few CSS classes for `.small` and `.large` CSS classes.

**Set the 'escapeHTML' option**

`React-markdown` sets an option called, `escapeHTML` to `true` by default. You need to set this to true. Add the `escapeHTML={false}` option to your `<Reactmarkdown />` component. Like this:

For the `article.js`

`Path: ./blog/src/templates/article.js`

```
<Reactmarkdown
   source={article.content.substring(0, 500).concat("...")}
   transformImageUri={ uri =>
   uri.startsWith("http")
      ? uri
      : `${process.env.IMAGE_BASE_URL}${uri}`      }
      className=“indexArticle”
      escapeHTML={false}
 />
```

**NOTE:** Add `escapeHTML={false}` to the `index.js` and `author.js` files in the same way.

**Add the classes to the CSS**

In this tutorial, two classes are demonstrated. They are added to the `global.css` file.

`Path: ./blog/src/styles/global.css`

```
.articleContent img {
  display: block;
  margin: 0 auto;
  width: 400px;
}

.articleContent .small {
  width: 100%;
  max-width: 250px;
}

.articleContent .large {
  width: 100%;
  max-width: 600px;
}
```

This CSS gives a standard size and centers any images added with markdown. And images can now be added with HTML directly in markdown and with the classes added.

For example,

```
<img class="small" src="path-to-image/gatsby.png" alt="Small Gatsby Logo" />
```

#### Update Git repo for the project to update Netlify

**Netlify** makes it easy to update the project. Once you push to GitHub, Netlify will automatically rebuild the project.

`Path: ./blog/`

```
git add .
git commit -m "added markdown support"
git push
```

After a few minutes, your Gatsby project hosted on **Netlify** will have its files updated and you can go to your **Strapi** installation on **Heroku** and add an `article` Content Type which will now use and properly display markdown.

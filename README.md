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

---

### 4. Roles and Permissions

#### Allow access to Article

For security reasons, [API access](http://localhost:1337/articles) is, by default, restricted. To allow access, visit the [Auth and Permissions section for Public role](http://localhost:1337/admin/plugins/users-permissions/roles), click on `Public`, select the `Article - find` action and save. At this point, you should be able to [request the list of articles](http://localhost:1337/articles).

#### Static website development

Great job, our API is ready! We can start developing the static website.

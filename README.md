## Strapi with Gatsby Video Tutorial Series

From the [Gatsby / Strapi Video Tutorial Series](https://youtu.be/It4PRFJJaF0).

-   Code examples for the folder "cms". `Path: ./tutorial/cms` <- **Strapi Project**

-   Code examples for the folder "blog". `Path: ./tutorial/blog`. <- **Gatsby Project**

## Tutorial Branch Index

Each video has a Branch. Each branch contains the code at the **END** of the video. If there was no code changes within video. This will be noted.

1. [Introduction Video](https://youtu.be/It4PRFJJaF0) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/1-introduction)
2. [Installation Video](https://youtu.be/4QnDgxtWqOI) - [Branch](https://github.com/davidkartuzinski/strapi-heroku-cms-demo/tree/2-installation)

---

### 2. Installation

_Important links from Video:_

-   [Node 10 Installation](https://nodejs.org/en/)
-   [Strapi Installation Documentation](https://strapi.io/documentation/3.x.x/getting-started/quick-start.html)

#### Strapi CMS Setup

To make the magic happen, let's create a Strapi headless CMS and add some content.

#### Create a Strapi project

##### Install Strapi

_Requirements: please make sure [Node 10](https://nodejs.org/en/download/) (or higher) is installed and running on your machine._

Install Strapi using npm:

```
npm i strapi@alpha -g
```

_Note: Strapi v3 is still an alpha version, but it will be fine for this tutorial._

##### Generate a Strapi project

Create a directory named `tutorial`:

```
mkdir tutorial
```

Navigate into `tutorial`and then, using a single command, set-up and start your project inside your `tutorial` folder:

```
cd tutorial
strapi new cms --quickstart
```

Using the `--quickstart` flag creates a full Strapi project and automatically starts the server and opens up a tab in your browser.

(If you leave off `--quickstart`. Strapi allows you to configure the project according to your needs, Strapi will ask you some questions about your preferences. In this case, reply to each of them or press enter to keep the default values. If you choose a different database than _SQLite_, you will need to separately install that database onto your system.)

Additional information can be found in the [Official Strapi documentation](https://strapi.io/documentation/3.x.x/getting-started/quick-start.html).

#### Create your first User

Add your first user from the [registration page](http://localhost:1337/admin/plugins/users-permissions/auth/register). This will be the **_root admin user_**.

![Tutorial](/content/images/2018/01/Screen-Shot-2018-01-17-at-21.09.14.png)

#### Restarting Strapi

After installation, and initial use, you will often close your project and work on other things, reboot your computer, etc. Therefore, you will need to restart Strapi and your project.

Enter inside your project folder, on the command line, (in this case `tutorial/`, :

```
cd cms
```

From `cms/`, launch the Strapi server:

```
strapi start
```

Starting here, you should be able to visit the admin panel of your project: http://localhost:1337/admin. You will now be directed to a login screen. Login using your **_admin root user_** or other user you have already created.

<!-- AUTO-GENERATED-CONTENT:START (STARTER) -->
<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby's hello-world starter
</h1>

Kick off your project with this hello-world boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.com/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the hello-world starter. You need to have gatsby and react installed for this to work.

    ```shell
    # create a new Gatsby site using the hello-world starter
    gatsby new my-hello-world-starter https://github.com/gatsbyjs/gatsby-starter-hello-world
    ```

1.  **Start developing.**

    Navigate into your new site’s directory. 

    ```shell
       cd my-hello-world-starter/
    ```

    Next run npm install, this will install the neccessary components within the project.

    ```shell
    npm install
    ```

    You can now start up your project and view it locally

    ```shell
 
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.com/tutorial/part-five/#introducing-graphiql)._

    Open the `my-hello-world-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

5.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

6.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

7.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

8.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

9.  **`LICENSE`**: This Gatsby starter is licensed under the 0BSD license. This means that you can see this file as a placeholder and replace it with your own license.

10. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

11. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

12. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-hello-world)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/gatsbyjs/gatsby-starter-hello-world)

<!-- AUTO-GENERATED-CONTENT:END -->

Hemtentamen uppgift
- Se samband och värdera alternativa lösningar vid val av programmeringsteknink av dynamiska webbplatser.

Dynamiska vs Statiska sidor

Dynamiska webbsidor innebär att innehållet förändras kontinuerligt och att det visuellt är olika för olika användare. Man använder sig av dynamiska webbsidor när informationen frekvent ska förändras. (Geeksforgeeks, 2020)

Statiska webbsidor innebär att innehållet är hårdkodat, när man ska göra en förändring och när det väl görs en förändring måste filen laddas upp på nytt i webbservern.(Zesty, )

HTML vs PUG

Statiska webbsidor görs i html filer, informationen som visas kan inte anpassas om det inte görs om manuellt. 
PUG är en mall för html, det PUG gör är att kompilera all kod och göra den till läsbar HTML som webbläsaren kan läsa av. 
Den största skillnaden mellan HTML och PUG är återanvändingen av kod, det kan förenkla betydligt mycket mer än att skriva rad för rad i HTML. Man kommer in i ett komponent tänk, man skapar en komponent som kan återanvändas istället för att repetera samma kod om och om igen. En annan skillnad är att PUG också kan visa dynamisk data genom html vilket innebär att den kan visa upp datat hämtat från ett API. (Sitepoint, 2019)

GATSBY vs PUG

Gatsby har ett väldigt effektivt plugin system, där man kan plugin för att lägga till suddiga effekter på en bild eller implementera egen styling med Styled Components. Med Gatsby kan man även använda sig av GraphQl, ett query verktyg som ger klienten exakt det som efterfrågas och inget mer. Gatsby är populärt för att skapa bloggar.(LogRocket, 2019)

Med Pug skapar man en extern css fil där man designar sidan, till skillnad som nämnt ovan att skapa en themes fil där man i vilken komponent som helst importerar det man är ute efter, snarliknande bootstrap fast bättre. Pug passar oftast bra till statiska sidor som ska importera dynamisk data, från t.ex en sql databas eller api:er. (Medium, 2018)

KÄLLOR

(GEEKSFORGEEKS): https://www.geeksforgeeks.org/difference-between-static-and-dynamic-web-pages/

(ZESTY): https://www.zesty.io/mindshare/marketing-technology/dynamic-vs-static-websites/

(LOGROCKET): https://blog.logrocket.com/is-gatsby-really-that-great-e7b19c4c1c05/

(MEDIUM): https://medium.com/jspoint/pug-js-to-make-your-life-easier-with-html-templates-9c62273626e0









# Ricardo Sousa's vCard Website

## TODO (pre-prod):

- Add SEO
- Add animations
- Improve NavLink component
- Add hooks stories, review existing stories
- Replace mock images and optimize all existing
- Add GDPR compliance (through Gtag)

## 📖 What’s in this document

1. [Pre-requisites](#%EF%B8%8F-pre-requisites)
1. [Quick start](#-quick-start)
1. [Production build](#-production-build)
1. [Main technology stack](#%EF%B8%8F-main-technology-stack)

## ⚙️ Pre-requisites

1. **Node.js LTS runtime**

   ```sh
   # Check Node.js version
   node --version

   # recommended: v18.12.0
   # minimum: v18.2.0
   ```

   This project was built using [asdf](https://asdf-vm.com/) runtime manager.

   If you don't have a compatible Node.js runtime or if you don't have a runtime manager, follow the [install instructions](https://asdf-vm.com/guide/getting-started.html).

1. **Yarn package manager**

   ```sh
   # Install yarn globally through npm
   npm i -g yarn
   ```

1. **Gatsby command line interface (CLI)**

   ```sh
   # Install gatsby-cli globally through npm
   npm i -g gatsby-cli
   ```

## 🚀 Quick start

1.  **Clone the project**

    ```sh
    git clone https://github.com/ricardomfmsousa/my-vcard.git
    ```

1.  **Install dependencies**

    Navigate into the cloned directory and install.

    ```sh
    cd my-vcard

    yarn install
    ```

1.  **Start development servers**

    ```sh
    # Start Gatsby development server
    yarn start

    # Start Storybook development server
    yarn storybook
    ```

1.  **Open the source code and start editing!**

    The site is now running at: `http://localhost:8000`

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_.  
    Learn more about using this querying tool in the [Gatsby Tutorial](https://www.gatsbyjs.com/docs/tutorial/part-4/#use-graphiql-to-explore-the-data-layer-and-write-graphql-queries)._

## 🌍 Production build

The following commands will generate a full production build.

```sh
# Clean and install dependencies
yarn ci

# Build gatsby website
yarn build:gatsby

# Build storybook project
yarn build:storybook
```

> In order to leverage Gatsby incremental builds feature, `.cache` and `public` folders **must** be preserved between builds.

## 🕹️ Main technology stack

- [Github Pages](https://docs.github.com/pages/getting-started-with-github-pages/about-github-pages) hosting
- [Github Actions](https://github.com/features/actions) continuous integration
- [Lefthook](https://evilmartians.com/opensource/lefthook)<sup>1</sup> Git hooks manager
- [asdf](https://asdf-vm.com/) Node.js runtime manager
- [Yarn](https://yarnpkg.com/) package manager
- [ESLint](https://eslint.org/) code linter
- [Prettier](https://prettier.io/) code formatter
- [Typescript](https://www.typescriptlang.org/) main programming language
- [Storybook](https://storybook.js.org/) development environment
- [React](https://reactjs.org/) UI Rendering engine
- [GatsbyJS](https://www.gatsbyjs.com/) static site generator framework
- [Material UI](https://mui.com/) component library
- [i18next](https://www.i18next.com/) internationalization framework
- ~~[Framer Motion](https://www.framer.com/) animation library~~

> **(1) Configured `pre-commit` hooks are:**
>
> - `lint` - checks for linting and accessibility issues;
> - `typecheck` - checks for code typing issues;
> - `format` - checks for code formatting issues;
> - `translations` - checks for empty translation values.

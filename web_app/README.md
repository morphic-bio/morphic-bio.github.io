# Morphic Consortium Website
## Description
Welcome to the Morphic Website built using React.

https://morphic.bio/

The main file for the project is the `App.js` file. It contains the front page of the website and the components to be rendered. This is where you would add/remove sections of the page as needed. If you are onboarding for this project, I would start by understanding the `App.js` file. Then exploring each of the imported components.


## Getting Started with React App
### Prerequisites

1. [Node and npm](https://nodejs.org/en/download/) are installed. Here are the versions I'm using:

    ```shell
    $ node --version
    v18.4.0

    $ npm --version
    8.12.1
    ```

### Available Scripts
In the project directory `/web_app`, you can run the following scripsts for testing, running and deploying.

### Set up

After cloning the repo, install all the react project dependencies
```shell
$ npm install
```
### Start the project
Runs the app in the development mode.
```shell
$ npm start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### Publishing to GitHub Pages
### Deploying React App

1. Commit all all the new changes for the website

2. Push the React app to the GitHub repository

    ```shell
    $ npm run deploy
    ```

At this point, the `gh-pages` branch will contains the files that make up the distributable version of the React app.


# Developing for the project

The content and features of the page are sepearted by React components as `.jsx` files. Each component has a corresponding style in a `.css` file.

**NOTE:** We are using functional React components and not class-based components. If you are looking for online React resources or are trying to including React code found online, make sure it is functional-based React.

### Updating Icon and Logo:
Quick replacement of the folowwing files will update icon or logo.
* `/public/favicon.png` - favicon
* `src/assets/morphic_logo_v3.svg` - Page logo

### Updating sections of page:
Most of the components are located in `src/containers`
* `/header` - Page title and search bar
* `/whatmorphic` - Description overview of Morphic
* `/map` - Map of labs
* `/blog` - News articles
* `/footer` - Page footer

nav bar is located in `src/components/navbar`

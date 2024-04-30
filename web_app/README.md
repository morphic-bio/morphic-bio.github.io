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
Quick replacement of the folowing files with the same name and image type will update icon or logo.
* `/public/favicon.png` - favicon
* `src/assets/morphic_logo_v3.svg` - Page logo

### Routes
Routes for each pages can be found in `App.js`. For this project React HashRouter was as to work with GitHub Pages, this can be changed in `index.js`.

### Updating sections of a page:
Most of the components are located in `src/containers`
* `/header` - Page title and search bar
* `/whatmorphic` - Description overview of Morphic
* `/map` - Map of labs
* `/blog` - News articles
* `/footer` - Page footer
* `/about` - About us
* `/events` - Events
* `/policies` - Policies
* `coming_soon` - Under Construction

nav bar is located in `src/components/navbar`

### Search bar:
Located in `/src/components/search`. 
* `/data/gene_list.js` - Data for draft gene list. To update the data for draft gene list:
    1. Convert spreadsheet data to json
    2. copy the contents of the json file and paste to gene_list.js file.
* `/searchBar` - Search bar

### Consortium Map
The map can be quickly updated by replacing the image
1. Create a new image
2. Save image as `moprhic_map-lg.jpg` in `web_app/src/asssets`

To update with different image sizes
1. Create a new image
2. Save image as `moprhic_map-lg.jpg` in `web_app/src/`
3. In `Map.jsx` set the new coordinates for each area that will be selected in the area element.

The map was created using HTML Image Maps. The map element allows for creating a selectable area. In this case each lab has a corresponding area. For example, University of Washington has the following html attribrute coords="0,80,200,160" for specifying the area within the page that will be selectable. Each area has its own on click, on mouse enter and on mouse leave function.

### Articles and Carousel
Article contents located in:
* `src/containers/blog/Blog.jsx` - News section of page
* `src/components/article` - Individual article components

The carousel uses a list to switch between articles every 15 seconds. The list of articles are in the following format `{title:"", date:"", url:"", img:"", webp:""}`.
1. To update add a new article.

## Troubleshooting
### Deploying React App
Sometimes deployment gets stuck.
* Solution: run the following command to update caniuse-lite browserslist. Then deploy the react app.
    ```shell
    $ npm update caniuse-lite browserslist
    ```
# Eklips

## Cherry HTML page made from .sketch file

https://www.eklips.se/career/Cherry-TestWork-EKLIPS.sketch

Technologies used

- HTML
- SCSS
- JS

Automated system used

- Gulp

## How to use this project

- Clone this project to your computer

```sh
git clone --single-branch --branch master https://github.com/ActuallyAM/cherry.git
```

- Go to directory where you cloned this project
- Open in your browser the following file

```sh
index.html
```

- That is all

# Modifying project

If you would like to add extra/custom .js or .scss then you have to do the following

- Install https://nodejs.org/en/ (if you do not have it already)
- Install the required NPM packages with the command `npm i`
- Add your changes to the `./styles/style.scss` or `./src/app.js` file
- If modified `./styles/style.scss` file then use next commands `gulp bundleScss` and `gulp bundleCss`
- If modified `./src/app.js` file then use next commands `gulp bundleJs`
- Changes will be seen at `./styles/bundle.css` or `./src/bundle.js` file
- Changes are now seen in index.html page

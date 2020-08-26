# E-Cell SLRTCE Website

## Setting Up The Development Environment 💻
This step assumes that you already have NodeJS and NPM installed. If not, go to [NodeJS](http://nodejs.org/) website and download the latest LTS build.
Once done, follow the below commands :
```
git clone https://github.com/ECell-SLRTCE/ecell-website.git
cd ecell-website

npm install
npm run watch:sass
```
## Recommended Editor and Extensions 🧰
[Visual Studio Code](https://code.visualstudio.com/)

[Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)

[Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## SASS Folder Structure
```
-sass
  -abstracts
    - _functions.scss       
    - _mixins.scss
    - _variables.scss
  -base
    - _animations.scss
    - _base.scss
    - _typography.scss
    - _utilities.scss
  -components
    All components go here
  -layout
    - _header.scss
    - _footer.scss
    - _navigation.scss
  -pages
    - _home.scss
  main.scss
```

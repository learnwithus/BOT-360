# BOT 360
This repo contains the code used to display 360 images of VCH sites on the Board Orientation Tool.

## Development
This project uses [Gulp](https://github.com/gulpjs/gulp) to make development nicer.

To develop locally:
1. Run `npm i` to install project dependencies
2. Run `npm i -g gulp-cli` to install Gulp globally
3. Run `gulp` to run the default Gulp function

### Custom Icon
To set a custom icon for the Panolens links, find `Arrow:` in panolens.js and replace the value with the URL of the custom icon image. To set the size of the custom image, find `linkingImageScale:300` and change it as appropriate. Currently, the URL for the icon points to where this project is hosted on VCH Design.

## Deployment
This project is automatically deployed to VCH Design by Jenkins, and an `<iframe>` is used to display the 360s in BOT. If this is ever removed from VCH Design, ensure that it is hosted somewhere else and that all references to it in BOT are updated accordingly. The URL to the custom icon will also need to be updated in `panolens.min.js`.

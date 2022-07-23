## Asset Management
----------------------------------------------

### Loading CSS
----------------------------------------------

In order to import a CSS file from within a JavaScript module, you need to install and add the style-loader and css-loader to your module configuration:

Module loaders can be chained. Each loader in the chain applies transformations to the processed resource. A chain is executed in reverse order. The first loader passes its result (resource with applied transformations) to the next one, and so forth. Finally, ==webpack expects JavaScript to be returned by the last loader in the chain==.

### Loading Images
----------------------------------------------

When you import MyImage from './my-image.png', that image will be processed and added to your output directory and the MyImage variable will contain the final url of that image after processing. When using the css-loader, as shown above, a similar process will occur for url('./my-image.png') within your CSS. The loader will recognize this is a local file, and replace the './my-image.png' path with the final path to the image in your output directory. The html-loader handles <img src="./my-image.png" /> in the same manner.

### Loading Fonts
----------------------------------------------

So what about other assets like fonts? The ==Asset Modules== will take any file you load through them and output it to your build directory. This means we can use them for any kind of file, ==including fonts==



## Frontend developer test

##### Your test is to consume the public [Flickr API](https://api.flickr.com/services/feeds/photos_public.gne?format=json) and display the results according to this basic wireframe:

> ![mockup](https://raw.githubusercontent.com/WillMayger/tmgdevrequirements/master/flickr-wireframe.jpg)

We would expect the main part of this task to take up to a day to complete. Please find our requirements listed below:

- The website you create should function as a [single page application](http://en.wikipedia.org/wiki/Single-page_application.
- You should use either vanilla.js, [ react.js ] or vue.js.
- Your app must be fully responsive across all devices and screen sizes.
- Your app should support all the major browsers (Chrome, Firefox, Safari, IE11+).
- If you decide to use other [ Flickr API feeds ], note that some endpoints require an API key. You can apply for your own [here](https://www.flickr.com/services/api/keys).

```sh
provided json link doesn't work for javascript applications due to cross browser access restriction
```

- Where possible, only request images with a 'safe' tag to ensure the application remains suitable for all ages.

```sh
flickr.photos.getRecent api has no safe feature, not that I know of
```

- Code should be pushed to a git repository.[check]

GitHub link: [https://github.com/neuralline/flicker-api-react](https://github.com/neuralline/flicker-api-react)

Live Demo link: [https://flicker-api-react.netlify.com](https://flicker-api-react.netlify.com)

If you feel like you want to go the extra mile, here is a list of potential additions:

- Think about how you might improve the speed of the page in terms of the images/content loading.[check]

```sh
Uses smaller size image/url for recent image gallery list and only loads large image in the detail photo page
```

- Allow the page to have an infinite scroll (loading in more images as you scroll).[check]

```sh
Done: It fetches infinite amount of recent photos when user scrolls down. However, at the moment, it does not track for duplicated content
```

- A search functionality based on tags, or possibly the title of the photo.
- How you can add in smooth animations that will add to the value of the application.

```sh
It has css transitions and loader animations
```

- Alternatively if you can think of any other features that you feel would further enhance your app, then we'd love to see what you can come up with!

```sh
Redux for feature upgrade, single photo page, author profile page(currently blank), tags page(currently blank)
```

why I picked a particular technology to put this build together?

```sh
The whole project involves mainly user interface, fetching data from flickr api and displaying it on the dom, no major functions or js applications required. For that, React is really good at breaking down big user interfaces into smaller, organised and reusable components specially for single page application like this. Plus react UI components are really quick to debug.


```

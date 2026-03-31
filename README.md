# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- [TypeScript](https://www.typescriptlang.org/) - Typescript
- [Storybook](https://storybook.js.org/) - Component Development
- [TanStack Router](https://tanstack.com/router) - Routing library
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [Vite](https://vitejs.dev/) - build tool
- [Vite React](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) - React template for Vite

### What I learned

I used this project mainly to dive into caching mechanisms with tanstack router. I overengineered this project a little to make the preloading feature and caching feature more visible, mostly because I wanteed to see it in action. I also learned a lot about routing strategies with tanstack router in general, using index routes, route trees etc.

Loading data in routes seems especially useful and was not hard to implement

```ts
export const Route = createFileRoute("/destination/$destinationId")({
  loader: async ({ params: { destinationId } }) => {
    const data = await fetchDestination(destinationId);
    if (data) {
      return data;
    }
    throw Route.redirect({
      to: "/destination",
    });
  },
  component: DestinationPage,
});
```

Adjusting page metadata like the title or the background cn also be attached to routes, which was especially useful for the background image. Thugh i am not sure how effcient this is, since tanstack seems to just attach these scripts to the beginning of the document..

```ts
export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      {
        title: "Technology - Space Tourism - Frontendmentor",
      },
    ],
    styles: [
      {
        media: "all and (width < 768px)",
        children: `body {
                  background-image: url("/assets/technology/background-technology-mobile.jpg");
                }`,
      },
```

### Continued development

There are a lot of small things that can be improved. Like for example adding keaboard navigation to the pagination features or extracting components form the Crew Page.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

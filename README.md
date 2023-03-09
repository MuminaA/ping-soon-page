# Frontend Mentor - Ping coming soon page solution

This is a solution to the [Ping coming soon page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ping-single-column-coming-soon-page-5cadd051fec04111f7b848da)

## Table of contents

- [The challenge](#the-challenge)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Submit their email address using an `input` field
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty. The message for this error should say _"Whoops! It looks like you forgot to add your email"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Please provide a valid email address"_

### Links

- Solution URL: [Add solution URL here](https://github.com/MuminaA/ping-soon-page)
- Live Site URL: [Add live site URL here](https://muminaa.github.io/ping-soon-page/)

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Mobile-first workflow
- [Styled Components](https://fonts.google.com/)

### What I learned

Not only did I better my understanding of javascript but i waws also able to learn how to manipulate media query using javascript.

```js
if (mediaQueryList.matches && !emailRegex.test(input.value)) {
  // console.log("It matches!");
  input.style.position = "realtive";
  result.style.position = "absolute";
  result.style.top = "30%";
  result.style.padding = "2% 0 0 15%";
  document.querySelector("button").style.marginTop = "10%";
}
```

## Author

- Website - [Mumina Abdi](https://muminaa.github.io/ping-soon-page/)
- Frontend Mentor - [@Mumina](https://www.frontendmentor.io/profile/MuminaA)

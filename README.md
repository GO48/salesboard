# Salesboard

My scrimba bootcamp solo project in module 3. 

I build it from scratch and use all the tricks and great practice I learned so far.

I also learned from building:
- how to organize the css and make it dry!
- how to toogle dark/light theme by learning from [The Ultimate Theme Toggle](https://dev.to/whitep4nth3r/the-best-lightdark-mode-theme-toggle-in-javascript-368f)

## Feature

1. keep track of sales, including products kinds and numbers
2. get achievements according to the following rules: 
- 🔔: first sale; 
- 🏆: 2500 in revenue; 
- 💰: 15th sale; 
- 🤑: 1000 in commision
3. show the total revenue and commision 
4. toggle switch of dark/light theme
5. store/reset data in localstorage

## Code review and suggestion from Geoffrey
### What you've done well
- The app looks very good and works perfectly well. Good job!
 * buttons work
 * text is rendered correctly
 * reset button
 * achievements implemented (from a pure UX perspective, and to boost sales, it'd be good to remind the user what the achievements are)
 * stretch goals: reset button, theme switch, localStorage
 
- HTML
 * HTML markup is excellent, includes doctype, lang attribute, title, meta, 
 * use of aria-label on buttons is a great idea
 * good understanding of classes to style multiple elements

- JS
 * naming conventions
 * camelCase
 * let v. const
 * document.getElementById
 * use of arrays, loops, objects and dot notation, localStorage
 * good separation of concerns

- CSS
 * Comfortable with flexbox, css variables, utility classes

### What could be improved
- [x] using a `<main>` tag
- [x] alt attributes 
    * An img element with no alt attribute must not have any aria-* attributes other than aria-hidden.
    * img element must have an alt attribute except under certain conditions. For details, consult guidance on providing text alternatives for images. https://www.w3.org/WAI/tutorials/images/
- [x] for increased accessibility, You can use title="" on `<button>`, to show the name of the button on hover
- [x] transition on theme switch
- [x] using {} in if statements and loops to make the code more readable and less error-prone. It's a good practice to use braces even for single-line blocks.
- [ ] theme and “flash of incorrect theme” (FOIT).
Our theme.js script saves the selected theme to localStorage when the toggle takes place. In other words, when the page is reloaded, the script fetches the choice from localStorage and applies it. JavaScript is often executed after CSS, so this approach is prone to a “flash of incorrect theme” (FOIT).
    * https://stevenwoodson.com/blog/implementing-dark-mode/
    * https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
    * https://chrismorgan.info/blog/dark-theme-implementation/
    * https://lukelowrey.com/css-variable-theme-switcher/https://lukelowrey.com/css-variable-theme-switcher/
# AppCard

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/app-card?style=for-the-badge)](https://www.npmjs.com/package/@finastra/app-card)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/app-card?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/app-card')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-app-card--default)


> `FLAG_TYPES` value can be `"PUBLISHED"|"DRAFT"|"IN_REVIEW"|"COMING_SOON"`

> `icon` require a publicly accessible url and the recommended format is 70x70 and 42x42 for the card `extraDense`. Also we recommend adding a background (#FFFFFF) to the logo if it doesn't work for dark and light theme accessibility contrast.

| Do                                               | Don't                                            |
| ------------------------------------------------ | ------------------------------------------------ |
| ![Test Image 4](https://i.imgur.com/AFDwskP.png) | ![Test Image 4](https://i.imgur.com/TGHSH9D.png) |


## Usage

### Import

```
npm i @finastra/app-card
```

```ts
import '@finastra/app-card';
...
<fds-app-card
    application='{"name":"Business Economics", "author":"Finastra", "flag":"COMING_SOON", "icon":"https://www.finastra.com/themes/custom/themekit/dist/logo.svg", "description":"Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."}'>
</fds-app-card>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/app-card@latest/dist/src/app-card.js?module"></script>

<fds-app-card
  application='{"name":"Business Economics", "author":"Finastra", "flag":"COMING_SOON", "icon":"https://www.finastra.com/themes/custom/themekit/dist/logo.svg", "description":"Application Description goes here. This can vary in length from short to pretty long, so you’ll want to watch that."}'>
</fds-app-card>
```
# <%= className %>

[![See it on NPM!](https://img.shields.io/npm/v/@finastra/<%=fileName%>?style=for-the-badge)](https://www.npmjs.com/package/@finastra/<%=fileName%>)
[![How big is this package in your project?](https://img.shields.io/bundlephobia/minzip/@finastra/<%=fileName%>?style=for-the-badge)](https://bundlephobia.com/result?p=@finastra/<%= fileName%>')
[![Storybook](https://shields.io/badge/-Play%20with%20this%20web%20component-2a0481?logo=storybook&style=for-the-badge)](https://finastra.github.io/finastra-design-system/?path=/story/components-<%= fileName%>--default)


## Usage

### Import

```
npm i @finastra/<%= fileName %>
```

```ts
import '@finastra/<%= fileName %>';
...
<fds-<%= fileName %>></fds-<%= fileName %>>
```

### Pure HTML pages

```html
<script type="module" src="https://unpkg.com/@finastra/<%= fileName %>@latest/dist/src/<%= fileName %>.js?module"></script>

<fds-<%= fileName %>></fds-<%= fileName %>>
```

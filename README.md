# @metismenu/angular
> angular component for metismenu

## Getting started
### Install
Install with [npm](https://www.npmjs.com/):

```sh
$ npm install @metismenu/angular metismenujs
```

Install with [yarn](https://yarnpkg.com):

```sh
$ yarn add @metismenu/angular metismenujs
```

## Usage
Edit `app.module.ts` file
```js
import { MetismenuAngularModule } from "@metismenu/angular";

// import
@NgModule({
  imports: [
    MetismenuAngularModule,
    ...
  ]
})
```

Edit `angular.json` file

```json
"styles": [
  "./node_modules/metismenujs/scss/metismenujs.scss",
  "src/styles.scss"
]

```

> Use `metis-menu` selector. It can be used with a valid html tag or just as ```<metis-menu> ```.

```html
<ul metis-menu>
  <li><a href="">Item 1</a></li>
  <li>
    <a href="#" class="has-arrow">Menu 1</a>
    <ul>
      <li><a href="#"> Item 3 </a></li>
      <li><a href="#"> Item 4 </a></li>
    </ul>
  </li>
  <li>
    <a href="#" class="has-arrow"> Menu 2 </a>
    <ul>
      <li><a href=""> Item 5 </a></li>
      <li><a href=""> Item 6 </a></li>
      <li><a href=""> Item 7 </a></li>
      <li><a href=""> Item 8 </a></li>
    </ul>
  </li>
  <li><a href="">Item 2</a></li>
</ul>
```
#### OR

```html
<metis-menu>
  <li><a href="">Item 1</a></li>
  <li>
    <a href="#" class="has-arrow">Menu 1</a>
    <ul>
      <li><a href="#"> Item 3 </a></li>
      <li><a href="#"> Item 4 </a></li>
    </ul>
  </li>
  <li>
    <a href="#" class="has-arrow"> Menu 2 </a>
    <ul>
      <li><a href=""> Item 5 </a></li>
      <li><a href=""> Item 6 </a></li>
      <li><a href=""> Item 7 </a></li>
      <li><a href=""> Item 8 </a></li>
    </ul>
  </li>
  <li><a href="">Item 2</a></li>
</metis-menu>
```


## Properties

#### toggle
Type: `string (true | false)`

Default: `true`

For auto collapse support.

```html
<ul metis-menu toggle="false">
...
</ul>
```

#### triggerElement
Type: `css selector`

Default: `a`

```html
<div metis-menu triggerElement="h2">
...
</div>
```

#### parentTrigger
Type: `css selector`

Default: `li`

```html
<p metis-menu parentTrigger="div">
...
</p>
```

#### subMenu
Type: `css selector`

Default: `ul`

```html
<metis-menu parentTrigger="div">
...
</metis-menu>
```

## Example Repo
[https://github.com/onokumus/metismenu-angular-example](https://github.com/onokumus/metismenu-angular-example)

## Demo
[https://onokumus.com/metismenu-angular-example/](https://onokumus.com/metismenu-angular-example/)

## About

### Related projects
- [metismenu](https://www.npmjs.com/package/metismenu): A jQuery menu plugin | [homepage](https://github.com/onokumus/metismenu#readme "A jQuery menu plugin")
- [metismenujs](https://www.npmjs.com/package/metismenujs): MetisMenu with Vanilla-JS  | [homepage](https://github.com/onokumus/metismenujs#readme "MetisMenu with Vanilla-JS")

### Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Author
**Osman Nuri Okumus**
+ [GitHub Profile](https://github.com/onokumus)
+ [Twitter Profile](https://twitter.com/onokumus)
+ [LinkedIn Profile](https://linkedin.com/in/onokumus)

### License
Copyright © 2020, [Osman Nuri Okumus](https://github.com/onokumus).
Released under the [MIT License](LICENSE).


This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.2.

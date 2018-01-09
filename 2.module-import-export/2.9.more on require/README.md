# More about require

## Introduction

This chapter shows how separate a module into multiple `\*.js` file in order to manage them more easier. Also shows how to use `\*.json` file in code, which we can take advantage to store some configuration in json file for security and easy modifing issue.

## use json in js

Basically, it is the same with how your use other module in code. V8 engine will compile json file to JavaScript object and then we can easily access all the attributes in it.

## How to manage module

In order to manage modules easily, we can use folder and a index.js file under the folder to achive this goal. The folder used to put all necessary files of the module, something like separated modules of the module. And the index.js used to make these separated modules become attributes iin a simple module, then we can access this sub-module with object attirbutes way.

For example, I need a module called greet and it thorws out diffetent language message, so I make a new folder called greeting and make these two sub-modules inside the folder.

`english.js`

```javascript
var greeting = function() {
  console.log("hello");
}

module.exports = greet;
```

`spanish.js`

```javascript
var greeting = function() {
  console.log("Hola");
}

module.exports = greet;
```

Then I have to combined them into a single module. Therefore, I create a new file called index.js and require the previous two sub-modules, and exports them as a JavaScript object.

**Notice that, the combine module file inside the folder must called index.js. Otherwise, you will not require success if your just using `require("./greet")`.** Because node.js default to load index.js inside a folder.

**Also notice that, once you have a file has the same name with the folder , for example greet.js, node.js will load the file first instead of the folder.** Because node.js default to recognize file before folder.

`index.js`

```javascript
var english = require("./english");
var spanish = require("./spanish");

module.exports = {
  english: english,
  spanish: spanish
}
```

Now, we can simply require this module via require the folder, and operate the module like a object.

`app.js`

```javascript
var greeting = require("./greeting");

greet.spanish();
greet.english();
```

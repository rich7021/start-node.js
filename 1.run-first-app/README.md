# **Start a node.js project and run it**

## install nodejs

Go nodejs.org to download latest nodejs and install it.

## Start to write some JavaScript

1. Make sure your nodejs install completely.

   ```
   > node -v // should print your nodejs version
   ```

2. Wirte some easy code.

   ```
   > node
   > var a = 1;
   > var b = 2;
   > a + b; // should print 3
   ```

## Run a js file

### Always run "a" js file, your entry point

We will always point one js file to start our whole application, we called it
`entry point`. Other js files you wrote will be executed via the entry point.
So, let's try to run our entry point first.

1. Create a project folder and create a app.js under it.
2. Make app.js like bellow.

   ```
   var a = 1;
   var b = 2;
   var c = a + b;
   console.log(c);
   // console.log is used to print in browser console.
   ```

3. Use your command line interface, and cd into the folder. Using node command
   to run app.js.

   ```
   > cd %PORJECT_PATH%\nodejs
   > node app.js // should print 3
   ```

### Run a bunch of js files

In ES5, there's no concept of module. However, nodejs follows the CommanJS
standard to implement this concept. Which makes your code could be bricks. You
may combine bricks when you need and they are dependent, means each of the
bricks(modules) will not affect each others. However, ES6 implement this
concept. Therefore, you might need to examine your nodejs version, and check how
modules are build.
Go nodejs.org to download latest nodejs and install it.

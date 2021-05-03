#### Questions number and Answer
- (1) : ``` git init ```
- (2) : ``` git add README.md ```
- (3) : ``` git commit -m "Empty project with README" ```
- (4) : ``` git remote add origin https://github.com/LRamila/vdev-20210430.git ```
- (5) : ``` git branch -M main git push -u origin main ```
- (6) : Node.js is a JavaScript-based, open-source, asynchronous, cross-platform     runtime environment.Node.js can handle many connections and in each connection, a callback is fired. Once the new request comes server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function. 
- (7) :  A web platform usually consists of the Web Application, Mobile Applications and the communication between this and other external services
- (8) :  TypeScript works by adding enhanced syntax to JavaScript and then transforming it to JavaScript after the TypeScript compiler does its own checks.
- (9) :  WASM shorten for WebAssembly is an efficient, low-level bytecode for the web. Wasm is a portable, pre-compiled, cross-platform binary instruction set for a virtual machine that runs in the browser. WASM enables you to use languages other than JavaScript, write your program in it, and then compile it to WebAssembly. The result is a web app that’s very fast to load and execute. 
- (10) : Express.Js is a minimal and flexible node.js web application framework, providing a strong set of features for building single and multi-page, and hybrid web applications. On the other hand, Fastify is a web framework highly focused on speed and low overhead. It is inspired from Hapi and Express.js. it is one of the fastest web frameworks 
- (11) : TailwindCSS is different from frameworks like Bootstrap is in that it's not a UI kit. It doesn't have a default theme, and there are no built-in UI components. It comes with a menu of predesigned widgets. 
- (12) : Using Vite in development, you can use ES Modules instead of a fully bundled application. This allows the app to load only the code that matters for what you're looking at, rather than everything. Vite provides a faster development experience. 
- 
## Development

#### Prerequisites
Before you begin, make sure your development environment includes `Node.js®` and an `npm` package manager.

###### Node.js
React requires `Node.js` version 12.x or 14.x

- To check your version, run `node -v` in a terminal/console window.
- To get `Node.js`, go to [nodejs.org](https://nodejs.org/).

#### Installation
``` bash
$ npm install --global yarn
```
##### Clone repo

``` bash

# go into web-app's directory
$ cd vdev-20210430
$ cd web-app

# install app's dependencies
$ yarn install

# go into web-app's directory from the root directory
$ cd backend-app

# install app's dependencies
$ yarn install

```

##### web-app Deployment
``` bash
# Compiles for development
$ yarn dev

# Compiles for production
$ yarn build
```
##### web-app Deployment
``` bash
# run server
$ yarn start

```
##### Note
After Building the web-app and runs the server react app runs on the root path
ex: http://127.0.0.1:3000/

No need to run the react app in a another port. build the react app and then run the server

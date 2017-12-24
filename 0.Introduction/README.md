# **Sec.1 Something that you may want or need to know**

## ECMAScript

* The standard that JavaScript is based on, to make sure what JS code should
  have and should be done by JS engine.

## Something about V8

* A open source JS engine built by google with C++. It is used in chrome.
* Follow ECMAScript standard.
* Used to compile High-levle JS code into machine code.
* Can run standalone or embedded
  * Embedded which means you can wirte a C++ code and embedded v8 inside, and
    expands JavaScript features. Ex: Wirte a print function in c++ to pring what
    you get, and bind with keyword "print" in JavaScript. Afterwards, when
    "print" showed up in JavaScript, the v8 will call c++ print function. Also,
    using JavaScript to manipulate the DOM is also expanding features of
    JavaScript which implement in chorme or other browsers.
  * Guess node.js comes from thies feature

## Shell

* we can use shell --print_code to see how v8 engine turn our code into machine
  code

## client-Server

* A model of a application
* Server provide services, usually deep computing, heavy load
* Client request Server services maybe with arguments, and server finish what
  the request want, and response the result to client
* In Web application, browser is a client, and the request and response is
  follow http protocol

# **Sec.2 Node.js**

## Some Features

* It's a C++ based applicatoin, embedding V8 engine
* Make server side composed with JavaScript so that once you familiar with
  JavaScript, you may capible to finish both server side and client

## what JavaScript need to manage a server side app

Node.js make us can build a server side application with JavaScript. However,
the original JavaScript dose not have some necessary abilities:

* Better way to organize the code, ex: reusable piece.
* To deal with files
* To deal with database
* Ability to communicate on the Internet
* Ability to accept requests and send responses
* To deal with job that takes a long time (People still can access the server)

Therefore, Node.js using the character which V8 can be embbeded in some C++
applicaiton to provide JavaScript with those abilities.

## Resource

* GitHub node.js and Joyent
  * Node.js was developed in the company, Joyent. Although it becomes more liken
    a open sourece application, we still can find some resources on the Joyent
    git page.

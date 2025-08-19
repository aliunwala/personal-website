---
title: "Javascript Language Nuances"
excerpt: "Javascript is a fundamentally old language, with many different way to do things. This is a compendium of interesting non-intuitive code snippets that helped me be a better javascript developer"
coverImage: "/assets/blog/hello-world/cover.jpg"
date: "2025-07-18"
author:
  name: Ali Unwala
  picture: "/assets/blog/authors/ali.png"
ogImage:
  url: "/assets/blog/hello-world/cover.jpg"
---

Not a ton to say here. Lets dive into the code.

## Closures

### Function that return other functions

You already probably know a function can return a function.

```javascript
function createHelloFunction() {
  return function () {
    return "Hello";
  };
}
```

This function returns a function. So it can be called like this:

```javascript
createHelloFunction()(); // logs "Hello"

const helloFunction = createHelloFunction();
helloFunction(); // logs "hello"
```

### When a function is created it gets a copy of all variables it uses (independent of scope)

Lets do a little test. What if we define a variable out of the scope of our function and see how it will be "closed over" by the function.

```javascript
let globalScopeVar = 1;
function createHelloFunction() {
  return function () {
    return "Hello" + globalScopeVar;
  };
}

let fn1 = createHelloFunction();
fn1(); // returns "Hello1"
globalScopeVar = 2;
let fn2 = createHelloFunction();
fn2(); // returns "Hello2"
```

As you will notice the variable gets attached to the function when the function is created. That is how `javascript fn2()` returned the number `2` while `fn1()` returned the number `1`

Okay thats cool, so what?

Here is a case that might catch you off guard. Lets create a counter function.

```javascript
function createCounter(n) {
  return function () {
    return n++;
  };
}

let counter = createCounter(5);
counter(); // returns 5
counter(); // returns 6
counter(); // returns 7
counter(); // returns 8
```

Here we are closing over the function argument "n". Making it so we are able to have an internal counter that keeps track of state without an additional variable. "n" in this case almost acts like hidden state if you do not understand it is being closed over by a closure.

### Closures and Classes

Closures allow instances of classes to hold state. Each instance of a classes, closes over its variables it has access to to create an class instance that is unique. (In well written code this state is in the constructor method and not in random locations.)

## Hoisting

Hoisting means that you can use a function **before it is defined**. Basically "it is hoisted up to the top of the file." Like so:

```javascript
add(1, 2); // returns 3

function add(a, b) {
  return a + b;
}
```

This DOES NOT work for anonymous functions even if they are given a name like so:

```javascript
add(1, 2); // ReferenceError: Cannot access 'add' before initialization

const add = (a, b) => {
  return a + b;
};
```

## "of" vs "in" and pitfalls

## prototype chain

## the bind function

## Setting defaults with ||, &&, and the Nullish coalescing operator (??)

---
title: "Javascript Language Nuances"
excerpt: "Javascript is a fundamentally old language, with many different way to do things. This is a compendium of interesting non-intuitive code snippets that helped me be a better javascript developer"
coverImage: "/assets/blog/js-nuances/cover.jpg"
date: "2025-07-18"
author:
  name: Ali Unwala
  picture: "/assets/blog/authors/ali.png"
ogImage:
  url: "/assets/blog/js-nuances/cover.jpg"
---

Not a ton to say here. Lets dive into the code.

(For those that enjoy a bit of history the image is that of the [Tower of Babel](https://en.wikipedia.org/wiki/Tower_of_Babel) which is a parable meant to explain the existence of different languages and cultures)

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

## Optional chaining ?.

This operator allows you to access properties of an object safely without having to check if each subproperty is null.

```javascript
let teamMembers = {};
console.log(teamMembers.name.address); // TypeError: Cannot read properties of undefined (reading 'address')
```

This happens because `teamMembers.name` is undefined and then we call `undefined.address`

This lead to messy code like:

```javascript
let teamMembers = {};
if (teamMembers.name) {
  console.log(teamMembers.name.address); // TypeError: Cannot read properties of undefined (reading 'address')
}
```

Optional chaining is a nice solution that stops evaluation if a property is null/undefined. And returns undefined if evaluation was finished early.

```javascript
let teamMembers = {};
console.log(teamMembers?.name?.address); // undefined
```

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

## "in" usage and pitfalls

Formally from MDN: The in operator returns true if the specified property is in the specified object or its prototype chain.

The way I think about `in` is that looking in the keys of an object.

And because keys are always strings or Symbols you can get some strange outcomes. (This means if you use a number as a key it is coerced into string)

Lets look at some examples.

First lets focus on arrays:

```javascript
let arr = ["a", "b", 2, 3];
for (let elem in arr) {
  console.log(elem, typeof elem);
}
// This logs:
// 0 string
// 1 string
// 2 string
// 3 string
```

Seems odd as arrays do not have keys... Until you realize "under the hood" arrays DO have keys. Arrays are actually objects with key value pairs.

And because keys indexes are coerced into string each of the "numbers" 0-3 above are actually typeof "string"

So these 3 statements are equivalent:

```javascript
let arr = ["a", "b", 2, 3];
let arr2 = { 0: "a", 1: "b", 2: 2, 3: 3 };
let arr3 = { 0: "a", 1: "b", 2: 2, 3: 3 };
```

Which then makes this make sense (same output as above):

```javascript
let obj = { 0: "a", 1: "b", 2: 2, 3: 3 };
for (let elem in obj) {
  console.log(elem, typeof elem);
}
// This logs:
// 0 string
// 1 string
// 2 string
// 3 string
```

One large pitfall. It might seem good idea to use in for looping over indexes in an array.

```javascript
let arr = [1, 2, 3];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
  sum = sum + i;
}
console.log(sum); // TODO need better example
```

```javascript
let arr = [1, 2, 3];
let sum = 0;
for (let i in arr) {
  sum = sum + i;
}
console.log(sum); // "0012" Which is probably not what you were expecting
```

## "of" usage and pitfalls

## prototype chain

## the bind function

## Setting defaults with ||, &&, and the Nullish coalescing operator (??)

## Terms

### Polyfill

Allows new code features to work on older browsers by adding equivalent code that functionally is similar. For instance optional chaining, a newer language feature (.?), might not be available in every browser. So polyfill can help fill in the gaps by swapping in legacy way to do a similar operation.

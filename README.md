# omit-keys
> Utility to copy an object excluding given keys using single argument, an array of arguments or a callback.

## Usage
```js
var omitKeys = require('omit-keys');
import omitKeys from 'omit-keys';
```

## Format
```js
var newObj = omitKeys(obj, fn);
```

## Examples

```js
omitKeys({
  a: 2,
  b: 5
}, 'b');
 
//=> { a: 2 }
```

```js
omitKeys({
  a: 2,
  b: 5,
  c: 10
}, ['a', 'c']);
 
//=> { b: 5 }
```

```js
var fn = (value) => {
  return value === 10;
};
 
omitKeys({
  a: 2,
  b: 5,
  c: 10
}, fn);
 
//=> { c: 10 }
```

```js
var fn = (_, key) => {
  return key === 'a';
};
 
omitKeys({
  a: 2,
  b: 5,
  c: 10
}, fn);
 
//=> { a: 2 }
```

## Tests

To run the tests with mocha use:

```js
npm test
```

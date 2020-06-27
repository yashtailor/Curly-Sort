# Curly-Sort

## Installation
```
npm i curlysort
```

## curlysort : Function takes two params
- first parameter is an array of objects
- second parameter is the key, if the key is not present in any element that the function will add that the element and assign null 
- type of key must String
- if the type of the element is not an object(any of it), then it simply returns original array

## example use case
```
var curlysort = require('curlysort');

var arr = [
{
  x:201
},
{
  x:150
},
{
  x:170
},
{

}
]

console.log(curlysort(arr,'x'))
```
Returns : [ { x: null }, { x: 150 }, { x: 170 }, { x: 201 } ]

Love,
Yash

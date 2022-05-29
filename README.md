# STabs
***

### How create tabs
```js
new STabs({
    // selector or Node or Nodelist
    head: '.test',
    // selector or Node or Nodelist
    content: '.test-content',
    // @param string, active class for tab
    activeClass: 'selected'
});
```
***
### STabs static method 
```js
STabs.create({
	head: '.test',
	content: '.test-content',
	activeClass: 'selected'
});
// @return new instance STabs
```
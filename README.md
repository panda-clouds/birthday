
PCBirthday
=========
maintained by [PandaClouds.com](https://pandaclouds.com)

`PCBirthday`  Calcuates age in years,  in months if child is below 2 years old and in days if child is below 1 month old.


Installation
------------

1. If you want to use this library, you first need to install the [Node.js](https://nodejs.org/en/).

2. When you install node.js, will also be installed [npm](https://www.npmjs.com/).

3. Please run the following command.

```
npm install --save @panda-clouds/birthday
```

Usage
-----

### Node.js

```javascript
const PCBirthday = require('@panda-clouds/birthday');

// example usage

```

You can replace PCBirthday with any variable.


Methods
-------

[Unit Tests] are an additional resource for learning functionality.

### - mustExist()

requires the property to be set,
else throws error

Example:

```javascript
Parse.Cloud.beforeSave('Book', request =>{
	const data = new PCBirthday(request);
	data.prop('title').mustExist();    // will throw Error if request.object.get('title') doesn't exist
});
```



Contributions
-------------

Pull requests are welcome! here is a checklist to speed things up:

- modify `PCBirthday.js`
- add unit tests in `PCBirthday.spec.js`
- run `npm test`
- document method in `README.md`
- add your name to 'Contributors' in `README.md`


### Contributors

(Add your name)

- [*] [Marc Smith](https://github.com/mrmarcsmith)
      [Noor Aboud](https://github.com/nusa232)



[Unit Tests]: https://github.com/panda-clouds/string/blob/master/spec/PCBirthday.spec.js

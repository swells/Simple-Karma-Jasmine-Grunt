## Karma HelloWorld (hello-world)

> A Simple Karma/Jasmine/Grunt Demo to show all working together.

## Features

  * Karma
  * Jasmine
  * Grunt

## Installation

Clone the HelloWorld repo, then install the dev dependencies.

	$ git clone https://github.com/swells/hello-world.git
	$ cd hello-world
	$ npm install

## Build [Grunt](http://gruntjs.com)

### locally (out-of-the-box)

	$ ./node_modules/grunt-cli/bin/grunt

By default the Grunt command line interface `CLI` is installed locally as a
dev dependency in `package.json`. We do this in case you don't have administrator 
rights. As a result, this will not put the `grunt` executable in your PATH hence
you'll need to specify its explicit location when executing it, 
eg: `./node_modules/grunt-cli/bin/grunt`.

### globally (optional)

The perfered way to build is to install the Grunt command line interface `CLI` 
globally. This will allow you to have access to the `grunt` build command 
anywhere on your system.

	$ npm install -g grunt-cli

Then to build:

	$ cd hello-world
	$ grunt

## Running Test(s)

To run the test suite first invoke the following command within the repo, 
installing the development dependencies:

    $ npm install

then run the tests:

    $ npm test

OR

    $ ./node_modules/grunt-cli/bin/grunt test

OR (if CLI installed globally: npm install -g grunt-cli)

    $ cd hello-world
    $ grunt test    

That is it. Nothing very interesting other than Karam/Jasmine/Grunt work 
together.

## Contributors

#### project: hello-world

#### authors: 

  * Sean Wells

## License

(The MIT License)

Copyright (c) 2013 Sean Wells <sean.wells.sc@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
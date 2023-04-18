# 0x01. ES6 Promises

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/75862d67ca51a042003c.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230418%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230418T153740Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=2f76fd39d42f63966a36dda182c8571603ed1eb43187ac8770a88342c5cf5246)

Resources
---------

**Read or watch**:

*   [Promise](https://intranet.alxswe.com/rltoken/j_0FTFbkTg42JMcAbNPOVQ "Promise")
*   [JavaScript Promise: An introduction](https://intranet.alxswe.com/rltoken/2Q2LzNFokcUwpA2u3FKG6Q "JavaScript Promise: An introduction")
*   [Await](https://intranet.alxswe.com/rltoken/UXb3S2PMBe-SLJ55isMcow "Await")
*   [Async](https://intranet.alxswe.com/rltoken/_K0C7pgEjwaIzU9RpwCb8g "Async")
*   [Throw / Try](https://intranet.alxswe.com/rltoken/UTjDgvKk5l892Xslh0vqcQ "Throw / Try")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](https://intranet.alxswe.com/rltoken/Z4xW7_BFaRcrHxfDySjKuQ "explain to anyone"), **without the help of Google**:

*   Promises (how, why, and what)
*   How to use the `then`, `resolve`, `catch` methods
*   How to use every method of the Promise object
*   Throw / Try
*   The await operator
*   How to use an `async` function

Requirements
------------

*   All your files will be executed on Ubuntu 18.04 LTS using NodeJS 12.11.x
*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension
*   Your code will be tested using `Jest` and the command `npm run test`
*   Your code will be verified against lint using ESLint
*   All of your functions must be exported

Setup
-----

### Install NodeJS 12.11.x

(in your home directory):

    curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
    sudo bash nodesource_setup.sh
    sudo apt install nodejs -y
    

    $ nodejs -v
    v12.11.1
    $ npm -v
    6.11.3
    

### Install Jest, Babel, and ESLint

in your project directory:

*   Install Jest using: `npm install --save-dev jest`
*   Install Babel using: `npm install --save-dev babel-jest @babel/core @babel/preset-env @babel/cli`
*   Install ESLint using: `npm install --save-dev eslint`

Files
-----

### `package.json`

Click to show/hide file contents

    
    {
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "dev": "npx babel-node",
        "test": "jest",
        "full-test": "./node_modules/.bin/eslint [0-9]*.js && jest"
      },
      "devDependencies": {
        "@babel/core": "^7.6.0",
        "@babel/node": "^7.8.0",
        "@babel/preset-env": "^7.6.0",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "jest": "^24.9.0"
      }
    }

### `babel.config.js`

Click to show/hide file contents

    
    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };

### `utils.js`

Use when you get to tasks requiring `uploadPhoto` and `createUser`.

Click to show/hide file contents

    
    export function uploadPhoto() {
      return Promise.resolve({
        status: 200,
        body: 'photo-profile-1',
      });
    }

### `.eslintrc.js`

Click to show/hide file contents

    
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };

### and…

Don’t forget to run `$ npm install` when you have the `package.json`

Response Data Format
--------------------

`uploadPhoto` returns a response with the format

    {
      status: 200,
      body: 'photo-profile-1',
    }
    

`createUser` returns a response with the format

    {
      firstName: 'Guillaume',
      lastName: 'Salva',
    }
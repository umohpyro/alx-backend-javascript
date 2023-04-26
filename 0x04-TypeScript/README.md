# 0x04. Typescript

![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2019/12/baea85b5e9a9fb5c36ec.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230426%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230426T124344Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=4285e4462a1846f73355c6a4a507817438b2e66c4e1aae33ef0d73d0fc33b659)

Resources
---------

**Read or watch**:

*   [TypeScript in 5 minutes](/rltoken/waTSa9Mguj912pel9On57w "TypeScript in 5 minutes")
*   [TypeScript documentation](/rltoken/iPO8DlHCGzc1jnojLoP9HA "TypeScript documentation")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/PM-5MDItTT0M8Aaa2QIEyQ "explain to anyone"), **without the help of Google**:

*   Basic types in Typescript
*   Interfaces, Classes, and functions
*   How to work with the DOM and Typescript
*   Generic types
*   How to use namespaces
*   How to merge declarations
*   How to use an ambient Namespace to import an external library
*   Basic nominal typing with Typescript

Requirements
------------

*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files should end with a new line
*   All your files will be transpiled on Ubuntu 18.04
*   Your TS scripts will be checked with `jest` (version 24.9.\* )
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `ts` extension when possible
*   The Typescript compiler should not show any warning or error when compiling your code

Configuration Files
-------------------

Please use these files for the following tasks

### `package.json`

Click to show/hide file contents

    
    {
      "name": "typescript_dependencies",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "start-dev": "webpack-dev-server --open",
        "build": "webpack",
        "test": "jest"
      },
      "keywords": [],
      "author": "",
      "license": "ISC",
      "devDependencies": {
        "@babel/plugin-proposal-export-default-from": "^7.5.2",
        "@babel/preset-typescript": "^7.7.2",
        "@types/jest": "^24.0.23",
        "@typescript-eslint/eslint-plugin": "^2.4.0",
        "@typescript-eslint/parser": "^2.4.0",
        "clean-webpack-plugin": "^3.0.0",
        "fork-ts-checker-webpack-plugin": "^1.5.1",
        "html-webpack-plugin": "^3.2.0",
        "jest": "^24.9.0",
        "source-map": "^0.7.3",
        "ts-jest": "^24.1.0",
        "ts-loader": "^6.2.0",
        "typescript": "^3.6.4",
        "webpack": "^4.41.2",
        "webpack-cli": "^3.3.9",
        "webpack-dev-server": "^3.8.2"
      }
    }

### `.eslintrc.js`

Click to show/hide file contents

    
    module.exports =  {
      parser:  '@typescript-eslint/parser',
      extends:  [
        'plugin:@typescript-eslint/recommended',  // Uses the recommended rules from @typescript-eslint/eslint-plugin
      ],
      parserOptions:  {
        ecmaVersion:  2018,
        sourceType:  'module',
      },
      rules:  {
      },
    };

### `tsconfig.json`

Click to show/hide file contents

    
    {
      "compilerOptions": {
        "outDir": "./dist/",
        "sourceMap": true,
        "noImplicitAny": true,
        "module": "es6",
        "target": "es5",
        "allowJs": true,
        "moduleResolution": "node"
      }
    }

### `webpack.config.js`

Click to show/hide file contents

    
    const path = require("path");
    const HtmlWebpackPlugin = require('html-webpack-plugin');
    const { CleanWebpackPlugin } = require('clean-webpack-plugin');
    const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
    
    module.exports = {
      entry: "./js/main.ts",
      devtool: "inline-source-map",
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            loader: 'ts-loader',
            options: {
              transpileOnly: true
            }
          }
        ]
      },
      resolve: {
        extensions: [".tsx", ".ts", ".js"]
      },
      devServer: {
        contentBase: "./dist"
      },
      plugins: [
        new ForkTsCheckerWebpackPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
          title: "Development"
        })
      ],
      output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
      }
    };

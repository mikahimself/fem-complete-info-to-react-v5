# Project setup

1. Initialize project: `npm init`
1. Install `Prettier` as a development time dependency: `npm i -D prettier`
1. Add a script to run prettier into `package.json` under the `scripts` object: `"format": "prettier \"src/**/*.{js, html}\" --write",`
1. Install `Prettier` on Visual Studio Code, and restart Visual Studio Code
1. Setup `Prettier`:
    1. In `File` > `Preferences`, enable option `Editor: Format On Save`
    1. In `File` > `Preferences`, enable option `Prettier: Require Config`. This way, `Prettier` will only run on projects that use Prettier.
    1. In the root folder of the project, add a filed named `.prettierrc`. To use the default options from Prettier, enter `{}` (an empty object) as the file's content.
1. Install `ESLint` and `eslint-config-prettier`: `npm i -D eslint eslint-config-prettier`.
    So, what's the difference between ESLint and Prettier? The latter is only concerned with the files' formatting. It's not concerned at all with variable or method usage. ESLint on the other hand looks at methods and accessibility and such, and also some formatting issues. ESLint is not, however, as powerful as Prettier when it comes to formatting, so `eslint-config-prettier` comes in handy here. Basically, it turns off ESLint rules that might either be unnecessary or conflict with rules set in Prettier.
1. In the root folder of the project, create a file called `.eslintrc.json` and set its content to:
```
{
    "extends": [
        "eslint:recommended",
        "prettier",
    ],
    "plugins": [],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "env": {
        "es6": true,
        "browser": true,
        "node": true
    }
}
```
1. In `package.json`, add a script for linting the project: `"lint": "eslint \"src/**/*.{js, jsx}\" --quiet",` 
1. In the root folder of the project, add the `.gitignore` file with the following contents:
````
node_modules/
.DS_Store
.cache
dist/
coverage/
.vscode/
.env
```  

# Eslint airbnb configuration set up

## instaler les dev dependencies

```sh
yarn add -D eslint-config-airbnb eslint-import-resolver-alias eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks
```

## crée  un fichier .eslintrc a la racine du projet

```.eslintrc
{
  "extends": "airbnb",
  /* "parser": "@babel/eslint-parser", */
  "env": {
    "browser": true
  },
  "rules": {
    "brace-style": ["error", "stroustrup"],
    "no-param-reassign": [
      "error",
      {
        "props": false
      }
    ],
    "no-mixed-operators": [
      "error",
      {
        "allowSamePrecedence": true
      }
    ],
    "jsx-a11y/no-static-element-interactions": "off",
    "jsx-a11y/href-no-hash": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/mouse-events-have-key-events": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/no-noninteractive-element-interactions": "off",
    "react/jsx-filename-extension": "off",
    "react/forbid-prop-types": "off",
    "react/no-access-state-in-setstate": "warn",
    "react/jsx-one-expression-per-line": "off",
    "react/destructuring-assignment": "warn",
    "react/no-unescaped-entities": "off",
    "react/jsx-props-no-spreading": "off",
    "react/state-in-constructor": "off",
    "func-names": "off",
    "object-shorthand": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off"
  },
  "settings": {
    "import/resolver": {
      "alias": {
        "extensions": [".js"],
        "map": [
          ["src", "./src"],
          ["app", "./src"]
        ]
      }
    }
  }
}
```

## créer fichier .eslintignore a la racine du projet

```.eslintignore
node_modules/
dist/
config/
postcss.config.js
```

## ajouter ces dependence pour la gestion de sass 

```sh
yarn add -D sass-loader sass webpack
```

et ne pas oublier d'importé le fichier index.scss du dossier styles dans le composant app ou index pour qu'il soit pris en compte(reset var etc...)
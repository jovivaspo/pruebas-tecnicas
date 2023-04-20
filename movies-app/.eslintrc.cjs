module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"settings": {
		"react": {
			"version": "detect"
		}
	},
	"extends": [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime"
	],
	"overrides": [
	],
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"react"
	],
	"rules": {
		"indent": [
			"error",
			"tab"
		],
		"linebreak-style": [
			"error",
			"windows"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"never"
		],
		"no-mixed-spaces-and-tabs": 0,
	}
}

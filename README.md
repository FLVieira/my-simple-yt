This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## For testing in your own system

Get a API key from Youtube Data API v3 on the APIs and services from Google Console.
Setup the file api.js (or any name that you prefer) inside /src/services and them setup
the file like the example below:

const API_KEY = 'YOUR_API_KEY';

export default API_KEY;

After that configuration, you are ready to go. Run npm i, and after all the dependencies
install, run npm start on your terminal.

## Observations

This application is based on https://github.com/xumes/xumestube, here i make
some adjustments to make it be based on React Hooks, both in the React part
itself and in the Redux part.
p.s: I'm deactivating a bunch of eslint rules, feel free to active them all back.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

# A digital clock with React Framework

A React-app with a digital clock with the following requirements.

## Requirements

- Create a website that just displays a (digital) clock that is ticking.
  - Example: If it would be 10:00:00 now then it should show: 10:00:00, then 10:00:01, then 10:00:02 and so on
- No server-side code should be used
- Frameworks and plugins are allowed
- Whenever the clock is showing a second that can be divided by 15 fractionless (Example: 09:07:15 or 09:07:45), the whole browser window (content area) should flash in a bright color for 250ms.
- Whenever the clock is showing a second that can be divided by 5 fractionless (Example: 09:07:15) it should show a random giphy image
- The data and giphy image can be retrieved as a JSON via: http://api.giphy.com/v1/gifs/random?api_key=API_KEY (Documentation: https://developers.giphy.com/docs/api/endpoint#random )

## Local Development

`cd digital-clock-with-React/`

Depending on your OS, use one of the commands in this [stackoverflow answer](https://stackoverflow.com/a/74726292/12985002):

`export NODE_OPTIONS=--openssl-legacy-provider`

`npm install superagent`

`npm install --save react-bootstrap bootstrap`

`npm start`

## Usage of Codespaces

When using Github-Codespaces, type the following commands:

`cd digital-clock-with-React/`

`export NODE_OPTIONS=--openssl-legacy-provider`

`npm start`

### TODOs

- Write more React-tests.
- Deploy the app with Codespaces, netlify or other services. Care of the Codespaces service prices.

# React Redux With Node Server
This is a simple project of React-Redux with Node server and Login certificate.

### Dependencies
  * react-router
  * react-redux
  * react-thunk
  * webpack-dev-server
  * react-hot-loader
  * express

### Libs
  * Bootstrap
  * jquery 1.x

### How to use
  * Node server: server/server.js (port 3004)
  * Webpack dev server: server.js (port 3000)

### Login certificate
  1. email and pass word type it casually.
  2. Send a api to "http://localhost/login" to get a response.
  3. Using react-thunk in authAction to handle async action.
  4. Getting a response to store in session storage.
  5. If user type "/" in url, react-router will check the session storage.
  6. If session storage exist "auth". then, navigate to Main page. If NOT exist, navigate to Login page.

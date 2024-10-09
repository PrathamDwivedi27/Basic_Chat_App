- If we use socket.emit rather than io.emit then only the client will get mesg no one else.
- If you use socket.broadcast .emit then except the client all other will get message.
- In the context of web development with Node.js, a view engine is a template engine that allows you to use static template files in your application. At runtime, the view engine replaces variables in a template file with actual values and transforms the template into an HTML file sent to the client. This process helps in separating the application logic from the presentation layer.

- EJS (Embedded JavaScript) is one such view engine. It enables you to write HTML templates with embedded JavaScript. EJS makes it easy to generate HTML with plain JavaScript and provides simple syntax for including JavaScript code directly within your HTML.

- We are using ejs module here.
  

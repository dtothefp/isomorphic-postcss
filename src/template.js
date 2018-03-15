export default ({ body }) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <link href="/main.css"></script>
      </head>
      <body>
        <div id="root">${body}</div>
      </body>
      <script src="/bundle.js"></script>
    </html>
  `
}

export const indexTemplate = (content, code, clientId, redditSecret) => `

<!DOCTYPE html>
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Title</title>
  <script src="/static/client.js" type="application/javascript"></script>
  <script>
  window.__code__ = '${code}';
  window.__clientId__ = '${clientId}';
  window.__redditSecret__ = '${redditSecret}';
  </script>
  </head>
<body>
  <div id="react_root">${content}</div>
  <div id="modal_root"></div>
  <div id="comment_root"></div>
</body>
</html>
`;
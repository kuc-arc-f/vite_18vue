
import express from 'express';
import { renderToString } from 'react-dom/server';
const app = express();
//

//
//import Top from './Top';
const topHtml = `
<html>
<head>
    <title>welcome</title>
</head>
<div id="app"></div>
<script type="module" src="/static/main.js"></script>
</html>
`;
const prodHtml = `
<html>
<head>
    <title>welcome</title>
</head>
<div id="app"></div>
<script type="module" src="/public/static/main.js"></script>
</html>
`;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
console.log("env=", process.env.NODE_ENV);
//console.log("VITE_API_URL=", import.meta.env.VITE_API_URL);
//
const errorObj = {ret: "NG", messase: "Error"};
// route
import ApiRouter from './api-router'

//API
app.use('/api/*', async (req, res) => {
  const url = req.originalUrl;
  const response = await ApiRouter.route(url, req, res);
  return res.json(response);  
});
//
app.get('/*', (req, res) => {
  try {
//    res.send(renderToString(Top()));
    if(process.env.NODE_ENV === "develop"){
      res.send(topHtml);
    }else{
      res.send(prodHtml);
    }
  } catch (error) {
    res.sendStatus(500);
  }
});

//start
const PORT = 3000;
app.listen(PORT);
console.log(`start portNo=${PORT}`);

export default app;
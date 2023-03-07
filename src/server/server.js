import express from 'express';
import ReactDOM from 'react-dom/server';
import { App } from '../App';
import { indexTemplate } from './indexTemplate';
import compression 

const PORT = process.env.PORT || 3000;
const app = express();
//поменять ссылки переходов с локалхост
app.use('/static', express.static('./dist/client'));
app.get('/auth', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()), req.query.code, process.env.CLIENT_ID, process.env.SECRET),
  );
  // axios
  //   .post(
  //     'https://www.reddit.com/api/v1/access_token',
  //     `grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
  //     {
  //       auth: { username: process.env.CLIENT_ID, password: '6HcKAN5xwKoP1VwUiGR1bStv3Xd01A' },
  //       headers: { 'Content-type': 'application/x-www-form-urlencoded' }
  //     } 
  //   ) 
  //   .then(({ data }) => {
  //     res.send(
  //       indexTemplate(ReactDOM.renderToString(App()), data['access_token']),
  //     );
  //   })
  //   .catch(console.log);
});

app.get('*', (req, res) => {
  res.send(
    indexTemplate(ReactDOM.renderToString(App()))
  );
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`);
});


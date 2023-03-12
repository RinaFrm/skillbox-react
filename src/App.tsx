import { hot } from 'react-hot-loader/root';
import React, { useEffect, useState } from 'react';
import { Layout } from './shared/Layout';
import './main.global.css';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './store/reducer';
import thunk from 'redux-thunk';
//import { BrowserRouter } from 'react-router-dom';
import { Header } from './shared/Layout/Header';
import { Content } from './shared/Layout/Content';
import { saveToken } from './store/token/tokenActions';
import { HashRouter } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
));

function AppComponent() {
  // useEffect(() => {
  // @ts-ignore
  // store.dispatch(timeout(3000))
  //   if(window.__token__) {
  //     store.dispatch(setToken(window.__token__))
  //   }
  // }, []);

  //store.dispatch(saveToken());

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Provider store={store}>
      {mounted && (
        //<BrowserRouter>
        <HashRouter>
          <Layout>
            <Header/>
            <Content/>
          </Layout>
        </HashRouter>
        //</BrowserRouter>
      )}  
    </Provider>
  )
}

export const App = hot(() => <AppComponent/>);
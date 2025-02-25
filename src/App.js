import './App.css';
import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Header, HomePage, Exchanges, Cryptocurrencies, Cryptodetails, News } from './_components';

function App() {
  return (
    <div className='app'>
      <div className='header'>
        <Header />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
              <Route exact path='/'>
                <HomePage />
              </Route>
              <Route exact path='/exchanges'>
                <Exchanges />
              </Route>
              <Route exact path='/cryptocurrencies '>
                <Cryptocurrencies />
              </Route>
              <Route exact path='/crypto/:coinId'>
                <Cryptodetails />
              </Route>
              <Route exact path='/news'>
                <News />
              </Route>
            </Switch>
          </div>
        </Layout>
      </div>
      <div className='footer'>

      </div>

    </div>
  );
}

export default App;

import React from 'react';
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import './sass/App.scss'

import { client } from './graphql/client';
import Layout from './components/templates/Layout';
import Router from './router';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Layout>
          <Router />
        </Layout>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;

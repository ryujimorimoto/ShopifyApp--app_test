import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { AppProvider, EmptyState, Page } from '@shopify/polaris';
import { authenticatedFetch } from '@shopify/app-bridge-utils';

import enTranslations from '@shopify/polaris/locales/en.json';
import React from 'react';

export default function App() {
  const client = new ApolloClient({
    link: new HttpLink({
      credentials: 'same-origin',
      fetch: authenticatedFetch(window.app), // created in shopify_app.js
      uri: '/graphql'
    }),
    cache: new InMemoryCache()
  });

  return (
    <AppProvider i18n={enTranslations}>
      <ApolloProvider client={client}>
        <Page>
          <EmptyState>
            Shopify App with Rails and React ⚡️
          </EmptyState>
        </Page>
      </ApolloProvider>
    </AppProvider>
  );
}
// import React from "react";
// import PropTypes from "prop-types";
// class App extends React.Component {
//   render () {
//     return (
//       <React.Fragment>
//       </React.Fragment>
//     );
//   }
// }

// export default App

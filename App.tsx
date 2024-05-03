import React, { useEffect } from 'react';
import { useDataFetch } from './src/hooks/useDataFetching';
import { Navigation } from './src/components/Navigation';
import {Provider} from "react-redux"
import { store } from './src/app/store';


function App(): React.JSX.Element {

  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}


export default App;

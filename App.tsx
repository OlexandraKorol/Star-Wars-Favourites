import React, { useEffect } from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import { useDataFetch } from './src/hooks/useDataFetching';


function App(): React.JSX.Element {
  const { response } = useDataFetch("people");


  useEffect(() => {
    console.log(response);
    
  }, [response]);



  return (
    <SafeAreaView>
      <Text>
        96986986986

      </Text>
      
    </SafeAreaView>
  );
}


export default App;

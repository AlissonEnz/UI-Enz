import React, { useState } from 'react';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { ThemeProvider, Block, Button, Divider } from 'ui-enz';

export default function App({ skipLoadingScreen }) {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  async function loadResourcesAsync() {
    return Promise.all([
      Font.loadAsync({
        'Rubik-Regular': require('ui-enz/src/assets/fonts/Rubik-Regular.ttf'),
        'Rubik-Medium': require('ui-enz/src/assets/fonts/Rubik-Medium.ttf'),
        'Rubik-Bold': require('ui-enz/src/assets/fonts/Rubik-Bold.ttf'),
        'Rubik-Light': require('ui-enz/src/assets/fonts/Rubik-Light.ttf')
      })
    ]);
  }

  function handleLoadingError(error) {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  }

  function handleFinishLoading() {
    setIsLoadingComplete(true);
  }

  if (!isLoadingComplete && !skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={handleFinishLoading}
      />
    );
  }

  return (
    <ThemeProvider>
      <Block center middle margin={12}>
        <Divider />
        <Button large>Welcome</Button>
      </Block>
    </ThemeProvider>
  );
}

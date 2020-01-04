import React from 'react';
import { Text } from 'react-native';
import { ThemeProvider, Block, Button } from 'ui-enz';

export default function App() {
  return (
    <ThemeProvider theme={{ color: { primary: '#2c3654' } }}>
      <Block flex center middle>
        <Button>
          <Text>Press</Text>
        </Button>
      </Block>
    </ThemeProvider>
  );
}

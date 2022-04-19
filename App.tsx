import React, {Component} from 'react';
import {WebView} from 'react-native-webview';

// ...
class App extends Component {
  render() {
    return (
      <WebView
        source={{
          uri: 'https://test.youtingkun.com/#/collectionAccount?indentNo=GO220322724114',
        }}
      />
    );
  }
}

export default App;

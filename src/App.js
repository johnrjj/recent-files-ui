// @flow
import React, { Component } from 'react';
import styled from 'styled-components';

// App container goes from left to right (flex-direction: row)
const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
`;

// Sidenav Container goes from top to bottom (flex-direction: column)
const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 18rem;
`;

// Content Pane Container goes from top to bottom (flex-direction: column)
const ContentPaneContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

class App extends Component {
  render() {
    return (
      <AppContainer>
        <SideNavContainer>SideNav Container</SideNavContainer>
        <ContentPaneContainer>Our Content Pane</ContentPaneContainer>
      </AppContainer>
    );
  }
}

export default App;

// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Plus } from 'react-feather';
import { theme, colors } from '../colors';

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 18rem;
`;

// Added in justify-content and paddings
const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  background-image: linear-gradient(
    -180deg,
    ${colors.lightGray} 25%,
    #f3f1f5 100%
  );
  padding-top: 6.5rem;
  padding-bottom: 9rem;
`;

// We'll style this in the next step
const MainMenuContainer = styled.div``;

// Upload container
const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-basis: 9rem;
  min-height: 9rem;
`;

export {
  SideNavContainer,
  MenuContainer,
  MainMenuContainer,
  UploadContainer,
  ProfileContainer,
};

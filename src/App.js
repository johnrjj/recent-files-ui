// @flow
import React, { Component } from 'react';
import styled from 'styled-components';
import { Logo } from './components/Logo';
import {
  SideNavContainer,
  MenuContainer,
  MainMenuContainer,
  NavItems,
  NavItem,
  SideNavAddButton,
  UploadStatusComponent,
  ProfileContainer,
  Avatar,
  ProfileName,
  ProfileDropdownIcon,
} from './components/SideNav';
import {
  Page,
  PageHeader,
  Section,
  Sections,
  SectionGroupHeader,
  SectionGrid,
} from './components/ContentPanel';
import { VideoGridElement } from './components/VideoGridElement';
import { AudioGridElement } from './components/AudioGridElement';
import { fetchRecentFilesByDate } from './api';

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 100%;
`;

interface AppState {
  user: {
    name: string,
    status: string,
    avatarUrl: string,
    notifications: Array<*>,
  };
  pageTitle: string;
  groupTitle: string;
  groupMemberCount: number;
  recentFiles?: Array<*>;
}

class App extends Component<*, AppState> {
  state = {
    user: {
      name: 'Linda Smith',
      status: 'active',
      avatarUrl: 'https://randomuser.me/api/portraits/women/68.jpg',
      notifications: [{}, {}],
    },
    pageTitle: 'Recent Files',
    groupTitle: 'Frame marketing',
    groupMemberCount: 9,
  };

  async componentDidMount() {
    const recentFiles = await fetchRecentFilesByDate();
    this.setState({
      recentFiles,
    });
  }

  render() {
    return (
      <AppContainer>
        <SideNavContainer>
          <MenuContainer>
            <MainMenuContainer>
              <Logo />
              <NavItems>
                <NavItem active>Recent files</NavItem>
                <NavItem>Projects</NavItem>
                <NavItem>Teams</NavItem>
                <NavItem>Archive</NavItem>
              </NavItems>
              <SideNavAddButton />
            </MainMenuContainer>
            <UploadStatusComponent
              fileCount={5}
              speedLabel={'9.8 Mbps'}
              timeLeftLabel={'52 seconds left'}
            />
          </MenuContainer>
          <ProfileContainer>
            <Avatar
              status={this.state.user.status}
              src={this.state.user.avatarUrl}
            />
            <ProfileName>{this.state.user.name}</ProfileName>
            <ProfileDropdownIcon />
          </ProfileContainer>
        </SideNavContainer>
        <Page>
          <PageHeader
            pageTitle={this.state.pageTitle}
            groupTitle={this.state.groupTitle}
            groupMemberCount={this.state.groupMemberCount}
            notifications={this.state.user.notifications}
          />
          <Sections>
            {this.state.recentFiles &&
              this.state.recentFiles.map(filesByDate => (
                <Section>
                  <SectionGroupHeader>{filesByDate.date}</SectionGroupHeader>
                  <SectionGrid>
                    {filesByDate.files &&
                      filesByDate.files.map(
                        file =>
                          file.type === 'video' ? (
                            <VideoGridElement
                              backgroundImage={file.thumbnailUrl}
                              {...file}
                            />
                          ) : (
                            <AudioGridElement
                              waveformThumbnailUrl={file.thumbnailUrl}
                              {...file}
                            />
                          )
                      )}
                  </SectionGrid>
                </Section>
              ))}
          </Sections>
        </Page>
      </AppContainer>
    );
  }
}

export default App;

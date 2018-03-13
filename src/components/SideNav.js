import React from 'react';
import styled from 'styled-components';
import { Plus, ChevronDown } from 'react-feather';
import { theme, colors } from '../colors';

const SideNavContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 22rem;
`;

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
  padding-top: 4rem;
  padding-bottom: 6rem;
`;

const MainMenuContainer = styled.div`
  padding-left: calc(7rem + 3.5rem);
`;

const NavItems = styled.div`
  margin-bottom: 2rem;
`;

const NavItem = styled.div`
  font-size: 18px;
  color: ${props => (props.active ? theme.primaryText : theme.secondaryText)};
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 18px;
  position: relative;
  ${props =>
    props.active
      ? `
    :before {
      position: absolute;
      right: 100%;
      top: 50%;
      display: inline-block;
      margin: 0 1rem 0.25rem 0;
      height: 2px;
      content: "";
      background-color: ${theme.secondaryText};
      width: 2.5rem;`
      : ''}; 
  }
`;

const AddButtonContainer = styled.div`
  float: right;
  transform: translateX(1rem);
`;

const AddBoxButton = styled.button`
  height: 4rem;
  width: 4rem;
  background-color: ${theme.primaryAction};
  border-radius: 8px;
`;

const AddButton = (...props) => (
  <AddBoxButton {...props}>
    <Plus size="20px" color="white" />
  </AddBoxButton>
);

const SideNavAddButton = props => (
  <AddButtonContainer>
    <AddButton {...props} />
  </AddButtonContainer>
);

const UploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProgressBar = ({ percentComplete, ...rest }) => (
  <div
    style={{ width: '100%', backgroundColor: '#E2E0E6', marginBottom: '1rem' }}
  >
    <div
      style={{
        width: '70%',
        height: '2px',
        backgroundColor: theme.primaryText,
      }}
    />
  </div>
);

const UploadStatusComponent = ({
  percentComplete,
  fileCount,
  speedLabel,
  timeLeftLabel,
}) => (
  <UploadContainer>
    <div
      style={{
        marginLeft: '7rem',
        color: theme.primaryText,
        marginBottom: '1rem',
        letterSpacing: '0.5px',
        fontWeight: '700',
      }}
    >
      Uploading {fileCount} files
    </div>
    <ProgressBar percentComplete={percentComplete} />
    <div
      style={{
        marginLeft: '7rem',
        fontSize: '0.75rem',
        color: theme.secondaryText,
        letterSpacing: '0.5px',
      }}
    >
      {speedLabel} · {timeLeftLabel}
    </div>
  </UploadContainer>
);

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  flex-basis: 9rem;
  min-height: 9rem;
  padding-left: 7rem;
`;

const ProfileImage = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 16px;
`;

const ProfileConnectionStatus = styled.div`
  width: 13px;
  height: 13px;
  border: 3px solid ${theme.connection};
  border-radius: 40%;
`;

const ProfileImageAndStatusIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  margin-bottom: 0.5rem;
`;

const ProfileName = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${theme.primaryText};
  margin-right: 0.5rem;
`;

const ProfileDropdownIcon = props => (
  <ChevronDown size="16" color={theme.secondaryText} {...props} />
);

const Avatar = ({ status, ...props }) => (
  <ProfileImageAndStatusIndicatorContainer>
    <ProfileConnectionStatus
      status
      style={{ transform: 'translate(-6px, 4px)' }}
    />
    <ProfileImage style={{ marginRight: '16px' }} {...props} />
  </ProfileImageAndStatusIndicatorContainer>
);

export {
  SideNavContainer,
  MenuContainer,
  MainMenuContainer,
  UploadContainer,
  UploadStatusComponent,
  NavItems,
  NavItem,
  SideNavAddButton,
  ProfileContainer,
  Avatar,
  ProfileName,
  ProfileDropdownIcon,
};

import React from 'react';
import styled from 'styled-components';
import { Plus, Search, Users } from 'react-feather';
import { theme } from '../colors';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-left: 6rem;
  overflow-y: auto;
`;

const ContentPanelTop = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-bottom: 1.5rem;
`;

const ContentHeader = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-bottom: 1rem;
`;

const ContentMembers = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const ContentMemberCount = styled.h4`
  color: ${theme.secondaryText};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
`;

const ContentMemberThumbnails = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

const AddBoxButton = styled.button`
  height: 2rem;
  width: 2rem;
  background-color: #a4abc4;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdditionalMembers = styled.button`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  letter-spacing: 1px;
  font-weight: 700;
  width: 2rem;
  background-color: #20222b;
  color: white;
  border-radius: 8px;
`;

const TinyAvatar = styled.img`
  margin-left: 0.5rem;
  display: block;
  height: 2rem;
  width: 2rem;
  background-color: ${theme.secondaryText};
  border-radius: 8px;
  object-fit: contain;
`;

const UserOptionsContainer = styled.div`
  display: flex;
  flex-shrink: 2;
  flex-basis: 22rem;
  justify-content: flex-end;
  align-items: center;
  padding: 3rem 6rem 0 0;
  background-image: linear-gradient(-180deg, #eef1fc 33.3%, #ffffff 100%);
`;

const ContentInfoContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  flex: 1;
  padding-top: 4rem;
  padding-right: 4rem;
`;

const HeaderSubtitle = styled.h2`
  color: ${theme.secondaryText};
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.5px;
  margin-bottom: 2rem;
`;

const NotificationCount = styled.button`
  display: block;
  height: 3rem;
  width: 3rem;
  font-size: 1rem;
  color: #ffffff;
  background-color: ${theme.notification};
  border-radius: 8px;
  margin-left: 2rem;
`;

const HeaderTitle = styled.h1`
  color: ${theme.primaryText};
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const SearchIcon = styled(Search)``;

const UsersIcon = styled(Users)`
  margin-left: 2rem;
`;

const PageHeader = ({
  pageTitle,
  groupTitle,
  groupMemberCount,
  notifications,
}) => (
  <ContentPanelTop>
    <ContentInfoContainer>
      <ContentHeader>
        <HeaderSubtitle>{pageTitle}</HeaderSubtitle>
        <HeaderTitle>{groupTitle}</HeaderTitle>
      </ContentHeader>
      <ContentMembers>
        <ContentMemberCount>{groupMemberCount} Members</ContentMemberCount>
        <ContentMemberThumbnails>
          <AddBoxButton>
            <Plus size="20px" color="white" />
          </AddBoxButton>
          <TinyAvatar src={'https://randomuser.me/api/portraits/women/2.jpg'} />
          <TinyAvatar src={'https://randomuser.me/api/portraits/men/41.jpg'} />
          <TinyAvatar src={'https://randomuser.me/api/portraits/men/31.jpg'} />
          <TinyAvatar
            src={'https://randomuser.me/api/portraits/women/90.jpg'}
          />
          <AdditionalMembers>
            +{Math.max(0, groupMemberCount - 3)}
          </AdditionalMembers>
        </ContentMemberThumbnails>
      </ContentMembers>
    </ContentInfoContainer>
    <UserOptionsContainer>
      <SearchIcon />
      <UsersIcon />
      {notifications && (
        <NotificationCount>{notifications.length}</NotificationCount>
      )}
    </UserOptionsContainer>
  </ContentPanelTop>
);

const Section = styled.section`
  padding-right: 6rem;
  margin-bottom: 3rem;
`;

const Sections = styled.div``;

const SectionGroupHeader = styled.h3`
  color: ${theme.secondaryText};
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
`;

const SectionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(13rem, 1fr));
  grid-gap: 22px;
  grid-auto-rows: minmax(5rem, auto);
  grid-auto-flow: dense;
`;

export { Page, PageHeader, Section, Sections, SectionGroupHeader, SectionGrid };

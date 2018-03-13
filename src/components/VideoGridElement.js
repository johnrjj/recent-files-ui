import React from 'react';
import styled from 'styled-components';
import { MessageCircle } from 'react-feather';
import { GridElement } from './BaseGridElement';

const VideoGridElementContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  padding: ${props => (props.featured ? '1.5rem' : '1rem')};
  background-image: ${props => `url('${props.backgroundImage}')`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  border-radius: 1rem;
  box-shadow: inset 0 -100px 100px -40px rgba(32, 34, 44, 0.5);
`;

const VideoGridTopRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-self: flex-end;
`;

const VideoGridBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const VideoGridBottomLeft = styled.div``;

const VideoGridBottomRight = styled.div`
  display: flex;
  align-items: center;
`;

const VideoCommentIcon = styled(MessageCircle)`
  fill: #ffffff;
  color: #ffffff;
  height: 14px;
  width: 14px;
  opacity: 0.7;
`;

const VideoCommentCount = styled.span`
  color: #ffffff;
  opacity: 0.7;
  margin-left: 0.25rem;
`;

const VideoLengthDisplay = styled.div`
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  background-color: ${props => props.backgroundColor || '#62b4e0'};
  border-radius: 8px;
  letter-spacing: 0.5px;
  opacity: 0.87;
  padding: 0.25rem 0.5rem;
`;

const VideoInProgressContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
  color: #ffffff;
  background-color: #1e708d;
  border-radius: 8px;
  letter-spacing: 0.5px;
  opacity: 0.8;
  padding: 0.25rem 0.5rem;
  margin-right: 0.25rem;
`;

const VideoInProgressCircle = styled.div`
  height: 0.5rem;
  width: 0.5rem;
  border-radius: 100%;
  margin-right: 0.25rem;
  background-color: #4cbef3;
`;

const VideoTitle = styled.div`
  color: #ffffff;
  opacity: 0.87;
  font-size: ${props => (props.featured ? '1rem' : '0.75rem')};
  letter-spacing: 0.75px;
  margin-bottom: 0.5rem;
`;

const VideoSubtitle = styled.div`
  font-weight: 400;
  color: #ffffff;
  letter-spacing: 0.5px;
  opacity: 0.6;
  font-size: 0.75rem;
`;

const VideoInProgressDisplay = ({ children }) => (
  <VideoInProgressContainer>
    <VideoInProgressCircle />
    {children}
  </VideoInProgressContainer>
);

const VideoGridElement = props => (
  <GridElement {...props}>
    <VideoGridElementContainer {...props}>
      <VideoGridTopRow>
        {props.inProgress && (
          <VideoInProgressDisplay>In Progress</VideoInProgressDisplay>
        )}
        <VideoLengthDisplay backgroundColor={props.thumbnailPrimaryColor}>
          02:14{/* todo, use real length */}
        </VideoLengthDisplay>
      </VideoGridTopRow>
      <VideoGridBottomRow>
        <VideoGridBottomLeft>
          {props.title && (
            <VideoTitle featured={props.featured}>{props.title}</VideoTitle>
          )}
          <VideoSubtitle>
            {props.author} · {props.sizeInMb} MB
          </VideoSubtitle>
        </VideoGridBottomLeft>
        <VideoGridBottomRight>
          <VideoCommentIcon />
          {props.commentCount && (
            <VideoCommentCount>{props.commentCount}</VideoCommentCount>
          )}
        </VideoGridBottomRight>
      </VideoGridBottomRow>
    </VideoGridElementContainer>
  </GridElement>
);

export { VideoGridElement };

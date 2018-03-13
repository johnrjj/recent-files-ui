import styled from 'styled-components';
import React from 'react';

import { MessageCircle, Play } from 'react-feather';
import { theme } from '../colors';
import soundwave1 from '../assets/waveform1.svg';
import soundwave2 from '../assets/waveform2.svg';
import { GridElement } from './BaseGridElement';

//  audio
const AudioGridElement = props => (
  <GridElement {...props}>
    <AudioGridElementContainer {...props}>
      <AudioGridTopRow>
        <PlayButton />
        <AudioWaveform
          src={props.waveformThumbnailUrl === '1' ? soundwave1 : soundwave2}
        />
      </AudioGridTopRow>
      <AudioLengthDisplay>01:14</AudioLengthDisplay>

      <AudioGridBottomRow>
        <AudioGridBottomLeft>
          <AudioTitle>{props.title}</AudioTitle>
          <AudioSubtitle>
            {props.author} · {props.sizeInMb} MB
          </AudioSubtitle>
        </AudioGridBottomLeft>
        <AudioGridBottomRight>
          <AudioCommentIcon size="14" />
          <AudioCommentCount>{props.commentCount}</AudioCommentCount>
        </AudioGridBottomRight>
      </AudioGridBottomRow>
    </AudioGridElementContainer>
  </GridElement>
);

const AudioWaveform = styled.img`
  object-fit: contain;
  /* max-width: 100%;
  height: 2rem;
  min-width: 100%; */
  height: 2rem;
`;

const StyledPlayIcon = styled(Play)`
  fill: #1f1d1d;
  stroke: #1f1d1d;
`;

const PlayIconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-width: 3rem;
  min-height: 3rem;
  background: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 10px 40px 5px rgba(53, 54, 58, 0.05);
  margin-right: 1rem;
`;

const PlayButton = () => (
  <PlayIconContainer>
    <StyledPlayIcon size={12} />
  </PlayIconContainer>
);

const AudioGridElementContainer = styled.div`
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: flex-end;
  align-items: space-between;
  background-color: #eeeff9;
  padding: ${props => (props.featured ? '1.5rem' : '1rem')};
  border-radius: 1rem;
`;

const AudioTitle = styled.div`
  color: ${theme.primaryText};
  font-weight: 700;
  font-size: ${props => (props.featured ? '1rem' : '0.75rem')};
  letter-spacing: 0.75px;
  margin-bottom: 0.5rem;
`;

const AudioSubtitle = styled.div`
  font-size: 0.75rem;
  font-weight: 400;
  color: ${theme.secondaryText};
  letter-spacing: 0.5px;
`;

const AudioGridBottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const AudioGridBottomLeft = styled.div``;

const AudioGridBottomRight = styled.div`
  display: flex;
  align-items: center;
`;

const AudioCommentIcon = styled(MessageCircle)`
  fill: #636882;
  color: #636882;
`;

const AudioCommentCount = styled.span`
  color: ${theme.secondaryText};
  margin-left: 0.25rem;
`;

const AudioLengthDisplay = styled.div`
  display: flex;
  align-self: flex-end;
  font-size: 0.75rem;
  font-weight: 700;
  color: ${theme.secondaryText};
  letter-spacing: 0.5px;
  opacity: 0.87;
  margin: 1.5rem 0;
`;

const AudioGridTopRow = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  overflow: hidden;
`;

export { AudioGridElement };

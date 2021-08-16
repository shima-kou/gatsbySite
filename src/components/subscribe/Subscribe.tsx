import { lighten } from 'polished';
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

import { colors } from '../../styles/colors';
import { SubscribeForm } from './SubscribeForm';

export interface SubscribeProps {
  title: string;
}

export const Subscribe: React.FC<SubscribeProps> = props => {
  return (
    <SubscribeFormSection>
      <h3 css={SubscribeFormTitle}>Subscribe to {props.title}</h3>
      <p>Get the latest posts delivered right to your inbox</p>
      <SubscribeForm />
    </SubscribeFormSection>
  );
};

const SubscribeFormSection = styled.section`
  margin: 1.5em 0;
  padding: 6.5vw 7vw 8vw;
  /* border: color(var(--lightgrey) l(+10%)) 1px solid; */
  border: ${lighten('0.1', colors.lightgrey)} 1px solid;
  text-align: center;
  /* background: linear-gradient(color(var(--whitegrey) l(+6%)), color(var(--whitegrey) l(+4%))); */
  background: linear-gradient(
    ${lighten('0.06', colors.whitegrey)},
    ${lighten('0.04', colors.whitegrey)}
  );
  border-radius: 3px;

  p {
    margin-bottom: 0.2em 0 1em;
    /* color: var(--midgrey); */
    color: ${colors.midgrey};
    line-height: 1.55em;
  }

  @media (max-width: 650px) {
    p {
    }
  }

  .form-group {
    flex-grow: 1;
  }

  @media (prefers-color-scheme: dark) {
    border: none;
    /* background: linear-gradient(color(var(--darkmode) l(-6%)), color(var(--darkmode) l(-3%))); */
    /* background: linear-gradient(
      ${lighten('-0.06', colors.darkmode)},
      ${lighten('-0.03', colors.darkmode)}
    ); */
    background: linear-gradient(#000, #000);

    p {
      color: rgba(255, 255, 255, 0.7);
    }
  }
`;

const SubscribeFormTitle = css`
  margin: 0 0 3px 0;
  padding: 0;
  /* color: var(--darkgrey); */
  color: ${colors.darkgrey};
  line-height: 1;
  font-weight: 600;

  @media (max-width: 650px) {
  }

  @media (prefers-color-scheme: dark) {
    color: rgba(255, 255, 255, 0.9);
  }
`;

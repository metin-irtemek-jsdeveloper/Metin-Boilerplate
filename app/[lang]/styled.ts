'use client';
import styled from 'styled-components';

import theme from '@/theme';

export const Wrapper = styled.div`
  height: 700px;
  max-width: 1200px;
  padding: 20px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`;

export const Title = styled.div`
  color: ${theme.color.blue700};
  font-family: 'MyFont2';
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  ${theme.mediaQueries.Mobile} {
    color: ${theme.color.red800};
    font-size: 22px;
  }
`;

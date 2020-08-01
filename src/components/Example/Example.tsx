import React from 'react';
import { Props } from './Example.types';
import { Example as StyledExample } from './Example.styled';

const Example: React.FC<Props> = () => {
  return <StyledExample>Example</StyledExample>;
};

export default Example;

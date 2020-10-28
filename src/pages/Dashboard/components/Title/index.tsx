import React from 'react';

import { Container } from './styles';

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }: any) => {
  return (
    <Container>
      <h2>{title}</h2>
      <span />
    </Container>
  );
};

export default Title;

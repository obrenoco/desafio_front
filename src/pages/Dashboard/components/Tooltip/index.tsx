import React from 'react';

import { Container } from './styles';

interface TooltipProps {
  description: string;
}

const Tooltip: React.FC<TooltipProps> = ({ description }: TooltipProps) => {
  return (
    <Container>
      <div>
        <span>{description}</span>
      </div>
    </Container>
  );
};

export default Tooltip;

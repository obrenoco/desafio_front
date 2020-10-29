import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import MainBanner from './components/MainBanner';
import SolutionsBanner from './components/SolutionsBanner';
import ProductsBanner from './components/ProductsBanner';

import { Container } from './styles';

// import * as DataActions from '../../store/modules/test/actions';

export default function Home() {
  return (
    <Container>
      <MainBanner />
      <SolutionsBanner />
      <ProductsBanner />
    </Container>
  );
}

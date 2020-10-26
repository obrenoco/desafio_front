import React from 'react';

import { Container, Row, Input } from './styles';

const Footer = () => {
  return (
    <Container>
      <Row>
        <Input>
          <div>Powered by</div>
          <a href="https://ri.b2w.digital/">
            <img
              src="https://www.siteblindado.com/images/footer/b2w-digital.png"
              alt=""
            />
          </a>
        </Input>
        <Input>
          <a href="https://ri.b2w.digital/">
            <img
              src="https://www.siteblindado.com/images/footer/bseller-p&b.png"
              alt=""
            />
          </a>
        </Input>
        <Input>
          <a href="https://ri.b2w.digital/">
            <img
              src="https://www.siteblindado.com/images/footer/site-blindado-p&b.png"
              alt=""
            />
          </a>
        </Input>
        <Input>
          <a href="https://ri.b2w.digital/">
            <img
              src="https://www.siteblindado.com/images/footer/skyhub-p&b.png"
              alt=""
            />
          </a>
        </Input>
        <Input>
          <a href="https://ri.b2w.digital/">
            <img
              src="https://www.siteblindado.com/images/footer/sieve-p&b.png"
              alt=""
            />
          </a>
        </Input>
        <Input>
          <a href="https://ri.b2w.digital/">
            <img
              src="https://www.siteblindado.com/images/footer/admatic-p&b.png"
              alt=""
            />
          </a>
        </Input>
      </Row>
    </Container>
  );
};

export default Footer;

import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import { Container, Banner, Solutions, Items } from './styles';

// import * as DataActions from '../../store/modules/test/actions';

export default function Home() {
  return (
    <Container>
      <Banner>
        <div>
          <img alt="Lock Icon" />
          <h2>Soluções</h2>
        </div>
        <p>
          Na Site Blindado oferecemos vários modelos de certificados para
          atender à diferentes tipos de negócios e serviços.
          <br />
          Veja abaixo qual se encaixa melhor com você.
          <br />
          Em caso de dúvidas entre em contato com nossos consultores.
        </p>
      </Banner>

      <Solutions>
        <h2>Soluções</h2>
        <p>
          Conheça a suíte de soluções de segurança que a Site Blindado oferece
        </p>
        <Items>
          <div>
            <img
              src="https://www.siteblindado.com/images/blindagem.svg"
              alt="Blindagem de sites"
            />
            <strong>Blindagem de sites</strong>
            <p>
              Blinde seu site contra invasores e exiba o Selo Site Blindado.
            </p>
            <a href="">
              Conheça melhor <b>>></b>
            </a>
          </div>
          <div>
            <img
              src="https://www.siteblindado.com/images/certificado-ssl.svg"
              alt=""
            />
            <strong>Certificados SSL</strong>
            <p>
              Proteja as informações em tráfego dos seus clientes e usuários.
            </p>
            <a href="">
              Conheça melhor <b>>></b>
            </a>
          </div>
          <div>
            <img src="https://www.siteblindado.com/images/waf.svg" alt="" />
            <strong>WAF</strong>
            <p>Filtre os tráfegos suspeitos em seu site evitando ataques.</p>
            <a href="">
              Conheça melhor <b>>></b>
            </a>
          </div>
          <div>
            <img src="https://www.siteblindado.com/images/pentest.svg" alt="" />
            <strong>Pentest</strong>
            <p>
              Faça um teste manual de invasão e descubra as falhas do seu site.
            </p>
            <a href="">
              Conheça melhor <b>>></b>
            </a>
          </div>
        </Items>
        <span></span>
      </Solutions>
    </Container>
  );
}

import React from 'react';

import { Solutions, Items } from './styles';

const SolutionsBanner: React.FC = () => {
  return (
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
          <p>Blinde seu site contra invasores e exiba o Selo Site Blindado.</p>
          <a href="">
            Conheça melhor <b>&gt;&gt;</b>
          </a>
        </div>
        <div>
          <img
            src="https://www.siteblindado.com/images/certificado-ssl.svg"
            alt=""
          />
          <strong>Certificados SSL</strong>
          <p>Proteja as informações em tráfego dos seus clientes e usuários.</p>
          <a href="">
            Conheça melhor <b>&gt;&gt;</b>
          </a>
        </div>
        <div>
          <img src="https://www.siteblindado.com/images/waf.svg" alt="" />
          <strong>WAF</strong>
          <p>Filtre os tráfegos suspeitos em seu site evitando ataques.</p>
          <a href="">
            Conheça melhor <b>&gt;&gt;</b>
          </a>
        </div>
        <div>
          <img src="https://www.siteblindado.com/images/pentest.svg" alt="" />
          <strong>Pentest</strong>
          <p>
            Faça um teste manual de invasão e descubra as falhas do seu site.
          </p>
          <a href="">
            Conheça melhor <b>&gt;&gt;</b>
          </a>
        </div>
      </Items>
    </Solutions>
  );
};

export default SolutionsBanner;

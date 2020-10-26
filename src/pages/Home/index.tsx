import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';

import {
  Container,
  Banner,
  Solutions,
  Items,
  Products,
  Grid,
  CardItem,
} from './styles';

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
              Conheça melhor <b>&gt;&gt;</b>
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
      <Products>
        {/* Blindagem de Sites */}
        <h2>Blindagem de sites</h2>
        <span></span>
        <Grid>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/blindagem.svg"
                alt=""
              />
              Blindagem de Sites
            </h3>
            <p>
              Oferecido de forma exclusiva pela Site Blindado, na Blindagem de
              Sites são realizadas uma série de scans automatizados de
              segurança, que identificam vulnerabilidades que ofereçam risco ao
              seu negócio. O administrador do site terá acesso, por meio do
              portal do cliente da Site Blindado, a um relatório detalhado
              contendo todas as vulnerabilidades encontradas em seu site e, além
              dele, uma análise gerencial onde é possível ter uma visão geral do
              estado do site.
            </p>
            <div>
              <button>Solicitar produto</button>
              <a href="">Ver mais</a>
            </div>
          </CardItem>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/blindagem.svg"
                alt=""
              />
              Blindagem de Sites Premium
            </h3>
            <p>
              A Blindagem Premium é um pacote que agrupa todas as
              funcionalidades da Blindagem de Sites e mais alguns outros
              serviços de segurança, como a aplicação de um PenTest Nível 1,
              durante a vigência do contrato, formando assim uma das soluções
              mais completas do mercado. Essa modalidade de Blindagem é indicada
              para grandes operações de e-commerce, que recebem muitas visitas,
              o que gera mais exposição a ataques de pessoas mal-intencionadas.
            </p>
            <div>
              <button>Solicitar produto</button>
              <a href="">Ver mais</a>
            </div>
          </CardItem>
        </Grid>
        {/* Pentest */}
        <h2>Certificados SSL</h2>
        <span></span>
        <Grid>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/certificado-ssl.svg"
                alt=""
              />
              SSL Blindado - Basic
            </h3>
            <p>
              O SSL Site Blindado Basic protege as informações inseridas pelos
              clientes em suas aplicações web. O diferencial da Site Blindado é
              oferecer um serviço único de pós-venda, onde todas as etapas de
              validação do certificado são realizadas com o acompanhamento da
              empresa. Além disso, o cliente que utiliza o SSL Blindado tem a
              possibilidade de exibir o selo do SSL Blindado em seu site.
            </p>
            <strong>
              Opção de validade: <ins>1 ano.</ins>
            </strong>

            <strong>Chaves com tamanho à partir de 2048 bits.</strong>
            <div>
              <button>Solicitar produto</button>
              <a href="">Ver mais</a>
            </div>
          </CardItem>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/certificado-ssl.svg"
                alt=""
              />
              SSL Blindado EV
            </h3>
            <p>
              O SSL Blindado EV (Extended Validation SSL, ou SSL de Validação
              Extendida) é uma modalidade SSL mais avançada. Antes de sua
              emissão é realizada uma verificação mais ampla de segurança, o que
              propicia que o site exiba um indicador visual: a barra de endereço
              do navegador fica verde e apresenta a razão social da empresa,
              gerando uma percepção muito maior de segurança aos visitantes.
            </p>
            <strong>
              Opção de validade: <ins>1 ano.</ins>
            </strong>

            <strong>Chaves com tamanho à partir de 2048 bits.</strong>
            <div>
              <button>Solicitar produto</button>
              <a href="">Ver mais</a>
            </div>
          </CardItem>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/certificado-ssl.svg"
                alt=""
              />
              Certificado Multidomínio (MDC)
            </h3>
            <p>
              Indicado principalmente para: empresas que possuem múltiplos
              endereços e desejam criptografar todos eles. Solução mais indicada
              para empresas que querem proteger múltiplos endereços com um único
              certificado. Com o MDC o gerenciamento é muito simples, já que
              todos os endereços estão atrelados ao mesmo certificado. Até 200
              FQDNs (Fully Qualified Domain Name)
            </p>
            <strong>
              Opção de validade: <ins>1 ano.</ins>
            </strong>

            <strong>Chaves com tamanho à partir de 2048 bits.</strong>
            <div>
              <button>Solicitar produto</button>
              <a href="">Ver mais</a>
            </div>
          </CardItem>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/certificado-ssl.svg"
                alt=""
              />
              Certificado WildCard
            </h3>
            <p>
              Indicado para: empresas que possuem múltiplos endereços e desejam
              criptografar todos eles. Solução mais indicada para empresas que
              querem proteger múltiplos endereços com um único certificado. Com
              o MDC o gerenciamento é muito simples, já que todos os endereços
              estão atrelados ao mesmo certificado.
            </p>
            <strong>
              Opção de validade: <ins>1 ano.</ins>
            </strong>

            <strong>Chaves com tamanho à partir de 2048 bits.</strong>
            <div>
              <button>Solicitar produto</button>
              <a href="">Ver mais</a>
            </div>
          </CardItem>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/certificado-ssl.svg"
                alt=""
              />
              Certificado CodeSign
            </h3>
            <p>
              Indicado para: empresas que possuem múltiplos endereços e desejam
              criptografar todos eles. Solução mais indicada para empresas que
              querem proteger múltiplos endereços com um único certificado. Com
              o MDC o gerenciamento é muito simples, já que todos os endereços
              estão atrelados ao mesmo certificado.
            </p>
            <strong>
              Opção de validade: <ins>1 ano.</ins>
            </strong>

            <strong>Chaves com tamanho à partir de 2048 bits.</strong>
            <div>
              <button>Solicitar produto</button>
              <a href="">Ver mais</a>
            </div>
          </CardItem>
        </Grid>
        {/* Pentest */}
        <h2>Pentest</h2>
        <span></span>
        <Grid>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/pentest.svg"
                alt=""
              />
              PenTest Nível I
            </h3>
            <p>
              O SSL Site Blindado Basic protege as informações inseridas pelos
              clientes em suas aplicações web. O diferencial da Site Blindado é
              oferecer um serviço único de pós-venda, onde todas as etapas de
              validação do certificado são realizadas com o acompanhamento da
              empresa.Nesse plano são verificadas: falhas de injeção
              (Injection), Cross-Site Scripting (XSS), erros de configuração,
              vulnerabilidades em cookies, entre outras.
            </p>
            <div>
              <button>Solicitar produto</button>
              <a
                href="https://www.siteblindado.com/solucoes/pentest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
          </CardItem>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/pentest.svg"
                alt=""
              />
              PenTest Nível II
            </h3>
            <p>
              Nesse segundo nível, além dos serviços inclusos no nível I,
              aumenta-se consideravelmente a complexidade das vulnerabilidades
              que são buscadas como, por exemplo, falhas nos fluxos lógicos da
              aplicação. Somado ao escopo do nível 1, também está incluso nesse
              plano a realização de um reteste após as correções. Com isso, a
              empresa consegue validar se as correções que foram aplicadas
              realmente solucionaram as falhas de segurança que foram
              encontradas.
            </p>
            <div>
              <button>Solicitar produto</button>
              <a
                href="https://www.siteblindado.com/solucoes/pentest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
          </CardItem>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/pentest.svg"
                alt=""
              />
              PenTest Nível III
            </h3>
            <p>
              Esse terceiro nível vai validar todas as vulnerabilidades que são
              verificadas no nível II, ou seja, vulnerabilidades que têm um
              nível de complexidade bem alta, só que com uma grande diferença:
              ao invés de ser realizado em BlackBox, esse teste é feito em
              GreyBox. Nesse modelo, o analista de segurança terá acesso a
              informações como usuário e senha, fazendo com que os testes sejam
              mais profundos do que o nível II.
            </p>
            <div>
              <button>Solicitar produto</button>
              <a
                href="https://www.siteblindado.com/solucoes/pentest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
          </CardItem>
          <CardItem>
            <h3>
              <img
                src="https://www.siteblindado.com/images/pentest.svg"
                alt=""
              />
              PenTest Mobile
            </h3>
            <p>
              O PenTest Mobile é um teste de aplicação voltado a aplicativos
              nativos para as plataformas Android e iOS. Através desse produto,
              a empresa conseguirá ter uma avaliação de segurança para o
              aplicativo que o usuário instalar em seu smartphone.Esse teste
              consiste na diminuição da superfície de ataque - locais de
              aplicação que podem ser alvos de ataques - abordando, por todos os
              ângulos possíveis, as fraquezas apresentadas.
            </p>
            <div>
              <button>Solicitar produto</button>
              <a
                href="https://www.siteblindado.com/solucoes/pentest/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver mais
              </a>
            </div>
          </CardItem>
        </Grid>
      </Products>
    </Container>
  );
}

import { useState } from "react";
import banner from "../assets/banner.jpg";
import tablet from "../assets/maos-de-medico-usando-um-tablet-moderno.jpg";
import {
  BsStopwatch,
  BsHeartPulse,
  BsDatabase,
  BsCashCoin,
} from "react-icons/bs";
import Rodape from "../components/Rodape";
const Home = () => {
  const [submit, setSubmit] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmit(true);
  };
  return (
    <>
      <div className="home-container">
        <nav className="sub-nav">
          <a href="#funcionamento">Sobre</a>
          <a href="#vantagens">Vantagens</a>
          <a href="#contato">Contato</a>
        </nav>

        <section className="banner">
          <img src={banner} alt="Banner de tecnologia" />
          <div className="title">
            <h1>Eleve o Patamar do seu Hospital com a Medical Tech </h1>
            <h5>
              A Medical Tech nao tras apenas um sistemas mas sim um ecossistema
              de saúde seguro e eficaz nos processos de prescrição,
              distribuição, administração, monitoramento e utilização de seus
              medicamentos, aumentendo a segurança e a satisfacação de seu
              paciente.
              A solução desenvolvida pela Medical Tech é projetada para a
              otimização do atendimento ao paciente, em relação à medição que é
              aplicada dentro dos hospitais, tal como oferecer ao cliente algo
              seguro, inteligente aumentando a eficiência do atendimento,
              beneficiando tanto o hospital quanto o cliente. A nossa tecnologia
              traz total autonomia para a melhor administração de recursos,
              armazenamento e distribuição dos medicamentos, sendo a maior
              vantagem na distribuição da medicação para o paciente Trata-se de
              uma solução que traz eficiência, segurança tanto na parte de
              armazenar e monitorar o medicamento, evitando possível falha
              humana, quanto na questão de confiança de manutenção.
            </h5>
          </div>
        </section>

        <section className="all-content">
          <section className="funcionamento" id="funcionamento">
            <header>
              <h1>Como funciona ?</h1>
            </header>
            <div className="funcionamento-content">
              <p>
                Podendo ser utilizado o atual espaço de armazenamento dos
                remédios, nosso ecosistema e composto por, alarme e sensores
                para monitoramento de temperatura e humidade ar dentro do
                recinto e mecanismos para separação de medicação.{" "}
              </p>
              <div className="funcionamento-pedido">
                <div className="imagem">
                  <img src={tablet} alt="" />
                </div>
                <div className="texto">
                  <p>
                    Quando o medico encaminha o paciente a tomar medicacao, a
                    receita e enviada para o sistema, e toda a parte de preparar
                    as doses para a medicao e separada pelo sistema,
                    independente de qual seja a medicação.
                  </p>
                  <p>
                    Um pedido tambem podera ser feito pelos enfemeiros atraves
                    do sistema, por celulares ou computadores.
                  </p>
                </div>
              </div>
              <p>
                O tempo que o profissional da saude gastaria esperando e
                procurando a medicaçao ele estaria auxiliando ou socorrendo
                outro paciente.
              </p>
            </div>
          </section>
          <section className="vantagens" id="vantagens">
            <header>
              <h1>Vantagens</h1>
            </header>
            <div className="lista">
              <ul>
                <li>
                  <BsStopwatch />
                  <p>Otimizacao do tempo na triagem de medicação</p>
                </li>
                <li>
                  <BsHeartPulse />
                  <p> Mais segurança</p>
                </li>
                <li>
                  <BsDatabase />
                  <p> Melhor administracao do estoque dos medicamentos</p>
                </li>
                <li>
                  <BsCashCoin />
                  <p>Redução de custos</p>
                </li>
              </ul>
            </div>
          </section>
        </section>
        <section className="contrate" id="contato">
          <header>
            <h1>Solicite um orçamento</h1>
            <p>E eleve seu négocio a outro nível</p>
          </header>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite seu Nome" required />
            <input type="text" placeholder="Digite seu Telefone" required />
            <input type="email" placeholder="Digite seu E-Mail" required />
            <button type="submite">Enviar dados</button>
            {submit ? (
              <p className="submit">Sucesso! Aguarde nosso contato</p>
            ) : (
              ""
            )}
          </form>
        </section>

        <Rodape />
      </div>
    </>
  );
};

export default Home;

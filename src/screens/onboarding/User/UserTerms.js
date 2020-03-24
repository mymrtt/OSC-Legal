// Libs
import React from 'react';
import styled from 'styled-components';

//Components
import ImageLogo from '../../../components/ImageLogo'

const Overlay = styled.section`
  min-width: 100%;
  min-height: 100vh;
  background-color: #00000040;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 2.5rem 0;

  @media(max-width: 648px){
      padding: 0;

      img{
        display: none;
      }

    }
`;
const Modal = styled.div`
  width: 33%;
  min-height: 55vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 648px) {
    width: 100%;
    min-height: 100vh;
    align-self: center;
    justify-content: flex-start;
  }
`;

const TitleTerms = styled.h1`
  align-self: flex-start;
  margin: 1rem 1rem;
  font-family: Overpass, Bold;
  font-size: 1.4rem;
  text-transform: uppercase;

  @media (max-width: 648px) {
    margin: 2rem 0 0.5rem 1rem;
    font-size: 1.5rem;
  }
`;
const ButtonTerms = styled.button`
    width: 120px;
    height: 36px;
    background-color: #ff4136;
    color: #fff;
    text-transform: uppercase;
    border: 0;
    border-radius: 4px;
    align-self: flex-end;
    margin: 0.4rem 0.5rem 0.4rem 0;
    box-shadow: 0 3px 6px #00000029;

  @media (max-width: 648px) {
    align-self: center;
    width: 90%;
    height: 56px;
    margin: 0.8rem 0;
    font-size: 1rem;
    font-weight: bold;
  }
`;

const BlockTerms = styled.div`
  width: 97%;
  height: 90%;
  background: #ffcfcd;
  padding: 1rem 1rem;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media(max-width: 648px){
    background: #FFF;
    height: 100%;
    justify-content: space-around;
  }
`;

const Terms = styled.p`
  width: 100%;
  font-family: Overpass, Regular;
  font-size: 0.9rem;
  margin: 0.9rem 0;

  u{
    color: #f00;
    margin: 0 0.2rem;
  }

  @media(max-width: 648px){
    margin: 1.5rem 0;
    font-size: 1rem;
  }
`;

const SubtitleTerms = styled.h3`
    margin: 1rem 0;
    font-size: 0.87rem;
    font-family: Overpass, Bold;
`;

export default function ModalTerms(props) {
  return (
    <Overlay>
      <ImageLogo />
      <Modal>
        <TitleTerms>termos de serviço</TitleTerms>
        <BlockTerms>
          <SubtitleTerms>Boas vindas ao Aplicativo do Estatuto OSC Legal</SubtitleTerms>
          <Terms>
            Esta é uma ferramenta voltada a fornecer um guia para que as associações possam elaborar ou reformar seus estatutos, documento obrigatório nessas organizações.
            </Terms>
          <Terms>
            Cada senha dará oportunidade para que você possa trabalhar no documento por 30 dias. Ao final desse prazo se considera finalizado o texto, gerando-se o documento equivalente no estado em que estiver.
            </Terms>
          <Terms>
            De acordo com a legislação brasileira, para registro de estatuto de associação é obrigatória a assinatura de advogad@ inscrito na OAB. Recomendamos que procure um/a profissional especialista.
            </Terms>
          <Terms>
            Qualquer dúvida e/ou esclarecimento entre em contato com nossa equipe:
              <u>
              osclegal@gmail.com
              </u>
          </Terms>
        </BlockTerms>
        <ButtonTerms onClick={() => props.handleModalTerms()}>OK</ButtonTerms>
      </Modal>
    </Overlay>
  );
}

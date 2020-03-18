// Libs
import React from 'react';
import styled from 'styled-components';

// Images
import Logo from '../../../assets/logo.svg';

 const Overlay = styled.section`
  min-width: 100%;
  min-height: 100vh;
  background-color: #00000040;
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
 const Modal = styled.div`
  width: 45vw;
  min-height: 65vh;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 90%;
  }
  @media (max-width: 425px) {
    width: 100%;
    height: 100%;
  }
`;

const TitleTerms = styled.h1`

    align-self: flex-start;
    margin: 1rem 1rem;
    font-family: Overpass, Bold;
    font-size: 14px;
    text-transform: uppercase;


    @media (max-width: 425px) {
      margin: 0.5rem;
    }
`;
 const ButtonTerms = styled.button`
  width: 90px;
  height: 35px;
  background-color: #ff4136;
  color: #fff;
  text-transform: uppercase;
  border: 0;
  border-radius: 4px;
  align-self: flex-end;
  margin: 1rem;

  @media (max-width: 425px) {
    margin: 0.5rem;
  }
`;

 const BlockTerms = styled.div`
  width: 95%;
  height: 90%;
  background: #ffcfcd;
  padding: 1rem 1rem;
`;

const TextUpdate = styled.h4`
  color: #f00;
  font-weight: normal;
  font-size: 1rem;
  font-family: Overpass, Regular;
`;

 const Terms = styled.p`
  width: 100%;
  font-family: Overpass, Regular;
  font-size: 0.9rem;
`;

const SubtitleTerms = styled.h3`
    margin: 1rem 0;
    font-size: 0.8rem;
    font-family: Overpass, Bold;
`;

export default function ModalTerms(props) {
  return (
    <Overlay>
      <img src={Logo} alt="Osc Logo" />
      <Modal>
        <TitleTerms>termos de serviço</TitleTerms>
        <BlockTerms>
          <SubtitleTerms>OSC Legal</SubtitleTerms>
          <TextUpdate>LAST UPDATE: December 06,2019</TextUpdate>
          <SubtitleTerms>1. Acceptance of OSC Legal terms of servisse.</SubtitleTerms>
          <Terms>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac
            consectetur massa. Pellentesque at vestibulum justo. Donec sed nibh
            dignissim, vestibulum neque sed, ornare ex. In purus odio, sodales
            non nibh quis, interdum maximus neque. Proin et imperdiet elit.
            Aliquam erat volutpat. Etiam luctus libero id neque commodo
            placerat. Etiam vitae molestie eros. Etiam dui urna, pulvinar eget
            neque in, pharetra bibendum diam. Donec sit amet sem eu enim
            sollicitudin consectetur tristique ac nunc. Quisque nec risus id
            nisi viverra gravida. Fusce sed lacus lorem. Ut sit amet luctus est.
            Donec facilisis justo mi, ut consequat urna blandit at. Quisque
            eleifend rutrum felis.
          </Terms>
        </BlockTerms>
        <ButtonTerms onClick={() => props.handleModalTerms()}>OK</ButtonTerms>
      </Modal>
    </Overlay>
  );
}

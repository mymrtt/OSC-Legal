import React from "react";
import Logo from "../../../assets/logo.svg";
import { Overlay, Modal, ButtonTerms, BlockTerms, Terms } from "./styles";
import Button from "../../../components/Button";

export default function ModalTerms(props) {
  return (
    <Overlay>
      <img src={Logo} alt="Osc Logo" />
      <Modal>
        <h1>temos de serviço</h1>
        <BlockTerms>
          <h3>OSC Legal</h3>
          <h4>LAST UPDATE: December 06,2019</h4>
          <h3>1. Acceptance of OSC Legal terms of servisse.</h3>
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
        <ButtonTerms onClick={props.handleModal}>OK</ButtonTerms>
      </Modal>
    </Overlay>
  );
}

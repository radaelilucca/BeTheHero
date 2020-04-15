import React from "react";
import { useHistory } from "react-router-dom";

import { Container, CancelButton, Button } from "./styles";

export default function FormButtonsGroup() {
  const history = useHistory();
  return (
    <Container>
      <CancelButton
        className="cancel"
        type="button"
        onClick={() => {
          history.push("/");
        }}
      >
        Cancelar
      </CancelButton>
      <Button type="submit">Confirmar</Button>
    </Container>
  );
}

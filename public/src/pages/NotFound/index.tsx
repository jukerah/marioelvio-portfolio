import { useEffect } from "react";
import * as C from "./styles";

export const NotFound = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <C.NotFound>
      <C.Container>
        <h1>Ops! A página não foi encontrada.</h1>
        <p>Erro 404</p>
      </C.Container>
    </C.NotFound>
  );
};

import React from "react";
import { FiLogIn } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";

const SignIn: React.FC = () => {

  return (
      <>
          <Container>
              <Content>
                  <img src={logoImg} alt="Gobarber" />
                  <form>
                      <h1>Faça seu login</h1>

                      <input placeholder="Email" />
                      <input type='password' placeholder="senha" />

                      <button type='submit'>Entrar</button>
                      <a href="forgot">Esqueci minha senha</a>
                  </form>

                  <a href="login">
                    <FiLogIn />
                    Criar conta
                  </a>
              </Content>
              <Background/>
          </Container>
      </>
  );
}

export default SignIn;
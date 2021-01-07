import React from "react";
import { FiLogIn, FiMail, FiLock } from "react-icons/fi";

import logoImg from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";

import Input from "../../components/Input/index";
import Button from "../../components/Button/index";

const SignIn: React.FC = () => {
    return (
        <>
            <Container>
                <Content>
                    <img src={logoImg} alt="Gobarber" />
                    <form>
                        <h1>Faça seu login</h1>

                        <Input 
                        icon={FiMail}
                        name="email"
                        placeholder="Email" />
                        <Input 
                        icon={FiLock}
                        name="password"
                        type="password" placeholder="senha" />

                        <Button type="submit">Entrar</Button>
                        <a href="forgot">Esqueci minha senha</a>
                    </form>

                    <a href="login">
                        <FiLogIn />
                        Criar conta
                    </a>
                </Content>
                <Background />
            </Container>
        </>
    );
};

export default SignIn;

import React from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import { Form } from "@unform/web";

import logoImg from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";

import Input from "../../components/Input/index";
import Button from "../../components/Button/index";

const SignUp: React.FC = () => {
    function handleSubmit(data: object):void {
        console.log(data);
        
    }
    return (
        <>
            <Container>
                <Background />
                <Content>
                    <img src={logoImg} alt="Gobarber" />
                    <Form onSubmit={handleSubmit}>
                        <h1>Faça seu Cadastro</h1>

                        <Input icon={FiUser} name="name" placeholder="Nome" />
                        <Input icon={FiMail} name="email" placeholder="Email" />
                        <Input
                            icon={FiLock}
                            name="password"
                            type="password"
                            placeholder="senha"
                        />

                        <Button type="submit">Cadastrar </Button>
                    </Form>

                    <a href="login">
                        <FiArrowLeft />
                        Voltar para login
                    </a>
                </Content>
            </Container>
        </>
    );
};

export default SignUp;

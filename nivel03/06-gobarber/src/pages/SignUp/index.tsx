import React, { useCallback } from "react";
import { FiArrowLeft, FiMail, FiLock, FiUser } from "react-icons/fi";
import * as Yup from "yup";
import { Form } from "@unform/web";

import logoImg from "../../assets/logo.svg";
import { Container, Content, Background } from "./styles";

import Input from "../../components/Input/index";
import Button from "../../components/Button/index";

const SignUp: React.FC = () => {
    const handleSubmit = useCallback(async (data: object) => {
        try {
            const schema = Yup.object().shape({
                name: Yup.string().required("Nome obrigatório"),
                email: Yup.string().required("E-mail obrigatório"),
                password: Yup.string().min(6, "No mínimo 6 digitos"),
            });
            await schema.validate(data, {
                abortEarly: false,
            })
        } catch (err) {
            console.log(err);
        }
    }, []);
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

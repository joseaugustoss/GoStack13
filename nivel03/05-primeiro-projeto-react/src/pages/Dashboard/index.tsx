import React from "react";
import { FiChevronRight } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";
import { Title, Form, Repositories } from "./style";

const Dashboard: React.FC = () => {
    return (
        <>
            <img src={logoImg} alt="Gihub explrer" />
            <Title>Explore repositórios no Github</Title>

            <Form>
                <input placeholder="Digite o nome o repositório" />
                <button>Pesquisar</button>
            </Form>

            <Repositories>
                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/13836536?s=460&u=61865da3304e5c073fa36749982998f0e63507ba&v=4"
                        alt="José Augusto"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Performance-focused API for React forms rocket</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/13836536?s=460&u=61865da3304e5c073fa36749982998f0e63507ba&v=4"
                        alt="José Augusto"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Performance-focused API for React forms rocket</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>

                <a href="teste">
                    <img
                        src="https://avatars2.githubusercontent.com/u/13836536?s=460&u=61865da3304e5c073fa36749982998f0e63507ba&v=4"
                        alt="José Augusto"
                    />
                    <div>
                        <strong>Rocketseat/unform</strong>
                        <p>Performance-focused API for React forms rocket</p>
                    </div>
                    <FiChevronRight size={20} />
                </a>
            </Repositories>
        </>
    );
};

export default Dashboard;

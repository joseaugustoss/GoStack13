import styled, { css } from "styled-components";

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
}

export const Container = styled.div<ContainerProps>`
    color: #666360;
    background: #232129;
    border-radius: 10px;
    border: 2px solid #232129;
    padding: 16px;
    width: 100%;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 8px;
    }

    ${(propos) =>
        propos.isFilled &&
        css`
            color: #ff9000;
        `}

    input {
        color: #f4ede8;
        background: transparent;
        border: 0;

        &::placeholder {
            color: #666360;
        }
    }
    svg {
        margin-right: 16px;
    }
`;

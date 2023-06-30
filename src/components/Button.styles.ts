import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "danger" | "success";

interface ButtonCOntainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "purple",
  secondary: "orange",
  danger: "red",
  success: "green",
};

export const ButtonContainer = styled.button<ButtonCOntainerProps>`
  width: 100px;
  height: 40px;

  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.secondary};
`;

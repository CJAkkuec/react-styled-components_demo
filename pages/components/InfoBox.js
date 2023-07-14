import styled, { css } from "styled-components";

const StyledInfoBox = styled.section`
  padding: 2rem;
  background-color: lightgrey;
  width: 30%;

  ${({ $variant }) =>
    $variant === "success" &&
    css`
      color: white;
      background-color: ${({ $special }) => $special};
    `}

  ${({ $variant }) =>
    $variant === "warning" &&
    css`
      color: white;
      background-color: gold;
    `}

    ${({ $variant }) =>
    $variant === "error" &&
    css`
      color: white;
      background-color: red;
    `}
`;

export default function Infobox({ title, message, $variant, $special }) {
  return (
    <StyledInfoBox $variant={$variant} $special={$special}>
      <h2>{title}</h2>
      <p>{message}</p>
    </StyledInfoBox>
  );
}

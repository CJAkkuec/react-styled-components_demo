import styled from "styled-components";

export default styled.button`
  all: unset;
  border: none;
  cursor: pointer;
  padding: 1rem;
  color: white;
  background-color: ${({ $color }) => ($color === "ocean" ? "blue" : "green")};

  &:hover {
    color: orange;
    background-color: whitesmoke;
  }

  &::after {
    content: "😂";
  }
`;

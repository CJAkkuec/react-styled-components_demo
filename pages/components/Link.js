import Link from "next/link";
import styled from "styled-components";

const StyledLink = styled(Link)`
  font-weight: bold;
  text-decoration: none;
  background: grey;
  color: var(--secondary);
  border-radius: 10px;
  padding: 1rem;

  &:hover {
    color: red;
  }
`;

const StyledLinkWarning = styled(StyledLink)`
  background: red;
`;

export { StyledLink, StyledLinkWarning };

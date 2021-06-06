import styled from "styled-components";

import ErrorBox from "../ErrorBox";

export const Input = styled.input`
  margin: 8px 0;
  width: 100%;
  padding: 1.6rem;
  background: var(--background-color);
  border: none;
  border: 2px solid #33c4ff;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  outline: none;
  color: #1a2124;

  &:focus {
    background: rgba(0, 0, 0, 0.1);
    border: 2px solid rgba(255, 255, 255, 0.8);
  }
`;

export const Error = styled(ErrorBox)`
  margin-bottom: 1.6rem;
`;

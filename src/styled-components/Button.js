import styled from "styled-components";
const Button = styled.button`
  background: var(--secondary-700);
  width: 130px;
  padding: 0.75rem 0.3rem;
  font-size: 1rem;
  display: inline-block;
  text-transform: capitalize;
  border: 0.5px solid var(--black-clr);
  cursor: pointer;
  border-radius: var(--borderRadius);
  &:hover {
    color: var(--secondary-800);
    background: var(--white-clr);
  }
`;
export default Button;

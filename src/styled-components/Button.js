import styled from "styled-components";
const Button = styled.button`
  background: var(--secondary-700);
  width: 130px;
  padding: 0.75rem 0.3rem;
  font-size: 0.85rem;
  a {
    font-family: var(--header-font);
    font-weight: 550;
    text-transform: uppercase;
  }
  display: inline-block;
  text-transform: capitalize;
  border: 0.5px solid var(--black-clr);
  cursor: pointer;
  border-radius: 1.2rem;
  transition: var(--normal-transition);
  &:hover {
    a {
      color: var(--secondary-800);
    }

    background: var(--pri);
  }
`;
export default Button;

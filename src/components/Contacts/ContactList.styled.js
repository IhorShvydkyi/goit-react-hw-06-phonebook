import styled from "@emotion/styled";

export const ContactListStyled = styled.ul`
  font-weight: 500;
`;
export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Number = styled.span`
  margin-left: 15px;
`;
export const DeleteBtn = styled.button`
  display: flex;
  align-items: center;
  padding: 9px 15px;
  border-radius: 5px;
  border: 1px solid #3c3c3c;
  background: #ff3333;
  cursor: pointer;
  color: white;
  &:hover,
  :focus {
    background: #990000;
  }
`;

import styled from 'styled-components';

export const StyledBurger = styled.button`
  position: absolute;
  top: 5%;
  left: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  
  &:focus {
    outline: none;
  }
  
  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) => open ? theme.primaryDark : theme.primaryLight};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;
    display: inline-block;
  }

  .firstBurger {
    transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
  }

  .secondBurger {
    opacity: ${({ open }) => open ? '0' : '1'};
    transform: ${({ open }) => open ? 'translateX(-100%)' : 'translateX(0)'};
  }

  .thirdBurger {
    transform: ${({ open }) => open ? 'rotate(-45deg)': 'rotate(0)'};
  }
`;
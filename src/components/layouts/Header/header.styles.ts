import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  max-width: 1024px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-radius: 15px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-center;
    padding: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  font-family: Poppins-SemiBold;
  margin-left: 8px;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 8px;
    margin-left: 0;
  }
`;

export const Menu = styled.nav`
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MenuList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MenuItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin-bottom: 8px;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: #3d5afe;
  font-family: Poppins-SemiBold;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

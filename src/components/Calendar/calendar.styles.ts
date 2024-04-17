import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  min-width: 768px;
  max-width: 1024px;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  text-align: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-family: Poppins-Bold;
  font-size: 18px;
  margin-bottom: 8px;
`;

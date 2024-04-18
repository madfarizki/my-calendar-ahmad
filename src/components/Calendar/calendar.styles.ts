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

export const EventName = styled.h5<{ background: string }>`
  font-family: Poppins;
  font-weight: 500;
  color: white;
  text-align: left;
  background-color: ${({ background }) => background};
  margin: 4px 0;
  padding: 4px;
  border-radius: 4px;
  cursor: pointer;

  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    background-color: ${({ background }) => background};
    mix-blend-mode: multiply;
    opacity: 0.8;
  }
`;

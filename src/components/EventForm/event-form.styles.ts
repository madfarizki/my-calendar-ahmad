import styled from "styled-components";

export const Container = styled.div<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 18px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const Title = styled.h3`
  font-size: 18px;
  margin-bottom: 8px;
`;

export const Form = styled.form`
  margin-top: 8px;
`;

export const Item = styled.div`
  margin-bottom: 12px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 4px;
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const Asterisk = styled.span`
  color: red;
  font-size: 12px;
  font-weight: 500;
`;

export const Span = styled.span`
  font-weight: 500;
  color: #6f6f6f;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  box-sizing: border-box;

  &:disabled {
    cursor: not-allowed;
    background-color: #eee;
  }

  &:hover {
    border-color: #999;
  }

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 8px;
  float: right;
`;

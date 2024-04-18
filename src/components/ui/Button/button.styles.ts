import styled from "styled-components";
import { ButtonProps, ButtonVariant, ButtonSize } from ".";

export const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  font-size: ${({ size }) => getSizeFontSize(size)};
  font-family: Poppins, sans-serif;
  padding: ${({ size }) => getSizePadding(size)};

  &:focus {
    outline: none;
  }

  ${({ variant, theme }) => getVariantStyles(variant, theme)}
`;

const getSizePadding = (size: ButtonSize) => {
  switch (size) {
    case "s":
      return "4px 16px";
    case "m":
      return "4px 16px";
    case "l":
      return "6px 16px";
    case "xl":
      return "10px 30px";
    case "auto":
    default:
      return "4px 16px";
  }
};

const getSizeFontSize = (size: ButtonSize) => {
  switch (size) {
    case "s":
      return "12px";
    case "m":
      return "14px";
    case "l":
      return "16px";
    case "xl":
      return "18px";
    case "auto":
    default:
      return "16px";
  }
};

const getVariantStyles = (variant: ButtonVariant, theme: any) => {
  switch (variant) {
    case ButtonVariant.PRIMARY:
      return `
        color: #FFFFFF; 
        background-color: #007BFF; 

        &:hover {
          background-color: #0056B3; 
        }

        &:focus {
          background-color: #003f7d; 
          border: 1px solid #003f7d;
        }

        &:disabled {
          background-color: #b0c4de;
        }
      `;
    case ButtonVariant.DANGER:
      return `
        color: #FFFFFF; 
        background-color: #DC3545; 

        &:hover {
          background-color: #C82333; 
        }

        &:focus {
          background-color: #C82333; 
          border: 1px solid #C82333;
        }

        &:disabled {
          background-color: #f5c6cb;
        }
      `;
    case ButtonVariant.SECONDARY:
      return `
          color: #333333; 
          background-color: #F8F9FA; 
  
          &:hover {
            background-color: #E9ECEF; 
            border: 1px solid #E9ECEF;
          }

          &:disabled {
            background-color: #e2e6ea;
          }
        `;
    default:
      return "";
  }
};

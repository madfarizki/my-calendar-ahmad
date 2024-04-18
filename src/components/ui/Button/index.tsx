import { ReactNode } from "react";
import { ButtonStyle } from "./button.styles";

export enum ButtonVariant {
  PRIMARY = "primary",
  DANGER = "danger",
  SECONDARY = "secondary",
}

export type ButtonSize = "s" | "m" | "l" | "xl" | "auto";

export type ButtonProps = {
  variant?: ButtonVariant;
  width?: string;
  height?: string;
  size?: ButtonSize;
  children?: ReactNode;
  weight?: number;
  onClick?: React.MouseEventHandler;
  to?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ onClick, width, height, size, variant, children, ...rest }: ButtonProps) => {
  return (
    <ButtonStyle
      onClick={onClick}
      width={width}
      height={height}
      size={size}
      variant={variant}
      {...rest}>
      {children}
    </ButtonStyle>
  );
};

export default Button;

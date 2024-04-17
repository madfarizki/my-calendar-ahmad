import styled from "styled-components";

export const Day = styled.div`
  padding-bottom: 5px;
  padding-right: 5px;
  font-size: 16px;
  font-family: Poppins-SemiBold;
`;

export const Date = styled.div<{ $gray?: boolean }>`
  font-size: 14px;
  min-height: 100px;
  padding-top: 5px;
  padding-right: 5px;
  border-left: 1px solid #333333;
  border-top: 1px solid #333333;
  text-align: right;
  color: ${({ $gray }) => ($gray ? `#ccc !important` : "")};

  &:nth-child(7n-6) {
    color: red;
  }

  &:nth-child(7n) {
    border-right: 1px solid #333333;
  }

  &:nth-last-child(-n + 7) {
    border-bottom: 1px solid #333333;
  }
`;

export const Today = styled.span`
  display: inline-block;
  color: white;
  background-color: #1a73e8;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  line-height: 24px;
  text-align: center;
`;

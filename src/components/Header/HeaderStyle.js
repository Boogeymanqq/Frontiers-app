import styled from "styled-components";
import { globalFonts } from "../../../assets/styles";

const { regular, bold, extraBold } = globalFonts;

export const TextHeader = styled.Text`
  font-family: ${regular};
  font-size: 46px;
`;

export const TextSecond = styled.Text`
  font-family: "Inter-Regular";
  font-size: 32px;
`;

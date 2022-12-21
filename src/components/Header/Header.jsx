import React from "react";
import { View } from "react-native";
// import styled from "styled-components";
// import { globalFonts } from "../../../assets/styles";
import { Icon } from "../../ui/Icon/Icon";
import { logo } from "../../../assets/icon.png";
import { TextHeader, TextSecond } from "./HeaderStyle";

// const { regular, bold, extraBold } = globalFonts;

export const Header = () => {
  return (
    <View>
      <Icon style={{ width: 60, height: 60 }} src={logo} />
      {/* <TextHeader>Header</TextHeader>
      <TextSecond>Second Header</TextSecond> */}
      <TextHeader>Header</TextHeader>
      <TextSecond>Second</TextSecond>
    </View>
  );
};

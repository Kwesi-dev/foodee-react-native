import React from "react";
import {
  StyledImage,
  StyledText,
  StyledTouchableOpacity,
} from "../styledComponents/StyledComponents";

interface IFlavor {
  flavor: {
    name: string;
    imageUrl: any;
  };
}
const Flavour = ({ flavor }: IFlavor) => {
  return (
    <StyledTouchableOpacity
      className="w-[108px] h-[176px] rounded-[28px] bg-white flex justify-center items-center"
      style={{
        elevation: 2,
      }}
    >
      <StyledImage source={flavor.imageUrl} />
      <StyledText>{flavor.name}</StyledText>
      <StyledText>+ $0.95</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Flavour;

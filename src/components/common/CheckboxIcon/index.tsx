import React from "react";
import styled from "styled-components";
import CheckboxSvg from "./icon_checkbox.svg";
import CheckedCheckboxSvg from "./icon_checkbox_checked.svg";

const CheckboxIconSpan = styled.span`
  cursor: pointer;
`;

type CheckboxIconProps = {
  isChecked: boolean;
};

function CheckboxIcon({ isChecked }: CheckboxIconProps) {
  return (
    <CheckboxIconSpan>
      <img
        className="checkbox-icon"
        src={isChecked ? CheckedCheckboxSvg : CheckboxSvg}
      />
    </CheckboxIconSpan>
  );
}

export default CheckboxIcon;

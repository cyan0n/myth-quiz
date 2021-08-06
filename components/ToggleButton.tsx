import { useToggle, useUpdateEffect } from "ahooks";
import { Button } from "antd";
import React from "react";

export interface ToggleButtonProps {
  onToggle?: (value: boolean) => void;
}
type ToggleButtonComponent = React.FC<ToggleButtonProps>;

const ToggleButton: ToggleButtonComponent = ({ children, onToggle }) => {
  const [value, { toggle }] = useToggle();
  useUpdateEffect(() => {
    if (onToggle) {
      onToggle(value);
    }
  }, [value]);

  return (
    <Button
      type={value ? "primary" : "default"}
      onClick={() => toggle()}
      style={{ whiteSpace: "normal", height: "auto" }}
    >
      {children}
    </Button>
  );
};

export default ToggleButton;

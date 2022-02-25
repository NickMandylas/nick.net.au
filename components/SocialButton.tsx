import React from "react";
import { IconButton } from "@chakra-ui/react";

interface SocialButtonProps {
  url: string;
  ariaLabel: string;
  icon:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  url,
  ariaLabel,
  icon,
}) => {
  return (
    <IconButton
      colorScheme="teal"
      variant="outline"
      aria-label={ariaLabel}
      icon={icon}
      onClick={() => window.open(url, "_blank")}
    />
  );
};

export default SocialButton;

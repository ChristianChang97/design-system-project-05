import { ComponentProps } from "react";
import { AvatarContainer, AvatarFallback, AvatarImage } from "./styles";
import { User } from "phosphor-react";

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {}

export function Avatar(props: AvatarProps) {
  return (
    <AvatarContainer>
      <AvatarImage {...props} />

      <AvatarFallback>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  );
}

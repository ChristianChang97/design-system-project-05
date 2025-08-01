import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "@ignite-ui/react";
import type { AvatarProps } from "@ignite-ui/react";

export default {
  title: "Data display/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://avatars.githubusercontent.com/u/61232440?v=4",
    alt: "Christian",
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};

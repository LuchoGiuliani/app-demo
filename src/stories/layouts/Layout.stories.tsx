import UsersLayout from "@/app/(main)/layout";
import Menu from "@/components/menu/Menu";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Layout/Base",
  component: UsersLayout,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UsersLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

const links = [
    { title: "Inicio", href: "/" },
    { title: "Explorar", href: "/explorar" },
    { title: "Perfil", href: "/mi-perfil" },
  ]

export const Primary: Story = {
  args: {
    children: <>ESTO ES UN CONTENIDO</>
  },
};

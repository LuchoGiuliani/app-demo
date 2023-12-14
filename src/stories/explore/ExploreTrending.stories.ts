import ExploreTrending from "@/components/explore/ExploreTrending";
import Menu from "@/components/menu/Menu";

import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Explore/Explore",
  component: ExploreTrending,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ExploreTrending>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    hashes:[{
        hash:"tatooine", count: 2
    },
    {
        hash:"Fuerza", count:4
    }]
  },
};
export const MoreThan2: Story = {
  args: {
    hashes:[{
        hash:"tatooine", count: 2
    },
    {
        hash:"Fuerza", count:4
    },{
        hash:"Jedi", count: 2
    },
    {
        hash:"Yoda", count:4
    }]
  },
};

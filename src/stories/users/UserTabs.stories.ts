
import UserTabs from '@/components/users/UserTabs';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
    title: 'Users/UserTabs',
    component: UserTabs,
    parameters: {  
      layout: 'centered',
    },
    tags: ['autodocs'],
  } satisfies Meta<typeof UserTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const messages = [
    {
      name: "Anakin Skywalker",
      username: "anakin",
      message: "Segundo Mensaje",
      repliesCount: 13,
    },
    {
      name: "Anakin Skywalker",
      username: "anakin",
      message: "primer Mensaje",
      repliesCount: 13,
    }]

const  replies = [
    {
        name: "Han Skywalker",
        username: "anakin",
        message: "Segundo Mensaje",
        repliesCount: 13,
      },
      {
        name: "Hansito Skywalker",
        username: "anakin",
        message: "primer Mensaje",
        repliesCount: 13,
      }
  ]

export const MessageTab: Story = {
    args: {
      messages: messages,
      replies: replies
    },
  };
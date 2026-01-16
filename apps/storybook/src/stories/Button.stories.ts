import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '../../../../packages/ui/src/button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    className: {
      table: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BtnDefault: Story = {
  args: {
    children: '다음',
    size: 'default',
    className: 'w-[335px]!',
  },
};

export const BtnSmall: Story = {
  args: {
    children: '다음',
    size: 'small',
    className: 'w-[154px]!',
  },
};

import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Button } from '../../../../packages/ui/src/button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BtnDefault: Story = {
  args: {
    children: '다음',
    state: 'default',
  },
};

export const BtnHoverAndPressed: Story = {
  args: {
    children: '다음',
    state: 'hover-pressed',
  },
};

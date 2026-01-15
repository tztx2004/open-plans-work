import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Button2 from './Button2';

const meta: Meta<typeof Button2> = {
  title: 'UI/Button',
  component: Button2,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Button2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonExample: Story = {
  args: {
    children: '다음',
    className:
      'rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700',
  },
};

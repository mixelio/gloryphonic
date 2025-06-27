import { Benefit } from './Benefit';
import { type Meta, type StoryObj } from '@storybook/react';

const meta: Meta<typeof Benefit> = {
  title: 'Components/Benefit',
  component: Benefit,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Benefit>;

export const Default: Story = {
  args: {
    item: {
      image: 'https://example.com/image.jpg',
      name: 'Sample Benefit',
      description: 'This is a sample benefit description.',
    },
  },
};

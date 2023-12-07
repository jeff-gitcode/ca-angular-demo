import type { Meta, StoryObj } from '@storybook/angular';
import { NavComponent } from './nav.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<NavComponent> = {
  component: NavComponent,
  title: 'NavComponent',
};
export default meta;
type Story = StoryObj<NavComponent>;

export const Primary: Story = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/nav works!/gi)).toBeTruthy();
  },
};

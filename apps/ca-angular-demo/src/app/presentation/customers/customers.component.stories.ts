import type { Meta, StoryObj } from '@storybook/angular';
import { CustomersComponent } from './customers.component';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { Customer } from '../../domain/customer';
import { signal } from '@angular/core';

const meta: Meta<CustomersComponent> = {
  component: CustomersComponent,
  title: 'CustomersComponent',
};
export default meta;
type Story = StoryObj<CustomersComponent>;

export const Primary: Story = {
  args: {
    customers: signal([]),
    customer: {} as Customer,
  },
};

export const Heading: Story = {
  args: {
    customers: signal([]),
    customer: {} as Customer,
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/customers works!/gi)).toBeTruthy();
  },
};

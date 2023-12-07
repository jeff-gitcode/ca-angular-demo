import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { NavComponent } from './nav.component';

import { within } from '@storybook/testing-library';
import { expect, jest } from '@storybook/jest';
import { IAuthUseCase } from '../../application/abstract/iauth.usecase';

const meta: Meta<NavComponent> = {
  component: NavComponent,
  title: 'NavComponent',
  decorators: [
    moduleMetadata({
      imports: [],
      providers: [{
        provide: IAuthUseCase, useValue: {
          isLoggedIn: jest.fn(),
          isLoggedOut: jest.fn(),
          isLoggedInStatus: jest.fn(),
          loginSignal: jest.fn(),
          login: jest.fn(),
          logout: jest.fn(),
          getExpiration: jest.fn(),
        }
      }],
    }),
  ],
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

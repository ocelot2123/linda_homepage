import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavButton } from './NavButton';

export default {
  title: 'Fitted/NavButton',
  component: NavButton,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof NavButton>;

const Template: ComponentStory<typeof NavButton> = args => (
  <NavButton {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'NavButton',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'NavButton',
};

export const h5 = Template.bind({});
h5.args = {
  size: 'h5',
  primary: true,
  label: 'NavButton',
};
export const h4 = Template.bind({});
h4.args = {
  size: 'h4',
  primary: true,
  label: 'NavButton',
};
export const h3 = Template.bind({});
h3.args = {
  size: 'h3',
  primary: true,
  label: 'NavButton',
};
export const h2 = Template.bind({});
h2.args = {
  size: 'h2',
  primary: true,
  label: 'NavButton',
};

export const h1 = Template.bind({});
h1.args = {
  size: 'h1',
  primary: true,
  label: 'NavButton',
};

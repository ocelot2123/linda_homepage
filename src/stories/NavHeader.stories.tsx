import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { NavHeader } from './NavHeader';

export default {
  title: 'Fitted/NavHeader',
  component: NavHeader,
} as ComponentMeta<typeof NavHeader>;

export const NavHeaderStory: ComponentStory<typeof NavHeader> = () => (
  <NavHeader />
);

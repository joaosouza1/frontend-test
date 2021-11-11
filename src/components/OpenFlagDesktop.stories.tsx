import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OpenFlagDesktop } from './OpenFlagDesktop';

export default {
  title: 'Components/OpenFlagDesktop',
  component: OpenFlagDesktop,
  parameters: {
    grid: {
      cellSize: 1
    }
  }
} as ComponentMeta<typeof OpenFlagDesktop>;

const Template: ComponentStory<typeof OpenFlagDesktop> = (args) => <OpenFlagDesktop {...args} />;

export const Default = Template.bind({});

export const Open = Template.bind({});
Open.args = {
  open: true
};

export const Closed = Template.bind({});
Closed.args = {
  open: false
};

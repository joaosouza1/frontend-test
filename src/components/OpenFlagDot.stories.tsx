import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OpenFlagDot } from './OpenFlagDot';

export default {
  title: 'Components/OpenFlagDot',
  component: OpenFlagDot,
} as ComponentMeta<typeof OpenFlagDot>;

const Template: ComponentStory<typeof OpenFlagDot> = (args) => <OpenFlagDot {...args} />;

export const Default = Template.bind({});

export const Open = Template.bind({});
Open.args = {
  open: true
};

export const Closed = Template.bind({});
Closed.args = {
  open: false
};

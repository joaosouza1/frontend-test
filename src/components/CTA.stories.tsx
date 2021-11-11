import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CTA } from './CTA';

export default {
  title: 'Components/CTA',
  component: CTA,
} as ComponentMeta<typeof CTA>;

const Template: ComponentStory<typeof CTA> = (args) => <CTA {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  primary: true,
};

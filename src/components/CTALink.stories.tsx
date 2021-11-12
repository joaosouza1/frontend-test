import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CTALink } from './CTALink';

export default {
  title: 'Components/CTALink',
  component: CTALink,
} as ComponentMeta<typeof CTALink>;

const Template: ComponentStory<typeof CTALink> = (args) => <CTALink {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  primary: true,
};

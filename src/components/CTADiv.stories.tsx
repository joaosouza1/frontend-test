import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CTADiv } from './CTADiv';

export default {
  title: 'Components/CTADiv',
  component: CTADiv,
} as ComponentMeta<typeof CTADiv>;

const Template: ComponentStory<typeof CTADiv> = (args) => <CTADiv {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};

export const Primary = Template.bind({});
Primary.args = {
  children: 'Primary',
  primary: true,
};

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { MetaText } from './MetaText';

export default {
  title: 'Components/MetaText',
  component: MetaText,
} as ComponentMeta<typeof MetaText>;

const Template: ComponentStory<typeof MetaText> = (args) => <MetaText {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Meta text',
};

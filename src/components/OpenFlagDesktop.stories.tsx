import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { OpenFlagDesktop } from './OpenFlagDesktop';
import { Subheading } from './Subheading';
import { MetaText } from './MetaText';

export default {
  title: 'Components/OpenFlagDesktop',
  component: OpenFlagDesktop,
  parameters: {
    grid: {
      cellSize: 1
    }
  }
} as ComponentMeta<typeof OpenFlagDesktop>;

const MetaTextTemplate: ComponentStory<typeof OpenFlagDesktop> = (args) => (
  <MetaText>
    <OpenFlagDesktop {...args} />
  </MetaText>
)

export const MetaTextOpen = MetaTextTemplate.bind({});
MetaTextOpen.args = {
  open: true
};

export const MetaTextClosed = MetaTextTemplate.bind({});
MetaTextClosed.args = {
  open: false
};

const SubheadingTemplate: ComponentStory<typeof OpenFlagDesktop> = (args) => (
  <Subheading>
    <OpenFlagDesktop {...args} />
  </Subheading>
)

export const SubheadingOpen = SubheadingTemplate.bind({});
SubheadingOpen.args = {
  open: true
};

export const SubheadingClosed = SubheadingTemplate.bind({});
SubheadingClosed.args = {
  open: false
};

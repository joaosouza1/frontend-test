import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Layout } from './Layout';

export default {
  title: 'Components/Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen'
  }
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => <Layout {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: (
    <div style={{ background: "#dddddd", height: "50vh" }}>
      Layout provides the padding around this div
    </div>
  )
}

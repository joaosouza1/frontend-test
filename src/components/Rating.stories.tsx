import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Rating } from './Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
  parameters: {
    grid: {
      cellSize: 1
    }
  }
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Zero = Template.bind({});
Zero.storyName = "☆☆☆☆☆ (0.0)"
Zero.args = {
  value: 0
};

export const TwoPointFive = Template.bind({});
TwoPointFive.storyName = "★★★☆☆ (2.5)"
TwoPointFive.args = {
  value: 2.5
};

export const Five = Template.bind({});
Five.storyName = "★★★★★ (5.0)"
Five.args = {
  value: 5
};

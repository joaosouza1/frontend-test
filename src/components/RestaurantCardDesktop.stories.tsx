import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RestaurantCardDesktop } from './RestaurantCardDesktop';
import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'Components/RestaurantCardDesktop',
  component: RestaurantCardDesktop,
  parameters: {
    viewport: {
      viewports: {
        narrow: {
          name: 'Common Card Size',
          styles: {
            width: '320px',
            height: '450px',
          },
        },
      },
      defaultViewport: "narrow"
    }
  }
} as ComponentMeta<typeof RestaurantCardDesktop>;

const Template: ComponentStory<typeof RestaurantCardDesktop> = (args) => (
  <MemoryRouter>
    <RestaurantCardDesktop {...args} />
  </MemoryRouter>
);

export const LongName = Template.bind({});
LongName.args = {
  id: "123",
  name: "Very Long Name Restaurants Number 1 In List",
  imageURL: "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
  rating: 4,
  cuisine: "Thai",
  price: "$$$$",
  open: true,
};

export const ShortName = Template.bind({});
ShortName.args = {
  id: "456",
  name: "Restaurant",
  imageURL: "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
  rating: 1.5,
  cuisine: "American (new)",
  price: "$",
  open: false,
};

export const PriceUnknown = Template.bind({});
PriceUnknown.args = {
  id: "456",
  name: "Price unknown",
  imageURL: "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
  rating: 1.5,
  cuisine: "American (new)",
  price: undefined,
  open: false,
};

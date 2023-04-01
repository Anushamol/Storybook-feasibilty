import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../Button/Button';
import CheckboxDemo from './Checkbox';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/CheckboxDemo',
  component: CheckboxDemo,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CheckboxDemo>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CheckboxDemo> = (args) => <CheckboxDemo {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args


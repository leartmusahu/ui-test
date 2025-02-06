import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { MultiSelect, MultiSelectProps } from "../components/MultiSelect";

export default {
  title: "Components/MultiSelect",
  component: MultiSelect,
} as Meta;

const Template: StoryFn<MultiSelectProps> = (args) => <MultiSelect {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: async () => [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
  ],
  placeholder: "Select items...",
  isLoading: false,
  isDisabled: false,
  onChange: (selected) => console.log(selected),
};

export const Loading = Template.bind({});
Loading.args = {
  ...Default.args,
  isLoading: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Default.args,
  isDisabled: true,
};

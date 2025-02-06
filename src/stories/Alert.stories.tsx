import { Meta, StoryObj } from "@storybook/react";
import { Alert } from "../components/Alert";
import { Info } from "lucide-react";

export default {
  title: "Components/Alert",
  component: Alert,
} as Meta<typeof Alert>;

export const Success: StoryObj<typeof Alert> = {
  args: {
    type: "success",
    description: "This is a success alert!",
    variant: "subtle",
  },
};

export const WithTitle: StoryObj<typeof Alert> = {
  args: {
    type: "warning",
    title: "Warning",
    description: "This is a warning alert!",
    variant: "subtle",
  },
};

export const WithIcon: StoryObj<typeof Alert> = {
  args: {
    type: "info",
    icon: <Info />,
    description: "This is an info alert.",
  },
};

export const Closable: StoryObj<typeof Alert> = {
  args: {
    type: "error",
    title: "Error!",
    description: "This is an error alert!",
    onClose: () => alert("Closed!"),
  },
};

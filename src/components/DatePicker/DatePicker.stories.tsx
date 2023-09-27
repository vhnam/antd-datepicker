import { Meta, StoryObj } from "@storybook/react";

import DatePicker, { DatePickerProps } from "./DatePicker";
import { useState } from "react";

const meta = {
  component: DatePicker,
  tags: ["autodocs"],
} satisfies Meta<DatePickerProps>;
export default meta;
type Story = StoryObj<typeof meta>;

const Template = (args: DatePickerProps) => {
  const [date, setDate] = useState<Date | null>(args.value ?? null);

  return (
    <DatePicker {...args} value={date} onChange={(value) => setDate(value)} />
  );
};

export const SelectDate: Story = {
  args: {
    value: new Date(),
  },
  render: (args) => <Template {...args} />,
};

export const SelectDateWithLabel: Story = {
  args: {
    value: new Date(),
    label: "Date picker label",
  },
  render: (args) => <Template {...args} />,
};

export const SelectDateWithoutValue: Story = {
  render: () => <Template />,
};

export const SelectDateWithoutFooter: Story = {
  args: {
    value: new Date(),
    showFooter: false,
  },
  render: (args) => <Template {...args} />,
};

export const SelectMonth: Story = {
  args: {
    value: new Date(),
    picker: "month",
  },
  render: (args) => <Template {...args} />,
};

export const SelectQuater: Story = {
  args: {
    value: new Date(),
    picker: "quarter",
  },
  render: (args) => <Template {...args} />,
};

export const SelectYear: Story = {
  args: {
    value: new Date(),
    picker: "year",
  },
  render: (args) => <Template {...args} />,
};

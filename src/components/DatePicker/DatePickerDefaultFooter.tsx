import { Button } from "antd";

import "./DatePickerDefaultFooter.scss";

interface DatePickerDefaultFooterProps {
  isDisabled?: boolean;
  picker: "date" | "week" | "month" | "quarter" | "year";
  onToday: () => void;
}

function DatePickerDefaultFooter(props: DatePickerDefaultFooterProps) {
  const { isDisabled = false, picker, onToday } = props;

  return (
    <footer className="ant-picker-default-footer">
      <Button size="small" type="text" className="btn-today" onClick={onToday}>
        {"date" === picker ? "Today" : "Now"}
      </Button>
      <Button disabled={isDisabled} size="small" type="primary">
        Ok
      </Button>
    </footer>
  );
}

export default DatePickerDefaultFooter;

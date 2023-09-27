import { DatePicker as AntDatePicker, Typography } from "antd";
import en_US from "antd/es/date-picker/locale/en_US";
import dayjs, { type Dayjs } from "dayjs";
import cloneDeep from "lodash.clonedeep";
import { useMemo } from "react";

import DatePickerDefaultFooter from "./DatePickerDefaultFooter";

import "./DatePicker.scss";

const clonedLocale = cloneDeep(en_US);
clonedLocale.lang.shortWeekDays = ["M", "T", "W", "T", "F", "S", "S"];

export interface DatePickerProps {
  allowClear?: boolean;
  label?: string;
  picker?: "date" | "week" | "month" | "quarter" | "year";
  showFooter?: boolean;
  value?: Date | null;
  onChange?: (value: Date | null) => void;
}

function DatePicker(props: DatePickerProps) {
  const {
    allowClear = true,
    label,
    picker = "date",
    showFooter = true,
    value = null,
    onChange = () => true,
  } = props;

  const dateFormat = useMemo(() => {
    if ("week" === picker) {
      return "wo-gggg";
    } else if ("month" === picker) {
      return "MM/YYYY";
    } else if ("quarter" === picker) {
      return "[Q]Q-YYYY";
    } else if ("year" === picker) {
      return "YYYY";
    }
    return "DD/MM/YYYY";
  }, [picker]);

  const handleChange = (value: Dayjs | null) => {
    if (value) {
      onChange(value.toDate());
    } else {
      onChange(null);
    }
  };

  return (
    <div>
      {label ? (
        <Typography.Text className="ant-picker-label">{label}</Typography.Text>
      ) : null}
      <AntDatePicker
        allowClear={allowClear}
        format={dateFormat}
        locale={clonedLocale}
        picker={picker}
        showNow={false}
        showToday={false}
        superNextIcon={null}
        superPrevIcon={null}
        value={value ? dayjs(value) : null}
        renderExtraFooter={() =>
          showFooter ? (
            <DatePickerDefaultFooter
              isDisabled={!value}
              picker={picker}
              onToday={() => handleChange(dayjs())}
            />
          ) : null
        }
        onChange={handleChange}
      />
    </div>
  );
}

export default DatePicker;

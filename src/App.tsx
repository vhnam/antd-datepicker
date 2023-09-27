import { ConfigProvider, DatePicker, DatePickerProps, Space } from "antd";

function App() {
  const onChange: DatePickerProps["onChange"] = (date, dateString) => {
    console.log(date, dateString);
  };

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#0f6d77",
        },
      }}
    >
      <Space direction="vertical">
        <DatePicker onChange={onChange} />
        <DatePicker onChange={onChange} picker="week" />
        <DatePicker onChange={onChange} picker="month" />
      </Space>
    </ConfigProvider>
  );
}

export default App;

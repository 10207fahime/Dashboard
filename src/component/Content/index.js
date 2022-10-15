import { Layout } from "antd";
const { Content } = Layout;
export function Contents() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      ></div>
    </Content>
  );
}

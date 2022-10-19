import { Layout } from "antd";
import { UserIndex } from "../pages/Users/UsersIndex";
const { Content } = Layout;
export function Contents() {
  return (
    <Content style={{ margin: "0 16px" }}>
      <div
        className="site-layout-background"
        style={{ padding: 24, minHeight: 360 }}
      >
        <div className="card p-5">
          <UserIndex />
        </div>
      </div>
    </Content>
  );
}

import { Layout, Menu } from "antd";
import { UserOutlined, SmallDashOutlined } from "@ant-design/icons";
import { useState } from "react";
import logo from "../../assets/img/brand.jpg";
import "./style.css";
const { Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [getItem("کاربران", "sub1", <UserOutlined />)];
export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className="logo">
        <img
          src={logo}
          width="50px"
          height="50px"
          style={{ borderRadius: "50px" }}
        />
      </div>
      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={items}
      />
    </Sider>
  );
}

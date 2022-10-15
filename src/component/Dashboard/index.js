import { Layout } from "antd";
import { Sidebar } from "./../Sidebar/index";
import { Headers } from "./../Header/index";
import { Footers } from "./../Footer/index";
import { Contents } from "./../Content/index";
export function Dashboard() {
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout className="site-layout">
          <Headers />
          <Contents />
          <Footers />
        </Layout>
      </Layout>
      ;
    </>
  );
}

import React from 'react';
import 'antd/dist/antd.css';
import './index.css';
import List from './table.js';
import {
  PieChartOutlined,
  UserOutlined,
  TeamOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items1 = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('My Page', '9', <UserOutlined />),
];
const items = [
  getItem('관심 주제', 'sub1', <UserOutlined />, [
    getItem('비트코인', '3'),
    getItem('AI', '4'),
    getItem('건국대', '5'),
  ]),
  getItem('신문사', 'sub2', <FileOutlined />, [
    getItem('조선일보', '6'),
    getItem('중앙일보', '8'),
  ]),
  getItem('추가 항목', '9', <TeamOutlined />),
];
const App = () => (
  <Layout style={{ height: '100vh' }}>
    <Header
      style={{ display: 'flex', justifyContent: 'space-between' }}
      className="header"
    >
      <div className="logo"></div>
      <Menu
        disabledOverflow="true"
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        items={items1}
      />
    </Header>
    <Content>
      <Layout
        className="site-layout-background"
        style={{
          padding: '24px 0',
        }}
      >
        <Sider
          className="site-layout-background"
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={(broken) => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            items={items}
          />
        </Sider>
        <Content
          style={{
            overflow: 'auto',
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>정치</Breadcrumb.Item>
            <Breadcrumb.Item>과학</Breadcrumb.Item>
            <Breadcrumb.Item>경제</Breadcrumb.Item>
          </Breadcrumb>
          <List />
        </Content>
      </Layout>
    </Content>
  </Layout>
);

export default App;

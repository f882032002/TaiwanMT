import React from 'react';
import logo from './images/logo.png';
import { Route } from 'react-router-dom';
import { Row, Col, Layout } from 'antd';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Product } from './pages/Product';
import { Navbar } from './Navbar';
import { Link } from 'react-router-dom';
import './App.css';

const { Header, Content, Footer } = Layout;

function handleClick (e){
  console.log(e.key);
};

function App() {
  return (
    <Layout className="App">
      <Header className="header" theme="light">
        <Row type="flex" justify="space-around" align="middle">
          <Col span={4}>
            <Link to="/" >
                <img src={logo} alt="react-router-breadcrumb" width="90" height="30" />
            </Link>
          </Col>
          <Col span={20}>
            <Navbar handleClick={handleClick} />
          </Col>
        </Row>
      </Header>
      <Content style={{paddingTop: 64}}>
        <Row>
          <Col span={24}>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/product" component={Product} />
          </Col>
        </Row>
      </Content >
      <Footer style={{textAlign: 'center'}}>Copyright &copy; Taiwan Muscle 2019</Footer>
    </Layout>
  );
}

export default App;

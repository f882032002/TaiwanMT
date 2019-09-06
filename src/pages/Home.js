import React from 'react';
import banner from '../images/banner.png';
import { Card, Button, Row, Col } from 'antd';

function handleClick(){
    console.log('123')
}

function Home (){
    return (
        <Row type="flex" justify="center" >
            <Col span={24}>
                <img src={banner} alt="banner" width="100%" height="auto" />
            </Col>
            <Col span={12} style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Home title" bordered={false} style={{ width: '100%' }}>
                    <p>Home</p>
                    <p>Home</p>
                    <p>Home</p>
                    <Button type="primary" onClick={handleClick}>Button</Button>
                </Card>
            </Col>
        </Row>
    );
};

export { Home };
import React from 'react';
import { Card, Button, Row, Col } from 'antd';

function handleClick(){
    console.log('123')
}

function Product (){
    return (
        <Row type="flex" justify="center" >
            <Col span={12} style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="Product title" bordered={false} style={{ width: '100%' }}>
                    <p>Product</p>
                    <p>Product</p>
                    <p>Product</p>
                    <Button type="primary" onClick={handleClick}>Button</Button>
                </Card>
            </Col>
        </Row>
    );
};

export { Product };
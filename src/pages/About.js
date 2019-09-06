import React from 'react';
import { Card, Button, Row, Col } from 'antd';

function handleClick(){
    console.log('123')
}

function About (){
    return (
        <Row type="flex" justify="center" >
            <Col span={24} style={{ background: '#ECECEC', padding: '30px' }}>
                <Card title="About title" bordered={false} style={{ width: '100%' }}>
                    <p>About</p>
                    <p>About</p>
                    <p>About</p>
                    <Button type="primary" onClick={handleClick}>Button</Button>
                </Card>
            </Col>
        </Row>
    );
};

export { About };
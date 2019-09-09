import React from 'react';
import banner from '../images/banner.png';
import banner2 from '../images/banner2.png';
import { Row, Col, Carousel } from 'antd';



function Home (){
    const settings = {
        autoplay: true,
        speed: 500,
    }
    return (
        <Row type="flex" justify="center">
            <Col span={24} style={{ position: 'relative' }}>
                <Carousel {...settings}>
                    <img src={banner} alt="banner" width="100%" height="auto" />
                    <img src={banner2} alt="banner" width="100%" height="auto" />
                </Carousel>
            </Col>
            <Col span={24} style={{paddingTop: 64, textAlign: 'center'}}>
                <h1>專售 Eat Me 紐西蘭 & My Protein 英國 乳清蛋白</h1>
            </Col>
        </Row>
    );
};

export { Home };
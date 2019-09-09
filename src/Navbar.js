import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { Item } = Menu;

function Navbar(props) {
    const { handleClick } = props;
    return (
        <Menu 
            onClick={handleClick} 
            defaultSelectedKeys={["home"]} 
            mode="horizontal" 
            theme="light"
            style={{ lineHeight: "62px", borderBottom: "none" }}
        >   
            <Item key='home'>
                <Link to="/" >
                    <Icon type="home" />
                    Home
                </Link>
            </Item>
            <Item key='product'>
                <Link to="/product">
                    <Icon type="shopping" />
                    Product
                </Link>
            </Item>
            <Item key='about'>
                <Link to="/about">
                    <Icon type="question-circle" />
                    About
                </Link>
            </Item>
            <Item key='contact'>
                <Link to="/contact">
                    <Icon type="phone" />
                    Contact
                </Link>
            </Item>
        </Menu>
    );
}

export { Navbar };






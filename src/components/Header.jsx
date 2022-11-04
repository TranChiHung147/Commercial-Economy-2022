import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import call from '../icon-font/call-outline.svg';
import cart from '../icon-font/cart-outline.svg';
import search from '../icon-font/search-outline.svg';

const LinkItem = styled(Link)`
    color:black;
    text-decoration:none;
`;

function Header() {
  return (
    <div className="header">
        <div className="header-logo">
        <Link to='/'>
            <div className="header-logo-img button-hover">
                <img src="../img/icon.png" alt="" />
            </div>
        </Link>
        <LinkItem to='/'>
            <div className="header-logo-text button-hover">BK ROBOTIC</div>
        </LinkItem>    
        </div>
        <ul className="header-slider">
            <LinkItem to='/'>
                <li className="header-slider-item">Trang chủ</li>   
            </LinkItem>

            <LinkItem to='/product'>    
                <li className="header-slider-item">Sản phẩm</li>
            </LinkItem>

            <LinkItem to='/showroom'>
                <li className="header-slider-item">Show room</li>
            </LinkItem>

            <LinkItem to='/news'>
            <li className="header-slider-item">Tin tức</li>
            </LinkItem>

            
            <li className="header-slider-item">Bảo hành</li>
        </ul>
        <div className="header-icon">
            <img src={call} class="header-icon-item button-hover" name="call-outline" alt=""></img>
            <img src={cart} class="header-icon-item button-hover" name="cart-outline" alt=""></img>
            <img src={search} class="header-icon-item button-hover" name="search-outline" alt=""></img>
        </div>
    </div>
  )
}

export default Header
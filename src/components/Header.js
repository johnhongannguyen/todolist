import React from 'react';
import styled from 'styled-components';

const Header = ({ sideBarToggle, setSideBarToggle }) => {
    return (
        <Wrapper>
        <HeaderItem onClick={() => (setSideBarToggle(!sideBarToggle))}>
          <i  className='fas fa-bars'/>  
        </HeaderItem>

        <HeaderItem>
            <i  className='fas fa-border-all'/>  
            <span>Dashboard</span>
        </HeaderItem>

        <HeaderItem>
            <i  className='fas fa-images'/>
            <span>Collection </span> 
        </HeaderItem>

        <PlaceHolder />

        <HeaderItem>
           
           <Profile>
            <img 
                src='https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg'
                alt=''

            />   
            </Profile>  
        </HeaderItem>

</Wrapper>  
    )
}

export default Header

const Wrapper = styled.div`
    display: flex;
    height: 70px;
    align-items: center;
    background-color: #20212d;
    padding: 0 20px; 
    /* this is for shadow */ 
    -webkit-box-shadow: 0px 4px 15px 0px #121212;
    box-shadow: 0px 4px 15px 0px #121212;

    /* this is for nav bar stick at the top of the page */
    position: sticky;
    top: 0;
`

const Profile = styled.div`
    img{
        height: 30px;
        border-radius: 50%;
    }
    display: flex;
    align-items: center;
`

const HeaderItem = styled.div`
    color: #eee;

    /* giving item more room */
    padding: 10px 16px;
    border-radius: 4px;

    span {
        margin-left: 10px;
        font-weight: 500;
    }

    &:hover{
        background-color:#18181f;
        transition: 0.3s;
        cursor: pointer;
    }
`

const PlaceHolder = styled.div`
    flex: 1
`

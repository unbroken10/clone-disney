import styled from 'styled-components';

const navbar=  ()=>{
    return(
            <Nav>
                <Logo src="./images/logo.svg" alt="logo"/>
                <Navitem>
                    <a href="home"><img src="./images/home-icon.svg"/><span>HOME</span></a>
                    <a href="#"><img src="./images/search-icon.svg"/><span>SEARCH</span></a>
                    <a href="#"><img src="./images/watchlist-icon.svg"/><span>WATCHLIST</span></a>
                    <a href="#"><img src="./images/original-icon.svg"/><span>ORIGINALS</span></a>
                    <a href="#"><img src="./images/movie-icon.svg"/><span>SERIES</span></a>
                </Navitem>
                <Button href="/login">LOGIN</Button>
            </Nav>
        );
}


const Nav = styled.div`
position:fixed;
left:0;
right:0;
top:0;
height: 70px;
background-color: #090b13;
// padding:20px;
display: flex;
justify-content: space-between;
z-index:2;
`;
const Logo = styled.img`
height:50px;
margin: 10px 20px;
&:hover{
    cursor: pointer;
}
`;
const Navitem = styled.div`
position: relative;
// margin:auto;
// margin-right: auto;
margin: auto auto auto 0;
padding:6px 14px;
align-item:center;
text-align:center;
display:flex;
justify-content: space-between;
gap: 2rem;
a{
    display:flex;
    justify-content:center;
    align-item:center;
    text-align:center;
    gap: 8px;   
    &:hover{
        color:#0483ee;
    }
}
img {
    height: 18pxpx;
    width:18px;
};
span{
    margin: auto;
    font-size:16px;
    letter-spacing:1.42px;
    line-height:1.08px;
    padding: 2px 0px;
}

@media (max-width:768px){
    a{
        display:none;
    }
}
`;
const Item = styled.div`
display: flex;
flex-direction: rows;
`;
const Button = styled.a`
margin: 16px 20px;
text-align:center;
align-item:center;
padding:10px 14px;
border-radius:4px;
border: 1px solid white;
letter-spacing: 1.5px;

&:hover{
    cursor: pointer;
    background-color: white;
    color: black;
    border: 1px solid black;  
    font-weight: bold;  
}
`;

export default navbar;
  
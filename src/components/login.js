import styled from 'styled-components';

const Login = ()=>{
    return(
        <Container>
            <Content>
                {/* <CTA>
                 
        <input type="email" name="email" required/>
        <input type="password" name="password" required/>

            <Button>LOGIN</Button>
        

    
                </CTA> */}
                <h1>COMING SOON</h1>
                <Bgimg/>
            </Content>
        </Container> 

        
    
    );
}
const Container = styled.section`
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;
const Content = styled.div`

margin-bottom: 2vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content:center;
flex-direction: column;
// background-color: green;
`;
const Bgimg = styled.div`
height:100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image:url('/images/login-background.jpg');
position:absolute;
top:0;
left:0;
right:0;
z-index:-1;
`;
const CTA = styled.div`
margin-bottom:2vw;
width:400px;
flex-wrap:wrap;
display:flex;
flex-direction: column;
justify-content:center;
gap:20px;
align-item:left;
text-align:center;
margin-left:auto;
margin-right:auto;


`;
const Button = styled.a`
font-weight: bold;
background-color:#0063e5;
// margin-bottom:12px;
// width:50%;
letter-spacing:1.5px;
font-size:18px;
padding: 16px 0px;
border: 1px solid transparent;
border-radius: 6px;

&:hover{
    background-color:#0483ee;
    cursor:pointer;
}
`;
export default Login;
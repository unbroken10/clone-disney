import styled from 'styled-components';

const Start=(props)=> {
    return(
        <Container>
            <Content>
                <CTA>
                    <CTAlogo src="/images/cta-logo-one.svg" alt="logo"  />
                    <Button>GET ALL HERE</Button>
                    <Description>This is disnay download 
                        kvmlkmvihvlwr vwoivjl wivhwoiv jwudvk wduvhkw udvhkudv divhw
                        wdvhjlwdivwdvj
                        ,vvthe app ancud cud wvuh fwiuf hbfku
                        w fuf wfu hwfu hljfns,cj,bslc jsbou blfu h
                        owuefn lwufe wfu howef uhowefun</Description>
                    <CTAlogo src="/images/cta-logo-two.png" alt="logo"  />
                </CTA>
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
width:650px;
flex-wrap:wrap;
display:flex;
flex-direction: column;
justify-content:center;
align-item:center;
text-align:center;
margin-left:auto;
margin-right:auto;


`;
const CTAlogo = styled.img`
max-width: 600px;
margin:auto;
margin-bottom: 12px;
min-height:1px;
// width: 100%;
`;
const Button = styled.a`
font-weight: bold;
background-color:#0063e5;
margin-bottom:12px;
width:100%;
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
const Description = styled.div`
font-size:11px;
margin: 0 0 24px;
line-height:1.5;
letter-spacing: 1.5px;
`;


export default Start;
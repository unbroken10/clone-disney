import styled from 'styled-components';

const Playing = ()=>{
return(
    <Container>
        <Logo src="./images/toy-logo.png"/>
        <Play>
            <Button href='https://www.youtube.com/watch?v=wmiIUN-7qhE&ab_channel=Pixar'>TRAILER</Button>
            <Watch><img src='./images/watchlist-icon.svg'/></Watch>
            </Play>
            <Time>
                2020 &#x2022; 1h 49m &#x2022; Family, Comedy, Drama, Kids, Animation        
            </Time>
            <Description>
            Taking place in a world where toys come to life when humans are not present
            , the plot of Toy Story focuses on the relationship between an 
            old-fashioned pull-string cowboy doll named Woody and a modern space cadet 
            action figure, Buzz Lightyear, as Woody develops jealousy towards Buzz
             when he becomes their owner Andy's favorite toy.

            </Description>
        
        <Bimg/>
    </Container>

    )
};
// const CTA = styled.div`
// margin-bottom:2vw;
// width:650px;
// flex-wrap:wrap;
// display:flex;
// flex-direction: column;
// justify-content:center;
// align-item:center;
// text-align:center;
// margin-left:auto;
// margin-right:auto;


// `;
const Container = styled.div`
margin-top: 70px;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
// justify-content:center;
flex-direction: column;
background: linear-gradient(270deg, rgba(0,0,0,0), rgba(0,0,0,255));
padding-left: 20px
`;
const Bimg = styled.div`
height:100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image:url('/images/toy-bg.jpg');
position:absolute;
top:0;
left:0;
right:0;
z-index:-1;
`;
const Logo = styled.img`
width:40vw;
left:0;

`;
const Play = styled.div`
margin: 20px ;  
display:flex;
// width: 35vw;
gap: 30px;
`;
const Button = styled.a`
text-align:center;
align-item:center;
padding:18px 15px;
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
const Watch = styled.div`
width:50px;
height:50px;
border:1px solid white;
border-radius:50%;
&:hover{
    cursor: pointer;
    border: 2px solid white;
    transform:scale(1.05);  
    font-weight: bold;  
}
`;
const Time = styled.div`
margin: 20px ;
`;
const Description = styled.div`
width: 35vw;
font-size:15px;
margin: 20px ;
line-height:1.5;
letter-spacing: 1.5px; 

@media only screen and (max-width: 768px) {
      width:80vw;
  }
  
`;

export default Playing;
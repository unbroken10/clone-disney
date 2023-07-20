import styled from 'styled-components';


const content = (promps)=>{

    return (
       <Contentcards>
           <Wrap>
                <img src='./images/viewers-disney.png' alt='disney'></img>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/disney.mp4' type='video/mp4'/>
                </video>
           </Wrap>
           <Wrap>
                <img src='images/viewers-marvel.png' alt='disney'></img>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/marvel.mp4' type='video/mp4'/>
                </video>
           </Wrap>
           <Wrap>
                <img src='images/viewers-national.png' alt='disney'></img>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/national.mp4' type='video/mp4'/>
                </video>
           </Wrap>
           <Wrap>
                <img src='images/viewers-pixar.png' alt='disney'></img>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/pixar.mp4' type='video/mp4'/>
                </video>
           </Wrap>
           <Wrap>
                <img src='images/viewers-starwars.png' alt='disney'></img>
                <video autoPlay={true} playsInline={true} loop={true}>
                    <source src='videos/star-wars.mp4' type='video/mp4'/>
                </video>
           </Wrap>
           
       </Contentcards>
    );
}

const Contentcards = styled.div`

 margin: 50px 10px 10px 10px;
display: flex;
justify-content: space-between;
@media only screen and (max-width:480px){
    flex-direction: column;
    margin-left: 20px;
    gap: 20px;
    width: 90%;
}
`;  
const Wrap = styled.div`
border: 2px solid white;
border-radius: 8px;
width: 17vw;
position:relative;
// background-color:red;
height: 10vw;
transition: all 150ms ease-in-out 0s;
img{
    width:100%;
    height:100%;
    z-index:-1;
}
@media only screen and (max-width:480px){
    flex-direction: column;
    width: 100%;
    height: 15%;

}
video{
    width:100%;
    height:100%;
    position:absolute;   
    top:0px;
    left: 0px;
    z-index:-2;
    opacity:0;
}
&:hover{
    border: 2.5px solid #0063e5;
    transform: scale(1.1);
    cursor:pointer;
    video{
        opacity:1;
        width:100%;
    height:100%;
    }
}
`;
export default content;
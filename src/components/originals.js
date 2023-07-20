import styled from 'styled-components';


const Originals = ()=>{
    return (
        <Container>
            <h3>Originals</h3>
        <Content>
        <div>
                <img src='./images/batman.png' alt='disney'></img>
                <a href="playing" >PlayNow</a>
           </div>
           <div>
                <img src='./images/avatar.jpg' alt='disney'></img>
                <a href="playing" >PlayNow</a>
           </div>
           <div>
                <img src='./images/cars.jpg' alt='disney'></img>
                <a href="playing" >PlayNow</a>
           </div>
           <div>
                <img src='./images/joker.jpg' alt='disney'></img>
                <a href="playing" >PlayNow</a>
           </div>
           <div>
                <img src='./images/thor.jpg' alt='disney'></img>
                <a href="playing" >PlayNow</a>
           </div>    
           <div>
                <img src='./images/wakanda.jpeg' alt='disney'></img>
                <a href="playing" >PlayNow</a>
           </div>    
           <div>
                <img src='./images/toy.jpeg' alt='disney'></img>
                <a href="playing" >PlayNow</a>
           </div>    
           <div>
                <img src='./images/inside.jpeg' alt='disney'></img>
                <a href="playing" >PlayNow</a>
           </div>    
        </Content>
        </Container>
    );
};
const Content = styled.div`
display:grid;
grid-gap:25px;
gap:50px;
grid-template-columns: repeat(4, minmax(0,1fr));
@media only screen and (max-width:768px){
    grid-template-columns: repeat(2, minmax(0,1fr));

}
div{
    border: 3px solid grey;
    border-radius:10px;
    position:relative;
    transition: all 150ms ease-in-out 0s;
    a{
        opacity:0;
        padding: 8px;
        background-color:white;
        color: black;
        border-radius:10px;
        position:absolute;
        bottom:8px;
        right:8px;
    }
    &:hover{
        cursor:pointer;
        transform: scale(1.05);
        border:solid white;
        a{
            opacity:1;
        }
    }
}
img{
    border-radius:10px;
    width:100%;
    height:100%;
    z-index:-1;
}

`;
const Container = styled.div`
margin:10px;
h3{
    margin: 0px 0px 10px 0px;
}
`;
export default Originals;
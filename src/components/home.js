import styled from 'styled-components';
import Imageslide from './imageslide';
import Content from './content';
import Recomended from './recomended';
import Footer from './footer';
import Originals from './originals';


const Home = ()=>{
    return (
         <Container>
                <Imageslide/>
                <Content/>
                <Recomended/>
                {/* <Originals/> */}
                <Footer/>
         </Container>
    );
}



const Container = styled.div`
position:relative;
top:70px; 
background: url('/images/home-background.png') center center / cover no-repeat fixed;
width: 100%;
// height:100vh;
padding : 0 calc(3.5vw + 5px);
`;




export default Home;
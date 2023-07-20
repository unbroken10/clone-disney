import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


const Imageslide = ()=>{
    let settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };
    return (
        <Carousel {...settings}>
            <Wrap>
                <a>
                    <img src='./images/slider-badag.jpg'></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='./images/slider-badging.jpg'></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='./images/slider-scale.jpg'></img>
                </a>
            </Wrap>
            <Wrap>
                <a>
                    <img src='./images/slider-scales.jpg'></img>
                </a>
            </Wrap>

        </Carousel>
    );
};

const Carousel = styled(Slider)`
top: 20px;

&>button{
    opacity: 0;
    height: 100%;
    width: 5vw;
}
&:hover{
    opacity: 1;
    transition: opacity 0.2s ease 0s;
    z-index: 1;
}
ul li button{
    &:before{
        font-size:10px;
        color: rgb(150,150,171);
    }
}
li.slick-active button:before{
    color:white;
}

`;
const Wrap = styled.div`
position:relative;

img{
    width:98vw;
    height: 30vw;
    @media only screen and (max-width:480px){
        height: 50vw; 
      }
}
`;
export default Imageslide ;
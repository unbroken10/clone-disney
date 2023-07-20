import styled from 'styled-components'

const footer= ()=>{

     return(

        <Foot>
            <Temp>
            <Company>
                <h4>Company</h4>
                <a href='#'>Aboutus</a>
                <a href='#'>Carrers</a>
            </Company>
            <View>
                <h4>View In</h4>
                <a href='#'>English</a>
            </View>
            <Need>
                <h4>Need Help?</h4>
                <a href='#'>VistHelpCenter</a>
                <a href='#'>Sharefeedback</a>
            </Need>
            <Connect>
                <h4>Connect</h4>
                <a href='#'>Facebook</a>
                <a href='#'>Twitter</a>
            </Connect>
            </Temp>
            <Copyright>
            "©" or the word "Copyright
            </Copyright>
        </Foot>

     );
};


const Foot = styled.div`
background-color: #090b13;
width:100%;
height: 20vh;
h4{
    color: white;
    font-weight: Normal;
    margin-bottom:8px;
}
`;
const Temp = styled.div`
padding: 20px 20px;
display: flex;
justify-content: space-between;
`;
const Company = styled.div`
display: flex;
flex-direction:column;`;
const View = styled.div`
display: flex;
flex-direction:column;`;
const Need = styled.div`
display: flex;
flex-direction:column;`;
const Connect = styled.div`
display: flex;
flex-direction:column;`;
const Copyright = styled.div``;


export default footer;
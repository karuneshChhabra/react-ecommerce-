import styled from 'styled-components';


const Container = styled.div`
    display:flex;
`

const Pane = styled.div`
Flex:1;
`


export const SplitScreen = ({left:Left,right:Right}) =>{

return(
    <Container>
        <Pane>
            <Left></Left>
        </Pane>
        <Pane>
            <Right/>
        </Pane>
    </Container>
)

}
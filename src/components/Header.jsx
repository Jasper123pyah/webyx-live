import styled from "styled-components";
import Container from "./Container.jsx";


const HeaderContainer = styled.div`
  background: var(--Background, #FAF7FF);
  box-shadow: 0px 1px 16px 0px #FFE9FF;
  width: 100vw;
  top: 0;
  padding: 40px 0;
  
  
  @media (max-width: 1024px) {
    padding: 30px 0;
  }
  @media (max-width: 768px) {
    padding: 20px 0;
  }
  @media (max-width: 480px) {
    padding: 10px 0;
  }
`


const Header = () => {

    return <HeaderContainer>
        <Container>

        </Container>

    </HeaderContainer>
}

export default Header
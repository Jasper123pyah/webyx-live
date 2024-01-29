import styled from "styled-components";


const StyledContainer = styled.div`
  width: calc(100% - 48px);
  margin: 0 auto;
  padding: 0 24px;

  @media (min-width: 768px) {
    padding: 0 48px;
    width: calc(100% - 96px);
  }

  @media (min-width: 1081px) {
    padding: 0 15px;
    max-width: calc(100% - 600px);
    width: calc(100% - 30px);
  }
`

const Container = ({children}) => {

    return <StyledContainer>
        {children}
    </StyledContainer>
}

export default Container;
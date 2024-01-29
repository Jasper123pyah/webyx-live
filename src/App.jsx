import Header from "./components/Header.jsx";
import styled from "styled-components";


const AppContainer = styled.div`
  min-height: 100vh;
  position: relative;
`
function App() {

  return (
    <AppContainer>
        <Header/>
    </AppContainer>
  )
}

export default App

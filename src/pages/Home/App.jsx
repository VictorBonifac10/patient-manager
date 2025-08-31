import { Container, Main, Banner } from "./styles"
import HeaderBase from "../../components/HeaderBase/HeaderBase"
import Table from "../../components/Table/Table"

import ImgBanner from '../../assets/banner.jpg'

function App() {

  return (
    <Container>
      <HeaderBase />
      <Main>
        <Banner>
          <img src={ImgBanner} alt="banner" />
          <div>
            <h3>98</h3>
            <p>Total de Pacientes</p>
          </div>
          <div>
            <h3>98</h3>
            <p>Pacientes + 60</p>
          </div>
          <div>
            <h3>98</h3>
            <p>Pacientes + 80</p>
          </div>
        </Banner>
        <Table />
      </Main>
    </Container>
  )
}

export default App

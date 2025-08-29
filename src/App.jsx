import { Container, Header, Aside, Services, Main, Banner } from "./styles"
import Table from "./Table"

import Logo from './assets/logo.svg'
import ImgBanner from './assets/banner.jpg'

function App() {

  return (
    <Container>
      <Header>
        <p>Seja bem vindo!</p>
        <div>
          <i class="ri-sun-fill"></i>
          <i class="ri-user-3-fill"></i>
        </div>
      </Header>
      <Aside>
        <img src={Logo} alt="banner" />
        <hr />
        <Services>
          <ul>
            <h2>Pacientes</h2>
            <div>
              <i class="ri-user-add-fill"></i>
              <li>Criar Usuário</li>
            </div>
            <div>
              <i class="ri-hospital-fill"></i>
              <li>Consultas</li>
            </div>
            <div>
              <i class="ri-dna-fill"></i>
              <li>Exames</li>
            </div>
            <h2>Sistema</h2>
            <div>
              <i class="ri-settings-3-fill"></i>
              <li>Configrações</li>
            </div>
            <div>
              <i class="ri-customer-service-2-fill"></i>
              <li>Suporte</li>
            </div>
          </ul>
        </Services>
      </Aside>
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

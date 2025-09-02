import { Header, Aside, Services } from "../../pages/Home/styles"
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import Logo from '../../assets/logo.svg'
import { DarkModeContext } from "../../contexts/DarkModeContext";

function HeaderBase() {

    const { toggleDarkMode } = useContext(DarkModeContext);

    const navigate = useNavigate()

    return (
        <>
            <Header>
                <p>Seja bem-vindo!</p>
                <div>
                    <i class="ri-sun-fill" onClick={toggleDarkMode}></i>
                    <i className="ri-user-3-fill"></i>
                </div>
            </Header>
            <Aside>
                <img src={Logo} alt="banner" />
                <hr />
                <Services>
                    <ul>
                        <h2>Pacientes</h2>
                        <button type='button' onClick={() => navigate('/')}>
                            <i class="ri-home-fill"></i>
                            <li>Home</li>
                        </button>
                        <button type='button' onClick={() => navigate('/cadastro-de-usuarios')}>
                            <i class="ri-user-add-fill"></i>
                            <li>Cadastro de Usuário</li>
                        </button>
                        <button type='button'>
                            <i class="ri-hospital-fill"></i>
                            <li>Consultas</li>
                        </button>
                        <button type='button'>
                            <i class="ri-dna-fill"></i>
                            <li>Exames</li>
                        </button>
                        <h2>Sistema</h2>
                        <button type='button'>
                            <i class="ri-settings-3-fill"></i>
                            <li>Configurações</li>
                        </button>
                        <button type='button'>
                            <i class="ri-customer-service-2-fill"></i>
                            <li>Suporte</li>
                        </button>
                    </ul>
                </Services>
            </Aside>
        </>
    )
}

export default HeaderBase

import { Container, Main, Banner } from "./styles"
import { useContext, useState, useEffect } from "react";
import HeaderBase from "../../components/HeaderBase/HeaderBase"
import Table from "../../components/Table/Table"
import { DarkModeContext } from "../../contexts/DarkModeContext";
import api from '../../services/api'

import ImgBanner from '../../assets/banner.jpg'

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const [pacientes, setPacientes] = useState([]);
  const [totalPacientes, setTotalPacientes] = useState(0);
  const [pacientes60, setPacientes60] = useState(0);
  const [pacientes80, setPacientes80] = useState(0);

  //------------------------------------------------------------------
  // CALCULA A IDADE A PARTIR DE dataNascimento
  //------------------------------------------------------------------

  const calcularIdade = (dataNascimento) => {
    const today = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = today.getFullYear() - nascimento.getFullYear();
    const mesDiff = today.getMonth() - nascimento.getMonth();
    if (mesDiff < 0 || (mesDiff === 0 && today.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  };

  //------------------------------------------------------------------
  // ATUALIZA OS CARDS
  //------------------------------------------------------------------

  const atualizarTotais = (listaPacientes) => {
    let mais60 = 0;
    let mais80 = 0;

    listaPacientes.forEach(p => {
      const idade = calcularIdade(p.dataNascimento);
      if (idade >= 80) {
        mais80++;
      } else if (idade >= 60) {
        mais60++;
      }
    });

    setTotalPacientes(listaPacientes.length);
    setPacientes60(mais60);
    setPacientes80(mais80);
  };

  //------------------------------------------------------------------
  // BUSCA PACIENTES AO MONTAR O COMPONENTE
  //------------------------------------------------------------------

  useEffect(() => {
    const fetchPacientes = async () => {
      try {
        const response = await api.get('/usuarios');
        setPacientes(response.data);
        atualizarTotais(response.data);
      } catch (error) {
        console.error('Erro ao buscar pacientes:', error);
      }
    };
    fetchPacientes();
  }, []);

  //------------------------------------------------------------------
  // EXCLUA PACIENTES
  //------------------------------------------------------------------

  const handleExcluirPaciente = async (id) => {
    try {
      await api.delete(`/usuarios/${id}`);
      const novaLista = pacientes.filter(p => p.id !== id);
      setPacientes(novaLista);      // ATUALIZA O STATE
      atualizarTotais(novaLista);    // ATUALIZA OS CARDS AUTOMATICAMENTE
    } catch (error) {
      console.error('Erro ao excluir paciente:', error);
    }
  };

  return (
    <Container darkMode={darkMode}>
      <HeaderBase />
      <Main>
        <Banner>
          <img src={ImgBanner} alt="banner" />
          <div>
            <h3>{totalPacientes}</h3>
            <p>Total de Pacientes</p>
          </div>
          <div>
            <h3>{pacientes60}</h3>
            <p>Pacientes + 60</p>
          </div>
          <div>
            <h3>{pacientes80}</h3>
            <p>Pacientes + 80</p>
          </div>
        </Banner>
        <Table pacientes={pacientes} onExcluir={handleExcluirPaciente} />
      </Main>
    </Container>
  )
}

export default App;
import './components/App.css'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Oficinas from './components/Oficinas/Oficinas'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MeuCarro from './components/MeuCarro/MeuCarro'
import Assistente from './components/Assistente/Assistente'
import Ajustes from './components/Ajustes/Ajustes'
import Login from './components/Login/Login'
import Participantes from './components/Participantes/Participantes'
import Perfil from './components/Perfil/Perfil'
import EditarCarro from './components/EditarCarro/EditarCarro'
import Register from './components/Register/Register'
import MaisCarro from './components/MaisCarro/MaisCarro'
function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/oficinas' element={<Oficinas />}/>
          <Route path='/MeuCarro' element={<MeuCarro />}/>
          <Route path='/EditarCarro' element={<EditarCarro/>} />
          <Route path='/Assistente' element={<Assistente />}/>
          <Route path='/Ajustes' element={<Ajustes/>}/>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/Participantes' element={<Participantes/>}/>
          <Route path='/Perfil' element={<Perfil/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/MaisCarro' element={<MaisCarro/>}/>
          <Route path='/MaisCarro' element={<MaisCarro/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App

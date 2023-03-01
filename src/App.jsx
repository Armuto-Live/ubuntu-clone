import ContainerMain from './components/Global/ContainerMain'
import './App.css'
import ContainerNavigation from './components/Global/ContainerNavigation'
import Footer from './components/Footer/Footer'
import {Navigation} from './components/Navigation/'

function App() {

  return (
    <>
      <Navigation/>
      <ContainerMain/>
      <Footer/>
    </>
  )
}

export default App

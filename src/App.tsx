import { Header } from "./components/Header"
import { Home } from "./pages/Home"
import { globalStyles } from "./styles/global"


function App() {

  globalStyles()
  return (
    <>
      <Header/>
       <Home/>
  
    </>
  )
}

export default App


import Header from "../componentes/Header/Header"
import Footer from "../componentes/Footer/Footer"
import Button from "../componentes/Bottton/Botton"
import Banner from "../componentes/Banner/Banner"
import Hero from "../componentes/Hero/Hero"
import ProjetoLista from '../componentes/ProjectList/ProjecList'



function Home(){

    return(
        <>
          <Header/>
       


          <div className="conteiner">

          <Hero/>
          <ProjetoLista/>
          </div>
          
          
          <Footer/>
        
        
        </>
    )   

}

export default Home
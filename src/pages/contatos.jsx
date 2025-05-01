import "../componentes/Contatos/Contatos"
import Banner from "../componentes/Banner/Banner"
import Header from "../componentes/Header/Header"
import Fotter from "../componentes/Footer/Footer"
import Contatos from "../componentes/Contatos/Contatos"
import ProjectList from "../componentes/ProjectList/ProjecList"


function contact(){

    return(
        <>
         <Header/>
         <Banner title="Contatos" image="Contato.svg"/>
         <div className="conteiner">

          <Contatos/>


       

         </div>
         <Fotter/>
        </>
    )   

}

export default contact
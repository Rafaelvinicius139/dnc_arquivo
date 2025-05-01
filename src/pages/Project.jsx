
import Banner from "../componentes/Banner/Banner"

import Hero from "../componentes/Hero/Hero"

import Footer from "../componentes/Footer/Footer"


import ProjetoLista from '../componentes/ProjectList/ProjecList'
import Header from "../componentes/Header/Header"



function projects (){
    return(
       <>
      
       < Header/>
       <Banner title="Projects" image="Images.svg"/>
       <div className="container">
       
       <ProjetoLista/>
       
       <Footer/>
       </div>
      </>
    )
}

export default projects
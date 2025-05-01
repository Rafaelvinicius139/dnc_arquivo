  import Banner from "../componentes/Banner/Banner"
  import Footer from "../componentes/Footer/Footer"
  import Header from "../componentes/Header/Header"
  import Texto_abaut from "../componentes/baauttexto/texto"

function Abaut (){

    return(

        <>

           <Header/>
           <Banner title="abaut" image="Photo.svg"/>

           <div className="conteiner">
            <Texto_abaut/>
          
           </div>
           <Footer className="conteiner"/>
    
        </>
    

    )
   
}

export default Abaut
import {Link} from 'react-router-dom'



import './Footer.css'
import Logo from '../../assets/Logo.svg'
import Brasil from '../../assets/brasil.svg'
import estadosUnidos from '../../assets/estados.svg'
import facebook from '../../assets/face.svg'
import instagran from '../../assets/insta.svg'
import linkedin from '../../assets/linkedin.svg'


function Fotter(){
    return(
        <footer>
            <div className="container">
               <div className='d-flex jc-space-between  mobile-fd-column'>
                  <div className='footer-logo-col'>
                     <img src={Logo} className='footer-logo'></img>
                     <p className='grey-1-color'>A escola que te prepara para o trabalho</p>
                     <div className='d-flex social-links'>
                        <a href="http://" target="_blank" >
                            <img src={facebook}/>
                        </a>

                        <a href="http://" target="_blank" >
                            <img src={instagran}/>
                        </a>

                        <a href="http://" target="_blank" >
                            <img src={linkedin}/>
                        </a>

                        <a href="http://" target="_blank" >
                            <img src={instagran}/>
                        </a>
                     </div>
                  </div>
               

            

               <div className='d-flex mobile-fd-column'>
                  <div className='footer-col'>
                    <h3>pages</h3>
                    <ul className="">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/projects">Projects</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>

                  </div>

                  <div className='footer-col'>
                    <h3>Contact</h3>
                    <p className='grey-1-color'>R. Justino Cobra, 61 – Vila Ema | São José dos Campos – SP | CEP 12243-030 </p>
                    <p className='grey-1-color'>suporte@escoladnc.com.br</p>
                    <p className='grey-1-color'>(19) 99187-4342</p>
                  </div>
               </div>
               </div>

               <div className='d-flex jc-space-between footer-copy'>
                <p className='grey-1-color'>copy-write </p>
                <div className='langs-area d-flex'>
                    <img src={Brasil} height="29px" ></img>
                    <img src={estadosUnidos} height="29px"></img>

                </div>
               </div>
              
            </div>
        </footer>
    )
}

export default Fotter
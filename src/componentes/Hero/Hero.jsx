import { Link } from 'react-router-dom'


import './Hero.css'

import Button from '../Bottton/Botton'



function Hero (){

    return(

       <div className="hero  d-flex al-center">
            <div className="hero-text">
                <h1>Let Your Home Be Unique</h1>
                <p>here are many variations of the passages of
                lorem Ipsum fromavailable, majority.</p>

                <Link>
                    <Button buttonStyle="seccondary" arrow>
                        Get Started
                    </Button>
                    </Link>

            </div>

       </div>
    )

}

export default Hero
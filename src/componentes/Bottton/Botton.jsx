
  import "./Button.css"
  import seta from '../../assets/seta.svg'
  

function Button({arrow,buttonStyle,loading,children, ...props}){
    return(
      
        <button className={`button ${buttonStyle}`}{...props}>

            {children} {arrow && <img src={seta}/>}

        </button>
    )
}

export default Button
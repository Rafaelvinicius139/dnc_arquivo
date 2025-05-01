import { useState, useEffect } from "react"
import "./Contatos.css"

// componentes
import Buttton from '../Bottton/Botton'

function Contatos() {

    const [isFormValid, setIsFormValid] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (isFormValid) {
            null
        }
    }

    useEffect(() => {
        const isValidEmail = (email) => {
            const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
            return emailRegex.test(email)
        }

        const isValid =
            formData.name.trim() &&
            formData.email.trim() &&
            isValidEmail(formData.email) &&
            formData.message.trim()

        setIsFormValid(!!isValid)
    }, [formData])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    return (
        <div className="contact-form d-flex fd-column al-center">
            <h2>we love meeting new people and helping them</h2>
            <form className="d-flex form-group" onSubmit={handleSubmit}>

                <div className="contact-form d-flex fd-column as-center form-group">
                    <input
                        className="form-input"
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Name"
                        onChange={handleChange}
                    />

                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>

                <div className="contact-form d-flex form-group">
                    <textarea
                        className="form-input"
                        id="message"
                        name="message"
                        placeholder="Mensagem"
                        rows="4"
                        onChange={handleChange}
                    />
                </div>

                <div className="al-center jc-end d-flex form-group">
                    <Buttton type="submit" buttonStyle="secundary" disabled={!isFormValid}>
                        Enviar
                    </Buttton>
                </div>
            </form>
        </div>
    )
}

export default Contatos

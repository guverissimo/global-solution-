import {} from 'react'
import { BsWhatsapp, BsTwitterX, BsFacebook, BsYoutube, BsTiktok } from "react-icons/bs";

const Rodape = () => {
    return (
        <>
            <div className="rodape">
                <div className='duvida'>
                    <h1>Central de ajuda ao cliente</h1>
                    <a href="https://web.whatsapp.com/" target='blank'><BsWhatsapp/> Fale com um atendente!</a>
                </div>
                <div className='redes'>
                    <h1>Acompanhe nossas redes sociais</h1>
                    <div className="sociais">
                        <a href="https://twitter.com/?lang=pt" target='blank' className='social'><BsTiktok /></a>
                        <a href="https://twitter.com/?lang=pt" target='blank' className='social'><BsTwitterX /></a>
                        <a href="https://www.facebook.com/?locale=pt_BR" target='blank' className='social'><BsFacebook /></a>
                        <a href="https://www.youtube.com/" target='blank' className='social'><BsYoutube /></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Rodape
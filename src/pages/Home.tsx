import illustrationImg from '../assets/images/illustration.svg'
import logoImage from '../assets/images/logo.svg'

export function Home() {
    return (
        <div>
            <aside>
                <img src={illustrationImg} alt="Illustração simbolizando pergunstas e respostas." />
                <strong>Crie Salas de Q&amp;A ao-vivo!</strong>
                <p>Tire as dúvidas da sua audência em tempo real.</p>
            </aside>

            <main>
                <div>
                    <img src={logoImage} alt="" /> 
                </div>
            </main>
        </div>
    )
}
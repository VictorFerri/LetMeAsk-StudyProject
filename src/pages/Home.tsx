import illustrationImg from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import '../styles/auth.scss'

export function Home() {
    return (
        <div id="pageAuth">
            <aside>
                <img src={illustrationImg} alt="Illustração simbolizando pergunstas e respostas." />
                <strong>Crie Salas de Q&amp;A ao-vivo!</strong>
                <p>Tire as dúvidas da sua audência em tempo real.</p>
            </aside>

            <main>
                <div className="mainContent">
                    <img src={logoImage} alt="letMeAsk" />
                    <button className="createRoom">
                        <img src={googleIconImg} alt="" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input
                        
                        type="text"
                        placeholder="Digite o código da sala"

                        />
                        <button type="submit">Entrar na sala</button>
                    </form>
                </div>
            </main>
        </div>
    )
}
import illustrationImg from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';


import { Button } from '../components/Button';

import '../styles/auth.scss'

export function NewRoom() {
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
                    <h2>Criar uma nova sala</h2>
                    <form>
                        <input
                        
                        type="text"
                        placeholder="Nome da sala"

                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <a href="#">Clique Aqui</a>
                    </p>
                </div>
            </main>
        </div>
    )
}
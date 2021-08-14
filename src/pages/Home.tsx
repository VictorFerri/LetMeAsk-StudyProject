import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';


export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

     async function handleCreateRoom(){
        if (!user) {
            await signInWithGoogle()
        }

        history.push("/rooms/new");
    }

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
                    <button onClick={handleCreateRoom} className="createRoom">
                        <img src={googleIconImg} alt="" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">Ou entre em uma sala</div>
                    <form>
                        <input
                        
                        type="text"
                        placeholder="Digite o código da sala"

                        />
                        <Button type="submit">
                            Entrar na sala
                        </Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
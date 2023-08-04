import { useHistory } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';
import { FormEvent } from 'react';
import { useState } from 'react';
import { database } from '../services/firebase';


export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth();

    const [roomCode, setRoomCode] = useState('');

     async function handleCreateRoom(){
        if (!user) {
            await signInWithGoogle()
        }

        history.push("/rooms/new");
    }

    async function handleJoinRoom(event: FormEvent) {
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomReference = await database.ref(`rooms/${roomCode}`).get();

        if (!roomReference.exists()) {
            alert('Room does not exists');
            return;
        }

        if (roomReference.val().endedAt) {
            alert('Room already ended.');
            return;
        }

        history.push(`/rooms/${roomCode}`);
        

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
                    <form onSubmit={handleJoinRoom}>
                        <input
                        type="text"
                        placeholder="Digite o código da sala"

                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
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
import { Link, useHistory } from 'react-router-dom';
import { FormEvent } from 'react';

import illustrationImg from '../assets/images/illustration.svg';
import logoImage from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss'
import { useAuth } from '../hooks/useAuth';
import { useState } from 'react';
import { database } from '../services/firebase';

export function NewRoom() {
    

    const { user } = useAuth();
    const history = useHistory();

    const [newRoom, setNewRoom] = useState('');

    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();
        
        if (newRoom.trim() === '') {
            return;
        }

        const roomReference = database.ref('rooms');

        const firebaseRoom = await roomReference.push({
            title: newRoom,
            authorId: user?.id,
        });

        history.push(`/admin/rooms/${firebaseRoom.key}`);
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
                    <h2>Criar uma nova sala</h2>
                    <form onSubmit={handleCreateRoom}>
                        <input
                        type="text"
                        placeholder="Nome da sala"
                        onChange={event => setNewRoom(event.target.value)}
                        value={newRoom}
                        />
                        <Button type="submit">
                            Criar Sala
                        </Button>
                    </form>
                    <p>
                        Quer entrar em uma sala existente? <Link to="/">Clique Aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}
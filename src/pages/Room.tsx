import { useState } from 'react';
import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import { useAuth } from '../hooks/useAuth';
import '../styles/room.scss';

type RoomParams = {
    id: string;
}

export function Room() {
    const user = useAuth();
    const params = useParams<RoomParams>();
    const [newQuestion, setNewQuestion] = useState('');

    const roomId = params.id;

    function handleSendQuestion() {
        if (newQuestion.trim() == '') {
            return;
        }

    }
    
    return (
        <div id="pageRoom">
            <header>
                <div className="content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <RoomCode code={roomId}/>
                </div>
            </header>

            <main>
                <div className="roomTitle">
                    <h2>Sala React</h2>
                    <span>4 Perguntas</span>
                </div>

                <form>
                    <textarea 
                        placeholder="O que você quer perguntar?"
                        onChange={event => setNewQuestion(event.target.value)}
                        value={newQuestion}
                    />

                    <div className="formFooter">
                        <span>Para enviar uma pergunta, <button>faça seu login</button></span>
                        <Button type="submit" >Enviar pergunta</Button>
                    </div>
                </form>
            </main>
        </div>
    );
}
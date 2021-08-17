import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';
import '../styles/room.scss';

type RoomParams = {
    id: string;
}

export function Room() {
    const params = useParams<RoomParams>();
    
    return (
        <div id="pageRoom">
            <header>
                <div className="content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <RoomCode code={params.id}/>
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
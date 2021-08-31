import { useParams } from 'react-router-dom';

import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import '../styles/room.scss';


type RoomParams = {
    id: string;
}

export function AdminRoom() {
    // const { user } = useAuth();
    const params = useParams<RoomParams>();
    const roomId = params.id;

    const { title, questions } = useRoom(roomId);
    
    return (
        <div id="pageRoom">
            <header>
                <div className="content">
                    <img src={logoImg} alt="LetMeAsk" />
                    <div>
                        <RoomCode code={roomId}/>
                        <Button isOutlined>Encerrar sala</Button>
                    </div>
                </div>
            </header>

            <main>
                <div className="roomTitle">
                    <h2>Sala {title}</h2>
                    { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
                </div>

                <div className="questionList">
                    {questions.map(question => {
                        return (
                            <Question
                            key={question.id}
                            content={question.content}
                            author={question.author}
                            />
                        );
                    })}
                </div>

                
            </main>
        </div>
    );
}
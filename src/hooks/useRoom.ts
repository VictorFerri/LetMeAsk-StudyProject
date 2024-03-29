import { useEffect, useState } from "react";
import { database } from "../services/firebase";
import { useAuth } from "./useAuth";
import { useHistory } from "react-router-dom";

type QuestionType = {
    id: string;
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
    likeCount: number;
    likeId: string | undefined;
}

type FirebaseQuestions = Record<string, {
    author: {
        name: string;
        avatar: string;
    }
    content: string;
    isAnswered: boolean;
    isHighLighted: boolean;
    likes: Record<string, {
        authorId: string;
    }>    
}>

export function useRoom(roomId: string) {
    const { user } = useAuth();
    const [questions, setQuestions] = useState<QuestionType[]>([]);
    const [title, setTitle] = useState('');
    const history = useHistory();
    
    useEffect(() => {
        const roomReference = database.ref(`rooms/${roomId}`);

        roomReference.on('value', room => {
            const databaseRoom = room.val();
            const firebaseQuestions: FirebaseQuestions = databaseRoom.questions ?? {};
            
            console.log("sdasd")
            if (databaseRoom.authorId === user?.id) {
                history.push(`/admin/rooms/${roomId}`);
            };

            const parsedQuestions = Object.entries(firebaseQuestions ?? {}).map(([key, value]) => {
                return {
                    id: key,
                    content: value.content,
                    author: value.author,
                    isAnswered: value.isAnswered,
                    isHighLighted: value.isHighLighted,
                    likeCount: Object.values(value.likes ?? {}).length,
                    likeId: Object.entries(value.likes ?? {}).find(([key, like]) => like.authorId === user?.id)?.[0],
                }
            })

            setTitle(databaseRoom.title);
            setQuestions(parsedQuestions);
        })

        return () => {
            roomReference.off('value');
        }
    }, [roomId, user?.id, history]);

    return { questions, title }
}
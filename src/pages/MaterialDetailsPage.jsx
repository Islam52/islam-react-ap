
import { useState } from 'react';
import { useParams } from 'react-router-dom';

export default function MaterialDetailsPage() {
    const [comments, setComments] = useState([])
    const {postId } = useParams()

    const fetchComments = async () => {
        const response = await fetch(
            ''
        )
    }
}
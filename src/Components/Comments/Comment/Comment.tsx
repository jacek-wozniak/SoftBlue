import './Comment.scss';
import {useCallback} from "react";

interface CommentProps {
    comment: {
        id: string,
        name: string,
        email: string,
        content: string,
        createdAt: string,
    }
}

const Comment = ({comment}: CommentProps) => {
    const parseDate = useCallback((date: string) => {
        return new Intl.DateTimeFormat('en', {
            year: 'numeric',
            day: 'numeric',
            month: 'short',
        }).format(new Date(date));
    }, []);

    const author = (comment.name || comment.email) ? [comment.name, comment.email].join(' ') : 'no author'

    return (
        <article className="comment">
            <span className="comment__date">{parseDate(comment.createdAt)}</span>
            <strong className="comment__author">{author}</strong>
            <p className="comment__content">{comment.content || 'empty comment'}</p>
        </article>
    )
}

export default Comment;
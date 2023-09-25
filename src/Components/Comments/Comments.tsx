import './Comments.scss';
import {useGetComments} from "../../react-query/useGetComments";
import Comment from "./Comment/Comment";
import Loader from "../Loader/Loader";
import {useEffect, useState} from "react";
import Pagination from "./Pagination/Pagination";
import CommentForm from "./CommentForm/CommentForm";

const perPage = 4;

const Comments = () => {
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState<'asc'|'desc'>('asc');
    const { data, isLoading } = useGetComments(page, perPage, order);
    const comments = data?.comments;
    const pagesLength = data?.pagesLength;

    const handleSortComments = (dir: 'desc'|'asc') => {
        setOrder(dir);
        setPage(1);
    }

    return (
        <section className="comments">
            <div className="container container--small">
                <div className="comments__topbar">
                    <h2 className="comments__title">Comments</h2>
                    <div className="comments__sorting-container">
                        <span className="comments__sorting-element" onClick={handleSortComments.bind(this, 'desc')}>Oldest</span>
                        <span className="comments__sorting-delimiter"/>
                        <span className="comments__sorting-element" onClick={handleSortComments.bind(this, 'asc')}>Newest</span>
                    </div>
                </div>
                {!isLoading
                    ? <div className="comments__container">
                        {comments.map((item: any) => (
                            <Comment key={item.id} comment={item}/>
                        ))}
                        <Pagination currentPage={page} setPage={setPage} pagesLength={pagesLength as number}/>
                      </div>
                    : <div className="comments__placeholder">
                        <Loader/>
                      </div>
                }
            </div>
        </section>
    )
}

export default Comments;
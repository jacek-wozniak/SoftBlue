import {Formik, Field, Form, FormikValues, FormikHelpers} from 'formik'
import {Notyf} from "notyf";
import './CommentsForm.scss';
import {useCommentsMutation} from "../../../react-query/useGetComments";
import 'notyf/notyf.min.css';

interface CommentFormProps {
    handleSortComments: (order: 'desc'|'asc') => void
}

const CommentForm = ({handleSortComments}: CommentFormProps) => {
    const { mutate: postComment } = useCommentsMutation()

    const handleFormSubmit = (values: FormikValues, {resetForm}: FormikHelpers<any>) => {
        console.log(values);
        resetForm();
        postComment(values);
        handleSortComments('desc');
        new Notyf().success('You successfully posted comment')
    }

    return (
        <section className="comment-form">
            <div className="container container--small">
                <h3 className="comment-form__title">Add comment</h3>
                <Formik
                    initialValues={{name: '', email: '', content: ''}}
                    onSubmit={handleFormSubmit}
                >
                    {() => (
                        <Form>
                            <div className="comment-form__grid">
                                <Field as="input" className="comment-form__input" name="name" placeholder="Your name"/>
                                <Field as="input" className="comment-form__input" name="email" placeholder="Your Email"/>
                                <Field as="textarea" className="comment-form__input comment-form__input--textarea" name="content" placeholder="Your Message"/>
                            </div>
                            <input className="comment-form__submit" type="submit" value="Send"/>
                        </Form>
                    )}
                </Formik>
            </div>
        </section>
    )
}

export default CommentForm;

import {Formik, Field, Form, FormikValues} from 'formik'
import './CommentsForm.scss';
import {useCommentsMutation} from "../../../react-query/useGetComments";

const CommentForm = () => {
    const { mutate: postComment, error, isLoading } = useCommentsMutation()

    const handleFormSubmit = (values: FormikValues) => {
        console.log(values);
        postComment(values);
    }

    return (
        <section className="comment-form">
            <div className="container container--small">
                <h3 className="comment-form__title">Add comment</h3>
                <Formik
                    initialValues={{name: '', email: '', message: ''}}
                    onSubmit={handleFormSubmit}
                >
                    {() => (
                        <Form>
                            <div className="comment-form__grid">
                                <Field as="input" className="comment-form__input" name="name" placeholder="Your name"/>
                                <Field as="input" className="comment-form__input" name="email" placeholder="Your Email"/>
                                <Field as="textarea" className="comment-form__input comment-form__input--textarea" name="message" placeholder="Your Message"/>
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
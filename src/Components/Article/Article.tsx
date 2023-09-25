import React from 'react';
import './Article.scss';

interface ArticleProps {
    children: React.ReactNode,
    className?: string,
    [x:string]: any,
}

const Article = ({className, ...props}: ArticleProps) => {
    const articleClassName = className ? `article ${className}` : 'article';

    return (
        <article className={articleClassName} {...props}>
            {props.children}
        </article>
    )
}

export default Article;
import './QualificationItem.scss';
import {useCallback} from "react";

interface QualificationItemProps {
    icon: 'behancer' | 'dribble',
    company: string,
    dateFrom: string,
    dateTo: string,
    title: string,
    desc: string
}

const QualificationItem = ({icon, company, dateFrom, dateTo, title, desc}: QualificationItemProps) => {
    const parseDate = useCallback((date: string) => {
        if(!date) return 'now'
        return new Intl.DateTimeFormat('en', {
            year: 'numeric',
            month: 'long',
        }).format(new Date(date));
    }, []);

    return (
        <article className="qualification-item">
            <div className="qualification-item__top">
                <div className="qualification-item__icon-container">
                    <span className={`qualification-item__icon qualification-item__icon--${icon}`}/>
                </div>
                <strong className="qualification-item__company">{company}</strong>
                <span className="qualification-item__date">{parseDate(dateFrom)} - {parseDate(dateTo)}</span>
            </div>
            <header className="qualification-item__title">{title}</header>
            <p className="qualification-item__desc">{desc}</p>
        </article>
    )
}

export default QualificationItem;
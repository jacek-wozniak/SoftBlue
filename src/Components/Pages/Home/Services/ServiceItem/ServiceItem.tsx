import './ServiceItem.scss';

interface ServiceItemProps {
    icon: "responsive" | "ux" | "support",
    title: string,
    desc: string
}

const ServiceItem = ({icon, title, desc}: ServiceItemProps) => {
    return (
        <article className="service-item">
            <div className="service-item__icon-circle">
                <span className={`service-item__icon service-item__icon--${icon}`}/>
            </div>
            <header className="service-item__title">{title}</header>
            <p className="service-item__desc">{desc}</p>
        </article>
    )
}

export default ServiceItem;
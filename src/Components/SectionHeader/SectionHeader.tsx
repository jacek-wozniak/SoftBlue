import './SectionHeader.scss';

interface SectionHeaderProps {
    title: string,
    subtitle: string,
    text: string
}

const SectionHeader = ({title, subtitle, text}: SectionHeaderProps) => {
    return (
        <header className="section-header">
            <h2 className="section-header__title text-highlight">{title}</h2>
            <h3 className="section-header__subtitle">{subtitle}</h3>
            <p className="section-header__header-text">{text}</p>
        </header>
    )

}

export default SectionHeader;
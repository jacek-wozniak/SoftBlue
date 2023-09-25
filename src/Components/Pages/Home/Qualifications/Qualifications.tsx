import './Qualifications.scss';
import SectionHeader from "../../../SectionHeader/SectionHeader";
import QualificationItem from "./QualificationItem/QualificationItem";
import {useGetExperience} from "../../../../react-query/useGetExperience";
import Loader from "../../../Loader/Loader";

const Qualifications = () => {
    const { data: experience, isLoading } = useGetExperience();

    return (
        <section className="qualifications">
            <div className="container">
                <SectionHeader
                    title="Qualifications"
                    subtitle="My Experience"
                    text="Is is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that is has"
                />
                <div className="qualifications__items">
                    {!isLoading
                        ? experience.map((item: any) => (
                            <QualificationItem
                                key={item.id}
                                icon={item.id}
                                company={item.company}
                                dateFrom={item.from}
                                dateTo={item.to}
                                title="Print & Web Designer" // brak danej w API
                                desc={item.description}
                            />
                          ))
                        : <div className="qualifications__placeholder">
                            <Loader/>
                          </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default Qualifications;
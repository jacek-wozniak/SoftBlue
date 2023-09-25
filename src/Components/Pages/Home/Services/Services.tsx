import './Services.scss';
import ServiceItem from "./ServiceItem/ServiceItem";
import SectionHeader from "../../../SectionHeader/SectionHeader";
import {useGetServices} from "../../../../react-query/useGetServices";
import Loader from "../../../Loader/Loader";

const Services = () => {
    const { data: services, isLoading } = useGetServices();

    return (
        <section className="services">
            <div className="container">
                <SectionHeader
                    title="What we do"
                    subtitle="Better Services For You"
                    text="Is is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem ipsum is that is has"
                />
                {!isLoading
                    ? <div className="services__items">
                        {services.map((item: any) => (
                            <ServiceItem
                                key={item.id}
                                icon={item.id}
                                title={item.name}
                                desc={item.description}
                            />
                        ))}
                    </div>
                    : <div className="services__placeholder">
                        <Loader/>
                      </div>
                }
            </div>
        </section>
    )
}

export default Services;
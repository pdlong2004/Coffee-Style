import { NavLink } from 'react-router-dom';
import CustomSwiper from '../../../components/layout/CustomSwiper';
import Card from '../../../components/layout/Card';
import Button from '../../../components/layout/Button';

const OurProductBanner = ({ articles }) => {
    return (
        <div className="mb-25">
            <CustomSwiper
                items={articles}
                autoPlay
                delay={4500}
                renderSlide={(item) => (
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 lg:mx-10 ">
                        <NavLink to={item.link} className="h-95">
                            <Card
                                image={item.image}
                                name={item.title}
                                imageClass="h-full w-full sm:h-[360px] lg:h-full"
                                textButton={item.textButton}
                            />
                        </NavLink>

                        <div className="flex items-center justify-center lg:justify-start">
                            <div className="text-center lg:text-start">
                                <p className="text-sm text-gray-500 font-medium uppercase tracking-[2px]">
                                    {item.label}
                                </p>

                                <h2 className="text-[28px] mt-5 mb-3.75">{item.title}</h2>

                                <p className="text-gray-500 mb-3.75">{item.excerpt}</p>

                                <NavLink to={item.link}>
                                    <Button className="bg-black! text-white">{item.textButton}</Button>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )}
            />
        </div>
    );
};

export default OurProductBanner;

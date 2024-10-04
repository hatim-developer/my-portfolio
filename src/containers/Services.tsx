import Service from "components/Service";
import { services } from "data/config";

const Services = () => {
  return (
    <section
      id="services"
      className="section-min-height flex scroll-mt-12 flex-col items-center justify-center px-4 py-8"
      aria-label="My services"
    >
      <h2 className="mb-8 text-center text-3xl text-secondary-color md:mb-10 md:text-4xl">
        My Services
      </h2>
      <div className="font-san grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Service service={service} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Services;

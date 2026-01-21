import { useAbout } from "../../../hooks/useAbout";

const ShowAbout = () => {
  const { abouts = [] } = useAbout();

  return (
    <div className="">
      {abouts.map((about) => (
        <div
          key={about._id}
          className="flex flex-col lg:grid grid-cols-2 gap-4 mb-32.5"
        >
          <div className="flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
            <h2 className="text-2xl font-semibold mb-3.75 mt-2.5">
              {about.title}
            </h2>
            <p className="text-gray-600 leading-relaxed mb-3.75 mt-5">
              {about.content}
            </p>
          </div>

          <div
            className="h-80 bg-cover bg-center order-1 lg:order-2"
            style={{ backgroundImage: `url(${about.image})` }}
          />
        </div>
      ))}
    </div>
  );
};

export default ShowAbout;

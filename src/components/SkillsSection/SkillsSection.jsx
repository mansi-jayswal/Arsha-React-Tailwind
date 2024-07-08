import SkillsSectionImage from "../../../public/images/skills.png";
import Container from "../common/Container";

const skillsData = [
  { name: "HTML", percentage: 100 },
  { name: "CSS", percentage: 90 },
  { name: "JAVASCRIPT", percentage: 75 },
  { name: "PHOTOSHOP", percentage: 55 },
];

function SkillsSection() {
  return (
    <Container>
      <div data-aos="fade-up" className="flex flex-col gap-8 lg:flex-row">
        {/* image section */}
        <div className=" lg:basis-[50%] flex justify-center ">
          <img
            src={SkillsSectionImage}
            className="w-full lg:min-w-[80%] mx-auto py-16"
          />
        </div>
        {/* skills section */}
        <div className=" lg:basis-[50%] lg:py-8">
          <h1 className="text-primary-color w-full text-3xl  font-bold ">
            Voluptatem dignissimos provident quasi corporis voluptas
          </h1>
          <p className="text-gray-500 mt-4 italic">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="mt-4 flex flex-col gap-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="mb-1">
                <div
                  className="flex justify-between mb-1"
                  data-aos="slide-up"
                  data-aos-duration="1000"
                >
                  <span className="font-jost-bold text-[12px] font-bold text-default-color">
                    {skill.name}
                  </span>
                  <span className="font-jost-bold text-[12px] font-bold text-default-color">
                    {skill.percentage}%
                  </span>
                </div>
                <div className="w-full bg-gray-300 h-3">
                  <div
                    data-aos="fade-right"
                    data-aos-duration="10000"
                    data-aos-easing="ease-in-sine"
                    className="bg-primary-color h-full "
                    style={{
                      width: `${skill.percentage}%`,
                      transition: "width 1s ease",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default SkillsSection;

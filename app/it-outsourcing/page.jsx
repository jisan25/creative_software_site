import ItHero from "@/app/components/it-outsourcing/ItHero";
import About from "@/app/components/it-outsourcing/About";
import StaffingService from "@/app/components/it-outsourcing/StaffingService";
import Advantages from "@/app/components/it-outsourcing/Advantages";
import Hiring from "@/app/components/it-outsourcing/Hiring";
import GrowBusiness from "@/app/components/it-outsourcing/GrowBusiness";

const page = () => {
  return (
    <>
      <div className="container-xl container-fluid">
        <ItHero />
        <About />
        <StaffingService />
        <Advantages />
        <Hiring />
        <GrowBusiness />
      </div>
    </>
  );
};

export default page;

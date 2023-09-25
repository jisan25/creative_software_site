import HireForm from "@/app/components/hiring/HireForm";
import GetFree from "@/app/components/hiring/GetFree";
import GoodCompany from "@/app/components/hiring/GoodCompany";
const HiringPage = () => {
  return (
    <div className="container-xl container-fluid">
      <h2 className="h2 font-bold text-center my-5">
        Reduce your expenses by upto 72%
      </h2>
      <div className="row gap-3 mb-5">
        <div className="col-lg-7" style={{ padding: "0px 80px" }}>
          <HireForm />
        </div>
        <div className="col-lg-4">
          <GetFree />
          <GoodCompany />
        </div>
      </div>
    </div>
  );
};

export default HiringPage;

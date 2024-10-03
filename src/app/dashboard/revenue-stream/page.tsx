import RevenueStreamCard from "@/components/RevenueStreamCard";
import DashboardLayout from "../DashboardLayout";
import RevenueStreamGraph from "@/components/graphs/RevenueStreamGraph";

const Revenuestream = () => {
  return (
    <DashboardLayout>
      <div className="w-[100%]">
        <RevenueStreamGraph />
      </div>
      <div className="w-[100%] mt-[24px]">
        <RevenueStreamCard label="OCTOBER 2024 - (Mon 1st - Wed 31st)" />
      </div>
      <div className="w-[100%] mt-[24px]">
        <RevenueStreamCard label="SEPTEMBER 2024 - (Tue 1st - Tue 30st)" />
      </div>
      <div className="w-[100%] mt-[24px]">
        <RevenueStreamCard label="AUGUST 2024 - (Wed 1st - Mon 31st)" />
      </div>
      <div className="w-[100%] mt-[24px]">
        <RevenueStreamCard label="JULY 2024 - (Thur 1st - Sun 31st)" />
      </div>
      <div className="w-[100%] mt-[24px]">
        <RevenueStreamCard label="JUNE 2024 - (Fri 1st - Sat 30th)" />
      </div>
    </DashboardLayout>
  );
};

export default Revenuestream;

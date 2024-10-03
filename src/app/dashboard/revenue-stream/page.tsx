import DashboardLayout from "../DashboardLayout";
import RevenueStreamGraph from "@/components/graphs/RevenueStreamGraph";

const Revenuestream = () => {
  return (
    <DashboardLayout>
      <div className="w-[100%]">
        <RevenueStreamGraph />
      </div>
    </DashboardLayout>
  );
};

export default Revenuestream;

import UniversityPeerGrowthGraph from "@/components/graphs/UniversityPeerGrowthGraph";
import PeersLayout from "../PeersLayout";

const ActivePeers = () => {
  return (
    <PeersLayout>
      <div className="w-[100%]">
        <UniversityPeerGrowthGraph />
      </div>
    </PeersLayout>
  );
};

export default ActivePeers;

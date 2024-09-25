import Card1 from "@/components/Card1";
import Card2 from "@/components/Card2";

const page = () => {
  return (
    <div>
      <Card1
        label={"Total peers"}
        value={"5,234"}
        iconSrc={"/images/icon-total-peers.png"}
        url={"/peers/total-peers"}
        percentage={10}
      />
      <Card2
        label={"Up-skilling time"}
        value={"11,096 hrs"}
        iconSrc={"/images/icon-up-skilling-time.png"}
        url={"/skill-library/up-skilling-time"}
      />
    </div>
  );
};
export default page;

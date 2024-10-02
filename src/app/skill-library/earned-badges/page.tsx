import BadgeCard from "@/components/BadgeCard";
import SkillLlibraryLayout from "../SkillLibraryLayout";

const EarnedBadges = () => {
  return (
    <SkillLlibraryLayout>
      <div className="flex flex-col gap-[34px]">
        <BadgeCard
          iconSrc="/images/icon-badge-level-1.png"
          label="LEVEL 1 BADGE - (5hrs up-skilling)"
          badgeSrc="/images/badge-level-1.png"
        />
        <BadgeCard
          iconSrc="/images/icon-badge-level-2.png"
          label="LEVEL 2 BADGE - (15hrs up-skilling)"
          badgeSrc="/images/badge-level-2.png"
        />
        <BadgeCard
          iconSrc="/images/icon-badge-level-3.png"
          label="LEVEL 3 BADGE - (30hrs up-skilling)"
          badgeSrc="/images/badge-level-3.png"
        />
        <BadgeCard
          iconSrc="/images/icon-badge-level-4.png"
          label="LEVEL 4 BADGE - (90hrs up-skilling)"
          badgeSrc="/images/badge-level-4.png"
        />
        <BadgeCard
          iconSrc="/images/icon-badge-level-5.png"
          label="LEVEL 5 BADGE - (180hrs up-skilling)"
          badgeSrc="/images/badge-level-5.png"
        />
      </div>
    </SkillLlibraryLayout>
  );
};

export default EarnedBadges;

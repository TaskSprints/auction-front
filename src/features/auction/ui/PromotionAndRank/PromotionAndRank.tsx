import { CongratulationSection } from "./CongratulationSection";
import { EventSection } from "./EventSection";
import { SearchRankSection } from "./SearchRankSection";

export function getCountDisplay(count: string | number) {
  if (count === "NEW") {
    return "NEW";
  }
  if (count === "-") {
    return "-";
  }
  return `▲${count}`;
}

export function PromotionAndRank() {
  return (
    <div className="flex rounded-lg container max-w-[88rem] mx-auto mt-8 mb-8 overflow-hidden h-[420px]">
      <CongratulationSection />
      <EventSection />
      <SearchRankSection />
    </div>
  );
}

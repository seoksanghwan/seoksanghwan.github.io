import { skills } from '@/lib/consts/career';

export const SkillsSection = () => (
  <div className="flex flex-col gap-5">
    {Object.entries(skills).map(([category, items]) => (
      <div key={category} className="flex flex-col gap-[5px]">
        <div className="text-[1.7rem] font-medium text-[#18181c]">{category}</div>
        <div className="flex flex-wrap gap-[5px]">
          {(items as string[]).map((item) => (
            <span
              key={item}
              className="border border-[#18181c] rounded-[10px] px-[10px] py-[5px] text-[1.5rem] font-medium hover:bg-[#18181c] hover:text-white transition-all cursor-pointer"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

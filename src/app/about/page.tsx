'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { careerData, skills } from '@/lib/consts/career';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { Career, CareerTask } from '@/types';
import { getDuration } from '@/lib/getDuration';

export default function AboutPage() {
  return (
    <div className="career-container px-5 py-5">
      <div className="career-spec shadow-sm">
        {/* Introduce Section */}
        <div className="flex items-center gap-5 pb-10 border-b border-border-gray max-md:flex-col">
          <div className="w-[150px] h-[150px] rounded-full bg-[url('/images/realme.png')] bg-cover bg-center shrink-0 border border-border-gray" />
          <div className="w-full flex gap-10 items-center max-md:flex-col max-md:gap-5 max-md:items-start">
            <div>
              <h3 className="text-[3rem] font-medium">프론트엔드 개발자</h3>
              <h2 className="text-[4rem] font-bold">석상환</h2>
            </div>
            <ul className="flex flex-col gap-3 text-[1.7rem]">
              <li>
                <a
                  href="mailto:bdoi2214@gmail.com"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FontAwesomeIcon icon={faEnvelope as IconProp} /> bdoi2214@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 font-normal">
                <FontAwesomeIcon icon={faPhone as IconProp} /> 010-4921-7224
              </li>
              <li>
                <a
                  href="https://github.com/seoksanghwan"
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FontAwesomeIcon icon={faGithub as IconProp} /> github
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/..."
                  target="_blank"
                  className="flex items-center gap-2 hover:underline"
                >
                  <FontAwesomeIcon icon={faLinkedinIn as IconProp} /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* About Section: 자기소개 */}
        <div className="grid grid-cols-[120px_1fr] gap-10 max-md:grid-cols-1 max-md:gap-8">
          <h4 className="text-[2rem] font-semibold shrink-0">자기 소개</h4>
          <div className="flex flex-col gap-[10px] text-[2rem] leading-[1.6] text-[#18181c] break-keep">
            <p>
              <b>
                "효율적인 시스템으로 팀의 생산성을 높이고, 기술로 서비스의 가치를 더하는 개발자"
              </b>
            </p>
            <p>
              저는 명확한 책임과 의도가 담긴 설계를 지향합니다. 퍼블리셔 출신의 섬세한 UI 구현력에
              프론트엔드 기술력을 더해, 디자이너와 개발자 모두가 만족하는 협업 구조를
              만들어왔습니다.
            </p>
            <p>
              특히 디자인 시스템을 주도적으로 구축하여 컴포넌트 재사용률을 50%까지 끌어올렸으며,
              이를 통해 개발 리소스를 절감하고 서비스의 일관성을 확보했습니다. 개인의 기술적 성장이
              팀 전체의 시너지로 이어지는 선순환 구조를 만드는 데 집중합니다.
            </p>
          </div>
        </div>

        {/* About Section: 기술 스택 */}
        <div className="grid grid-cols-[120px_1fr] gap-10 max-md:grid-cols-1">
          <h4 className="text-[2rem] font-semibold">기술 스택</h4>
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
        </div>

        {/* About Section: 경력 (is-career) */}
        <div className="grid grid-cols-[120px_1fr] gap-10 max-md:grid-cols-1">
          <h4 className="text-[2rem] font-semibold">경력</h4>
          <div className="flex flex-col gap-[30px]">
            {careerData.map((career: Career, idx: number) => (
              <div key={idx} className="flex flex-col gap-[1.5rem]">
                <div>
                  <div className="text-[2.4rem] font-bold text-[#111]">{career.company}</div>
                  <div className="text-[1.5rem] text-[#555]">
                    {career.startDate} ~{' '}
                    {career.isGoing ? (
                      <span className="text-[#00c471] font-semibold ml-1">재직 중</span>
                    ) : (
                      career.endDate
                    )}
                    <span className="text-[#666] ml-[8px]">
                      ({getDuration(career.startDate, career.endDate, career.isGoing)})
                    </span>
                  </div>
                </div>
                <div className="flex flex-col gap-[1rem]">
                  <ul className="list-none p-0">
                    {career.tasks.map((task: CareerTask, tIdx: number) => (
                      <li key={tIdx} className="mb-[1.5rem]">
                        <p className="text-[2rem] font-bold mb-[0.8rem] relative pl-[1.2rem] before:content-['•'] before:absolute before:left-[-5px]">
                          {task.service}
                        </p>
                        <ul className="pl-[2.5rem] flex flex-col gap-[5px]">
                          {task.descriptions.map((desc: string, dIdx: number) => (
                            <li
                              key={dIdx}
                              className="text-[2rem] leading-[1.6] text-[#444] relative before:content-['◦'] before:absolute before:left-[-20px] before:text-[#888] break-keep"
                            >
                              {desc}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

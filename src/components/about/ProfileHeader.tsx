import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import { ContactLink } from './ContactLink';
import { contact } from '@/lib/consts/contact';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const ProfileHeader = () => (
  <div className="flex items-center gap-5 pb-10 border-b border-border-gray max-md:flex-col">
    <div
      className="w-[150px] h-[150px] rounded-full bg-[url('/images/realme.png')] bg-cover bg-center shrink-0 border border-border-gray"
      role="img"
      aria-label="프로필 사진"
    />
    <div className="w-full flex gap-10 items-center max-md:flex-col max-md:gap-5 max-md:items-start">
      <div>
        <h3 className="text-[3rem] font-medium">프론트엔드 개발자</h3>
        <h2 className="text-[4rem] font-bold">석상환</h2>
      </div>
      <ul className="flex flex-col gap-3 text-[1.7rem]">
        <ContactLink icon={faEnvelope} href={`mailto:${contact.email}`}>
          {contact.email}
        </ContactLink>
        <ContactLink icon={faPhone as IconProp} isLink={false}>
          {contact.phone}
        </ContactLink>
        <ContactLink icon={faGithub as IconProp} href={contact.github}>
          github
        </ContactLink>
        <ContactLink icon={faLinkedinIn as IconProp} href={contact.linkedin}>
          LinkedIn
        </ContactLink>
      </ul>
    </div>
  </div>
);

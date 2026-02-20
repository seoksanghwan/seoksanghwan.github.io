import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';

type ContactLinkProps = {
  icon: IconProp;
  children: React.ReactNode;
  isLink?: boolean;
  href?: string;
};

const iconSize = '1.4rem';

export const ContactLink = ({ icon, children, isLink = true, href }: ContactLinkProps) => {
  const content = (
    <>
      <span className="shrink-0 flex items-center justify-center" style={{ width: iconSize, height: iconSize }}>
        <FontAwesomeIcon icon={icon as IconProp} style={{ width: iconSize, height: iconSize }} />
      </span>
      {children}
    </>
  );

  if (isLink && href) {
    return (
      <li>
        <a
          href={href}
          target={href.startsWith('http') ? '_blank' : undefined}
          rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
          className="flex items-center gap-2 hover:underline"
        >
          {content}
        </a>
      </li>
    );
  }

  return <li className="flex items-center gap-2 font-normal">{content}</li>;
};

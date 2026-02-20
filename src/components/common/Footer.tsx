import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

export const Footer = () => {
  const CURRENT_YEAR = new Date().getFullYear();

  return (
    <footer className="w-full py-10 border-t border-gray-200 bg-[#18181c]">
      <div className="max-w-[1200px] mx-auto px-5 flex justify-center items-center">
        <small className="text-[12px] text-white flex items-center gap-2">
          <FontAwesomeIcon
            icon={faCopyright as IconProp}
            style={{ width: '1.4rem', height: '1.4rem' }}
          />
          Copyright {CURRENT_YEAR} FE PROJECT. All rights reserved.
        </small>
      </div>
    </footer>
  );
};

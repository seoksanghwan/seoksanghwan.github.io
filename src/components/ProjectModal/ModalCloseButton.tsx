import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

type ModalCloseButtonProps = {
  onClose: () => void;
};

export const ModalCloseButton = ({ onClose }: ModalCloseButtonProps) => (
  <button
    type="button"
    aria-label="모달 닫기"
    className="absolute cursor-pointer top-5 right-5 z-[1010] flex items-center justify-center w-[45px] h-[45px] bg-black/60 backdrop-blur-[4px] rounded-full border border-white/10 text-white text-[2rem] hover:bg-black/90 hover:text-mint hover:scale-110 hover:rotate-90 transition-all duration-250 ease-[cubic-bezier(0.4,0,0.2,1)] max-md:w-[35px] max-md:h-[35px] max-md:text-[1.6rem]"
    onClick={onClose}
  >
    <FontAwesomeIcon icon={faTimes} />
  </button>
);

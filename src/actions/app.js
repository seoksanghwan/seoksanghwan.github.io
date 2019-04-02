import { 
  IE_CHECKER_EVENT,
  CLOSE_POP_UP
 } from './type/app';

export const ieCheckerEvent = (ieChecker) => ({
  type: IE_CHECKER_EVENT, ieChecker
});

export const closePopUp = (noneStyle) => ({
  type: CLOSE_POP_UP, noneStyle
});

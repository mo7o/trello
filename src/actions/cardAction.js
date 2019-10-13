import { CONSTANTS } from "../actions";

export const addCard = (listId, content) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { content, listId }
  };
};

import { CONSTANTS } from "../actions";

let listId = 2;
let cardId = 2;

const initialState = [
  {
    title: "Test List",
    id: 0,
    cards: [
      { id: 0, content: "i created a test list" },
      { id: 1, content: "i created another test list" }
    ]
  },
  {
    title: "Demo List",
    id: 1,
    cards: [
      { id: 0, content: "i made a demo list" },
      { id: 1, content: "i made another demo list" }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: listId
      };
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD:
      const newCard = {
        content: action.payload.content,
        id: cardId
      };
      cardId += 1;

      const newState = state.map(list => {
        if (list.id === action.payload.listId) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;

    default:
      return state;
  }
};

export default listsReducer;

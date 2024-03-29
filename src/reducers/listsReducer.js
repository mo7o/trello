import { CONSTANTS } from "../actions";

let listId = 3;
let cardId = 9;

const initialState = [
  {
    title: "To Do",
    id: `l-${0}`,
    cards: [
      { id: `c-${0}`, content: "Return shoes" },
      { id: `c-${1}`, content: "Call mom" },
      { id: `c-${2}`, content: "Book flight to Hawaii" },
      { id: `c-${3}`, content: "Pick up dry cleaning" }
    ]
  },
  {
    title: "Doing",
    id: `l-${1}`,
    cards: [{ id: `c-${4}`, content: "Laundry" }]
  },
  {
    title: "Done",
    id: `l-${2}`,
    cards: [
      { id: `c-${5}`, content: "Go to the bank" },
      { id: `c-${6}`, content: "Get a haircut" },
      { id: `c-${7}`, content: "Schedule band practice" },
      { id: `c-${8}`, content: "Fix bathroom cabinet" }
    ]
  }
];

const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const newList = {
        title: action.payload,
        cards: [],
        id: `l-${listId}`
      };
      listId += 1;
      return [...state, newList];

    case CONSTANTS.ADD_CARD: {
      const newCard = {
        content: action.payload.content,
        id: `c-${cardId}`
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
    }

    case CONSTANTS.DRAG_CARD:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId
      } = action.payload;
      const newState = [...state];

      // dragging within the same list
      if (droppableIdStart === droppableIdEnd) {
        // list where drag begins
        const list = state.find(list => droppableIdStart === list.id);

        // card to be dragged
        const card = list.cards.splice(droppableIndexStart, 1);

        // list where drag ends
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // draggin to another list
      if (droppableIdStart !== droppableIdEnd) {
        // list where drag begins
        const listStart = state.find(list => droppableIdStart === list.id);

        // card to be dragged
        const card = listStart.cards.splice(droppableIndexStart, 1);

        // list where drag ends
        const listEnd = state.find(list => droppableIdEnd === list.id);

        // insert card in new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      return newState;

    default:
      return state;
  }
};

export default listsReducer;

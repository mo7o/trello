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
    default:
      return state;
  }
};

export default listsReducer;

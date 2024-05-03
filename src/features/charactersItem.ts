const SHOW_CHARACTER = 'show';

type ShowCharacterAction = {
  type: typeof SHOW_CHARACTER;
  payload: any
}

const show = (value: any): ShowCharacterAction => ({
  type: SHOW_CHARACTER, 
  payload: value,
})

export const characterItemReducer = (character = {}, action: ShowCharacterAction) => {
  switch (action.type) {
    case SHOW_CHARACTER:
      return character = action.payload;
    default:      
      return character;
  }
};

export const actions = { show }

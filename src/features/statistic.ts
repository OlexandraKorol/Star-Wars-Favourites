const ADD = 'ADD';
const REMOVE = 'REMOVE';
const CLEAR = 'CLEAR';

type AddAction = {
  type: typeof ADD;
  payload: any;
}

export const add = (value: any): AddAction => ({
  type: ADD,
  payload: value,
})

type RemoveAction = {
  type: typeof REMOVE;
  payload: any;
}

export const remove = (value: any): RemoveAction => ({
  type: REMOVE,
  payload: value,
})

type ClearAction = {
  type: typeof CLEAR;
}

export const clear = (): ClearAction => ({
  type: CLEAR
})

type Action = AddAction | RemoveAction | ClearAction;

export const statisticReducer = (characters = [], action: Action) => {
  switch(action.type) {
    case ADD:
      return [...characters, action.payload];
    case REMOVE:
      return characters.filter(character => character !== action.payload);
    case CLEAR:
      return [];
    default:
      return characters;
  }
};


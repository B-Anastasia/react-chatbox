const SORT = "SORT";
const CHECK = "CHECK";
const RESET = "RESET";

export type IPersonType = {
  id: string;
  name: string;
  age: number;
};

export type ISortType = "up" | "down";

export const hwReducer = (state: Array<IPersonType>, action: ActionsType) => {
  switch (action.type) {
    case SORT:
      return [...state].sort((a, b) => {
        if (action.payload === "up") {
          return a.name === b.name ? 0 : a.name > b.name ? 1 : -1;
        } else if (action.payload === "down") {
          return a.name === b.name ? 0 : a.name < b.name ? 1 : -1;
        } else {
          return 0;
        }
      });
    case CHECK:
      return state.filter((person) => person.age > 18);
    case RESET:
      return action.payload;
    default:
      return state;
  }
};

export type CheckAgeActionType = {
  type: typeof CHECK;
  payload: number;
};

export type SortUpActionType = {
  type: typeof SORT;
  payload: "up";
};
export type SortDownActionType = {
  type: typeof SORT;
  payload: ISortType;
};
export type ResetActionType = {
  type: typeof RESET;
  payload: Array<IPersonType>;
};

type ActionsType =
  | CheckAgeActionType
  | SortUpActionType
  | SortDownActionType
  | ResetActionType;

export const checkAgeAC = (age: number): CheckAgeActionType => ({
  type: CHECK,
  payload: age,
});

export const sortTypeAC = (sortType: ISortType): SortDownActionType => ({
  type: SORT,
  payload: sortType,
});
export const resetAC = (users: Array<IPersonType>): ResetActionType => ({
  type: RESET,
  payload: users,
});

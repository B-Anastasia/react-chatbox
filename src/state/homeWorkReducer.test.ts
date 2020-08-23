import { hwReducer, IPersonType, sortTypeAC } from "./homeWorkReducer";

describe("test for home work reducer", () => {
  it("should return sorted array of people 'up' by name", () => {
    const startArr: Array<IPersonType> = [
      { age: 20, id: "2", name: "Dima" },
      { age: 26, id: "3", name: "Vlad" },
      { age: 10, id: "4", name: "Ura" },
      { age: 35, id: "5", name: "Oleg" },
    ];
    const result = [
      { age: 20, id: "2", name: "Dima" },
      { age: 35, id: "5", name: "Oleg" },
      { age: 10, id: "4", name: "Ura" },
      { age: 26, id: "3", name: "Vlad" },
    ];
    expect(hwReducer(startArr, { type: "SORT", payload: "up" })).toEqual(
      result
    );
    expect(
      hwReducer(startArr, { type: "SORT", payload: "up" })[2].name
    ).toEqual("Ura");
  });
  it("should return sorted array of people 'up' by name and don't change when name the same", () => {
    const startArr: Array<IPersonType> = [
      { age: 20, id: "2", name: "Dima" },
      { age: 26, id: "3", name: "Dima" },
      { age: 10, id: "4", name: "Ura" },
      { age: 35, id: "5", name: "Oleg" },
    ];
    const result = [
      { age: 20, id: "2", name: "Dima" },
      { age: 26, id: "3", name: "Dima" },
      { age: 35, id: "5", name: "Oleg" },
      { age: 10, id: "4", name: "Ura" },
    ];
    expect(hwReducer(startArr, sortTypeAC("up"))).toEqual(result);
  });
  it("should return sorted array of people 'down' by name", () => {
    const startArr: Array<IPersonType> = [
      { age: 20, id: "2", name: "Dima" },
      { age: 26, id: "3", name: "Dima" },
      { age: 10, id: "4", name: "Ura" },
      { age: 35, id: "5", name: "Oleg" },
    ];
    const result = [
      { age: 10, id: "4", name: "Ura" },
      { age: 35, id: "5", name: "Oleg" },
      { age: 20, id: "2", name: "Dima" },
      { age: 26, id: "3", name: "Dima" },
    ];
    expect(hwReducer(startArr, sortTypeAC("down"))).toEqual(result);
  });
  it("should return old state if action.type isn't correct ", () => {
    const startArr: Array<IPersonType> = [
      { age: 20, id: "2", name: "Dima" },
      { age: 26, id: "3", name: "Dima" },
      { age: 10, id: "4", name: "Ura" },
      { age: 35, id: "5", name: "Oleg" },
    ];
    expect(
      hwReducer(startArr, { type: "INCORRECT_TYPE", payload: 18 })
    ).toEqual(startArr);
  });
  it("should return old state if action.type isn't correct ", () => {
    const startArr: Array<IPersonType> = [];
    expect(hwReducer(startArr, { type: "SORT", payload: "down" }).length).toBe(
      0
    );
  });
  it("should return an array of people who are over 18 years old ", () => {
    const startArr: Array<IPersonType> = [
      { age: 20, id: "2", name: "Dima" },
      { age: 26, id: "3", name: "Dima" },
      { age: 10, id: "4", name: "Ura" },
      { age: 35, id: "5", name: "Oleg" },
    ];
    const resultArr: Array<IPersonType> = [
      { age: 20, id: "2", name: "Dima" },
      { age: 26, id: "3", name: "Dima" },
      { age: 35, id: "5", name: "Oleg" },
    ];

    expect(hwReducer(startArr, { type: "CHECK", payload: 18 })).toEqual(
      resultArr
    );

    expect(hwReducer(startArr, { type: "CHECK", payload: 18 }).length).toBe(3);

    expect(hwReducer(startArr, { type: "CHECK", payload: 18 })[0].age).toBe(20);
  });
});

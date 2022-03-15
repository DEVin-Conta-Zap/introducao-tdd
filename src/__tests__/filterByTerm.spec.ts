import { filterByTerm } from '../util/filterByTerm';

// __tests__, arquivo.js, arquivo.test.(t)js, arquivo.spec.(t)js
describe('Filter function', () => {
  test('it should filter by a search term', () => {
    const inputArr = [
      { id: 1, name: "laranja"},
      { id: 2, name: "pera"},
      { id: 3, name: "maça"},
    ];

    const output = [{ id: 3, name: "maça"}];

    expect(filterByTerm(inputArr, "maça")).toEqual(output)

    expect(filterByTerm(inputArr, "MAÇA")).toEqual(output)

    expect(filterByTerm(inputArr, "MaÇa")).toEqual(output)

    expect(filterByTerm(inputArr, "")).toEqual(inputArr)
  })
})


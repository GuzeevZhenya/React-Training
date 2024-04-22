export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
  if (filters.length === 0) return state.positions;

  return state.positions.filter((el) => {
    const posFilter = [].concat(
      el.role,
      el.level,
      ...el.languages,
      ...el.tools
    );

    return filters.every((filter) => posFilter.includes(filter));
  });
};

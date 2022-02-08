import { createSelector } from 'reselect';

const directory = (state) => state.directory;

export const selectDirectory = createSelector(
  [directory],
  (directory) => directory,
);

export const selectDirectorySection = createSelector(
  [selectDirectory],
  (directory) => directory.sections,
);

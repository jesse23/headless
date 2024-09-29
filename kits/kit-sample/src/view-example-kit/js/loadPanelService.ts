import { ViewModelObject } from '@headless/core';

export const loadData = async (): Promise<{
  data: ViewModelObject[];
  totalFound: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            name: 'Part 1',
          },
          {
            name: 'Part 2',
          },
          {
            name: 'Part 3',
          },
          {
            name: 'Part 4',
          },
          {
            name: 'Part 5',
          },
        ],
        totalFound: 50,
      });
    }, 2000);
  });
};

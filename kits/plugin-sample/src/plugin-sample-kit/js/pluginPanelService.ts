import { ViewModelObject } from '@headless/types';

export const loadData = async (): Promise<{
  data: ViewModelObject[];
  totalFound: number;
}> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            name: 'Plugin Part 1',
          },
          {
            name: 'Plugin Part 2',
          },
          {
            name: 'Plugin Part 3',
          },
          {
            name: 'Plugin Part 4',
          },
          {
            name: 'Plugin Part 5',
          },
          {
            name: 'Plugin Part 6',
          }
        ],
        totalFound: 50,
      });
    }, 2000);
  });
};

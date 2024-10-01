// TODO: vite cannot support import('../js/loadPanelService') when it is in mono repo
// need to resolve later. For now use js and mention js in import explicitly
export const loadData = async () => {
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

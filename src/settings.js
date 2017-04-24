export const apiUrl = 'http://api.fixer.io'; // Your main API url here - fixer.io just for testing.

export const routesPaths = {
  home: '/',
  subpage: '/subpage',
};

export const apiEndpoints = {
  testAPIHomepage: `${apiUrl}/latest?base=USD`,
  testAPISubpage: `${apiUrl}/latest?base=GBP`,
};

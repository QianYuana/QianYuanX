import React from 'react';
const app = () => {
  const b = React.createElement('div', { data: '1234' }, 'oneTwo');
  console.log(b);
  return b;
};
export default app;

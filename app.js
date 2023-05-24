require.config({
  paths: {
    react: 'https://unpkg.com/react@18/umd/react.development',
    'react-dom': 'https://unpkg.com/react-dom@18/umd/react-dom.development'
  }
});

require(['react', 'react-dom', './js/a'], (React, ReactDom, Mod) => {
  console.log('react', React, ReactDom, Mod);
  ReactDom.render(<Mod />, document.getElementById('app'));
});

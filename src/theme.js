const card = {
  display: 'inherent',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto auto auto',
};

const classic = {
  display: 'none',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto auto',
};

const compact = {
  display: 'none',
  gridTemplateColumns: 'auto auto',
  gridTemplateRows: 'auto auto',
  marginLeft: 'auto',
};

const theme = (view) =>
  view === 'card'
    ? card
    : view === 'classic'
    ? classic
    : view === 'compact'
    ? compact
    : null;

export default theme;

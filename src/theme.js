const card = {
  display: 'inherent',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto auto auto',
  voteFlexDirection: 'column',
  voteMinWidth: '35px',
  voteJustifyContent: 'top',
};

const classic = {
  display: 'none',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto auto',
  voteFlexDirection: 'column',
  voteMinWidth: '35px',
  voteJustifyContent: 'top',
};

const compact = {
  display: 'none',
  gridTemplateColumns: '93% 7%',
  gridTemplateRows: 'auto auto',
  voteFlexDirection: 'row',
  voteMinWidth: '70px',
  voteJustifyContent: 'center',
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

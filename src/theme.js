const global = {
  upvote: '#f54504',
  downvote: '#7193ff',
};

const card = {
  ...global,
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto auto auto',
  voteFlexDirection: 'column',
  voteMinWidth: '35px',
  voteJustifyContent: 'top',
};

const classic = {
  ...global,
  display: 'none',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto auto',
  voteFlexDirection: 'column',
  voteMinWidth: '35px',
  voteJustifyContent: 'top',
};

const compact = {
  ...global,
  display: 'none',
  gridTemplateColumns: '85% 15%',
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

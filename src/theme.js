const globalStyle = {
  upvote: '#f54504',
  downvote: '#7193ff',
  reddit: '#ff5700',
};

const card = {
  ...globalStyle,
  display: 'grid',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto auto auto',
  voteFlexDirection: 'column',
  voteMinWidth: '35px',
  voteJustifyContent: 'top',
};

const classic = {
  ...globalStyle,
  display: 'none',
  gridTemplateColumns: 'auto',
  gridTemplateRows: 'auto auto auto',
  voteFlexDirection: 'column',
  voteMinWidth: '35px',
  voteJustifyContent: 'top',
};

const compact = {
  ...globalStyle,
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

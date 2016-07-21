const defaultState = true;

const Open = (state = defaultState, action) => {
  switch (action.type) {
    case 'OPEN_TIPS':
      return true;
    case 'CLOSE_TIPS':
      if (ae && ae('starting_tips_dialog')) {
        ae.disableDialog('starting_tips_dialog');
      }
      return false;
    default:
      return state;
  }
};

export default Open;

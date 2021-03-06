import actions from 'content/actions';

const enable = (newTab) => {
  return {
    type: actions.FOLLOW_ENABLE,
    newTab,
  };
};

const disable = () => {
  return {
    type: actions.FOLLOW_DISABLE,
  };
};

const keyPress = (key) => {
  return {
    type: actions.FOLLOW_KEY_PRESS,
    key: key
  };
};

const backspace = () => {
  return {
    type: actions.FOLLOW_BACKSPACE,
  };
};

export { enable, disable, keyPress, backspace };

// set title
export function setTitle(title) {
  return {
    type: 'SET_TITLE',
    title
  };
}

// increment notif
export function incrementNotif() {
  return {
    type: 'INCR_NOTIF'
  };
}

// decrement notif
export function decrementNotif() {
  return {
    type: 'DECR_NOTIF'
  };
}

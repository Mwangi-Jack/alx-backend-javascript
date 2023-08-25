import ClassRoom from './0-classroom';

function initializeRooms() {
  const size = [19, 20, 34];
  const classes = [];

  for (const i of size.values()) {
    classes.push(new ClassRoom(i));
  }

  return classes;
}

export default initializeRooms;

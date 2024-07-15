import ClassRoom from './0-classroom';

function initializeRooms() {
  const sizes = [19, 20, 34];
  const classArr = [];

  for (const size of sizes) {
    classArr.push(new ClassRoom(size));
  }

  return classArr;
}

export default initializeRooms;

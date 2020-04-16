function getCount(objects) {
  let count = 0;
  for (let i = 0; i < objects.length; i++) {
    if (objects[i].x == objects[i].y) {
      count++;
    }
  }
  return count;
}
//n=5;
//object1 = {x:1,y:1}
//object2 = {x:2,y:3}
//object3 = {x:3,y:3}
//object4 = {x:3,y:4}
//object5 = {x:4,y:5}

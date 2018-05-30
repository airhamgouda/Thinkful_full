'use strict';
const steps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

function turtle() {
  let answer = steps.filter((step) => {
    if (step[0] >= 0 && step[1] >= 0) {
      return step;
    }
  });
  console.log(answer);
}

turtle(steps);
window.GradeParser = {

  upOrDown: function (previousGrade, currentGrade) {
    if (previousGrade > currentGrade) {
      return "down";
    } else if (previousGrade == currentGrade) {
      return "even";
    } else if (previousGrade < currentGrade) {
      return "up"
    }
  },

  getMovements: function (grades) {
    var movements = [];
    for (i = 0; i < grades.length; ++i) {
      if (i != 0) {
        movements.push(this.upOrDown(grades[i-1], grades[i]));
      }
    }
    return movements;
  },

  scoreMovements: function (movements) {
    var progress_score = 0;
    for (i = 0; i < movements.length; ++i) {
      if (movements[i] == "up") {
        progress_score = 0;
      } else if (movements[i] == "down") {
        progress_score += 1;
      }
    }
    return progress_score;
  },

  isStudentInDecline: function (movements) {
    console.log('SCORE:');
    console.log(this.scoreMovements(movements));
    if (this.scoreMovements(movements) > 2) {
      return true;
    } else {
      return false;
    }
  }

};
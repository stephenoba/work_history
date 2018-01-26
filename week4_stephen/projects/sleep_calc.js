const getSleepHours = (day) => {
  if (day === 'Monday') {
    return 6;
  } else if (day === 'Tuesday') {
    return 7;
  }  else if (day === 'Wednesday') {
    return 7;
  }  else if (day === 'Thursday') {
    return 7;
  }  else if (day === 'Friday') {
    return 5;
  }  else if (day === 'Saturday') {
    return 6;
  }  else if (day === 'Sunday') {
    return 3;
  }  else {
    return 'Not a day of the week';
  }
};
const getActualSleepHours = () => {
const totalHours = getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Saturday')
  return totalHours;
};

const getIdealSleepHours = () => {
 const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours();

  if (actualSleepHours === idealSleepHours){
  console.log('Got the perfect amount of sleep');
}
    if (actualSleepHours > idealSleepHours) {
      console.log('You got more sleep than needed.  You got ' + (actualSleepHours - idealSleepHours) + ' hours more sleep than you needed this week.');
    }
    if (actualSleepHours < idealSleepHours){
      console.log('You should get more rest. You got ' + (idealSleepHours - actualSleepHours) + ' hours less sleep than you needed this week. Get some rest.');
                            }
};
calculateSleepDebt();

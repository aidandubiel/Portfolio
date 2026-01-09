const getSleepHours = day => {
  switch (day){
    case 'monday':
      return 6;
      break;
    case 'tuesday':
      return 6;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
    return 10;
    break;
    case 'sunday':
    return 6;
    break;
  }
}

const getActualSleepHours = () => getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');

const getIdealSleepHours = (hours) => {
  //let idealHours = 8;
  return hours * 7;
}


const calculateSleepDebt = () => {
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours(8);
  let hourDifference = actualSleepHours - idealSleepHours;

  if (actualSleepHours === idealSleepHours){
    console.log('You are well rested!');
  } else if (actualSleepHours > idealSleepHours){
    console.log(`You've slept way more than you need to. You are ${hourDifference} hours over.`);
  } else {
    console.log(`You need more sleep. You are ${hourDifference * -1} hours under.`);
  }
}

calculateSleepDebt();

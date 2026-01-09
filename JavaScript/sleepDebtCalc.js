const getSleepHours = day => {
  switch (day){
    case 'monday':
      return 6;
    case 'tuesday':
      return 6;
    case 'wednesday':
      return 8;
    case 'thursday':
      return 8;
    case 'friday':
      return 8;
    case 'saturday':
    return 10;
    case 'sunday':
    return 6;
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

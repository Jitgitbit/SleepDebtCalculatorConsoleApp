const getSleepHours = day => {
    switch (day) {
      case 'monday':
        return 8;
        break;
      case 'tuesday':
        return 6;
        break;
      case 'wednesday':
        return 7;
        break;
      case 'thursday':
        return 6;
        break;
      case 'friday':
        return 7;
        break;
      case 'saturday':
        return 8;
        break;
      case 'sunday':
        return 9;
        break;
      default:
        return 'ERROR!';
    } 
  };
  //console.log(getSleepHours('monday')); 
  const getActualSleepHours = () => 
  getSleepHours('monday') + 
  getSleepHours('tuesday') + 
  getSleepHours('wednesday') + 
  getSleepHours('thursday') + 
  getSleepHours('friday') + 
  getSleepHours('saturday') + 
  getSleepHours('sunday'); 
  
  //console.log(getActualSleepHours());
  const getIdealSleepHours = () => {
    const idealHours = 8;
    return idealHours * 7;
  }; 
  /*console.log(getActualSleepHours());
  console.log(getIdealSleepHours());*/
  
  const calculateSleepDebt = () => {
      const actualSleepHours = getActualSleepHours();
      const idealSleepHours = getIdealSleepHours();
              
    if (actualSleepHours === idealSleepHours) {
                console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
        console.log('You got more sleep than needed.');
  } else if (actualSleepHours < idealSleepHours) {
        console.log('You need to get more sleep. You got ' + (idealSleepHours - actualSleepHours) + ' hour(s) less sleep than you needed this week. Get some rest!');
  } else { console.log('ERROR!'); }
  };
  
  calculateSleepDebt();
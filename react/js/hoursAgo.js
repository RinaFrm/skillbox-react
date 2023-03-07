export function hoursAgo(created) {
  const currentDate = new Date;
  const diff = currentDate.getTime() - (created*1000);
  const result = Math.floor(diff/(1000*60*60));
  
  if(result.toString().endsWith('1')) {
    return result + ' час назад';
  } else if(result.toString() < 1) {
    return 'меньше часа назад';
  } else if(result.toString().endsWith('2')) {
    return result + ' часа назад';
  } else if(result.toString().endsWith('3')) {
    return result + ' часа назад';
  } else if(result.toString().endsWith('4')) {
    return result + ' часа назад';
  } else {
    return result + ' часов назад'
  }
  
}
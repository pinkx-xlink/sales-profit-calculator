function getLaborRate(hoursOfLabor, hourlyRate) {
  const totalLaborRate = hoursOfLabor * hourlyRate;
  return totalLaborRate;
}
module.exports = getLaborRate;

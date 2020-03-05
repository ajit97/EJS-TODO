exports.date = date;
function date() {
    const today = new Date();
    options = {
      weekday:"long",
      day:"numeric",
      month:"long"
    };
    const currentDay = today.toLocaleDateString("en-US", options);
    return currentDay;
}
module.exports.day = day;

function day() {
  const today = new Date();
  options = {
    weekday:"long",
    
  };
  const currentDay = today.toLocaleDateString("en-US", options);
  return currentDay;
}
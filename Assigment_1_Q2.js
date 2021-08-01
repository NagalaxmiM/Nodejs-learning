var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday']

let working_days = workingDays.filter(x => x!='Sunday' && x!='Saturday') 
console.log(working_days.length)
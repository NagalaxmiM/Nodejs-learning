var workingDays = ['Sunday', 'Monday', 'Tuesday', 'Saturday', 'Saturday']

let working_days = workingDays.map(x => x=='Sunday' || x=='Saturday'?'Holiday':x) 
working_days
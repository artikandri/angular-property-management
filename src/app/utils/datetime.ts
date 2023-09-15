import { parse } from "@fortawesome/fontawesome-svg-core";
/*
    All dates are loaded with the assumption that they are in DD/MM/YYYY format
*/


export function ddmmyyyyToDate(date: String) : Date {
    const [day, month, year] = date.split('/');
    return new Date([month, day, year].join("/"));
}

export function getDayDifferences(oldDate: string, newDate: string) : Number {
  const date1 = oldDate ? ddmmyyyyToDate(oldDate) : new Date(); 
  const date2 = newDate? ddmmyyyyToDate(newDate) : new Date();
  const Difference_In_Time = date2.getTime() - date1.getTime(); 
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  return parseInt(Difference_In_Days.toString());
}

export function roundToTwo(num: Number) : String {
    return parseFloat(num.toString()).toFixed(2);
}

export function roundToInteger(num: Number) : Number {
    return parseInt(num.toString())
}

export function getTimeDifferences(oldDate: string, newDate: string = "") : any {
    const date1 = oldDate ? ddmmyyyyToDate(oldDate) : new Date(); 
    const date2 = newDate? ddmmyyyyToDate(newDate) : new Date();
    const Difference_In_Time = date2.getTime() - date1.getTime(); 
    const DifferenceInHours = Difference_In_Time / (1000 * 3600);
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    const hourString = DifferenceInHours > 1 ? roundToInteger(DifferenceInHours).toLocaleString('de') + " hours" : roundToInteger(DifferenceInHours).toLocaleString('de') + " hour";
    const dayString = Difference_In_Days > 1 ? roundToInteger(Difference_In_Days).toLocaleString('de') + " days" : roundToInteger(Difference_In_Days).toLocaleString('de') + " day";

    return DifferenceInHours > 24 ? dayString : hourString
}

export function getMonthNameFromDate(date: string) {
    return new Date(ddmmyyyyToDate(date)).toLocaleString("en-US", { month: "short" })
}

export function getDayFromDate(date: string) {
    return new Date(ddmmyyyyToDate(date)).getDate();
}

export function getTodayGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) {
        return "Morning";
    } else if (hour < 18) {
        return "Afternoon";
    } else {
        return "Evening";
    }
}


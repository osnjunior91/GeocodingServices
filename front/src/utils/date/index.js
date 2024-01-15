import { format, addMinutes } from "date-fns";


export const DateFormat = (date) => format(addMinutes(date, new Date().getTimezoneOffset()), "MM/dd/yyyy")
function FormatDate(date = new Date()) {
    this.YYYY = convertToString(date.getFullYear())
    this.MM = convertToString(date.getMonth())
    this.DD = convertToString(date.getDay())
    this.hh = convertToString(date.getHours())
    this.mm = convertToString(date.getMinutes())
    this.ss = convertToString(date.getSeconds())
}



function convertToString(val) {
    return val.toString()
}
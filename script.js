const days_labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months_labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const days_in_month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let current_date = new Date();
class Calendar {
  constructor() {
    this.month = current_date.getMonth();
    this.day = current_date.getDate();
    this.year = current_date.getFullYear();
  }
  generateHTML() {
    let monthName = months_labels[this.month];
    let daysLength = days_in_month[this.month];
    let firstDay = new Date(this.year, this.month, 1).getDay();

    if (this.month == 1) {
      if (
        (this.year % 4 == 0 && this.year % 100 != 0) ||
        this.year % 400 == 0
      ) {
        monthLength = 29;
      }
    }
    let html =
      '<div class="header"><ul><li id="pre" onclick="">&#10094;</li><li id="month">' +
      monthName +
      "<br>" +
      this.year +
      '</li><li id="next" onclick="">&#10095;</li><ul></div><ul class="days">';
    for (let i = 0; i < 7; i++) {
      html += "<li>" + days_labels[i] + "</li>";
    }
    html += "</ul>" + '<ul class="cal-frame">';
    firstDay = firstDay == 0 ? 7 : firstDay;
    for (let i = 1; i < firstDay; i++) {
      html += "<li></li>";
    }
    for (let i = 1; i <= daysLength; i++) {
      if (
        i < this.day &&
        this.month <= current_date.getMonth() &&
        this.year <= current_date.getFullYear()
      ) {
        html += '<li class="less">' + i + "</li>";
      } else if (i == this.day) {
        html += '<li class="active">' + i + "</li>";
      } else {
        html += "<li>" + i + "</li>";
      }
    }
    return (html += "</ul>");
  }
}
let today = new Calendar();
document.getElementById("calender").innerHTML = today.generateHTML();

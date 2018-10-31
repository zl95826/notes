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
    let firstDay = new Date(this.year, this.month, 1).getDay(); //Get the weekday as a number (0-6)
    let lastMonthDays = days_in_month[this.month - 1];
    let lastDayThisMonth = new Date(this.year, this.month, daysLength).getDay();

    if (this.month == 1) {
      if (
        (this.year % 4 == 0 && this.year % 100 != 0) ||
        this.year % 400 == 0
      ) {
        daysLength = 29;
      }
    }
    let html =
      '<div class="header"><ul><li id="pre">&#10094;</li><li id="month">' +
      monthName +
      "<br>" +
      this.year +
      '</li><li id="next">&#10095;</li><ul></div><ul class="days">';
    for (let i = 0; i < 7; i++) {
      html += "<li>" + days_labels[i] + "</li>";
    }
    html += "</ul>" + '<ul class="cal-frame">';
    firstDay = firstDay == 0 ? 7 : firstDay;
    lastMonthDays -= firstDay;
    for (let i = 1; i < firstDay; i++, lastMonthDays++) {
      html += '<li class="less">' + (lastMonthDays + 2) + "</li>";
    }
    for (let i = 1; i <= daysLength; i++) {
      if (
        (i < this.day &&
          this.month <= current_date.getMonth() &&
          this.year <= current_date.getFullYear()) ||
        this.year < current_date.getFullYear() ||
        (this.month < current_date.getMonth() && i >= this.day)
      ) {
        html += '<li class="less">' + i + "</li>";
      } else if (
        i == this.day &&
        this.month == current_date.getMonth() &&
        this.year == current_date.getFullYear()
      ) {
        html += '<li class="active">' + i + "</li>";
      } else {
        html += "<li>" + i + "</li>";
      }
    }
    lastDayThisMonth = lastDayThisMonth == 0 ? 7 : lastDayThisMonth;
    for (let i = 1; i <= 7 - lastDayThisMonth; i++) {
      html += '<li class="less">' + i + "</li>";
    }
    return (html += "</ul>");
  }
  clickNext() {
    this.month++;
    if (this.month > 11) {
      this.month = 0;
      this.year++;
    }
    return this.generateHTML(); //without return you get nothing
  }
  clickBack() {
    this.month--;
    if (this.month < 0) {
      this.month = 11;
      this.year--;
    }
    return this.generateHTML(); //without return you get nothing
  }
}
let today = new Calendar();
document.getElementById("calender").innerHTML = today.generateHTML();
document.getElementById("calender").onclick = function(event) {
  if (event.target.id == "next") {
    document.getElementById("calender").innerHTML = today.clickNext();
  }
  if (event.target.id == "pre") {
    document.getElementById("calender").innerHTML = today.clickBack();
  }
};
//if you want add a next function, either add the function into the <li> tag in HTML or use event delegation, otherwise it only works one time,
//becuase the click event handler is only added just for the first next button
/*document.getElementById("next").onclick = function() {
  
    document.getElementById("calender").innerHTML = today.clickNext();
    alert(today.month);
  
};*/

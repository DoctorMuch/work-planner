$(document).ready(function () {
  
  const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  
  let body = document.body;
  let schedulerEl = document.getElementById("schedule");
  
  $("#currentDay").text(getFormattedDate);
  
  function getFormattedDate() {
    return dayjs().format("dddd, MMMM D"); 
  };

  let getCurrentTime = function(){
    let rightNow = dayjs().format("h");
    console.log(rightNow);
    return rightNow;
  };

  let auditTime = function(schedulerEl){
    let date = $(schedulerEl).find("col-md-1 hour").html();
    console.log(date)
    let time = dayjs(date).format("h A");
    console.log(time);
    if (dayjs().isAfter(time)){
      $(schedulerEl).addClass("past");
    } 
    else if (dayjs().diff(time, "hours") === 0) {
      $(schedulerEl).addClass("present");
    }
  }
  auditTime();
  function getRow(hour) {
    let rowDiv = document.createElement("div");
    rowDiv.setAttribute("class", "row time-block");
    rowDiv.setAttribute("id", `hour-${hour}`);

    let labelDiv = document.createElement("div");
    labelDiv.setAttribute("class", "col-md-1 hour");
    labelDiv.setAttribute("id", `hour-${hour}-label`);
    labelDiv.textContent = dayjs().hour(hour).format("h A");

    let textAreaEl = document.createElement("textarea");
    textAreaEl.setAttribute("class", "col-md-10 description");
    textAreaEl.setAttribute("id", `textarea-${hour}`);
    if (localStorage.getItem(hour)){
      textAreaEl.textContent = localStorage.getItem(hour);
    }

    let saveBtnEl = document.createElement("button");
    saveBtnEl.setAttribute("class", "btn saveBtn col-md-1 hour");
    saveBtnEl.setAttribute("id", `btn-hour-${hour}`);
    saveBtnEl.addEventListener("click", function(){
      const textEntry = document.querySelector(`#textarea-${hour}`).value;
      console.log(textEntry);
      localStorage.setItem(hour, textEntry);
    })
    
    let iconEl = document.createElement("i");
    iconEl.setAttribute("class", "fas fa-save mt-4");

    body.appendChild(schedulerEl);

    schedulerEl.appendChild(rowDiv);

    rowDiv.appendChild(labelDiv);
    rowDiv.appendChild(textAreaEl);
    rowDiv.appendChild(saveBtnEl);
    saveBtnEl.appendChild(iconEl);
  }

  for (let i = 0; i < hours.length; i++) {
    getRow(hours[i]);
    // auditTime();
  }
});
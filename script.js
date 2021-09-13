$("#currentDay").text(dayjs().format('dddd, MMMM D, h:mm A'));

  let getTime = function(){
    let rightNow = dayjs().format('h:mm');
    console.log(rightNow);
  }
  getTime();

  let makeRow = function(){
    let timeEl = $(".col-1 hour")
      .html("<p>9:00</p>")
      .attr("id", "data-9");

    $(".row time-block").append(timeEl);
   }

   makeRow();
  
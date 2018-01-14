$(document).ready(makeGrid);
// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(()=>{
  event.preventDefault();
  makeGrid();
});

function makeGrid() {//alert();
  $('#pixel_canvas').html('');
  const gridHeight = $('#input_height').val(),
         gridWidth = $('#input_width').val();
  for (let x = 1; x <= gridWidth; x++) {  
    $('#pixel_canvas')
      .append(`<tr id="${x}">${gridHeight}</tr>`);      
    for (let y = 1; y <= gridHeight; y++){       
      $('#'+x)
      .append(`<td id="${x}${y}"></td>`)
    }
  }
}

$(document).on('click', '#pixel_canvas',function (e) {
  const id = $('#pixel_canvas').children().attr('id');
  const colorPicked = $('#colorPicker').val();
  let cellColor = e.target.style.backgroundColor;
 // $('#sizePicker').prepend(typeof cellColor);
  e.target.style.backgroundColor = 
    cellColor==='' ? colorPicked  : ''; 
  })
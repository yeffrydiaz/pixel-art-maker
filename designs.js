$(document).ready(makeGrid);

$('#sizePicker').submit(()=>{
  event.preventDefault();
  makeGrid();
});

function makeGrid() {
  $('#pixel_canvas').html('');
  const gridHeight = $('#input_height').val(),
         gridWidth = $('#input_width').val();
             pSize = $('#pixelsize').val();
  for (let x = 1; x <= gridWidth; x++) {  
    $('#pixel_canvas')
      .append(`<tr id="row${x}" class="rows">${gridHeight}</tr>`);      
    for (let y = 1; y <= gridHeight; y++){       
      $('#row'+x)
        .append(`<td id="${x}${y}" class="columns"></td>`)
    }
  }
  pixelSize(pSize);
}

$(document)
 .on('keyup', '#pixelsize', e => {
   const pSize = $('#pixelsize').val();
   pixelSize(pSize);
})

function pixelSize(x){
  $('.rows, .columns')
    .css({
      'width': x,
      'height': x
    })
}
$(document).on('click', '#pixel_canvas', e => {
  const id = $('#pixel_canvas').children().attr('id'),
        colorPicked = $('#colorPicker').val(),
        cellColor = e.target.style.backgroundColor;
     e.target.style.backgroundColor = 
      cellColor==='' ? colorPicked  : ''; 
  })
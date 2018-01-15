$(document).ready(()=> {
  makeGrid();
  createPalette();
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
  .on('keyup', '#input_height,#input_width', makeGrid)

$(document)
 .on('keyup', '#pixelsize', e => {
   const pSize = $('#pixelsize').val();
   if (pSize)pixelSize(pSize);
})

function pixelSize(x){
  $('.rows, .columns')
    .css({
      'width': x,
      'height': x
    })
}

$(document)
 .on('click', '#pixel_canvas', e => {
  const id = colorPicked = $('#colorPicker').val(),
            cellColor = e.target.style.backgroundColor;
          e.target.style.backgroundColor = 
          cellColor==='' ||
         cellColor !== colorPicked ? 
       colorPicked  : ''; 
})

$(document)
  .on('click', '#palette', e => {
    const colorclicked = e.target.style.backgroundColor;
      $('#colorPicker')
        .val(rgb2hex(colorclicked));
})

function createPalette(){
  const arr = [ '#FFFFFF'	, '#C0C0C0'	,	'#808080'	,
                '#000000'	,	'#FF0000'	,	'#800000'	,	
                '#FFFF00'	,	'#808000'	,	'#00FF00'	,	
                '#008000'	,	'#00FFFF'	,	'#008080'	,	
                '#0000FF'	,	'#000080'	,	'#FF00FF'	,	
                '#800080'
              ];
  arr.forEach((c) => {
    $('#palette')
    .append(
      `<div 
        class="palettecolor" 
        style="background-color:${c};">
    </div>`
    )
  });    
}

//convert rgb color to hex format
var hexDigits = new Array
  ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"); 
function rgb2hex(rgb) {
  rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
function hex(x) {
  return isNaN(x) ? 
         "00" :
         hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
}


// function paletteColorPicker(){

// }
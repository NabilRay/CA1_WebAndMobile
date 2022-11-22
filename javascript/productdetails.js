
/*bringing the data*/

$(document).ready(()=>{
    location = $(location).attr('href')
    id = location.split("=") 

    $.getJSON('product.json', (data)=>{
        var arrItems = [];
        $.each(data, function (index, value) {
            arrItems.push(value);
        });
            
        var container = $("#MainImg")
        for (var i=0;i<arrItems.length;i++){
          if(arrItems[i].id == id[1]){
            container.src=arrItems[i].img
          }
        }

    
    })
})
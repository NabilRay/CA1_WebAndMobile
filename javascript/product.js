
/*bringing the data*/

$(document).ready(()=>{ 
    $.getJSON('product.json', (data)=>{
        var arrItems = [];
        $.each(data, function (index, value) {
            arrItems.push(value);
        });
        function pro(){
            var proid = $(this).attr('id');
            location.href = "productDetails.html?id="+proid;
        }

        var container = $(".image-container")
        for (var i=0;i<arrItems.length;i++){
            var image_div = document.createElement('div');
        
            var img = document.createElement('img');
            var h2 = document.createElement('h2');
            var h2_1 = document.createElement('h2');
            var rev_btn = document.createElement('button');
            $(rev_btn).attr("id",i)
            img.src = arrItems[i].img
            $(h2).text(arrItems[i].name)
            $(h2_1).text(arrItems[i].price)
            rev_btn.innerText=arrItems[i].btn_txt
            $(image_div).addClass("image")
            $(image_div).append(img)
            $(image_div).append(h2)
            $(image_div).append(h2_1)
            $(image_div).append(rev_btn)

            $(container).append(image_div)
        }

    
    })
})
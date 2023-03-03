
$(document).ready(function(){

    $(".filter-btn").click(function(){
var value = $(this).attr('data-filter');
if(value == "all")
{
    $('.filter').show('1000');
}
else
{
    $(".filter").not('.'+value).hide('3000');
    $('.filter').filter('.'+value).show('3000');
    
}
    });

});

var btnfilter = document.getElementById("myDIV");
var btns = btnfilter.getElementsByClassName("filter-btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
<script type="text/javascript" charset="utf-8">

	$(document).ready(function(){
$("area[rel^='prettyPhoto']").prettyPhoto();

$(".gallery:first a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'normal',theme:'light_square',slideshow:3000, autoplay_slideshow: true});
$(".gallery:gt(0) a[rel^='prettyPhoto']").prettyPhoto({animation_speed:'fast',slideshow:10000, hideflash: true});
 });
</script>
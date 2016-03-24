
$(document).ready(function() {
  $("#turtle").click(function() {
    $("#turtlePage").show();
    $("#snakePage").hide();
    $("#insectPage").hide();
});
  $("#snake").click(function() {
    $("#snakePage").show();
    $("#turtlePage").hide();
    $("#insectPage").hide();
});
  $("#insect").click(function() {
    $("#insectPage").show();
    $("#turtlePage").hide();
    $("#snakePage").hide();
});

});

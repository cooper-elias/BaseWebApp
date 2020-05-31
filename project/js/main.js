// $(document).ready(function(){
//  getUser();
// })

function getUser(searchQuery) {
  var url = "https://www.clubready.com/api/users/{UserId}?UserId="+searchQuery+"&ChainId=18&FullDetail=true&ApiKey="+ApiKey;

  $(".city").text("");
  $(".dob").text("");
  $(".error-message").text("");

  $.ajax(url,{success: function(data){
    console.log(data);
    $(".city").text(data.City);
    $(".dob").text(data.DateOfBirth);
  }, error: function(error){
    $(".error-message").text("User not found");
  }})
}

function findUser() {
  var searchQuery = $(".search").val();
  getUser(searchQuery);
}


function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}
// $(document).ready(function(){
//  getUser();
// })

function userSearch() {
  var searchQuery = $(".search").val();
  findUser(searchQuery);
}

function findUser(searchQuery) {
  var url = "https://www.clubready.com/api/users/find?ApiKey="+ApiKey+"&ChainId=18&Barcode="+searchQuery;

  $(".error-message").text("");

  $.ajax(url,{success: function(data){
    var userId = data.users[0].UserId;
    console.log(userId);
    getUser(userId);
  }, error: function(error){
    $(".error-message").text("Barcode not found");
  }})
}

function getUser(userId) {
  var url = "https://www.clubready.com/api/users/{UserId}?ApiKey="+ApiKey+"&ChainId=18&FullDetail=true&UserId="+userId;

  $(".city").text("");
  $(".dob").text("");

  $.ajax(url,{success: function(data){
    console.log(data);
    $(".city").text(data.FirstName + " " + data.LastName);
    $(".dob").text(data.DateOfBirth);
  }, error: function(error){
    $(".error-message").text("User not found");
  }})
}
var users = [];
var userId = 0;
function generateUserId(){
   var noOfUsers = 0;
    $.ajax({
        type:'GET',
        url:'http://localhost:3004/users',
        async:false,
        success:function(users){
            console.log("No of users for id :"+users.length);
            noOfUsers = users.length;
          
        }
});
return ++noOfUsers;
}
function User(name,age,country){
    this.id = generateUserId();
this.name = name;
this.age = age;
this.country = country;

}
function createUser(userObj){
    users.push(userObj);
}
function updateUser(userObj){

}
function deleteUser(userId){
users.pop();
}
/*
function getAllUsers(){
    $.ajax({
      type:'GET',
      url:'http://localhost:3004/users',
      success:function(users){
          console.log("No of users:"+users.length);
      },
      error:function(){
        console.error("Error on loading the users");
      }
      
    });
}
*/
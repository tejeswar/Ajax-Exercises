var createUserTemplate = `
<form class="contact-form" action="" method="POST" >
    <fieldset>
        <legend>User Create Form</legend>
        
          <div id="login-response" class="response_error"></div>
        
        <div>
            <span id="login-response"></span>
        </div>
        
        <div>
            <label for="name">Username</label> 
            <input type="text" name="username" id="username" placeholder="username">
        </div>

          <div>
            <label for="age">Age</label> 
            <input type="number" name="age" id="age" placeholder="Age">
        </div>
        <div>
        <label for="country">Country</label> 
        <input type="text" name="country" id="country" placeholder="Country">
    </div>

        <div>

            <input type="submit" value="Submit" onclick="submit_create_user(event);">
          
        </div>

    </fieldset>
</form>
`;
function create_user_controller(){

    console.log("Create User Form got shown");
    
 document.getElementById("page").innerHTML = createUserTemplate;

}
function submit_create_user(eve){
    eve.preventDefault();
   
   var name =  $('#username').val();
   var age = $('#age').val();
   var country = $('#country').val();
   var userObj = new User(name,age,country);
   console.table(userObj);
   $.ajax({
       type:'POST',
       url:'http://localhost:3004/users',
       data:userObj,

       success:function(){
        console.log("User got added successfully.");
       },
       error:function(){
         console.log("error occured while adding the user");
       }
   })
    console.dir(this);
}


//the below table structure has been taken from the link http://jsfiddle.net/65JPw/2/
var usersViewTemplate = `
<table id="table">
    <tr>
        <td>1</td>
        <td>Ram</td>
        <td>23</td>
        <td>India</td>
       
    </tr>
    <tr>
    <td>1</td>
    <td>Ram</td>
    <td>23</td>
    <td>India</td>
    </tr>
    <tr>
    <td>1</td>
    <td>Ram</td>
    <td>23</td>
    <td>India</td>
    </tr>
</table>

`;
function show_All_Users_controller(){
    console.log("Show all users Form got shown");
    var usersViewTemplate1 = `
    <table id="table">
    `;


    $.ajax({
      type:'GET',
      url:'http://localhost:3004/users',
      success:function(users){
          console.log("No of users:"+users.length);
          users.forEach(user => {
              //console.log(user);
              usersViewTemplate1 = usersViewTemplate1+`
              <tr>
              <td>${user.id}</td>
              <td>${user.name}</td>
              <td>${user.age}</td>
              <td>${user.country}</td>
             
          </tr>
              
              `

          });
          usersViewTemplate1 = usersViewTemplate1+`</table>`;
          document.getElementById("page").innerHTML = usersViewTemplate1;
      },
      error:function(){
        console.error("Error on loading the users");
      }
      
    });

   
}
var updateUserTemplate = `
<form class="contact-form" action="" method="POST" onclick="return false;">
    <fieldset>
        <legend>User Update Form</legend>
        
          <div id="login-response1" class="response_error"></div>
        
        <div>
            <span id="login-response"></span>
        </div>
        <div>
            <label for="name">Userid</label> 
            <input type="text" name="username" id="userid1" placeholder="Userid">
        </div>
        
        <div>
            <label for="name">Username</label> 
            <input type="text" name="username" id="username1" placeholder="username">
        </div>

          <div>
            <label for="age">Age</label> 
            <input type="number" name="age" id="age1" placeholder="Age">
        </div>
        <div>
        <label for="country">Country</label> 
        <input type="text" name="country" id="country1" placeholder="Country">
    </div>

        <div>

            <input type="submit" value="Submit" onclick="submit_update_user();">
          
        </div>

    </fieldset>
</form>
`;
function update_User_controller(){
    console.log("Update user Form got shown");
    document.getElementById("page").innerHTML = updateUserTemplate;
}
var deleteUserTemplate = `
<form class="contact-form" action="" method="POST" onclick="return false;">
    <fieldset>
        <legend>User Update Form</legend>
        
          <div id="login-response" class="response_error"></div>
        
        <div>
            <span id="login-response"></span>
        </div>
        <div>
            <label for="name">User Id</label> 
            <input type="number" name="userId" id="userId" placeholder="Userid">
        </div>
        <div>

        <input type="submit" value="Submit" onclick="submit_delete_user();">
      
    </div>

</fieldset>
</form>
`;

function delete_User_controller(){
    console.log("Delete user Form got shown");
    document.getElementById("page").innerHTML = deleteUserTemplate;
}
function submit_delete_user(){
var userId = $('#userId').val();
console.log(userId+" going to be deleted.");
/*
$.ajax({
    type:'DELETE',
    url:'http://localhost:3004/users/'+userId,
    //Type: Function( Anything data, String textStatus, jqXHR jqXHR )
    success:function(data,textStatus,jqXHR){
        console.dir(jqXHR);
        console.dir(textStatus);
        console.dir(data);
        console.log("User with userId :"+userId+' got deleted successfully');
    },
    //Type: Function( jqXHR jqXHR, String textStatus, String errorThrown )
    error:function(jqXHR,textStatus,errorThrown){
          console.dir(jqXHR);
          console.dir(textStatus);
          console.dir(errorThrown);
        console.error("Error occured while deleting the user");
    }
});
*/
var jqxhr = $.ajax({
    type:'DELETE',
    url:'http://localhost:3004/users/'+userId
})
.fail(function(){
    console.log("fail function got called");
});
console.dir(jqxhr);
jqxhr.always(function(){
  console.log("always got called")
})

};
jqxhr.done(function(){
    console.log("done function got called");
});
jqxhr.fail(function(){
    console.log("fail function got called");
});
function submit_update_user(){
    var userId = $('#userid1').val();
    var userName = $('#username1').val();
    var age = $('#age1').val();
    var country = $('#country1').val();
    $.ajax({
        type:'PUT',
        url:'http://localhost:3004/users/'+userId,
        data:{
            "name": userName,
            "age": age,
            "country": country
        },
        success:function(res){
            console.log("Response for Update:");
            console.table(res);

        },
        error:function(){
            console.log("Error occured while updataing the record");
        }
    })
}

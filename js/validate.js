function validateForm()
{
	var fname = document.forms["myForm"]["firstname"].value;
  if (fname == "")
   {
    alert("First Name cannot be empty");
    return false;
  }
  if (!( /^[A-Za-z]+([\ A-Za-z]+)*/.test(fname)))
  {

    alert("You have entered an invalid name!");
    return false;
  }

  var lname = document.forms["myForm"]["lastname"].value;
  if (lname == "")
   {
    alert("Last Name cannot be empty");
    return false;
  }
  if (!( /^[A-Za-z]+([\ A-Za-z]+)*/.test(lname)))
  {
   
    alert("You have entered an invalid last name!");
    return false;
  }

  var email = document.forms["myForm"]["email"].value;
  if (email == "")
   {
    alert("Email cannot be empty");
    return false;
  }
  if (!( /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)))
  {
   
    alert("You have entered an invalid email!");
    return false;
  }

  var p1number = document.forms["myForm"]["phone1"].value;
  if (p1number == "")
   {
    alert("Phone number cannot be empty");
    return false;
  }
  if (!( /^[0-9]*$/.test(p1number)))
  {
    
    alert("You have entered an invalid number!");
    return false;
  }

  var p2number = document.forms["myForm"]["phone2"].value;
  if (!( /^[0-9]*$/.test(p2number)))
  {
    
    alert("You have entered an invalid number!");
    return false;
  }

  var password = document.forms["myForm"]["pwd"].value;
  if (password == "")
   {
    alert("Password cannot be empty");
    return false;
  }
  if (!( (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(password)))
  {
    
    alert("You have entered an invalid Password!");
    return false;
  }

  var password2 = document.forms["myForm"]["pwd2"].value;
  if (password2 == "")
   {
    alert("Confirm Password cannot be empty");
    return false;
  }
  if (!( (/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/).test(password2)))
  {
    
    alert("You have entered an invalid Password!");
    return false;
  }

  if (!(password==password2)) 
  {
    alert("The passwords do not match");
    return false;
  }

  var dob = document.forms["myForm"]["dob"].value;
  if(dob == "")
  {
    alert("Kindly fill in your Date of Birth");
    return false;
  }

   var gender = document.forms["myForm"]["gender"].value;
  if(gender == "")
  {
    alert("Select your gender");
    return false;
  }

  var address = document.forms["myForm"]["Address1"].value;
  if (address == "")
   {
    alert("Address cannot be empty");
    return false;
  }
  if (!( /^[a-zA-Z0-9\s,.'-]{3,}$/.test(address)))
  {
    alert("You have entered an invalid Address!");
    return false;
  }

  var city = document.forms["myForm"]["city"].value;
  if (city == "")
   {
    alert("City name cannot be empty");
    return false;
  }
  if (!( /^[A-Za-z]+$/.test(city)))
  {
    alert("Entry is invalid!");
    return false;
  }

  var state = document.forms["myForm"]["state"].value;
  if (state == "")
   {
    alert("State name cannot be empty");
    return false;
  }
  if (!( /^[A-Za-z]+$/.test(state)))
  {
    alert("Entry is invalid!");
    return false;
  }

  var country = document.forms["myForm"]["country"].value;
  if (country == "")
   {
    alert("Country name cannot be empty");
    return false;
  }
  if (!( /^[A-Za-z]+$/.test(country)))
  {
    alert("Entry is invalid!");
    return false;
  }

  var pincode = document.forms["myForm"]["pincode"].value;
  if (pincode == "")
   {
    alert("Pincode cannot be empty");
    return false;
  }
  if (!( /^[0-9]*$/.test(pincode)))
  {
    alert("Entry is invalid!");
    return false;
  }


   var address2 = document.forms["myForm"]["Address2"].value;
  if (address2 == "")
   {
    alert("Address cannot be empty");
    return false;
  }
  if (!( /^[a-zA-Z0-9\s,.'-]{3,}$/.test(address2)))
  {
    alert("You have entered an invalid Address!");
    return false;
  }

  var city2 = document.forms["myForm"]["city2"].value;
  if (city2 == "")
   {
    alert("City name cannot be empty");
    return false;
  }
  if (!( /^[A-Za-z]+$/.test(city)))
  {
    alert("Entry is invalid!");
    return false;
  }

  var state2 = document.forms["myForm"]["state2"].value;
  if (state2 == "")
   {
    alert("State name cannot be empty");
    return false;
  }
  if (!( /^[A-Za-z]+$/.test(state2)))
  {
    alert("Entry is invalid!");
    return false;
  }

  var country2 = document.forms["myForm"]["country2"].value;
  if (country2 == "")
   {
    alert("Country name cannot be empty");
    return false;
  }
  if (!( /^[A-Za-z]+$/.test(country2)))
  {
    alert("Entry is invalid!");
    return false;
  }

  var pincode2 = document.forms["myForm"]["pincode2"].value;
  if (pincode2 == "")
   {
    alert("Pincode cannot be empty");
    return false;
  }
  if (!( /^[0-9]*$/.test(pincode2)))
  {
    alert("Entry is invalid!");
    return false;
  }

  var canswer = document.forms["myForm"]["captchans"].value;
  if (canswer == "") 
  {
    alert("Please type in the Answer");
  }

  var captchaQ = generateCaptcha(1);
  if(captchaQ == "false")

  {
    alert("incorrect answer for the captcha");
    var a = generateCaptcha(0);
   document.getElementById("captchans").innerHTML ="";
   return false;
}
}

(function()
{
   generateCaptcha(0);
})();

function randomNumber(min ,max)
{
  let random_number = Math.random() * (max-min) + min;
    return Math.floor(random_number);
}
var ans;
function generateCaptcha(check)
{
  var returnR = true;
  if(check == 0){
   let op = ['+','-','*','/'];
   var x = randomNumber(50,100);
   var y = randomNumber(0,50);
   var z = x.toString();
   z = z + op[randomNumber(0,4)];
   z = z + y.toString();
   ans = eval (z);
   document.getElementById('captcha').innerText = z;
  }
  else{
     if(document.getElementById("captchans").value != ans)
    {
      returnR = "false";
    }
  }
  
   return returnR;
}



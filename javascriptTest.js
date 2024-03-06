// //////////////////////////////////////////// Username

function usernameValidation(event) {
  var usernameInput = document.getElementById("username");
  var usernameErrorMessage = document.getElementById("usernameErrorMessage");
  var username = usernameInput.value.trim();
  var usernameRegex = /^[a-zA-Z][a-zA-Z0-9]{3,19}$/; 

  var validUsernames = [
    {"username": "Ram"},
    {"username": "Pushpam"},
    {"username": "Priya"},
    {"username": "John"},
    {"username": "James"},
    {"username": "Neha"},
    {"username": "Jane"},
  ];

  if (username === "") {
    usernameErrorMessage.textContent = "*Required";
    return false;
  }

  var hasMatch = validUsernames.some(function(validUser) {
    return validUser.username === username;
  });

  if (hasMatch) {
    usernameErrorMessage.textContent = "Username already exists!";
    return false;
  }

  if(username.length < 4 || username.length > 20){
    usernameErrorMessage.textContent = "Username should be between 4 and 20 characters";
    return false;
  }

  if (!usernameRegex.test(username)) {
    usernameErrorMessage.textContent = "Invalid username format";
    return false;
  } else {
    usernameErrorMessage.textContent = "";
    return true;
  }
}

// ////////////////////////////////////////// Email

function emailValidation() {
  var emailInput = document.getElementById("email");
  var emailErrorMessage = document.getElementById("emailErrorMessage");
  var inEmail = emailInput.value.trim().toLowerCase();

  if (inEmail.length > 64) {
    inEmail = inEmail.slice(0, 64);
    document.getElementById('email').value = inEmail;
  }

 var emailRegex = /^(?!\s)\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;

  if (inEmail === "") {
    emailErrorMessage.textContent = "*Required";
    return false;
  }
  
  if (!emailRegex.test(inEmail)) {
    emailErrorMessage.textContent = "Invalid email format";
    return false;
  }

  emailErrorMessage.textContent = "";
  return true;
}


// //////////////////////////////////////////////////// Firstname

function firstnameValidation(){
  var firstnameInput = document.getElementById("firstname");
  var firstnameErrorMessage = document.getElementById("firstnameErrorMessage");
  var firstname = firstnameInput.value.trim();
  var firstnameRegex = /^[A-Z][a-zA-Z]*$/; 

  if(firstname === ""){
    firstnameErrorMessage.textContent = "*Required";
    return false;
  }
  if(firstname.length < 4 || firstname.length > 20){
    firstnameErrorMessage.textContent = "should be more than three character";
    return false;
  }
  if(!firstnameRegex.test(firstname)){
     firstnameErrorMessage.textContent = "Invalid name format";
     return false;
  }

  firstnameErrorMessage.textContent = "";
  return true;
}

// /////////////////////////////////////////////////// Lastname

function lastnameValidation(){
  var lastnameInput = document.getElementById("lastname");
  var lastnameErrorMessage = document.getElementById("lastnameErrorMessage");
  var lastname = lastnameInput.value.trim();
  var lastnameRegex = /^[A-Z][a-zA-Z]*$/;

  if(lastname === ""){
    lastnameErrorMessage.textContent = "*Required";
    return false;
  }
  if(lastname.length < 4 || lastname.length > 20){
    lastnameErrorMessage.textContent = "should be more than three character";
    return false;
  }
  if(!lastnameRegex.test(lastname)){
     lastnameErrorMessage.textContent = "Invalid name format";
     return false;
  }
  lastnameErrorMessage.textContent = "";
  return true;
}

/**Password Strength Check**/

function passwordValidation() {
  var passwordInput = document.getElementById("password");
  var confirmPasswordInput = document.getElementById("confirmPassword");
  var passwordErrorMessage = document.getElementById("passwordErrorMessage");
  var password = passwordInput.value;

  if (password === "") {
    passwordErrorMessage.textContent = " Password cannot be empty";
    return false;
  }

  if(password.length<=8){
    passwordErrorMessage.textContent = " Password must be more than 8 characters";
    return false;
  }

  if (password.includes(" ")) {
    passwordErrorMessage.textContent = " Password should not contain spaces ";
    return false;
  }

  passwordErrorMessage.textContent = "";

  if (confirmPasswordInput.value !== "" && password !== confirmPasswordInput.value) {
    passwordErrorMessage.textContent = "Passwords do not match";
    return false;
  }

  return true;
}

function updatePasswordStrength() {
  var passwordInput = document.getElementById('password');
  var strength = checkPasswordStrength(passwordInput.value);
  document.getElementById('password-strength').innerText = 'Strength: ' + strength;
}

function checkPasswordStrength(password) {
  var strength = 0;

  if (password.length >= 8) {
    strength += 1;
  }

  if (password.match(/[a-z]/)) {
    strength += 1;
  }

  if (password.match(/[A-Z]/)) {
    strength += 1;
  }

  if (password.match(/[0-9]/)) {
    strength += 1;
  }

  if (password.match(/[\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/)) {
    strength += 1;
  }

  switch (strength) {
    case 0:
    case 1:
    case 2:
      return 'Weak';
    case 3:
    case 4:
      return 'Moderate';
    case 5:
      return 'Strong';
    default:
      return 'Unknown';
  }
}
/**Age Validation**/

function birthDayValidation(){
  var dobInput = document.getElementById('inDob');
  var dob = new Date(dobInput.value);
  var age = Math.floor((new Date() - new Date(dob).getTime()) / 3.15576e+10);
  console.log(dobInput);
  if(dobInput === ""){
    dobErrorMessage = document.getElementById('dobErrorMessage');
    dobErrorMessage.textContent = "*Required";
    return false;
  }

  else if(age < 18){
    dobErrorMessage = document.getElementById('dobErrorMessage');
    dobErrorMessage.textContent = "Age must be above 18!";
    return false;
  }

  else{
    dobErrorMessage = document.getElementById('dobErrorMessage');
    dobErrorMessage.textContent = "";
    return true;
  }
}


//************Phone Number***************//

function phoneValidation(){
  var phoneInput = document.getElementById("phone").value;
  // console.log(phoneInput);
  var phoneErrorMessage = document.getElementById("phoneErrorMessage");
  var codeinput = document.getElementById("phonecode").value;
  var phoneregex = /^(?:\+\d{1,3}[- ]?)?\(?\d{3}\)?[- ]?\d{3}[- ]?\d{4}$/;

 

  var countryCodeList = [
    { name :"BD", code: "880"},
    { name :"BE", code: "32"},
    { name :"BF", code: "226"},
    { name :"BG", code: "359"},
    { name :"BA", code: "387"},
    { name :"BB", code: "+1-246"},
    { name :"WF", code: "681"},
    { name :"BL", code: "590"},
    { name :"BM", code: "+1-441"},
    { name :"BN", code: "673"},
    { name :"BO", code: "591"},
    { name :"BH", code: "973"},
    { name :"BI", code: "257"},
    { name :"BJ", code: "229"},
    { name :"BT", code: "975"},
    { name :"JM", code: "+1-876"},
    { name :"BV", code: ""},
    { name :"BW", code: "267"},
    { name :"WS", code: "685"},
    { name :"BQ", code: "599"},
    { name :"BR", code: "55"},
    { name :"BS", code: "+1-242"},
    { name :"JE", code: "+44-1534"},
    { name :"BY", code: "375"},
    { name :"BZ", code: "501"},
    { name :"RU", code: "7"},
    { name :"RW", code: "250"},
    { name :"RS", code: "381"},
    { name :"TL", code: "670"},
    { name :"RE", code: "262"},
    { name :"TM", code: "993"},
    { name :"TJ", code: "992"},
    { name :"RO", code: "40"},
    { name :"TK", code: "690"},
    { name :"GW", code: "245"},
    { name :"GU", code: "+1-671"},
    { name :"GT", code: "502"},
    { name :"GS", code: ""},
    { name :"GR", code: "30"},
    { name :"GQ", code: "240"},
    { name :"GP", code: "590"},
    { name :"JP", code: "81"},
    { name :"GY", code: "592"},
    { name :"GG", code: "+44-1481"},
    { name :"GF", code: "594"},
    { name :"GE", code: "995"},
    { name :"GD", code: "+1-473"},
    { name :"GB", code: "44"},
    { name :"GA", code: "241"},
    { name :"SV", code: "503"},
    { name :"GN", code: "224"},
    { name :"GM", code: "220"},
    { name :"GL", code: "299"},
    { name :"GI", code: "350"},
    { name :"GH", code: "233"},
    { name :"OM", code: "968"},
    { name :"TN", code: "216"},
    { name :"JO", code: "962"},
    { name :"HR", code: "385"},
    { name :"HT", code: "509"},
    { name :"HU", code: "36"},
    { name :"HK", code: "852"},
    { name :"HN", code: "504"},
    { name :"HM", code: " "},
    { name :"VE", code: "58"},
    { name :"PR", code: "+1-787 and 1-939"},
    { name :"PS", code: "970"},
    { name :"PW", code: "680"},
    { name :"PT", code: "351"},
    { name :"SJ", code: "47"},
    { name :"PY", code: "595"},
    { name :"IQ", code: "964"},
    { name :"PA", code: "507"},
    { name :"PF", code: "689"},
    { name :"PG", code: "675"},
    { name :"PE", code: "51"},
    { name :"PK", code: "92"},
    { name :"PH", code: "63"},
    { name :"PN", code: "870"},
    { name :"PL", code: "48"},
    { name :"PM", code: "508"},
    { name :"ZM", code: "260"},
    { name :"EH", code: "212"},
    { name :"EE", code: "372"},
    { name :"EG", code: "20"},
    { name :"ZA", code: "27"},
    { name :"EC", code: "593"},
    { name :"IT", code: "39"},
    { name :"VN", code: "84"},
    { name :"SB", code: "677"},
    { name :"ET", code: "251"},
    { name :"SO", code: "252"},
    { name :"ZW", code: "263"},
    { name :"SA", code: "966"},
    { name :"ES", code: "34"},
    { name :"ER", code: "291"},
    { name :"ME", code: "382"},
    { name :"MD", code: "373"},
    { name :"MG", code: "261"},
    { name :"MF", code: "590"},
    { name :"MA", code: "212"},
    { name :"MC", code: "377"},
    { name :"UZ", code: "998"},
    { name :"MM", code: "95"},
    { name :"ML", code: "223"},
    { name :"MO", code: "853"},
    { name :"MN", code: "976"},
    { name :"MH", code: "692"},
    { name :"MK", code: "389"},
    { name :"MU", code: "230"},
    { name :"MT", code: "356"},
    { name :"MW", code: "265"},
    { name :"MV", code: "960"},
    { name :"MQ", code: "596"},
    { name :"MP", code: "+1-670"},
    { name :"MS", code: "+1-664"},
    { name :"MR", code: "222"},
    { name :"IM", code: "+44-1624"},
    { name :"UG", code: "256"},
    { name :"TZ", code: "255"},
    { name :"MY", code: "60"},
    { name :"MX", code: "52"},
    { name :"IL", code: "972"},
    { name :"FR", code: "33"},
    { name :"IO", code: "246"},
    { name :"SH", code: "290"},
    { name :"FI", code: "358"},
    { name :"FJ", code: "679"},
    { name :"FK", code: "500"},
    { name :"FM", code: "691"},
    { name :"FO", code: "298"},
    { name :"NI", code: "505"},
    { name :"NL", code: "31"},
    { name :"NO", code: "47"},
    { name :"NA", code: "264"},
    { name :"VU", code: "678"},
    { name :"NC", code: "687"},
    { name :"NE", code: "227"},
    { name :"NF", code: "672"},
    { name :"NG", code: "234"},
    { name :"NZ", code: "64"},
    { name :"NP", code: "977"},
    { name :"NR", code: "674"},
    { name :"NU", code: "683"},
    { name :"CK", code: "682"},
    { name :"XK", code: ""},
    { name :"CI", code: "225"},
    { name :"CH", code: "41"},
    { name :"CO", code: "57"},
    { name :"CN", code: "86"},
    { name :"CM", code: "237"},
    { name :"CL", code: "56"},
    { name :"CC", code: "61"},
    { name :"CA", code: "1"},
    { name :"CG", code: "242"},
    { name :"CF", code: "236"},
    { name :"CD", code: "243"},
    { name :"CZ", code: "420"},
    { name :"CY", code: "357"},
    { name :"CX", code: "61"},
    { name :"CR", code: "506"},
    { name :"CW", code: "599"},
    { name :"CV", code: "238"},
    { name :"CU", code: "53"},
    { name :"SZ", code: "268"},
    { name :"SY", code: "963"},
    { name :"SX", code: "599"},
    { name :"KG", code: "996"},
    { name :"KE", code: "254"},
    { name :"SS", code: "211"},
    { name :"SR", code: "597"},
    { name :"KI", code: "686"},
    { name :"KH", code: "855"},
    { name :"KN", code: "+1-869"},
    { name :"KM", code: "269"},
    { name :"ST", code: "239"},
    { name :"SK", code: "421"},
    { name :"KR", code: "82"},
    { name :"SI", code: "386"},
    { name :"KP", code: "850"},
    { name :"KW", code: "965"},
    { name :"SN", code: "221"},
    { name :"SM", code: "378"},
    { name :"SL", code: "232"},
    { name :"SC", code: "248"},
    { name :"KZ", code: "7"},
    { name :"KY", code: "+1-345"},
    { name :"SG", code: "65"},
    { name :"SE", code: "46"},
    { name :"SD", code: "249"},
    { name :"DO", code: "+1-809 and 1-829"},
    { name :"DM", code: "+1-767"},
    { name :"DJ", code: "253"},
    { name :"DK", code: "45"},
    { name :"VG", code: "+1-284"},
    { name :"DE", code: "49"},
    { name :"YE", code: "967"},
    { name :"DZ", code: "213"},
    { name :"US", code: "1"},
    { name :"UY", code: "598"},
    { name :"YT", code: "262"},
    { name :"UM", code: "1"},
    { name :"LB", code: "961"},
    { name :"LC", code: "+1-758"},
    { name :"LA", code: "856"},
    { name :"TV", code: "688"},
    { name :"TW", code: "886"},
    { name :"TT", code: "+1-868"},
    { name :"TR", code: "90"},
    { name :"LK", code: "94"},
    { name :"LI", code: "423"},
    { name :"LV", code: "371"},
    { name :"TO", code: "676"},
    { name :"LT", code: "370"},
    { name :"LU", code: "352"},
    { name :"LR", code: "231"},
    { name :"LS", code: "266"},
    { name :"TH", code: "66"},
    { name :"TF", code: ""},
    { name :"TG", code: "228"},
    { name :"TD", code: "235"},
    { name :"TC", code: "+1-649"},
    { name :"LY", code: "218"},
    { name :"VA", code: "379"},
    { name :"VC", code: "+1-784"},
    { name :"AE", code: "971"},
    { name :"AD", code: "376"},
    { name :"AG", code: "+1-268"},
    { name :"AF", code: "93"},
    { name :"AI", code: "+1-264"},
    { name :"VI", code: "+1-340"},
    { name :"IS", code: "354"},
    { name :"IR", code: "98"},
    { name :"AM", code: "374"},
    { name :"AL", code: "355"},
    { name :"AO", code: "244"},
    { name :"AQ", code: ""},
    { name :"AS", code: "+1-684"},
    { name :"AR", code: "54"},
    { name :"AU", code: "61"},
    { name :"AT", code: "43"},
    { name :"AW", code: "297"},
    { name :"IN", code: "91"},
    { name :"AX", code: "+358-18"},
    { name :"AZ", code: "994"},
    { name :"IE", code: "353"},
    { name :"ID", code: "62"},
    { name :"UA", code: "380"},
    { name :"QA", code: "974"},
    { name :"MZ", code: "258"}
  ];

  var hasMatch = countryCodeList.some(function(validCode) {
    return validCode.code === codeinput;
  });
  if (!hasMatch) {
    phoneErrorMessage.textContent = "Invalid country code";
    return false;
  }
  // var phoneRegex1 = /^[6789]\d{9}$|^[6789]\d{2}[- ]?\d{3}[- ]?\d{4}$|^[6789]\d{2} ?\d{3} ?\d{4}$/;
  if (codeinput == '91') {
    var firstDigit = parseInt(phoneInput[0]); // Convert the first digit to a number
    
    if (!(firstDigit === 6 || firstDigit === 7 || firstDigit === 8 || firstDigit === 9)) {
        console.log(firstDigit);
        phoneErrorMessage.textContent = "For Code: +91, phone number must start with '6', '7', '8', or '9'";
        return false;
    }
}
  if(phoneInput===""){
    phoneErrorMessage.textContent = "*Required";
    return false
  }
  // console.log(phoneInput);
  else if(!phoneregex.test(phoneInput)){
    // console.log(phoneregex.test(phoneInput));
    phoneErrorMessage.textContent = "Invalid phone number format";
    return false;
  }
    phoneErrorMessage.textContent = "";
    return true;
  

}
/**Show pass */

function togglePasswordVisibility() {
  var passwordInput = document.getElementById("password");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
  } else {
    passwordInput.type = "password";
  }
}


/*****************Final Submit ****************** */
function ValidChecks(event) {
  var checkboxInput = document.getElementById("checkbox-id");
  var captchaInput = document.getElementById("captcha-id");
  var response = grecaptcha.getResponse();
  var pass1 = document.getElementById("password").value
  var pass2 = document.getElementById("confirmPassword").value
  
  /** Check other fields validation and prevent saving */
  usernameErrorMessage = document.getElementById("usernameErrorMessage").textContent;
  emailErrorMessage = document.getElementById("emailErrorMessage").textContent;
  firstnameErrorMessage = document.getElementById("firstnameErrorMessage").textContent;
  lastnameErrorMessage = document.getElementById("lastnameErrorMessage").textContent;
  passwordErrorMessage = document.getElementById("passwordErrorMessage").textContent;
  dobErrorMessage = document.getElementById('dobErrorMessage').textContent;
  phoneErrorMessage = document.getElementById("phoneErrorMessage").textContent;


  if(usernameErrorMessage !== ""){
    alert("Username field is invalid!");
    event.preventDefault();
  }
  else if(emailErrorMessage !== ""){
    alert("Email field is invalid!");
    event.preventDefault();
  }
  else if(firstnameErrorMessage !== "" || lastnameErrorMessage !== ""){
    alert("Firstname or Lastname is invalid!");
    event.preventDefault();
  }
  else if(passwordErrorMessage !== ""){
    alert("Invalid password format!");
    event.preventDefault();
  }
  else if(dobErrorMessage !== ""){
    alert("DOB not acceptible");
    event.preventDefault();
  }
  else if(phoneErrorMessage !== ""){
    alert("Invalid Phone number");
    event.preventDefault();
  }
  else if (!checkboxInput.checked) {
    alert("Please accept the Terms and Conditions.");
    event.preventDefault(); 
    return false;
  }
  else if(response.length == 0) 
  { 
    //reCaptcha not verified
    alert("Please verify you are humann!"); 
    event.preventDefault();
    return false;
  }
  else if(pass1 !== pass2){
    alert("Passwords do not match!");
    event.preventDefault();
    return false;
  }
  else{
    alert("Form submitted successfully!")
    return true;
  }
}

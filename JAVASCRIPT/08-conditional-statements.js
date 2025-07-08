//conditional statement allows us to execute a block of code
//when the condition we specified is met

let adminName = "Yusuf";
//using if without else condition
if (adminName == "Yusuf") {
  alert("Welcome back admin");
}

let kolaHeight = 145.67;
let ibukunHeight = 198.54;

//using ifelse
if (kolaHeight > ibukunHeight) {
  alert("Kola is taller than ibukun");
} else {
  alert("ibukun is taller than kola");
}
//because ibukun is taller than kola so that condition is met.

let applicationStatus = "rejected";

switch (applicationStatus) {
  case "pending":
    alert("Application is still pending");
    break;
  case "under-review":
    alert("Your application is under review");
    break;
  case "rejected":
    alert("sorry your application has been rejected");
    break;
  case "approved":
    alert("Your application has been approved");
    break;
  default:
    alert("please provide the application status");
}

//myexample
let exhibitionParty = "ending";

switch (exhibitionParty) {
  case "starting":
    alert("Exhibition party starting at 6pm");
    break;
  case "planned":
    alert("Exhibition party planned in august");
    break;
  case "ending":
    alert("Exhibition party ending at 2am");
    break;
  case "denied":
    alert("Exhibition party access denied");
    break;
  default:
    alert("please provide exhibition party information");
}

// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var button = {
  firstName: "Elizabeth",
  lastName: "Faulkner",
  jobTitle: "Sr. Tax Business Analyst",
  homeOffice: "Domain",
  aboutMe: "I've wanted to transition into coding for so long, but never really knew how to make it happen.  Until now.  This program is amazing!"
};

// using jQuery and the object above, display the information as the appropriate button is clicked
$(document).ready(function() {

  $("#firstName").click(function(){
   $("#textboxDiv").text(button.firstName);
 });
 $("#lastName").click(function(){
   $("#textboxDiv").text(button.lastName);
 });
 $("#jobTitle").click(function(){
   $("#textboxDiv").text(button.jobTitle);
 });
 $("#homeOffice").click(function(){
   $("#textboxDiv").text(button.homeOffice);
 });
 $("#aboutMe").click(function(){
  $("#textboxDiv").text(button.aboutMe);
 });


});

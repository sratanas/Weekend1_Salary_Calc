console.log('js sourced');

$(document).ready(readyNow)
    function readyNow(){
    console.log('JQ');

//event listener to run the big function that does most everything on submit click
$('#submitButton').on('click',createEmployeeArrays);
    }
var monthlyCostArray = []

function createEmployeeArrays (){
    console.log('inside createEmployeeArrays');
    var employeeArray = []; //empty array for employee info
    
    //Grabs information from form and stores into variables
    var firstNameToPrint = document.getElementById("firstName").value;
    var lastNameToPrint = document.getElementById("lastName").value;
    var formIdNumberToPrint = document.getElementById("formIdNumber").value;
    var formTitleToPrint = document.getElementById("formTitle").value;
    var formAnnualSalaryToPrint = document.getElementById("formAnnualSalary").value;
    var formMonthlyPay = formAnnualSalaryToPrint/12;  //gets the montly value of each employee's salary 
    
    //This pushes the information into an individual array for each employee
    employeeArray.push(firstNameToPrint, lastNameToPrint, formIdNumberToPrint, formTitleToPrint, formAnnualSalaryToPrint, formMonthlyPay); //this is pushing the form info into an array. IT WORKS.
    
    console.log(employeeArray) //this is so I can see the employee array in the console
    
    //This is a nifty table to display the information
    $('#employeeInfoTable').append('<tr>' +
    '<td>' + firstNameToPrint + '</td>' +
    '<td>' + lastNameToPrint + '</td>' +
    '<td>' + formIdNumberToPrint + '</td>' +
    '<td>' + formTitleToPrint + '</td>' +
    '<td>' + formAnnualSalaryToPrint + '</td>' +
    '<td><button class = "deleteButton">Delete</button></td>' +
     '</tr>');

     //this gets rid of the information from the table.
     $('#employeeInfoTable').on('click','.deleteButton', function (){
        console.log('deleted!!!!!');
        $(this).parent().parent().remove();
     });

//This pushes the monthly salary into an array
monthlyCostArray.push(formMonthlyPay);

//This is to see the montly salary array in the console
console.log(monthlyCostArray);

//Runs the functions below to add all the items in the montlyCostArray
addToMonthlyCostsBox();

//Resets the form
document.getElementById("infoForm").reset();

}

//had some help from W3 schools with .reduce() method.
//Also 
function sumOfEachMonthlyPay(total, addEmployeePay){ 
    return total + parseInt(addEmployeePay);
}
//records the growing montly cost in the montlyCostsBox
function addToMonthlyCostsBox(item) {
    document.getElementById("monthlyBudgetNumber").innerHTML = monthlyCostArray.reduce(sumOfEachMonthlyPay, 0);
}

//tried many times to create an array of objects from the form information but couldn't.
//Instead I figured out how to record the info using all arrays, object constructors
//are probably something for me to work on.

//Also need to increase my understanding of annonymous functions.
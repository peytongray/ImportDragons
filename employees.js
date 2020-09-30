var employeePromise = d3.csv("csv/employee.csv")

var successFcn = function(employees)
{
    console.log("employees",employees);
    drawTable(employees)
}

var failFcn = function(error)
{
    console.error("error",error)
}

console.log(employeePromise.then)
employeePromise.then (successFcn,failFcn)

var getFirstName = function(name)
{
    return name.FirstName
}
var getLastName = function(name)
{
    return name.LastName
}
var getTitle = function(title)
{
    return title.Title
}
var getEmail = function(email)
{
    return email.Email
}


var drawTable = function(employee)
{   var rows = d3.select("table thead")
    .selectAll("tr")
    .data(employee)
    .enter()
    .append ("tr")

 rows.append("td")
    .text(getFirstName);
    
     rows.append("td")
    .text(getLastName);
    
     rows.append("td")
    .text(getTitle);
    
     rows.append("td")
    .text(getEmail);

}


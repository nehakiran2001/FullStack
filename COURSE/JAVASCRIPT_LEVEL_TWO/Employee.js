//length
var employee={
             firstname:"Adya",
             lastname:"Kumar",
             job:"Software Engineer",
             age:"25",
             employeeAlert:function(){
               alert("firstname:"+this.firstname+"lastname:"+this.lastname+"job:"+this.job+"age:"+this.age);
               for (var i = 0; i <=employee.firstname.length; i++) {
                 console.log(employee.firstname[i])
               }

      }
}
employee.employeeAlert()
console.log(name.length);

//key value pair
var employee={
             name:"Adya",
             job:"Software Engineer",
             age:"25",

}

alert(employee['name'])
alert(employee['job'])
alert(employee['age'])

//employee lastname
var employee={
             firstname:"Adya",
             lastname:"Kumar",
             job:"Software Engineer",
             age:"25",
           }
    console.log(employee.lastname);

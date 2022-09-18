var students = [80, 77, 88, 80, 80];

var Avgmarks = 0;

for (var i=1; i < students.length; i++) {
        Avgmarks += students[i];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg <= 49){
          console.log("Grade : F");      
          } 
        else if (avg <= 59) {
                console.log("Grade : E"); 
                  } 
        else if (avg <= 69) 
             {
                console.log("Grade : D"); 
        } else if (avg <= 79) {
                console.log("Grade : C"); 
        } else if (avg <= 89) {
                console.log("Grade : B"); 
        }
          else if(avg<= 100){
                console.log("Grade : A");
          }

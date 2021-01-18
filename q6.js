const students = ['David', 'Vinoth', 'Divya', 'Ishitha', 'Thomas'];
const grade = [80, 77, 88, 95, 86]

var Avgmarks = 0;

for (let i=0; i < students.length; i++) {
        Avgmarks = Avgmarks + grade[i];
}
let avg = (Avgmarks/students.length);
console.log("Average grade: " + avg);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg <= 100) {
                console.log("Grade : A"); 
}
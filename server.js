const readline=require("readline")
const readline1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,    
})

var arrBooks = ["Eat that Frog", "Limitless", "The Social Dilemma", "The art of Reading Minds"];

function call()
{ 
    readline1.question("Menu: 1) Show all books 2) Add a new book 3) Quit", function (choice) {  
        if(choice==1)
        {
            console.log(arrBooks);
            console.log("Book added successfully");
            call();
        }
        else if(choice==2)
        {
            readline1.question("Enter the Book name", function (name) {
                arrBooks.push(name);
                call();
            })
        }
   
        else if(choice==3)
        {   
          readline1.question("Are you sure you want to quit ? press Y to quit or press 1,2 or 3 to see the Menu", function (enter) {
            switch (enter)
            {
                case "Y": readline1.close();
                    break;
                case 1:
                case 2:
                case 3: call();
                    break;
                default:
                    console.log("you have selected an invalid entry ");
                    call();
                   
            }
          })
        }
        else
        { console.log("you have selected an invalid entry ");
            call();
        }
    })
  
}

call();

readline1.on("close", function () { 
console.log("Bye Bye!");
})
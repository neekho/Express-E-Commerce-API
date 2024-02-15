const mock = [
    
    {
    "_id" : "635a6f307e7317dfff6d409e",
    "cart" : [ 
        {
            "id" : "635a6f3288e7317dfff6d409e",
            "qty" : 100,
            "price" : 100,
            "name" : "testing"
        }, 
        {
            "id" : "635b6f3588e7317dfff6d409e",
            "qty" : 100,
            "price" : 100,
            "name" : "testing 1"
        }
    ]
    }

    
]


mock[0].cart.filter(x => {
    if (x.id === "635a6f3288e7317dfff6d409e") {
        console.log("KITA");
        console.log(x.name)
    } else 
        console.log("NAH");
});


// mock[0].cart.forEach(element => {
//         if (element.id === 28) {
//             console.log(element)
            
//         } 

//         else
//             console.log('element not matching with the id of 28')
// });




// for (let i = 0; i < mock[0].cart.length; i++) {
    

//     if (mock[0].cart[i].id === "635a6f3288e7317dfff6d409e") {
//         console.log('found');
//         console.log(mock[0].cart[i].id);
//         console.log(mock[0].cart[i].name);
//         break;
//     }

//     else
//         console.log('not found');


//   } 


// let i = 0;

// console.log(i)

// i++;

// console.log(i)


// var ID = function () {
//     // Math.random should be unique because of its seeding algorithm.
//     // Convert it to base 36 (numbers + letters), and grab the first 9 characters
//     // after the decimal.
//     return '_' + Math.random().toString(36).substr(2, 9);
//   };


//   var uniq = 'id' + (new Date()).getTime();

//   console.log(uniq)


//   const uid = Date.now().toString(36) + Math.floor(Math.pow(10, 12) + Math.random() * 9*Math.pow(10, 12)).toString(36);

//   console.log(uid)
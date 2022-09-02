
/*********Map Methodu*************/

/* Map methodu mevcut diziyi değiştirmeden 
 dizi üzerinde işlemler yapmamıza olanak sağlıyor diyebiliriz*/

const numbers=[10,20,30,60,85]

const numbers_1=numbers.map((number)=>{

   return number*2

})
console.log(numbers_1)

/*------------------------*/

const karekökAlma=numbers.map((number)=>{
    return Math.sqrt(number)
})


console.log(karekökAlma)


/*-------------------------*/

const users=[

    {
        name:"Seda",
        surName:"Polat",
        age:25
    },
    {
        name:"Fadime",
        surName:"Demir",
        age:24
    },
    {
        name:"Serap",
        surName:"Demirtaş",
        age:26
    }
    
]

const date=new Date()

const result=users.map((user)=>{
    return {
        fullName:`${user.name} ${user.surName}`,
        yearOfBirth:date.getFullYear()-user.age
    }


})

console.log(result);

/*----------------------------------------*/

const App=[
    {
        id:1,
        name:"App 1",
        completed:false
    },
    {
        id:2,
        name:"App 2",
        completed:false
    },
    {
        id:3,
        name:"App 3",
        completed:false
    }
]


const durum= App.map((app)=>{
    if(app.id===2){
        app.completed =true
  
    }
    return app;
})

console.log(durum)
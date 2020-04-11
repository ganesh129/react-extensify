import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyARDkNmcWbWP7ooch4U4X4FtpDP5oDKtnU",
    authDomain: "expensify-26986.firebaseapp.com",
    databaseURL: "https://expensify-26986.firebaseio.com",
    projectId: "expensify-26986",
    storageBucket: "expensify-26986.appspot.com",
    messagingSenderId: "682794330486",
    appId: "1:682794330486:web:14fd3132d11665c65b3257",
    measurementId: "G-DC2VZEH9WF"
  };
firebase.initializeApp(firebaseConfig);
// firebase.database().ref('expenses').push({
//     description:'Rent',
//     note:'',
//     amount:108766,
//     createdAt:5725857255
// });
// firebase.database().ref('expenses').push({
//     description:'Electricity',
//     note:'',
//     amount:5800,
//     createdAt:57258
// });
// firebase.database().ref('expenses').push({
//     description:'phoneBill',
//     note:'',
//     amount:15465,
  //  createdAt:5725857
//});
firebase.database().ref('expenses').on('value',(snapshot)=>{
    const expenses=[];
    snapshot.forEach((childSnapshot)=>{
        expenses.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
        })
    });
    console.log(expenses);
})

// firebase.database().ref().set({
//     name:'ganesh',
//     age:20,
//     isSingle:true,
//     job:'software developer',
//     location:{
//         city:'kolkata',
//         country:'india'
//     }

// })
// //firebase.database().ref('age').set(21);
// firebase.database().ref('attributes').set({
//   height:160,
//   weight:60

// }).then(()=>
//  console.log("successfully saved the data"))
//   .catch((e)=>console.log('error:','failed'));

// //   firebase.database().ref('age').remove()
// //   .then(()=>{
// //       console.log("data removed");
// //   }).catch((e)=>{
// //       console.log("error:",'can not remove data');
// //   })
// firebase.database().ref().update({
//     age:22,
//     'location/city':'bangalore',
//     job:{
//         title:'senior software developer',
//         company:'tcs'
//     },
//     isSingle:null
// });
// //fetching the data from database
// // firebase.database().ref( )
// // .once('value')
// // .then((snapshot)=>{
// //     const data=snapshot.val();
// //     console.log(data);
// // }).catch((e)=>{
// //     console.log('err:',e);
// // });
// //fetching data using on

// const onValueChange=firebase.database().ref().on('value',(snapshot)=>{
//     console.log(snapshot.val().name + "is a " + snapshot.val().job.title + " at "+ snapshot.val().job.company);
// });


// setTimeout(()=>{
//     firebase.database().ref().off();
// },3000);


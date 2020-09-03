"use strict";

function dayTripGenerator(){

    let destinations = ['the park', 'the beach', 'the woods', 'home'];
    let tranportation = ['car', 'bike', 'bus', 'train', 'Uber'];
    let restaurant = ['The Cheesecake Factory', 'McDonalds', 'Burger King', 'Taco Bell', 'The Dinner', 'a Greasy Spoon', 'Chick-fil-a'];
    let entertainment = ['movie', 'concert', 'musical', 'campfire'];

    let curDest = randomdSelectInput(destinations);
    let curTrans = randomdSelectInput(tranportation);
    let curRest = randomdSelectInput(restaurant);
    let curEntert = randomdSelectInput(entertainment);
    let response = "no";

    displayTrip(curDest,curTrans,curRest,curEntert);

    do{
        response = prompt("Are you happy with your trip?\nyes or no"); 
        
        if (response === "yes"){
            alert("ENJOY!");
        }
        else {
            let switchResponse = switchResponsePrompt();
                switch(switchResponse){
                    case "1":
                        curDest = randomdSelectInput(destinations);
                        break;
                    case "2":
                        curTrans = randomdSelectInput(tranportation);
                        break;
                    case "3":
                        curRest = randomdSelectInput(restaurant);
                        break;
                    case "4":
                        curEntert = randomdSelectInput(entertainment);
                        break;
                    default:
                        alert("Whoops, try again!");
                        break;
                }

            displayTrip(curDest,curTrans,curRest,curEntert);
        }
    }
    while (response !== "yes"); 

}

function randomdSelectInput(destTranRestEnt){
    let rnd = Math.floor(Math.random() * (destTranRestEnt.length));
    return destTranRestEnt[rnd];
}

function displayTrip(curDest, curTrans, curRest, curEntert){
    alert("You are going to " + curDest + " via a " + curTrans + ".\nYou will eat at " + curRest + " and go to a " + curEntert);
}

function switchResponsePrompt(){
    let switchResponse = "";

    return switchResponse = prompt("What change would you like to make?\n\n1 - change Destination\n2 - change Transportation\n3 - change Restaurant\n4 - change Entertainment\n\n1, 2, 3, or 4");
}
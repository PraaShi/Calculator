const billinput = document.getElementById('billTotalInput')
const tipInput = document.getElementById('tipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const  perPersonTotalDiv = document.getElementById('perPersonTotal')
let numberOfPeople = Number(numberOfPeopleDiv.innerText)
const calculateBill =  () =>{
    let bill = Number(billinput.value)
    // console.log(bill)
    let tipPercentage = Number(tipInput.value)/100
    // console.log(tipPercentage)
    const tipAmount  = bill * tipPercentage
    // console.log({tipAmount : tipAmount})
    const total = tipAmount + bill
    // console.log({total})
    let perPersonTotal = total/ numberOfPeople
    // console.log({perPersonTotal})
    perPersonTotalDiv.innerText = `$${perPersonTotal.toFixed(2)}`
 }

const increasePeople =  () =>{
    numberOfPeople++
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
}

const decreasePeople =  () =>{
    if(numberOfPeople<=1){
        alert("hey you cant have les than one")
        return
    }
    numberOfPeople--
    numberOfPeopleDiv.innerText = numberOfPeople
    calculateBill()
 }

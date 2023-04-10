const {EventEmitter} =require('events')
class BankAcc extends EventEmitter{
    
    constructor(balance){
        super()
        this.bal=balance
    }
    withdraw(amt){
        this.bal-=amt
        this.emit('withdraw',this.bal)
    }
}
var bc = new BankAcc(1000)
bc.on('withdraw',(bal)=>{
    console.log("current balance is: " + bal);
})
bc.withdraw(500)
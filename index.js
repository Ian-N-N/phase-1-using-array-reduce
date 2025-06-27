const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
const totalBatteries = batteryBatches.reduce((total, batch) =>{
    return total + batch;//total-this is the accumulator starting at 0, while batch is the current item in the array
}, 0);//initial value is 0
console.log(totalBatteries); 




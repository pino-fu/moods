const hours = [ 6, 9, 7, 8, 6, 6, 8, 5, 9, 8, 7, 6, 7, 7, 8, 6, 9 ]
const grumpyHours = []
const happyHours = []

for(const zzz of hours) {
    if (zzz >= 7) {
        happyHours.push(zzz)
    }
    else { 
        grumpyHours.push(zzz)
    }
}
const good = happyHours.length;
const bad = grumpyHours.length;

console.log(`I was grumpy on ${bad} days. \n I was happy on ${good} days.`);
function saturdayFun(act="roller-skate"){
    return `This Saturday, I want to ${act}!`
}
function mondayWork(act="go to the office"){
    return `This Monday, I will ${act}.`
}
function wrapAdjective(wraps) {
    if (wraps==="*") {
        return (function (){
            return `You are ${wraps}a hard worker${wraps}!`
        })
    }
    else if (wraps==="||") {
        return (function (){
            return `You are ${wraps}a dedicated programmer${wraps}!`
        })

    }
}   



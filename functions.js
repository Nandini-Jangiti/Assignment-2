//(p,r,t)principal,rate,time

export function simpleInterest(p, r, t) {
    return (p * t * r) / 100;
}

export function compoundInterest(p, r, t) {
    return p * Math.pow(1 + r / 100, t) - p;
}

//module.exports = { simpleInterest, compoundInterest };

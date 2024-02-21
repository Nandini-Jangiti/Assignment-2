//const { simpleInterest, compoundInterest } = require('./functions');
import { simpleInterest, compoundInterest } from './functions.js';


const calculateInterests = async () => {
    const p = 2000;
    const r = 6;
    const t = 2;
    const simpleInt = Promise.resolve(simpleInterest(p, r, t));
    const compoundInt = Promise.resolve(compoundInterest(p, r, t));
    return Promise.all([simpleInt, compoundInt]);
};

(async () => {
    const [simpleInt, compoundInt] = await calculateInterests();
    console.log("Simple Interest:", simpleInt);
    console.log("Compound Interest:", compoundInt);
})().catch(error => {
    console.error("Error:", error);
});

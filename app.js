const {shopForBeans, soakTheBeans, cookTheBeans} = require('./library.js');

// Writing an async function makeBeans() that handles the 3 dependent promises:
async function makeBeans() {
  let type = await shopForBeans();
  let isSoft = await soakTheBeans(type);//expected value as the argument
  let dinner = await cookTheBeans(isSoft);//expected value as the argument
  console.log(dinner);
}
makeBeans();//Invoking the function beneath the function declaration.
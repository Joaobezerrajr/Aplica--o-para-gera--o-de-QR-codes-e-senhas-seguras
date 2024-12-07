import handler from "./handler.js";
import chalk from "chalk";


async function createPassword() {
    console.log(chalk.green("password"));
    const password = await handler();
    console.log(password);
}


export default createPassword;
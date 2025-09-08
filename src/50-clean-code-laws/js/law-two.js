/* BEFORE 

const greet = (user) => {
  if (user.isAdmin) {
    const name = user.firstName + " " + user.lastName;
    const message = "Hello, " + name + "! You have admin access.";
    console.log(message);
  } else {
    const name = user.firstName + " " + user.lastName;
    const message = "Hello, " + name + "! You have regular access.";
    console.log(message);
  }
}

*/

/* AFTER */

const fullName = (user) => user.firstName + " " + user.lastName;

const greet = (user) => {
  const name = fullName(user);
  const roleMsg = user.isAdmin ? "admin access" : "regular access";
  console.log(`Hello, ${name}! You have ${roleMsg}.`);
}

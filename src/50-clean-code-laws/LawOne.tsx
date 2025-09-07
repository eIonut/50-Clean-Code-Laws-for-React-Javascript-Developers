/* 1. Extract Repetition to Variables — If you use the same value repeatedly, put it in a variable. */

/* BEFORE */

// const LawOne = () => {
//   return (
//     <div>
//       <h1>Hello, Gabriel</h1>
//       <h3>We are glad you are finally here, Gabriel</h3>
//     </div>
//   );
// };

/* AFTER */

const LawOne = () => {
  const name = "Gabriel";
  return (
    <div>
      <h1>Hello, {name}</h1>
      <h3>We are glad you are finally here, {name}</h3>
    </div>
  );
};

export default LawOne;

import React from "react";
/*
function Greet() {
  return <h1>Hello Vishwas</h1>;
}

export default Greet;
*/

export const Dprops1 = (props) => {
  const { name, heroName, children } = props;
  console.log(name);
  return (
    <div>
      <h1>
        Hello {name} a.k.a {heroName}
      </h1>
      {children}
    </div>
  );
};

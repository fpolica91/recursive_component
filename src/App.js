import React, { useState } from "react";

function App() {
  const [nestedObjected, setNestedObject] = useState({
    taxi:
      "a car licensed to transport passengers in return for payment of a fare",
    food: {
      sushi:
        "a traditional Japanese dish of prepared rice accompanied by seafood and vegetables",
      apple: {
        Honeycrisp:
          "an apple cultivar developed at the MAES Horticultural Research Center",
        Fuji:
          "an apple cultivar developed by growers at Tohoku Research Station",
        Frenchie: {
          origin: {
            country: "France",
            city: "Marseilles"
          }
        }
      }
    }
  });

  return (
    <div style={{ margin: "auto", width: "70%", paddingTop: 40 }}>
      <DisplayNested nestedObjected={nestedObjected} />
    </div>
  );
}

const DisplayNested = ({ nestedObjected, padding = 0 }) => {
  return Object.keys(nestedObjected).map((key) => {
    if (typeof nestedObjected[key] === "object") {
      return (
        <div style={{ paddingLeft: padding }}>
          <p>
            {key + " : "}
            <DisplayNested
              padding={padding + 10}
              nestedObjected={nestedObjected[key]}
            />
          </p>
        </div>
      );
    } else {
      return (
        <div style={{ paddingLeft: padding }}>
          <p>
            {key + " : "}
            {nestedObjected[key]}
          </p>
        </div>
      );
    }
  });
};

export default App;

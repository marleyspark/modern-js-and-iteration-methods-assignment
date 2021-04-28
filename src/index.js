/*
    In this exercise, use what you have learned to refactor all functions yet retain the objectives.
*/
const vehicles = [
  {
    type: "car",
    noOfWheels: 4,
  },
  {
    type: "bike",
    noOfWheels: 2,
  },
  {
    type: "truck",
    noOfWheels: 6,
  },
];

// Refactor this function
function addVehicle(type, noOfWheels) {
  const newVehicle = {
    type: type,
    noOfWheels: noOfWheels,
  };

  vehicles.push(newVehicle);
  return newVehicle;
}
console.log("add vehicle", addVehicle("motorized tricycle", 3));

// Refactor this function
function filterByWheels(noOfWheels) {
  let filteredVehicles = [];
  for (let i = 0; i < vehicles.length; i++) {
    const v = vehicles[i];
    if (v.noOfWheels === noOfWheels) {
      filteredVehicles.push(v);
    }
  }
  return filteredVehicles;
}
console.log("filter by 2 wheels", filterByWheels(2));

// Refactor this function
function filterByTypes(type1, type2, type3) {
  return vehicles.filter((v) => {
    if (v.type === type1 || v.type === type2 || v.type === type3) {
      return v;
    }
  });
}

console.log(
  "filter by truck and motorized tricycle",
  filterByTypes("truck", "motorized tricycle")
);

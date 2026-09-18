// ========================================
// JSON EXAMPLE - HOSPITAL REVENUE
// ========================================

let hospital = {
  name: "London Hospital",
  city: "London",
  staff: 50,

  revenue: {
    January: 500,
    February: 200,
    March: 800,
    April: 400,
    May: 1000,
    June: 600,
  },
};

// ========================================
// Display hospital information
// ========================================

console.log(hospital.name);
console.log(hospital.city);
console.log(hospital.staff);

// ========================================
// Display monthly revenue
// ========================================

console.log(hospital.revenue.January);
console.log(hospital.revenue.February);
console.log(hospital.revenue.March);
console.log(hospital.revenue.April);
console.log(hospital.revenue.May);
console.log(hospital.revenue.June);

// ========================================
// Display revenue using square brackets
// ========================================

console.log(hospital.revenue["January"]);
console.log(hospital.revenue["February"]);
console.log(hospital.revenue["March"]);
console.log(hospital.revenue["April"]);
console.log(hospital.revenue["May"]);
console.log(hospital.revenue["June"]);

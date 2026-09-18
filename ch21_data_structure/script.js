// ========================================
// 1. ARRAY - Monthly Revenue
// ========================================

let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June"
];

let revenue = [
    500,
    200,
    800,
    400,
    1000,
    600
];

console.log("ARRAY");
console.log(months[0], revenue[0]); // January 500
console.log(months[1], revenue[1]); // February 200
console.log(months[2], revenue[2]); // March 800
console.log(months[3], revenue[3]); // April 400
console.log(months[4], revenue[4]); // May 1000
console.log(months[5], revenue[5]); // June 600


// ========================================
// 2. MAP - Month and Revenue
// ========================================

let monthlyRevenue = new Map();

monthlyRevenue.set("January", 500);
monthlyRevenue.set("February", 200);
monthlyRevenue.set("March", 800);
monthlyRevenue.set("April", 400);
monthlyRevenue.set("May", 1000);
monthlyRevenue.set("June", 600);

console.log("MAP");

console.log(monthlyRevenue.get("January"));  // 500
console.log(monthlyRevenue.get("February")); // 200
console.log(monthlyRevenue.get("March"));    // 800
console.log(monthlyRevenue.get("April"));    // 400
console.log(monthlyRevenue.get("May"));      // 1000
console.log(monthlyRevenue.get("June"));     // 600

// Check if a month exists
console.log(monthlyRevenue.has("January"));  // true
console.log(monthlyRevenue.has("December")); // false


// ========================================
// 3. SET - Unique Months
// ========================================

let uniqueMonths = new Set();

uniqueMonths.add("January");
uniqueMonths.add("February");
uniqueMonths.add("March");
uniqueMonths.add("April");
uniqueMonths.add("May");
uniqueMonths.add("June");

// Add January again
uniqueMonths.add("January");

console.log("SET");
console.log(uniqueMonths);

// Check if a month exists
console.log(uniqueMonths.has("January"));  // true
console.log(uniqueMonths.has("December")); // false

// Remove a month
uniqueMonths.delete("June");

console.log(uniqueMonths);
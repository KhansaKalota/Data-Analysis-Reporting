// Task 1: Daily sales data (array of objects)
let dailySales = [
  { day: "Monday",    sales: 150 },
  { day: "Tuesday",   sales: 200 },
  { day: "Wednesday", sales: 120 },
  { day: "Thursday",  sales: 300 },
  { day: "Friday",    sales: 90  }
];

// Function: processSales -> calculates total, highest and lowest
function processSales(salesData) {
  // handle empty data
  if (!salesData || salesData.length === 0) {
    console.log("No sales data provided.");
    return null;
  }

  // Task 2: initialize totalSales
  let totalSales = 0;

  // Task 3: initialize highest/lowest from the first item
  let highestSales = salesData[0].sales;
  let lowestSales  = salesData[0].sales;
  let highestDay   = salesData[0].day;
  let lowestDay    = salesData[0].day;

  // Loop through each day's data
  for (let i = 0; i < salesData.length; i++) {
    const entry = salesData[i];

    // Sum: add today's sales to totalSales
    totalSales += entry.sales;

    // Compare for highest
    if (entry.sales > highestSales) {
      highestSales = entry.sales;
      highestDay = entry.day;
    }

    // Compare for lowest
    if (entry.sales < lowestSales) {
      lowestSales = entry.sales;
      lowestDay = entry.day;
    }
  }

  // Return a summary object
  return {
    totalSales,
    highestSales,
    highestDay,
    lowestSales,
    lowestDay
  };
}

// Task 4: checkSalesGoal -> returns boolean (true if goal met)
function checkSalesGoal(actualSales, goal) {
  if (actualSales >= goal) {
    return true;
  } else {
    return false;
  }
}

// Runner: call functions and print results
const summary = processSales(dailySales);

if (summary) {
  console.log("Total sales for the period:", summary.totalSales);
  console.log(`Highest sales: ${summary.highestSales} on ${summary.highestDay}`);
  console.log(`Lowest sales: ${summary.lowestSales} on ${summary.lowestDay}`);

  // example goal (change this number to test)
  const goal = 800;

  if (checkSalesGoal(summary.totalSales, goal)) {
    console.log(`Goal met! Total ${summary.totalSales} >= goal ${goal}`);
  } else {
    console.log(`Goal not met. Total ${summary.totalSales} < goal ${goal}`);
  }
}
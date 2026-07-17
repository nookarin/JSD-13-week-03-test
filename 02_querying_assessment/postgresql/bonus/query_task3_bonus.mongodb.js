// Task 3 Bonus: Staff Performance Review
// At the end of the month, the owner wants to reward the hardest-working cashiers.
// To decide fairly, they want to see how many orders each staff member has processed,
// with the busiest staff member appearing at the top of the list.
//
// The dataset is identical in MongoDB — the same business insight can be retrieved.
//
// Hint: Write an aggregation query on the orders collection to count the number of orders
// per staff member. Each order embeds the staff member's first and last name directly.
// The result should show each staff member's full name and their total order count,
// ordered by the count in descending order.

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:   Find out who is the hardest working cashier is by finding out who has the most order.
//                  In MongoDB, it's best to use aggregation pipeline
//                  My thinking process -> Use aggregation pipeline to first find employee's order as well as find out who is cashier via $lookup
//                  -> project the result and $sort descending using total_orders: -1
//

use("chrome-burger-db");

db.orders.aggregate([
    {  
        $lookup:{
            from: "staff",
            localField: "staff_id",
            foreignField: "staff_id",
            as: "staff" // join the data from another collection
        }
    },
    {$unwind: "$staff"},
      {
    $match: 
        {
      "staff.role": "Cashier" // find only cashier
        }
    },
    {
    $group: {
      _id: {
        first_name: "$staff.first_name",
        last_name: "$staff.last_name"
      },
      total_orders: {
        $sum: 1
      }
    }
  },
  {
    $project: {
      _id: 0,
      full_name: {
        $concat: [
          "$_id.first_name",
          " ",
          "$_id.last_name"
        ]
      },
      total_orders: 1
    }
  },
  {
    $sort: {
      total_orders: -1
    }
  }
]);

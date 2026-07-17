// Task 2: Shift Activity Report
// Jane Doe has an upcoming performance review and the manager wants to look at her order history
// ahead of the meeting. They only need to see when each order was placed and what it was worth —
// no other details are required for this particular review.
//
// Hint: Write a query to find all orders handled by the staff member "Jane Doe".
// Your query should only return the order_date and total_price fields for these orders.

// Bonus: The dataset is identical in the PostgreSQL database, meaning the same business insight can be retrieved.
// Write the equivalent query for PostgreSQL. See query_task2_bonus.sql

// ---------------------------------------------------------------
// Your thinking process (required)
// ---------------------------------------------------------------
// Before writing your query, explain in your own words how you
// interpreted the task, what data you need, which collection(s)
// are involved, and what MongoDB concepts you plan to use.
// Write in English or Thai. Do not skip this step.
//
// Your thinking:   The required data are the orders that were handled by Jane Doe, I need to query all that said data.
//                  I need to only get certain data like order_date and total_price as instructed to easily show the manager.
//                  My thinking process is -> find staff named Jane Doe in orders -> show only order date and total price.
//

use("chrome-burger-db");

db.orders.find(
    {
        "staff.first_name": "Jane",
        "staff.last_name": "Doe"
    },
    {
        _id: 0,
        order_date: 1,
        total_price: 1
    }
)
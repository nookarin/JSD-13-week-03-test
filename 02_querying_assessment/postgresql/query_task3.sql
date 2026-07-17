-- Task 3: Staff Performance Review
-- At the end of the month, the owner wants to reward the hardest-working cashiers.
-- To decide fairly, they want to see how many orders each staff member has processed,
-- with the busiest staff member appearing at the top of the list.
--
-- Hint: Write a query to find the total number of orders processed by each staff member.
-- The result should show the staff member's full name (concatenated) and their total order count,
-- ordered by the count in descending order.

-- Bonus: The dataset is identical in the MongoDB database, meaning the same business insight can be retrieved.
-- Write the equivalent query for MongoDB. See query_task3_bonus.mongodb.js

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:   Find out who is the hardest working cashier is by finding out who has the most order.
--                  My thinking process -> Create full name using CONCAT -> use COUNT to count order for each cashier
--                  -> join staffs who are the cashiers -> group them so it can be ordered by descending total order.
--
SELECT
    CONCAT(s.first_name, ' ', s.last_name) AS full_name,
    COUNT(o.order_id) AS total_orders
FROM orders o
JOIN staff s
    ON o.staff_id = s.staff_id
WHERE role = 'Cashier' --only find cashiers
GROUP BY
    s.first_name,
    s.last_name
ORDER BY
    total_orders DESC;
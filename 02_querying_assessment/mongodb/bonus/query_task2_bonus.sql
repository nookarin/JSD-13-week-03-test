-- Task 2 Bonus: Shift Activity Report
-- Jane Doe has an upcoming performance review and the manager wants to look at her order history
-- ahead of the meeting. They only need to see when each order was placed and what it was worth —
-- no other details are required for this particular review.
--
-- The dataset is identical in PostgreSQL — the same business insight can be retrieved.
--
-- Hint: Write a query to find the order_date and total_price from the Orders table
-- for all orders handled by Jane Doe. You will need to join with the Staff table
-- to filter by the staff member's name.

-- ---------------------------------------------------------------
-- Your thinking process (required)
-- ---------------------------------------------------------------
-- Before writing your query, explain in your own words how you
-- interpreted the task, what data you need, which table(s) are
-- involved, and what SQL concepts you plan to use.
-- Write in English or Thai. Do not skip this step.
--
-- Your thinking:   The required data are the orders that were handled by Jane Doe, I need to query all that said data.
--                  I need to only get certain data like order_date and total_price as instructed to easily show the manager.
--                  The way SQL work is a bit differemt from how MongoDB work.
--                  My thinking process is -> fetch all the order date and total price -> filter Jane Doe from all other staffs
--

SELECT
    o.order_date,
    o.total_price
FROM Orders o
JOIN Staff s
    ON o.staff_id = s.staff_id
WHERE s.first_name = 'Jane'
  AND s.last_name = 'Doe';

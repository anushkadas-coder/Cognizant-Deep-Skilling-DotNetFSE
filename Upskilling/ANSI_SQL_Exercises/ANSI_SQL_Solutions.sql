-- ANSI SQL Using MySQL Exercises
-- Schema: Users, Events, Sessions, Registrations, Feedback, Resources

-- 1. User Upcoming Events
SELECT e.title, e.start_date 
FROM Events e
JOIN Registrations r ON e.event_id = r.event_id
JOIN Users u ON r.user_id = u.user_id
WHERE e.status = 'upcoming' AND e.city = u.city
ORDER BY e.start_date;

-- 2. Top Rated Events (min 10 feedbacks)
SELECT event_id, AVG(rating) as avg_rating
FROM Feedback
GROUP BY event_id
HAVING COUNT(feedback_id) >= 10;

-- Save this file (Ctrl+S) and close it.
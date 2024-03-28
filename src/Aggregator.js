import React from "react";
import AppNav from "./AppNav";
import { useEffect, useState } from "react";

const Aggregator = () => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [expenseData, setExpenseData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `/api/aggregator/getExpensesByDate?startDate=${startDate}&endDate=${endDate}`
        );
        const result = await response.json();

        setExpenseData(result);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [startDate, endDate]);

  return (
    <div>
      <AppNav />
      <h3>Select date range</h3>
      <div>
        <label>Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </div>
      <div>
        <label>End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </div>

      {Array.isArray(expenseData) ? (
        <ul>
          {expenseData.map((category) => (
            <li key={category.expenseTypeId}>
              <strong>{category}</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export default Aggregator;

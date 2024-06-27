
"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';

const Meals = () => {
  const [search, setSearch] = useState("");
  const [error, setError] = useState("");
  const [meals, setMeals] = useState([]);

  const loadData = async () => {
    if (search.trim() === "") {
      setMeals([]);
      setError("Please enter a search term.");
      return;
    }

    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
      );
      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals);
        setError("");
      } else {
        setMeals([]);
        setError("No Data Found");
      }
    } catch (error) {
      setMeals([]);
      setError("Error fetching data");
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="mt-12">
      <input
        onChange={handler}
        type="text"
        className="p-4 bg-blue-200 outline-none border-transparent text-slate-800"
        placeholder="Search for meals"
      />
      <button onClick={loadData} className="bg-orange-500 py-4 px-4">
        Search
      </button>

      <div className="mt-12 grid grid-cols-3 gap-12">
        {meals.length > 0 &&
          !error &&
          meals.map((meal) => (
            <div key={meal.idMeal} className="border-2 p-4">
              <Image src={meal.strMealThumb} alt={meal.strMeal} width={500} height={500} />
              <h2>{meal.strMeal}</h2>
              <h2>{meal.strTags}</h2>
              <hr />
            </div>
          ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
};

export default Meals;

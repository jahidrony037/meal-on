import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Categories from "./components/Categories/Categories";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Home from "./components/Home/Home";
import MealDetails from "./components/MealDetails/MealDetails";
import Meals from "./components/Meals/Meals";
import Recipes from "./components/Recipes/Recipes";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "recipes",
        loader: () =>
          fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
        element: <Recipes />,
      },
      {
        path: "meals/:letter",
        loader: (params) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?f=${params.params.letter}`
          ),
        element: <Meals />,
      },
      {
        path: "meal/:mealID",
        loader: (params) =>
          fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.params.mealID}`
          ),
        element: <MealDetails />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "categories",
        element: <Categories />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

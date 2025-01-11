import React, { useState, useEffect } from "react";
import WishItem from "./WishItem";
import "./WishList.css";

const API_URL = "http://localhost:5000/wishes";

const WishList = () => {
  const [wishes, setWishes] = useState([]);
  const [newWish, setNewWish] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setWishes(data))
      .catch((error) => console.error("Error fetching wishes:", error));
  }, []);

  const addWish = async () => {
    if (newWish.trim() === "") return;

    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newWish }),
    });

    const newWishData = await response.json();
    setWishes([...wishes, newWishData]);
    setNewWish("");
  };

  const removeWish = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    setWishes(wishes.filter((wish) => wish.id !== id));
  };

  const editWish = async (id) => {
    await fetch(`${API_URL}/${id}`, { method: "PUT" });
    setWishes(wishes.filter((wish) => wish.id !== id));
  };

  return (
    <div className="wishlist">
      <div className="input-container">
        <input
          type="text"
          placeholder="Add a new wish..."
          value={newWish}
          onChange={(e) => setNewWish(e.target.value)}
        />
        <button onClick={addWish}>Add</button>
      </div>
      <ul className="wish-items">
        {wishes.map((wish) => (
          <WishItem key={wish.id} wish={wish} onRemove={removeWish} onEdit={editWish}/>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
import React from "react";
import { useSelector } from "react-redux";

export default function FavCoins() {
  const favCoins = useSelector((state) => state.favCoins.favCoins);
  
  return (
    <div>
      <table>
        {favCoins.length === 0 ? (
          <div></div>
        ) : (
          <tr>
            <th>Icon</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        )}

        {favCoins.length !== 0 ? (
          favCoins.map((item) => {
            return (
              <tr key={item.name}>
                <td>
                  <img src={item.iconUrl} style={{ width: 40 }} />
                </td>
                <td>{item.name}</td>
                <td>${Number(item.price).toFixed(5)}</td>
              </tr>
            );
          })
        ) : (
          <div>
            <p style={{ color: "white" }}>You didn't choose any coins</p>
          </div>
        )}
      </table>
    </div>
  );
}

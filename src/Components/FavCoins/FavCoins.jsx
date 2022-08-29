import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function FavCoins() {
  //const { favoriteData } = useSelector((state) => state.coinsReducer);

  return (
    <div>
      {/* <table>
        {favoriteData.length === 0 ? (
          <div></div>
        ) : (
          <tr>
            <th>Rank</th>
            <th>Icon</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        )}

        {favoriteData.length != 0 ? (
          favoriteData.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.rank}</td>
                <td>
                  <img src={item.iconUrl} style={{ width: 40 }} />
                </td>
                <td>{item.name}</td>
                <td>${Number(item.price).toFixed(3)}</td>
              </tr>
            );
          })
        ) : (
          <div>
            <p style={{ color: "white" }}>You didn't choose any coins</p>
          </div>
        )}
      </table> */}
    </div>
  );
}

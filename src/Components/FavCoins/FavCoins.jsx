import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

export default function FavCoins() {
  const { favCoins } = useSelector((state) => state.favCoins);

  return (
    <div>
      <table>
        {favCoins.length != 0 ? (
          favCoins.map((item, index) => {
            return (
              <tr key={index}>
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
      </table>
    </div>
  );
}

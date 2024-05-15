import React from 'react'
import { useState, useEffect } from 'react';

const Market = () => {

  const [coin, setCoin] = useState([]);
const [currentPage, setCurrentPage] = useState(1);
const [apiLoad, setApiLoad] = useState(true);
    // Fetch Data
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${currentPage}&sparkline=false`;


  const paginationButtons = [];
  for (let i = 1; i <= 5; i++) {
    paginationButtons.push(
      <button
        key={i}
        onClick={() => setCurrentPage(i)}
        className={i === currentPage ? "activePagi" : ""}
      >
        {i}
      </button>
    );
  }
    
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);
        const json = await response.json();
        setCoin(json);
      };
      fetchData();
    }, [url]);

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }


    //   Scroll
    const scrollMarket = () => {
        window.scrollTo({
          top: window.pageYOffset - 800,
          behavior: "smooth",
        });
      };
    
      const scrollTop = () => {
        window.scrollTo({ top: (0, 0), behavior: "smooth" });
      };
    

    // Pagination 

  return (
    <section id="market__updates">
    <table className='market--table'>
      <thead>
        <tr>
            <th>Coin</th>
            <th>Price</th>
            <th>24h Change</th>
            <th>Market Cap</th>
        </tr>
      </thead>
      <tbody
        onLoad={() => setApiLoad(false)}
        className="market-content__coin-list__row"
      >
        {apiLoad && <span className="loader"></span>}
        {
            coin.map((item) =>{
              const {id} = item;
              return(
               <tr className='market-content__coin-list__row' key={id}>
                <td>
                  <img src={item.image} alt={item.name} height={16} width={16}/> {item.name}
                  </td>
                <td>{"$ " + item.current_price.toFixed(2)}</td>
                <td
                  className = {(item.price_change_percentage_24h > 0) ? 'green' : 'red'}
                >{item.price_change_percentage_24h?.toFixed(2) + " %"}</td>
                <td>{"$ " + numberWithCommas(item.market_cap)}</td>
               </tr>
              )
            })
        }
        
    </tbody>

    </table>
    <div className="btn-container">

    {paginationButtons}
    </div>
    </section>
  )
}

export default Market

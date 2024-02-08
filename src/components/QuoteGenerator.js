import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Qute.css'
import Button from 'react-bootstrap/Button';

function QuoteGenerator() {
    const [quote, setQuote] = useState('');
  
    const fetchQuote = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/quotes/random');
        setQuote(response.data.quote);
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };
  
    useEffect(() => {
      fetchQuote();
    }, []);
  
    return (
      <div  className='app'>
        <div className='card' style={{textAlign:'center',marginTop:'200px',marginBottom:'180px'}}>
        <p style={{color:'red'}}>{quote}</p>
        <Button variant="outline-warning"  onClick={fetchQuote}>Get Another Quote</Button>{' '}
        </div>
      </div>

        



    );
  }
  
  export default QuoteGenerator;
  
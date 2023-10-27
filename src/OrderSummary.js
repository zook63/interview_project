// src/OrderSummary.js
import React from 'react';
import './OrderSummary.css';
import BasicPopover from './BasicPopover';
import { useState, useEffect } from 'react';

function OrderSummary() {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const data = {"invoices": 
            [{"id": 22, "created_at": "October 19, 2023", "total_price": "1395.00", "items": [{ "product_name": "iPad Pro 11 3 gen", "price": 155.0, "image_url": "https://i.postimg.cc/v8hLHbtX/product.jpg", "quantity": 9}], "status": "Preparing", "full_name": "Joe Zhou", "address1": "34532 Gamble Road", "address2": "APT 503", "city": "San Benito", "state": "TX", "zipcode": "78586"}, 
            {"id": 23, "created_at": "October 20, 2023", "total_price": "90.00", "items": [{"product_name": "iPhone 14 Back Glass", "price": 30.0, "image_url": "https://i.postimg.cc/v8hLHbtX/product.jpg", "quantity": 2}, { "product_name": "iPad Pro 999", "price": 10.0, "image_url": "https://i.postimg.cc/v8hLHbtX/product.jpg", "quantity": 3}], "status": "Preparing", "full_name": "JJ Lin", "address1": "6666 Harwin Drive", "address2": "", "city": "Houston", "state": "TX", "zipcode": "77006"} 
            ]};
            setInvoices(data.invoices);
        };
        fetchData();
    }, []);
    

  return (
    <div>
            
            {invoices.map(invoice => (
                <div key={invoice.id} className="order-container">
                  <div className="order-header">
                    <div className='flex-box'>
                        <div className='order-child'>ORDER PLACED</div>
                        <div className='order-child'>TOTAL</div>
                        <div className='order-child'>SHIP TO</div>
                        <div className='last-child'>ORDER #22</div>
                    </div>
                    <div className='flex-box'>
                        <div className='order-child'>{invoice.created_at}</div>
                        <div className='order-child'>{'$'+invoice.total_price}</div>
                        <BasicPopover name={invoice.full_name} address1={invoice.address1} address2={invoice.address2} city={invoice.city} state={invoice.state} zipcode={invoice.zipcode}/>
                        <div className='last-child details'>View order details</div>
                    </div>
                    
                  </div>
                  {invoice.items.map(item=>(
                      <div className='order-detail-border'>
                        <div className="order-details">
                        <img src={item.image_url} alt="Product" />
                        <div>
                          <div className='product-name'>{item.product_name}</div>
                          <div className='product-quantity'>{'Quantity: ' +item.quantity}</div>
                          <div className='product-price'>{'Total: $'+item.price}</div>
                        </div>
                        
                        </div>
              
                        <button className='write-review'>Write a product review</button>
                    </div>
                  ))}
               
              </div>
            ))}
        </div>
    
  );
}

export default OrderSummary;

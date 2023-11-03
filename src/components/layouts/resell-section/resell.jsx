import React,{useState} from 'react';
import "../resell-section/resell.css"
const SellBookForm = () => {
  const [formData, setFormData] = useState({
    adTitle: '',
    bookDetailsType: 'manual',
    isbn: '',
    bookType: 'FE BOOKS',
    bookCondition: 'New',
    quantity: 1,
    price: '',
    shippingCharges: '',
    shippingOption: 'Free Shipping',
    paymentMode: 'UPI Number',
    name: '',
    email: '',
    phone: '',
    privatePhone: false,
    pincode: '',
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log(formData);
  };

 

  return (
    <div className="resellcontainer">
      <div>
                <h2>Book Details:</h2>
                <div class="form-group">
                    <label for="adTitle">Ad Title:</label>
                    <input type="text" id="adTitle" name="adTitle" placeholder="Enter your ad title" required />
                </div>
                
                <div class="form-group">
                    <h3>Book Details:</h3>
                    
                    
                </div>
                
                <div class="form-group">
                    <label for="isbn">ISBN:</label>
                    <input type="text" id="isbn" name="isbn" placeholder="Enter 13 digit ISBN number" required />
                </div>
                
                <div class="form-group">
                    <label for="bookType">Book Type:</label>
                    <select id="bookType" name="bookType">
                        <option value="FE BOOKS">FE BOOKS</option>
                        <option value="SE BOOKS">SE BOOKS</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <h3>Book Condition:</h3>
                    <input type="radio" id="newCondition" name="bookCondition" value="New" required />
                    <label for="newCondition">New</label>
                    
                    <input type="radio" id="excellentCondition" name="bookCondition" value="Excellent" />
                    <label for="excellentCondition">Excellent</label>
                    
                    <input type="radio" id="goodCondition" name="bookCondition" value="Good" />
                    <label for="goodCondition">Good</label>
                    
                    <input type="radio" id="fairCondition" name="bookCondition" value="Fair" />
                    <label for="fairCondition">Fair</label>
                </div>
                
                <div class="form-group">
                    <label for="photos">Upload Photos:</label>
                    <input type="file" id="photos" name="photos" accept="image/*" />
                </div>
                
                <div class="form-group">
                    <label for="quantity">Quantity Available (Stock):</label>
                    <input type="number" id="quantity" name="quantity" value="1" />
                </div>

                <div class="section">
                <h2>Pricing Details:</h2>
                <div class="form-group">
                    <label for="price">Your Price (₹):</label>
                    <input type="number" id="price" name="price" placeholder="Enter your ad price" required />
                </div>
                
                <div class="form-group">
                    <label for="shippingCharges">Your shipping charges to the buyer:</label>
                    <input type="number" id="shippingCharges" name="shippingCharges" placeholder="Enter shipping charges (₹)" required />
                </div>
                
                
                
               
                
                <div class="form-group">
                    <label for="paymentMode">Preferred Payment Mode:</label>
                    <select id="paymentMode" name="paymentMode">
                        <option value="UPI Number">UPI Number</option>
                        <option value="Bank Account">Bank Account</option>
                    </select>
                </div>
            </div>
            
            {/* <!-- Your Details Section --> */}
            <div class="section">
                <h2>Your Details:</h2>
                <div class="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" required />
                </div>
                
                <div class="form-group">
                    <label for="email">Email Address:</label>
                    <input type="email" id="email" name="email" required />
                </div>
                
                <div class="form-group">
                    <label for="phone">Phone Number:</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91" required />
                </div>
                
                <div class="form-group">
                    <input type="checkbox" id="privatePhone" name="privatePhone" />
                    <label for="privatePhone">Keep my phone number private.</label>
                </div>
                
                <div class="form-group">
                    <label for="pincode">Pincode:</label>
                    <input type="text" id="pincode" name="pincode" required />
                </div>
            </div>
            
            <center><button type="submit">Submit</button></center>
            </div>
    </div>
  );
}

export default SellBookForm;

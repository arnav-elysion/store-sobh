import React from "react";

// CSS for Policy Pages
const policyStyles = `
/* PolicyPage.css - Shared styles for all policy pages */
.policy-page {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}

/* Header with background */
.policy-header {
  background-color: #f5f5f5;
  padding: 60px 20px;
  text-align: center;
  margin-bottom: 40px;
}

.policy-header h1 {
  font-size: 32px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  display: inline-block;
  padding-bottom: 15px;
}

.policy-header h1::after {
  content: "";
  position: absolute;
  width: 60px;
  height: 3px;
  background-color: #000;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
}

/* Content container */
.policy-container {
  max-width: 900px;
  width: 90%;
  margin: 0 auto 60px;
}

.policy-content {
  background-color: #fff;
  border-radius: 8px;
  padding: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
}

/* Policy sections */
.policy-section {
  margin-bottom: 30px;
}

.policy-section h2 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.policy-section h3 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #444;
}

.policy-section p {
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 15px;
}

.policy-section ul {
  margin-left: 20px;
  margin-bottom: 15px;
}

.policy-section li {
  font-size: 16px;
  line-height: 1.7;
  color: #555;
  margin-bottom: 8px;
}

/* Last updated timestamp */
.policy-last-updated {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.policy-last-updated p {
  font-size: 14px;
  color: #777;
  font-style: italic;
}

/* Responsive adjustments */
@media screen and (max-width: 768px) {
  .policy-header {
    padding: 40px 15px;
  }
  
  .policy-header h1 {
    font-size: 28px;
  }
  
  .policy-content {
    padding: 30px 20px;
  }
  
  .policy-section h2 {
    font-size: 20px;
  }
}

@media screen and (max-width: 576px) {
  .policy-header {
    padding: 30px 15px;
  }
  
  .policy-header h1 {
    font-size: 24px;
  }
  
  .policy-content {
    padding: 20px 15px;
  }
  
  .policy-section h2 {
    font-size: 18px;
  }
  
  .policy-section p,
  .policy-section li {
    font-size: 15px;
  }
}
`;

const RefundPolicyPage = () => {
  // Scroll to top on component mount
  React.useEffect(() => {
    window.scrollTo(0, 0);
    
    // Create style element for policy styles
    const styleElement = document.createElement('style');
    styleElement.textContent = policyStyles;
    document.head.appendChild(styleElement);
    
    // Cleanup function to remove styles when component unmounts
    return () => {
      document.head.removeChild(styleElement);
    };
  }, []);

  return (
    <div className="policy-page">
      <div className="policy-header">
        <h1>Return & Replacement Policy</h1>
      </div>
      
      <div className="policy-container">
        <div className="policy-content">
          <div className="policy-section">
            <p>
              At Mens Jewels, we take pride in offering handcrafted natural gemstones and men's jewelry, making each piece truly unique. 
              However, due to the nature of the products we implore you to kindly refer to the below-mentioned policy before 
              requesting a return/exchange and/or refund.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Return & Exchange Policy</h2>
            <p>
              While we want to ensure you are satisfied with your purchase, we cannot guarantee that each request for return/refund 
              and/or exchange will be accepted by us. We reserve the right to refuse and/or deny any such request if it is not 
              aligned with the below-mentioned conditions.
            </p>
            
            <h3>Eligibility</h3>
            <p>
              Returns or exchanges are only accepted if your order is damaged during transit or if you received an incorrect product. 
              Note - The Customer acknowledges and agrees that, due to the nature of the products, the Company requires videographic 
              proof to process any return or exchange request. This videographic evidence is mandatory for the Company to internally 
              evaluate the condition of the product and make an informed decision regarding the return or exchange request. Failure 
              to provide such proof, as requested, will render the Company unable to process the return or exchange request. The 
              Customer agrees that the submission of the required video is a prerequisite for the consideration of any return or 
              exchange, and without it, no further action will be taken by the Company.
            </p>
            
            <h3>Timeframe</h3>
            <p>
              Requests for a refund or exchange must be made within seven (07) days of receiving your product. The item must be 
              returned in its original condition with its original certification and packaging intact. Any tampering with the product 
              and/or its certifications will be cause enough for us to deny your return request.
            </p>
            
            <h3>Exclusions</h3>
            <p>
              Returns and exchanges will not be accepted after the 7-day period. We at Mens Jewels take utmost pride in serving the 
              best products; however, should you have any doubts regarding the quality of the product, we implore you to kindly get 
              the product verified for authenticity at a Government gemological institute (ISO certified or internationally reputed). 
              If any gemstone is proven to be synthetic or artificial by such an institute, you are entitled to a 100% refund, return, 
              or exchange, as you deem fit.
            </p>
            
            <p>
              <strong>Note</strong> - Please note that courier charges, VAT, and duties are non-refundable on any product you wish 
              to return and/or exchange. The Company will not arrange for any pickup in case of any return/exchange. All charges, 
              including shipping charges for such return/exchange, shall be borne by you and cannot be claimed, adjusted, or issued 
              as a credit note from our end.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Categories Not Eligible for Return (Unless Damaged)</h2>
            <p>
              Please note that returns are not possible for the following categories unless the product is damaged:
            </p>
            <ul>
              <li>Customised Jewelry</li>
              <li>Beads Bracelets</li>
              <li>Crystal Items</li>
              <li>Gift Cards</li>
            </ul>
            <p>
              <strong>Note</strong> - Due to the intrinsic nature of the products we sell on the website and the likelihood of these 
              products being exchanged with fake/low-quality counter products, we cannot accept any return requests for such products. 
              Personalized rings/jewelry/bracelets or any kind of wearable made with a specific fitting size for a person cannot be 
              returned. We request you to kindly check the website and/or contact customer support to enquire about the returnability 
              of the product.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Refund Process</h2>
            <p>
              If your return request is approved, then your refund will be processed and credited to your credit card or original/source 
              method of payment within 10-12 working days, subject to unforeseeable delays from bank processes and/or public holidays, 
              if applicable.
            </p>
            <p>
              Once your return is received and duly inspected by our team, we will send you an email to notify you acknowledging that 
              we have received your returned item. We will also notify you of the approval or rejection of your refund based on our 
              internal inspection.
            </p>
            <p>
              <strong>Note</strong> – Refunds will only be issued to the payment method and/or original account initially used for 
              the transaction.
            </p>
            <p>
              For orders placed using the Cash on Delivery ("COD") payment method, the Company reserves the right to request additional 
              details, including but not limited to PAN Card, etc., for orders above Rupees Two Lakh, to process any refund. The 
              Customer further acknowledges that the refund will only be processed if the details provided, including but not limited 
              to the customer's name and address at the time of order placement, match the information on record.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Exclusions for Returns or Exchanges</h2>
            <p>
              The Company shall not accept returns or exchanges for the following reasons:
            </p>
            <ul>
              <li>Change of Mind</li>
              <li>Minor Flaws or Packaging Issues</li>
              <li>Slight Color or Size Variations</li>
            </ul>
          </div>
          
          <div className="policy-section">
            <h2>Cancellation Policy</h2>
            <p>
              The Company strives to provide the best experience for its customers. However, once an order is placed, cancellations 
              are not permitted under any circumstances.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Late or Missing Refunds (if applicable)</h2>
            <p>
              If you have not yet received your refund, we kindly request that you first verify your bank account for the transaction. 
              If the refund is not reflected, please contact your credit card company, as it may take additional time for the refund 
              to be officially posted.
            </p>
            <p>
              If, after completing the above steps, you still have not received your refund, please contact us directly at 
              support@mensjewel.com for further assistance.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Sale Items (if applicable)</h2>
            <p>
              All items marked as "Sale" or purchased at a discounted price are final sale. These items are not eligible for return, 
              exchange, or refund under any circumstances.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Exchanges (if applicable)</h2>
            <p>
              We will only replace items if they are defective or damaged upon receipt. If you wish to exchange a defective or damaged 
              item for the same item, you must contact us via email at support@mensjewel.com within 7 days from the date of receipt.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Gifts</h2>
            <p>
              If the item was marked as a gift when purchased and shipped directly to you, you'll receive a gift credit for the value 
              of your return.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Refund Policies for International Orders (Outside India)</h2>
            <p>
              In the event of an issue with the delivery of an international order, we will process a refund to the original payment 
              method within 40 to 45 days.
            </p>
          </div>
          
          <div className="policy-section">
            <h2>Contact Us</h2>
            <p>
              For any further queries, please contact us at support@mensjewel.com. We're here to assist you.
            </p>
          </div>
          
          <div className="policy-last-updated">
            <p>Last Updated: March 18, 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicyPage;
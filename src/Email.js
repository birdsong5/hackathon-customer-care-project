import "./main.css";

const Email = () => {
  return (
    <div className="summary-output">
      <p className="summary-title">GENERATED EMAIL</p>
      <div className="summary-text">
        <p>
          Dear <span className="email-bold">Cedric Malu</span>,{" "}
        </p>
        <p>
          I’m writing to follow up on our recent phone conversation regarding
          the baggage issue you experienced on your Air France flight.
        </p>{" "}
        <p>
          First and foremost, please accept our sincerest apologies for the
          inconvenience this situation has caused.
        </p>{" "}
        <p>
          To assist you in claiming reimbursement for any necessary purchases
          you had to make, please find below the detailed steps to follow:
        </p>{" "}
        <p>
          <span className="email-bold">Step 1: Gather Purchase Receipts</span>
        </p>{" "}
        <p>
          Collect all receipts of the items you purchased due to the absence of
          your luggage. This includes clothing, toiletries, and other
          essentials.
        </p>{" "}
        <p>
          <span className="email-bold">Step 2: Fill Out the Claim Form</span>
        </p>{" "}
        <p>
          Visit the Air France website and navigate to their 'Baggage Service'
          section. Here, you will find a 'Lost Luggage' claim form. Complete
          this form with all required details, including a description of the
          lost items and details of your flight.
        </p>
        <p>
          <span className="email-bold">Step 3: Attach Required Documents</span>
        </p>{" "}
        <p>
          Along with the claim form, attach copies of your boarding pass,
          baggage claim ticket, and all purchase receipts. If you have filed a
          report at the airport, include a copy of this report as well.
        </p>{" "}
        <p>
          <span className="email-bold">Step 4: Submit the Claim</span>
        </p>{" "}
        <p>
          Submit the completed form and all attachments through the Air France
          website or at an Air France customer service desk if you prefer
          in-person submission.
        </p>{" "}
        <p>
          <span className="email-bold">Step 5: Follow-up</span>
        </p>{" "}
        <p>
          After submitting your claim, you should receive a confirmation from
          Air France. Keep track of your claim number for future reference. If
          you do not hear back within a reasonable time frame, follow up with
          their customer service.
        </p>{" "}
        <p>
          {" "}
          If you require any further assistance or have questions, please feel
          free to reach out to us. We are committed to ensuring your post-travel
          experience is as smooth as possible.
        </p>{" "}
        <p>
          Your satisfaction and peace of mind are of utmost importance to us,
          and we are committed to resolving this matter to your satisfaction.
          Should you have any further questions or require additional
          assistance, please do not hesitate to contact our customer service
          team at +420 42 42 42 or reply to this email.
        </p>{" "}
        <p>
          <span className="email-bold">Best regards,</span>{" "}
          <p>Calliope on behalf of Tereza</p>
        </p>
      </div>
      <div className="email-send">
        <div>Verify and send the email </div>
        <button className="send-button">Send email</button>
      </div>
    </div>
  );
};

export default Email;

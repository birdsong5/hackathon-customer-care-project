import "./main.css";

const Agent = () => {
  return (
    <div className="agent-section">
      <div class="picture">
        <img src="images/profile-img.png" alt="Agent" />
        <p class="largeTitle">Inna Troian</p>
        <p class="subTitle">Customer care agent</p>
      </div>

      <div class="feedback-section">
        <p class="title">
          Feedback on the call <br />
          <span class="subTitle">To help you improve</span>
        </p>
        <button className="feedback-button">Generate feedback</button>
      </div>

      <div class="progress-profile">
        <p class="largeTitle">Information for supervisor</p>
        <div class="progressBox grammar-profile-section">
          <p class="title">
            Quality <br />
            <span class="subTitle">5 out of 5 </span>
          </p>
          <i class="fa-solid fa-pencil"></i>
          <i class="fa-solid fa-pencil"></i>
          <i class="fa-solid fa-pencil"></i>
          <i class="fa-solid fa-pencil"></i>
          <i class="fa-solid fa-pencil"></i>
        </div>
        <div class="progressBox dictionary-profile-section">
          <p class="title">Customer was verified</p>
          <i class="fa-solid fa-spell-check"></i>
        </div>
        <div class="progressBox reading-profile-section">
          <p class="supervisor">For Supervisor</p>
          <button class="supervisor-button">Evaluate this call</button>
        </div>
      </div>
    </div>
  );
};

export default Agent;

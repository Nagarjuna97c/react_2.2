const Notification = (props) => {
  const { bgcolor, source, text } = props;
  return (
    <div className={`notification-card ${bgcolor}`}>
      <img className="icon" src={source} />
      <p className="para">{text}</p>
    </div>
  );
};

const element = (
  <div className="main-container">
    <div className="notifications-container">
      <h1 className="heading">Notifications</h1>
      <Notification
        bgcolor="bg-primary"
        source="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
        text="Information Message"
      />
      <Notification
        bgcolor="bg-success"
        source="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        text="Success Message"
      />
      <Notification
        bgcolor="bg-warning"
        source="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
        text="Warning Message"
      />
      <Notification
        bgcolor="bg-danger"
        source="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png"
        text="Danger Message"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "Ghada Bgr",
        bio: "Biomedical AI Data Science Software Student Engineer passionate about healthcare and technology.",
        imgSrc: "Image avatar.png",
        profession: "Biomedical Engineer",
      },

      shows: false,

      seconds: 0,
    };

    this.interval = null;
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState((previousState) => ({
        seconds: previousState.seconds + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow = () => {
    this.setState((previousState) => ({
      shows: !previousState.shows,
    }));
  };

  render() {
    const { person, shows, seconds } = this.state;

    return (
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#f2f4f7",
          padding: "30px",
          textAlign: "center",
        }}
      >
        <h1>My Profile</h1>

        <button
          onClick={this.toggleShow}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#212529",
            color: "white",
            cursor: "pointer",
            marginBottom: "20px",
          }}
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div
            style={{
              width: "350px",
              backgroundColor: "white",
              borderRadius: "15px",
              padding: "25px",
              boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)",
            }}
          >
            <img
              src={person.imgSrc}
              alt={person.fullName}
              style={{
                width: "150px",
                height: "150px",
                borderRadius: "50%",
                objectFit: "cover",
                marginBottom: "15px",
              }}
            />

            <h2>{person.fullName}</h2>

            <h3>{person.profession}</h3>

            <p>{person.bio}</p>
          </div>
        )}

        <p
          style={{
            marginTop: "30px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Time since component mounted: {seconds} seconds
        </p>
      </div>
    );
  }
}

export default App;

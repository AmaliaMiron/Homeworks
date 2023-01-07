window.onload = (event) => {
  //Cookies Homework

  const temperatureC = document.querySelector("#C");
  const temperatureF = document.querySelector("#F");

  temperatureC.addEventListener("click", () => {
    setCookie("Grade", "Celsius");
    setCookie("Language", "Europe");
    console.log("Celsius");
  });
  temperatureF.addEventListener("click", () => {
    setCookie("Grade", "Fahrenheit");
    setCookie("Language", "USA");
    console.log(" Fahrenheit");
  });
  const setCookie = (name, value) => {
    document.Cookies = `${name}=${value}`;
  };

  //History Homework

  const pushHistory = document.querySelector("#push-history");
  pushHistory.addEventListener("click", () => {
    history.pushState(
      "Push History process",
      null,
      "The process is done. History pushed"
    );
    console.log(history.state);
  });

  const replaceHistory = document.querySelector("#replace-history");
  replaceHistory.addEventListener("click", () => {
    history.replaceState(
      "History replaced",
      null,
      "http://127.0.0.1:5500/cookies.html"
    );
    console.log(history.state);
  });

  //Geolocation & Ajax;

  const findMyLocation = () => {
    const location = document.querySelector("#location");

    const currentLocation = (myPos) => {
      console.log(myPos);
      const coordinatesLat = myPos.latitude;
      const coordinatesLong = myPos.longitude;
      console.log(coordinatesLat + " " + coordinatesLong);
      const api =
        "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en";

      fetch(api)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        });
    };

    navigator.geolocation.getCurrentPosition(currentLocation);
  };
  const findButton = document.querySelector("#findMyLocation");
  findButton.addEventListener("click", findMyLocation);
};

const fetch = require("node-fetch");

module.exports = (app) => {
  let zipcode;

  app.post("/search-location", (req, res) => {
    console.log(req)
    zipcode = req.body.zipcode;

    if (!zipcode || zipcode.length < 5 || zipcode.length > 5) {
      res.redirect("/error");
    } else {
      res.redirect("/current-weather");
    }
  });

  app.get("/search-location-weather", (req, res) => {
    //build api URL with user zip
    const url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=3ec5b6a384534e53c9c3c9a4d37eadff&units=imperial`;


    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        res.send({ data });
      })
      .catch((err) => {
        res.redirect("/error");
      });
  });
};

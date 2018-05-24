const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const markers = [{
    name: "marker_1_name",
    lat: -34.397,
    lng: 150.644,
    property_1: "marker_1_property_1_value",
    property_2: "marker_1_property_2_value",
    property_3: "marker_1_property_3_value",
    property_4: "marker_1_property_4_value",
  }, {
    name: "marker_2_name",
    lat: -35.397,
    lng: 150.644,
    property_1: "marker_2_property_1_value",
    property_2: "marker_2_property_2_value",
    property_3: "marker_2_property_3_value",
    property_4: "marker_2_property_4_value",
  }, {
    name: "marker_3_name",
    lat: -34.397,
    lng: 151.644,
    property_1: "marker_3_property_1_value",
    property_2: "marker_3_property_2_value",
    property_3: "marker_3_property_3_value",
    property_4: "marker_3_property_4_value",
  }, {
    name: "marker_4_name",
    lat: -33.397,
    lng: 150.644,
    property_1: "marker_4_property_1_value",
    property_2: "marker_4_property_2_value",
    property_3: "marker_4_property_3_value",
    property_4: "marker_4_property_4_value",
  }, {
    name: "marker_5_name",
    lat: -34.397,
    lng: 149.644,
    property_1: "marker_5_property_1_value",
    property_2: "marker_5_property_2_value",
    property_3: "marker_5_property_3_value",
    property_4: "marker_5_property_4_value",
  },
];

app.get("/markers", (req, res) => {
  res.send(markers);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
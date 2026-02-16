import lineFollowingCar from "./images/lineFollowingCar.png";
import smartHouse from "./images/smartHouse.png";
import smartPark from "./images/ecoPark.png";
import smartDoor from "./images/pinPadDoor.png";
import smartBin from "./images/smartBin.png";
import drone from "./images/drone.png";
import greenhouse from "./images/greenhouse.png";
import car from "./images/car.png";
export const ProjectsObj = [
  {
    id: 1,
    title: "Line Following Car",
    description: "Car that follows a black line using infrared sensors.",
    author: "Everyone",
    materials:["Motor driver", "IR sensors", "Arduino", "Jumpers", "Motors", "Tires", "Car carcas"],
    imageSrc: lineFollowingCar,
  },
  {
    id: 2,
    title: "Smart House",
    description: "Arduino-based smart house system.",
    author: "Everyone",
    materials:["Esp32", "Light bulb", "Solar panel", "Jumpers", "RFID", "Servo motor"],
    imageSrc: smartHouse,
  },
  {
    id: 3,
    title: "Eco-Friendly Park",
    description: "Energy-efficient park lighting system.",
    author: "Everyone",
    materials:["Arduino", "Photoresistor Relay", "Breadboard", "Jumpers", "LED lights","Ultrasonic sensor"],
    imageSrc: smartPark,
  },
  {
    id: 4,
    title: "Pin code unlock system",
    description: "Smart lock system that unlocks with a pin code.",
    author: "Everyone",
    materials:["Arduino", "LCD monitor", "Breadboard", "Jumpers", "Pinpad","Servo"],
    imageSrc: smartDoor,
  },
  {
    id: 5,
    title: "Smart bin",
    description: "Smart bin with automatic waste management.",
    author: "Everyone",
    materials:["Arduino", "Ultrasonic sensor X2", "Jumpers", "Servo",],
    imageSrc: smartBin,
  },
  {
    id: 6,
    title: "The drone",
    description: "A drone with autonomous flight capabilities.",
    author: "Erekle",
    materials:["Unavailable"],
    imageSrc: drone,
  },
  {
    id: 7,
    title: "The greenhouse",
    description: "An automated greenhouse with climate control.",
    author: "Everyone",
    materials:["ESP32", "DHT22", "Moisture sensor", "Jumpers", "Cooler", "Sprinkler"],
    imageSrc: greenhouse,
  },
  {
    id: 8,
    title: "Offroader car",
    description: "An offroader car with autonomous driving capabilities.",
    author: "Luka & Saba",
    materials:["Arduino", "Motor driver", "Breadboard", "Jumpers", "Servo","Motors", "Tires", "RC car microcontroler & Remote"],
    imageSrc: car,
  },
  
  
];
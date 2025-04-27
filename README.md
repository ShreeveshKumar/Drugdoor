
---

# Drugdoor - Cloud-IoT Powered Medication Management System

Drugdoor is a cloud-IoT powered hardware and software solution designed to help patients manage their medications more effectively. The system includes a portable device that dispenses medication on schedule, a mobile app for user interaction, and a web dashboard for caregivers to monitor medication adherence. The project leverages IoT sensors, cloud infrastructure, and mobile/web technologies to ensure timely medication intake and improve patient care.

## Features

- **Medication Dispensing**: A hardware device dispenses the right pills at the correct time, with visual and auditory cues.
- **Real-Time Monitoring**: The system tracks pill consumption with sensors and alerts users if a dose is missed.
- **Google Assistant Integration**: Allows users to set medication schedules using voice commands.
- **Health Integration**: Syncs with wearable devices to personalize medication reminders.
- **Multi-User Support**: Caregivers can manage multiple users and track their medication history.
- **AI-Powered Assistance**: AI algorithms predict missed doses and adjust alarms accordingly.
- **Emergency SOS & Fall Detection**: Immediate alerts to caregivers in case of falls or emergencies.

## Technologies Used

- **Frontend (App)**: React Native (Expo)
- **Backend**: Node.js with Express.js
- **Web**: HTML, SCSS
- **Database**: MongoDB
- **Cloud**: AWS, Firebase
- **Hardware**: ESP32, Servo Motor, LED Lights, RTC Module, Buzzer, Temperature Sensor (DS18B20), Gyroscope, 3D Printed Box

## Project Structure

```bash
Drugdoor/
├── app/                      # React Native Expo app for mobile
│   ├── assets/               # Image assets and static files
│   ├── components/           # Reusable components for UI
│   ├── screens/              # Different screens of the app
│   ├── navigation/           # Navigation setup
│   ├── App.js                # Main entry point of the app
│   └── package.json          # App dependencies
│
├── backend/                  # Node.js backend code
│   ├── controllers/          # API endpoint logic
│   ├── models/               # Mongoose models for database interaction
│   ├── routes/               # API routes
│   ├── server.js             # Express server setup
│   ├── config/               # Configuration files for the app
│   └── package.json          # Backend dependencies
│
├── web/                      # Web Dashboard for caregivers
│   ├── assets/               # Image assets and static files
│   ├── css/                  # SCSS stylesheets
│   ├── index.html            # HTML entry point
│   └── main.js               # Main JS logic for frontend
│
├── iot/                      # IoT hardware code (ESP32/Arduino)
│   ├── esp32/                # ESP32 code for communication and hardware control
│   └── arduino/              # Arduino code for servo motors, sensors, etc.
│
└── README.md                 # Project documentation
```

---

## Getting Started

### Prerequisites

Before you start, make sure you have the following installed:

- **Node.js**: [Download Node.js](https://nodejs.org/)
- **React Native & Expo**: [Get Started with Expo](https://docs.expo.dev/get-started/)
- **MongoDB**: Set up a MongoDB instance, either locally or on [MongoDB Atlas](https://www.mongodb.com/cloud/atlas).
- **Arduino IDE**: Install [Arduino IDE](https://www.arduino.cc/en/software) for IoT development.
- **ESP32**: [Install ESP32 Board Support](https://docs.espressif.com/projects/esp-idf/en/latest/esp32/get-started/)

---

### Installing the Project

Clone the repository:

```bash
git clone https://github.com/yourusername/drugdoor.git
cd drugdoor
```

#### 1. Setting Up the Backend

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

- Set up your MongoDB database and update the `config` files with your MongoDB URI and other environment variables.
- Start the backend server:

```bash
npm start
```

The backend will run on [http://localhost:5000](http://localhost:5000).

#### 2. Setting Up the Mobile App (React Native)

Navigate to the `app` directory and install dependencies:

```bash
cd app
npm install
```

- Open the project in Expo:

```bash
expo start
```

This will open the Expo developer tool in your browser, and you can scan the QR code with the Expo Go app on your mobile device to run the app.

#### 3. Setting Up the Web Dashboard

Navigate to the `web` directory and open the `index.html` file in any web browser. If you need a local server, you can use any simple HTTP server (e.g., `live-server` or `http-server`).

#### 4. Setting Up the IoT Hardware

- Connect the ESP32 and other components (servo motor, sensors, etc.) as per your hardware design.
- Use the Arduino IDE to upload the code to the ESP32.
- Ensure the hardware is connected and running as expected for dispensing medicines.

---

## How to Navigate the Project

### Mobile App

- **Home Screen**: Displays user’s medication schedule and upcoming doses.
- **Schedule Screen**: Allows users to set or modify medication schedules.
- **Profile Screen**: Displays user information, medication history, and settings.
- **Settings Screen**: Manage notifications, voice assistant settings, and connectivity.

### Web Dashboard (Caregiver)

- **Dashboard**: Displays medication adherence statistics for multiple users.
- **User Management**: Add or remove patients and view their medication history.
- **Alerts**: Monitor real-time alerts (e.g., missed doses, emergency SOS).
- **Settings**: Configure user preferences, manage notifications.

### IoT

- **ESP32 Code**: Communicates with the backend, controls the servo motor to dispense pills, tracks temperature and other sensor data.
- **Arduino Code**: Handles real-time control of sensors, motors, and communicates with the backend server for pill dispensing alerts.

---

## Contributing

We welcome contributions to enhance the functionality and features of this project. To contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-name`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to your fork (`git push origin feature-name`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

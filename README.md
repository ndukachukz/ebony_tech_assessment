# Ebony Tech Assessment React Native

## Introduction

Welcome to the documentation for the Ebony Tech Assessment React Native app. This document provides instructions on building, installing, and running the app locally. The app requires login credentials, and the provided credentials are:

```json
{
  "username": "mor_2314",
  "password": "83r5^_"
}
```

## Prerequisites

Before you proceed, make sure you have the following installed on your development machine:

- Node.js (version >= 18)
- Yarn

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/ndukachukz/ebony_tech_assessment.git
cd ebony_tech_assessment
```

### 2. Install Dependencies

```bash
yarn
```

## Building the App

### Android

```bash
yarn android
```

The Android build output will be located at: `./android/app/build/outputs/apk/debug/app-debug.apk`

### iOS

```bash
yarn ios
```

The iOS build output will be located at: `./ios/build/Build/Products/Debug-iphonesimulator/EbonyTechAssessment.app`

## Running the App Locally

To run the app locally, follow these steps:

```bash
yarn start
```

This will start the development server. Open a new terminal window and run the following commands based on your target platform:

### Android

```bash
yarn android
```

### iOS

```bash
yarn ios
```

## Logging In

Use the provided credentials to log in:

- Username: `mor_2314`
- Password: `83r5^_`

## Conclusion

Congratulations!

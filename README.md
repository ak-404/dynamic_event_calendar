# Dynamic Event Calendar Application

## Overview

The **Dynamic Event Calendar Application** is a web app that allows users to manage and view events on a calendar. Users can:

- View a dynamic calendar where dates can be selected.
- Add, edit, or delete events associated with specific dates.
- Store event data locally in the browser.
- Download all events as a JSON file.

The application is built using **React**, **Tailwind CSS**, and **Shadcn UI components** for an easy-to-use interface.

## Features

- **Calendar View**: A dynamic calendar with clickable dates to add or view events.
- **Event Management**: Add, edit, and delete events associated with specific dates.
- **Event Form**: Modal form for adding and editing events with event name, description, start time, and end time.
- **Data Persistence**: Events are stored locally in the browser's local storage to ensure data persists across page reloads.
- **Event Download**: Ability to download events as a JSON file for backup or sharing purposes.

## Tech Stack

- **Frontend**: React.js
- **Styling**: Tailwind CSS, Shadcn UI components
- **State Management**: React's built-in `useState` and `useEffect` hooks
- **Data Storage**: Local Storage for event persistence

## Installation

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org) (v16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Steps to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ak-404/dynamic_event_calendar.git
   cd dynamic_event_calendar
    ```

2. **Install dependencies**:

    ```bash
    npm install
    ```

3. **Run the development server**:

    ```bash
    npm run dev
    ```

4. **Open the application**:
    Open your browser and go to `http://localhost:3000` to view the application.

## Usage

### Navigate through the Calendar:
- Click on any date in the calendar to view or add events for that day.

### Add Events:
- Click the "Add Event" button at the bottom of the calendar to open the event creation form.
- Fill in the event details (name, description, start time, and end time), then click "Save" to add it to the selected date.

### Edit Events:
- Click the "Edit" button next to any event to modify the event details.
- After making changes, click "Save" to update the event.

### Delete Events:
- Click the "Delete" button next to any event to remove it from the calendar.

### Download Events:
- Click the "Download Events" button at the bottom of the calendar to download all events as a JSON file.

## Live Link:
- [Dynamic Event Calendar](https://dynamic-event-calendar0.web.app)
# My Personal Calendar

This project is a personal calendar application created by Ahmad Alfarizki for job application purposes. The application allows users to view a calendar for the current month, add and manage events, and download event data as a JSON file.

## Demo

[https://calendar.madfariz.my.id](https://calendar.madfariz.my.id)

## Features

- Current Month Calendar: Displays the calendar for the current month. For example, if today is the 5th of May, the calendar will display the month of May.
- Add Events: Users can add events to any future day in the calendar. Each event includes a name, time, and invitees' email addresses.
- Edit/Delete Events: Users can edit or delete existing events.
- Event Limit Per Day: Only 3 events can be added to a single day in the calendar.
- Event Color: Each event is assigned a random color that is different from other events on the same day. If there are multiple events on the same day, the day's background is divided into sections representing the events' colors.
- Client-Side Storage: Events are stored on the client-side using localStorage. This ensures that events persist even after refreshing the page.
- Download Events: Users can download all events as a JSON file.

## Technologies

- **Language**: JavaScript/TypeScript
- **Framework**: React
- **State Management**: Built-in React hooks (`useState`, `useEffect`) and localStorage
- **Styling**: Styled Components (CSS-in-JS)
- **Tooling and Build System**: Vite for fast development and build performance
- **Package Manager**: npm
- **Version Control**: Git for version control and GitHub for repository hosting

## Project Setup

To set up the project, follow these instructions:

### Clone the repository

```sh
git clone https://github.com/madfarizki/my-calendar-ahmad.git
```

### Navigate to the project directory

```sh
cd my-calendar-ahmad
```

### Install the required dependencies

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

## Thank you

If you encounter any issues or have questions, feel free to reach out to me on [https://madfariz.my.id](https://madfariz.my.id).

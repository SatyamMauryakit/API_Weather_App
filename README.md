# Weather Application

A modern weather application built with React, TypeScript, and Vite that provides real-time weather information and forecasts.

## Features

- Current weather conditions display
- Hourly and daily weather forecasts
- City search functionality with search history
- Favorite cities management
- Geolocation support
- Theme toggle (light/dark mode)
- Responsive design

## Tech Stack

- React
- TypeScript
- Vite
- Weather API Integration
- Local Storage for favorites and history
- UI Components with shadcn/ui

## Project Structure

- `/src/api`: API configuration and types
- `/src/components`: Reusable UI components
- `/src/context`: Theme provider context
- `/src/hooks`: Custom hooks for state management
- `/src/lib`: Utility functions
- `/src/pages`: Main application pages

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in `.env`
4. Run development server: `npm run dev`

## Environment Variables

Create a `.env` file in the root directory with:
```env
VITE_WEATHER_API_KEY=your_api_key_here

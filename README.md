# WatchTube

A modern YouTube clone application built with React 18 and Material-UI, providing a seamless video browsing experience with real-time data from YouTube API.

## 🌐 Live Demo

**[View Live Application](https://nov-watch-tube.vercel.app/)**

## ✨ Features

- **Video Feed**: Browse trending and category-specific videos
- **Search Functionality**: Search for videos with real-time results
- **Video Player**: Watch videos with detailed information including views and likes
- **Channel Details**: View channel information and their video collections
- **Related Videos**: Discover related content while watching videos
- **Responsive Design**: Fully responsive UI that works on all devices
- **Category Filtering**: Filter videos by categories like Music, Gaming, Education, etc.

## 🛠️ Technologies Used

- **React 18** - UI library with Hooks (useState, useEffect)
- **Vite** - Next-generation frontend build tool
- **Material-UI (MUI)** - Modern React component library
- **React Router DOM v6** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Player** - Video playback component
- **RapidAPI (YouTube v31)** - YouTube data integration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v14 or higher)
- npm or yarn package manager
- A RapidAPI key for YouTube v31 API

## 🚀 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/novendra27/watch-tube.git
cd watch-tube
```

### 2. Install Dependencies

```bash
npm install
```

or if you use yarn:

```bash
yarn install
```

### 3. Setup Environment Variables

Create a `.env` file in the root directory and add your RapidAPI key:

```env
VITE_RAPID_API_KEY=your_rapidapi_key_here
```

To get your RapidAPI key:
1. Visit [RapidAPI](https://rapidapi.com/)
2. Sign up or log in to your account
3. Subscribe to [YouTube v31 API](https://rapidapi.com/ytdlfree/api/youtube-v31)
4. Copy your API key from the dashboard

### 4. Run the Development Server

```bash
npm run dev
```

or with yarn:

```bash
yarn dev
```

The application will open at `http://localhost:5173`

## 📦 Build for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## 📁 Project Structure

```
watch-tube/
├── public/              # Static assets
├── src/
│   ├── components/      # React components
│   │   ├── Feed.jsx
│   │   ├── VideoDetail.jsx
│   │   ├── ChannelDetail.jsx
│   │   ├── SearchFeed.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── Videos.jsx
│   │   ├── VideoCard.jsx
│   │   └── ChannelCard.jsx
│   ├── utils/           # Utility functions
│   │   ├── fetchFromAPI.jsx
│   │   └── constants.jsx
│   ├── App.jsx          # Main App component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables
├── package.json         # Dependencies
└── vite.config.js       # Vite configuration
```

## 🎯 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📝 License

This project is open source and available under the MIT License.

## 👤 Author

**Novendra27**
- GitHub: [@novendra27](https://github.com/novendra27)
- Project: [WatchTube](https://github.com/novendra27/watch-tube)

## 🙏 Acknowledgments

- YouTube API provided by RapidAPI
- UI inspiration from YouTube
- Built with React and Material-UI

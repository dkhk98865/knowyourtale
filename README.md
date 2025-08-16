# Know Your Tale 🧚‍♀️

A magical web application where users can discover which fairy tale character they are and engage in AI-powered conversations with beloved characters from classic stories.

## Features ✨

- **Character Selection**: Choose from classic fairy tale characters like Cinderella, Red Riding Hood, Prince Charming, and more
- **AI-Powered Chat**: Engage in realistic conversations with characters powered by OpenAI GPT-4
- **User Authentication**: Secure sign-in/sign-up with Clerk
- **Chat Persistence**: Save conversation history with Supabase
- **Responsive Design**: Beautiful fairy tale-themed UI that works on all devices
- **Character Personalities**: Each character has unique personality traits and backstories

## Tech Stack 🛠️

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS with custom fairy tale theme
- **Authentication**: Clerk (with billing support)
- **Database**: Supabase (PostgreSQL)
- **AI**: OpenAI GPT-4
- **Deployment**: Vercel
- **Animations**: Framer Motion

## Getting Started 🚀

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Clerk account
- Supabase account
- OpenAI API key

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/characters
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/characters

# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key_here

# OpenAI
OPENAI_API_KEY=your_openai_api_key_here

# App URL
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Database Setup

1. Create a new Supabase project
2. Run the SQL schema provided in `database-schema.sql` in your Supabase SQL editor
3. This will create the necessary tables and seed initial fairy tale characters

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd knowyourtale
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables (see above)

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure 📁

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── characters/        # Character selection page
│   ├── chat/              # Chat interface
│   ├── profile/           # User profile
│   ├── sign-in/           # Authentication pages
│   └── sign-up/
├── lib/                   # Utilities and configurations
│   ├── openai.ts         # OpenAI client setup
│   ├── supabase.ts       # Supabase client setup
│   └── utils.ts          # Helper functions
└── types/                 # TypeScript type definitions
    └── database.ts       # Database schema types
```

## Character System 🎭

Each character in the system has:

- **Name & Description**: Basic character information
- **System Prompt**: Detailed personality and speaking style instructions for the AI
- **Story Origin**: The fairy tale they come from
- **Personality Traits**: Array of character traits
- **Unique Welcome Messages**: Personalized greetings for each character

### Available Characters

1. **Cinderella** 👑 - Kind-hearted and optimistic
2. **Red Riding Hood** 🧺 - Brave and nature-loving
3. **Prince Charming** 🤴 - Noble and romantic
4. **Snow White** 🍎 - Pure-hearted and gentle
5. **Goldilocks** 🐻 - Curious and adventurous
6. **The Fairy Godmother** 🧚‍♀️ - Wise and magical

## API Endpoints 🔌

- `GET /api/characters` - Fetch all available characters
- `POST /api/chat` - Send message and get AI response

## Deployment 🌐

### Vercel Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add all environment variables in Vercel dashboard
4. Deploy!

### Environment Variables for Production

Make sure to update these for production:
- `NEXT_PUBLIC_APP_URL` should be your production URL
- All other keys should be production values

## Development Roadmap 🗺️

- [x] Basic character chat functionality
- [x] User authentication with Clerk
- [x] Chat persistence with Supabase
- [x] Responsive fairy tale UI
- [ ] Chat history page
- [ ] Favorite characters system
- [ ] Character personality quiz
- [ ] Clerk billing integration
- [ ] Advanced chat features (images, voice)
- [ ] Mobile app with React Native

## Contributing 🤝

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License 📄

This project is licensed under the MIT License.

## Support 💬

If you have any questions or issues, please open an issue on GitHub or contact the development team.

---

Made with ✨ magic and ❤️ code
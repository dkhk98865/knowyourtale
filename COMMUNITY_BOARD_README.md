# Community Board System

A comprehensive community board system for the Know Your Tale fairy tale personality platform, allowing users to share stories, ask questions, and engage with fellow fairy tale enthusiasts.

## Features

### 🎯 Core Functionality
- **Post Creation**: Users can create different types of posts (discussion, question, story, announcement)
- **Character Association**: Posts can be optionally linked to specific fairy tale characters
- **Interactive Engagement**: Like posts and replies, add comments
- **Real-time Updates**: Automatic count updates for likes and replies
- **Responsive Design**: Mobile-friendly interface with fairy tale theming

### 📝 Post Types
- **💬 Discussion**: General conversations about fairy tales
- **❓ Question**: Ask for advice or information
- **📖 Story**: Share personal fairy tale experiences
- **📢 Announcement**: Important updates or news

### 🔐 Authentication & Permissions
- **Public Reading**: Anyone can view posts and replies
- **Authenticated Actions**: Users must sign in to create posts, reply, or like
- **User Management**: Users can edit/delete their own content
- **Admin Features**: Support for pinned posts and moderation

## Database Schema

### Tables

#### `community_posts`
- Post content, metadata, and engagement metrics
- Links to fairy tale characters (optional)
- User authentication and ownership tracking
- Pin and lock functionality for moderation

#### `community_replies`
- Reply content and metadata
- Links to parent posts
- User authentication and ownership tracking

#### `community_likes`
- Like tracking for posts and replies
- Prevents duplicate likes from same user
- Automatic count updates via triggers

### Views

#### `community_posts_view`
- Aggregated post data with reply counts
- User-friendly display names
- Optimized for frontend consumption

### Triggers & Functions
- **Automatic Timestamps**: Updates `updated_at` on modifications
- **Count Management**: Automatically updates like and reply counts
- **Data Integrity**: Ensures consistent counts across tables

## API Endpoints

### `/api/community/posts`
- `GET`: Fetch all posts with pagination and sorting
- `POST`: Create new post (requires authentication)

### `/api/community/replies`
- `GET`: Fetch replies for a specific post
- `POST`: Create new reply (requires authentication)

### `/api/community/likes`
- `POST`: Add like to post or reply
- `DELETE`: Remove like from post or reply

## Frontend Components

### Community Page (`/app/community/page.tsx`)
- **Post List**: Displays all posts with filtering and sorting
- **Create Form**: Modal form for new post creation
- **Post Detail**: Full post view with replies
- **Interactive Elements**: Like buttons, reply forms

### Key Features
- **Responsive Grid**: Adapts to different screen sizes
- **Fairy Tale Theming**: Consistent with platform design
- **Loading States**: Smooth user experience
- **Error Handling**: Graceful fallbacks and user feedback

## Styling & Theming

### CSS Classes
- **Line Clamping**: Text truncation utilities
- **Hover Effects**: Smooth transitions and animations
- **Modal Styling**: Backdrop blur and responsive design
- **Fairy Tale Elements**: Magical sparkles and parchment effects

### Design Principles
- **Consistent Branding**: Matches platform aesthetic
- **Accessibility**: High contrast and readable text
- **Mobile First**: Responsive design patterns
- **Performance**: Optimized animations and transitions

## Usage Examples

### Creating a Post
```typescript
const createPost = async (postData: CreatePostRequest) => {
  const response = await fetch('/api/community/posts', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  });
  return response.json();
};
```

### Fetching Posts
```typescript
const fetchPosts = async () => {
  const response = await fetch('/api/community/posts');
  const { posts } = await response.json();
  return posts;
};
```

### Adding a Reply
```typescript
const addReply = async (replyData: CreateReplyRequest) => {
  const response = await fetch('/api/community/replies', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(replyData)
  });
  return response.json();
};
```

## Security Features

### Row Level Security (RLS)
- **Public Read Access**: Anyone can view content
- **Authenticated Write Access**: Users can only modify own content
- **Service Role Access**: Admin operations via service role

### Data Validation
- **Input Sanitization**: Prevents XSS and injection attacks
- **Type Checking**: Strict TypeScript interfaces
- **Permission Verification**: Server-side authentication checks

## Performance Considerations

### Database Optimization
- **Indexed Queries**: Fast lookups on common fields
- **Efficient Joins**: Optimized view for post listing
- **Trigger-based Counts**: Real-time metrics without additional queries

### Frontend Optimization
- **Lazy Loading**: Load content as needed
- **Debounced Updates**: Prevent excessive API calls
- **Optimistic Updates**: Immediate UI feedback

## Future Enhancements

### Planned Features
- **Search & Filtering**: Advanced post discovery
- **User Profiles**: Community member pages
- **Moderation Tools**: Admin panel for content management
- **Notifications**: Real-time updates and alerts
- **Rich Content**: Image and media support

### Scalability Improvements
- **Pagination**: Handle large numbers of posts
- **Caching**: Redis integration for performance
- **Real-time Updates**: WebSocket integration
- **Analytics**: Community engagement metrics

## Setup Instructions

### 1. Database Setup
Run the community board schema in your Supabase SQL editor:
```sql
-- Copy the community board section from database-schema.sql
-- This creates all necessary tables, views, and triggers
```

### 2. Environment Configuration
Ensure your Supabase environment variables are configured:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### 3. Component Integration
The community board is automatically integrated into the sidebar navigation and accessible at `/community`.

## Troubleshooting

### Common Issues
- **Authentication Errors**: Check user session and Supabase configuration
- **Database Errors**: Verify schema has been applied correctly
- **Styling Issues**: Ensure CSS classes are properly imported
- **API Errors**: Check network requests and server logs

### Debug Tools
- **Browser Console**: Client-side error logging
- **Supabase Dashboard**: Database query monitoring
- **Network Tab**: API request/response inspection

## Contributing

When contributing to the community board system:
1. Follow existing code patterns and styling
2. Add appropriate TypeScript types
3. Include error handling and loading states
4. Test responsive design on multiple devices
5. Update documentation for new features

## Support

For technical support or feature requests related to the community board:
- Check existing documentation and code comments
- Review Supabase logs for database issues
- Test in development environment before production
- Follow platform coding standards and conventions

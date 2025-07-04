import React from 'react';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  Divider,
  IconButton,
  InputAdornment,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import {
  BookmarkBorder,
  ChatBubbleOutline,
  EmojiEmotions,
  Event,
  Group,
  MoreVert,
  Photo,
  Share,
  ThumbUp,
  VideoCameraBack
} from '@mui/icons-material';

const Homepage = () => {
  const { theme } = useTheme(); 
  
  const posts = [
    {
      id: 1,
      author: 'Jane Doe',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
      time: '3 hrs ago',
      content: 'Just finished writing my new blog post about React hooks! Check it out and let me know what you think.',
      image: 'https://source.unsplash.com/random/800x400/?coding',
      likes: 24,
      comments: 8,
      shares: 3
    },
    {
      id: 2,
      author: 'John Smith',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
      time: '5 hrs ago',
      content: 'The future of web development is here. TypeScript + React is a game changer!',
      image: 'https://source.unsplash.com/random/800x400/?typescript',
      likes: 42,
      comments: 12,
      shares: 5
    }
  ];

  const stories = [
    { id: 1, title: 'Your Story', image: 'https://source.unsplash.com/random/200x300/?profile', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { id: 2, title: 'Tech News', image: 'https://source.unsplash.com/random/200x300/?tech', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { id: 3, title: 'React Tips', image: 'https://source.unsplash.com/random/200x300/?react', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { id: 4, title: 'JavaScript', image: 'https://source.unsplash.com/random/200x300/?javascript', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
  ];

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      color: 'text.primary'
    }}>
      {/* Main Content */}
      <Container maxWidth="lg" sx={{ display: 'flex', pt: 3, gap: 3 }}>
        {/* Left Sidebar */}
        <Box sx={{ width: 250, display: { xs: 'none', md: 'block' } }}>
          <List>
            <ListItem button>
              <ListItemAvatar>
                <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
              </ListItemAvatar>
              <ListItemText primary="Christian Gadon" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'primary.main' }}>
                  <Group />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Communities" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'secondary.main' }}>
                  <Event />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Events" />
            </ListItem>
            <ListItem button>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: 'green' }}>
                  <BookmarkBorder />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Saved" />
            </ListItem>
          </List>
        </Box>

        {/* Main Feed */}
        <Box sx={{ flex: 1 }}>
          {/* Stories */}
          <Paper sx={{ 
            p: 2, 
            mb: 3, 
            borderRadius: 3,
            bgcolor: 'background.paper'
          }}>
            <Box sx={{ display: 'flex', overflowX: 'auto', gap: 1, pb: 1 }}>
              {stories.map(story => (
                <Box key={story.id} sx={{ 
                  minWidth: 120, 
                  position: 'relative', 
                  borderRadius: 2, 
                  overflow: 'hidden' 
                }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={story.image}
                    alt={story.title}
                  />
                  <Avatar 
                    src={story.avatar} 
                    sx={{ 
                      position: 'absolute', 
                      top: 8, 
                      left: 8, 
                      border: '3px solid', 
                      borderColor: 'primary.main' 
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 8, 
                      left: 8, 
                      color: 'white', 
                      fontWeight: 'bold' 
                    }}
                  >
                    {story.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Paper>

          {/* Create Post */}
          <Paper sx={{ 
            p: 2, 
            mb: 3, 
            borderRadius: 3,
            bgcolor: 'background.paper'
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" sx={{ mr: 2 }} />
              <TextField
                fullWidth
                placeholder="What's on your mind?"
                variant="outlined"
                size="small"
                sx={{
                  '& .MuiOutlinedInput-root': {
                    borderRadius: 10,
                    bgcolor: 'background.paper'
                  }
                }}
              />
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', pt: 1 }}>
              <Button startIcon={<Photo sx={{ color: 'green' }} />}>Photo</Button>
              <Button startIcon={<VideoCameraBack sx={{ color: 'red' }} />}>Video</Button>
              <Button startIcon={<EmojiEmotions sx={{ color: 'orange' }} />}>Feeling</Button>
            </Box>
          </Paper>

          {/* Posts */}
          {posts.map(post => (
            <Paper key={post.id} sx={{ 
              p: 2, 
              mb: 3, 
              borderRadius: 3,
              bgcolor: 'background.paper'
            }}>
              <CardHeader
                avatar={<Avatar src={post.avatar} />}
                action={
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                }
                title={post.author}
                subheader={post.time}
                sx={{ color: 'text.primary' }}
              />
              <CardContent>
                <Typography variant="body1" paragraph sx={{ color: 'text.primary' }}>
                  {post.content}
                </Typography>
                {post.image && (
                  <CardMedia
                    component="img"
                    height="400"
                    image={post.image}
                    alt="Post content"
                    sx={{ borderRadius: 2 }}
                  />
                )}
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between', px: 2 }}>
                <Button startIcon={<ThumbUp />} sx={{ color: 'text.secondary' }}>
                  {post.likes} Likes
                </Button>
                <Button startIcon={<ChatBubbleOutline />} sx={{ color: 'text.secondary' }}>
                  {post.comments} Comments
                </Button>
                <Button startIcon={<Share />} sx={{ color: 'text.secondary' }}>
                  {post.shares} Shares
                </Button>
              </CardActions>
            </Paper>
          ))}
        </Box>

        {/* Right Sidebar */}
        <Box sx={{ width: 300, display: { xs: 'none', lg: 'block' } }}>
          <Paper sx={{ 
            p: 2, 
            borderRadius: 3,
            bgcolor: 'background.paper'
          }}>
            <Typography variant="h6" gutterBottom sx={{ color: 'text.primary' }}>
              Contacts
            </Typography>
            <List>
              {[1, 2, 3, 4, 5].map((item) => (
                <ListItem button key={item}>
                  <ListItemAvatar>
                    <Avatar src={`https://randomuser.me/api/portraits/${item % 2 === 0 ? 'women' : 'men'}/${item}.jpg`} />
                  </ListItemAvatar>
                  <ListItemText 
                    primary={`Contact ${item}`} 
                    primaryTypographyProps={{ color: 'text.primary' }}
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Homepage;
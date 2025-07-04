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
  useTheme,
  useMediaQuery
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
  VideoCameraBack,
  Menu
} from '@mui/icons-material';

const Homepage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

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
      <Container maxWidth="lg" sx={{ 
        display: 'flex', 
        pt: isMobile ? 1 : 3, 
        gap: isMobile ? 0 : 3,
        flexDirection: isMobile ? 'column' : 'row'
      }}>
        {/* Left Sidebar - Hidden on mobile, shown on tablet and desktop */}
        {!isMobile && (
          <Box sx={{ 
            width: isTablet ? 200 : 250, 
            display: { xs: 'none', sm: 'block' },
            position: isMobile ? 'fixed' : 'static',
            zIndex: isMobile ? 1000 : 'auto',
            bgcolor: isMobile ? 'background.paper' : 'transparent',
            height: isMobile ? '100vh' : 'auto',
            left: 0,
            top: 0
          }}>
            <List>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" />
                </ListItemAvatar>
                {isDesktop && <ListItemText primary="Christian Gadon" />}
              </ListItem>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'primary.main' }}>
                    <Group />
                  </Avatar>
                </ListItemAvatar>
                {isDesktop && <ListItemText primary="Communities" />}
              </ListItem>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'secondary.main' }}>
                    <Event />
                  </Avatar>
                </ListItemAvatar>
                {isDesktop && <ListItemText primary="Events" />}
              </ListItem>
              <ListItem button>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: 'green' }}>
                    <BookmarkBorder />
                  </Avatar>
                </ListItemAvatar>
                {isDesktop && <ListItemText primary="Saved" />}
              </ListItem>
            </List>

            <Typography variant="h6" sx={{ 
              mt: 2, 
              mb: 1, 
              px: 2, 
              color: 'text.secondary' ,
              fontWeight: 'bold',
              fontFamily: 'Roboto, sans-serif'
            }}>
              Your Group Shortcuts
            </Typography>
             <ListItem button>
              <ListItemAvatar>
                <Avatar src='https://randomuser.me/api/portraits' sx={{ backgroundColor: 'blue'}}/>
              </ListItemAvatar>
              {isDesktop && <ListItemText primary="NBA Bets" />}
              </ListItem>
              <ListItem button>
              <ListItemAvatar>
                <Avatar src='https://randomuser.me/api/portraits' sx={{ backgroundColor: 'blue'}}/>
              </ListItemAvatar>
              {isDesktop && <ListItemText primary="Boys of Aerox" />}
              </ListItem>
              <ListItem button>
              <ListItemAvatar>
                <Avatar src='https://randomuser.me/api/portraits' sx={{ backgroundColor: 'blue'}}/>
              </ListItemAvatar>
              {isDesktop && <ListItemText primary="ERR212" />}
              </ListItem>
              <ListItem button>
              <ListItemAvatar>
                <Avatar src='https://randomuser.me/api/portraits' sx={{ backgroundColor: 'blue'}}/>
              </ListItemAvatar>
              {isDesktop && <ListItemText primary="NU MOA Hydroid" />}
              </ListItem>

          </Box>
        )}

        {/* Main Feed */}
        <Box sx={{ 
          flex: 1,
          width: '100%',
          maxWidth: isMobile ? '100%' : '600px',
          mx: isMobile ? 0 : 'auto'
        }}>
          {/* Stories */}
          <Paper sx={{ 
            p: isMobile ? 1 : 2, 
            mb: 2, 
            borderRadius: isMobile ? 0 : 3,
            bgcolor: 'background.paper',
            boxShadow: isMobile ? 'none' : theme.shadows[1]
          }}>
            <Box sx={{ 
              display: 'flex', 
              overflowX: 'auto', 
              gap: 1, 
              pb: 1,
              '&::-webkit-scrollbar': {
                display: 'none'
              }
            }}>
              {stories.map(story => (
                <Box key={story.id} sx={{ 
                  minWidth: isMobile ? 100 : 120, 
                  position: 'relative', 
                  borderRadius: 2, 
                  overflow: 'hidden' 
                }}>
                  <CardMedia
                    component="img"
                    height={isMobile ? 150 : 200}
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
                      borderColor: 'primary.main',
                      width: isMobile ? 32 : 40,
                      height: isMobile ? 32 : 40
                    }} 
                  />
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      position: 'absolute', 
                      bottom: 8, 
                      left: 8, 
                      color: 'white', 
                      fontWeight: 'bold',
                      fontSize: isMobile ? '0.75rem' : '0.875rem'
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
            p: isMobile ? 1 : 2, 
            mb: 2, 
            borderRadius: isMobile ? 0 : 3,
            bgcolor: 'background.paper',
            boxShadow: isMobile ? 'none' : theme.shadows[1]
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Avatar 
                src="https://randomuser.me/api/portraits/men/1.jpg" 
                sx={{ 
                  mr: 1,
                  width: isMobile ? 32 : 40,
                  height: isMobile ? 32 : 40
                }} 
              />
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
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              pt: 1,
              '& .MuiButton-root': {
                minWidth: 'auto',
                px: isMobile ? 0.5 : 1,
                fontSize: isMobile ? '0.75rem' : '0.875rem'
              }
            }}>
              <Button startIcon={<Photo sx={{ color: 'green', fontSize: isMobile ? 'small' : 'medium' }} />}>
                {isDesktop ? 'Photo' : ''}
              </Button>
              <Button startIcon={<VideoCameraBack sx={{ color: 'red', fontSize: isMobile ? 'small' : 'medium' }} />}>
                {isDesktop ? 'Video' : ''}
              </Button>
              <Button startIcon={<EmojiEmotions sx={{ color: 'orange', fontSize: isMobile ? 'small' : 'medium' }} />}>
                {isDesktop ? 'Feeling' : ''}
              </Button>
            </Box>
          </Paper>

          {/* Posts */}
          {posts.map(post => (
            <Paper key={post.id} sx={{ 
              p: isMobile ? 1 : 2, 
              mb: 2, 
              borderRadius: isMobile ? 0 : 3,
              bgcolor: 'background.paper',
              boxShadow: isMobile ? 'none' : theme.shadows[1]
            }}>
              <CardHeader
                avatar={<Avatar src={post.avatar} sx={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40 }} />}
                action={
                  <IconButton size={isMobile ? 'small' : 'medium'}>
                    <MoreVert fontSize={isMobile ? 'small' : 'medium'} />
                  </IconButton>
                }
                title={post.author}
                subheader={post.time}
                sx={{ 
                  color: 'text.primary',
                  '& .MuiCardHeader-title': {
                    fontSize: isMobile ? '0.875rem' : '1rem'
                  },
                  '& .MuiCardHeader-subheader': {
                    fontSize: isMobile ? '0.75rem' : '0.875rem'
                  },
                  p: isMobile ? 1 : 2
                }}
              />
              <CardContent sx={{ p: isMobile ? 1 : 2 }}>
                <Typography variant="body1" paragraph sx={{ 
                  color: 'text.primary',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                  mb: isMobile ? 1 : 2
                }}>
                  {post.content}
                </Typography>
                {post.image && (
                  <CardMedia
                    component="img"
                    height={isMobile ? 200 : 400}
                    image={post.image}
                    alt="Post content"
                    sx={{ borderRadius: 1 }}
                  />
                )}
              </CardContent>
              <CardActions sx={{ 
                justifyContent: 'space-between', 
                px: isMobile ? 1 : 2,
                '& .MuiButton-root': {
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                  minWidth: 'auto'
                }
              }}>
                <Button startIcon={<ThumbUp fontSize={isMobile ? 'small' : 'medium'} />} sx={{ color: 'text.secondary' }}>
                  {post.likes} Likes
                </Button>
                <Button startIcon={<ChatBubbleOutline fontSize={isMobile ? 'small' : 'medium'} />} sx={{ color: 'text.secondary' }}>
                  {post.comments} Comments
                </Button>
                <Button startIcon={<Share fontSize={isMobile ? 'small' : 'medium'} />} sx={{ color: 'text.secondary' }}>
                  {post.shares} Shares
                </Button>
              </CardActions>
            </Paper>
          ))}
        </Box>

        {/* Right Sidebar - Hidden on mobile and tablet, shown on desktop */}
        {isDesktop && (
          <Box sx={{ 
            width: 300, 
            display: { xs: 'none', lg: 'block' }
          }}>
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
                  <ListItem sx={{borderRadius: 10}} button key={item}>
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
        )}
      </Container>
    </Box>
  );
};

export default Homepage;
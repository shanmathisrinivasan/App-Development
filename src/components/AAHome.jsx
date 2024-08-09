import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/AAHome.css';
import { Button, AppBar, Toolbar, Container, Typography, Card, CardContent, Grid } from '@mui/material';

const AAHome = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="main-container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <AppBar className="app-bar" position="static">
        <Toolbar>
          <div className="app-bar-buttons">
            <Button color="inherit" component={Link} to="/ahome" className="login-button">
              Login/Signup
            </Button>
            <Button color="inherit" component={Link} to="/aboutus" className="login-button">
              About Us
            </Button>
            <Button color="inherit" component={Link} to="/contact" className="login-button">
              Contact
            </Button>
            <Button color="inherit" component={Link} to="/premium" className="login-button">
              E&B Premium
            </Button>
            

          </div>
        </Toolbar>
      </AppBar>
      <div className="background" style={{ flexGrow: 1 }}>
        <h1>Earth & Beyond</h1>
      </div>
      <Container className="project-description" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '8px', padding: '20px', maxWidth: '600px', marginTop: '20px' }}>
        <Typography variant="h6" gutterBottom style={{ color: 'white', fontFamily: 'monospace' }}>
          Welcome to Earth & Beyond, an interactive children's book and education portal designed to inspire young minds. Our mission is to combine the joy of storytelling with the power of education, providing a captivating learning experience for children. Through engaging content, interactive activities, and a user-friendly interface, we aim to foster curiosity, creativity, and a love for learning.
        </Typography>
      </Container>
      <Container
        style={{
          backgroundImage: `url('https://img-cdn.pixlr.com/image-generator/history/66a5f37c0e07be26eed01c0c/f6cc432c-772d-49ce-952b-42f6d290953c/preview.webp')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '8px',
          padding: '20px',
          maxWidth: '800px',
          marginTop: '20px',
          marginBottom: '40px',
          minHeight:'400px'
        }}
      >
        <Typography variant="h6" gutterBottom style={{ color: 'black', fontFamily: 'monospace' }}>
          Explore the wonders of our planet and beyond with stunning visuals and engaging content that will take your breath away.
        </Typography>
      </Container>
      <Container className="content-section" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '8px', padding: '20px', maxWidth: '800px', marginTop: '20px', marginBottom: '40px' }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Card style={{ borderRadius: '12px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom style={{ color: 'white', fontFamily: 'monospace' }}>
                  Interactive Stories
                </Typography>
                <Typography variant="body2" style={{ color: 'white', fontFamily: 'monospace' }}>
                  Dive into a world of imagination with our interactive stories. Each story is designed to captivate and educate, blending narrative with interactive elements.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ borderRadius: '12px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <CardContent>
                <Typography variant="h5" component="div" style={{ color: 'white', fontFamily: 'monospace' }}>
                  Educational Games
                </Typography>
                <Typography variant="body2" style={{ color: 'white', fontFamily: 'monospace' }}>
                  Enhance learning through play with our educational games. These games are tailored to reinforce concepts and skills in a fun and engaging way.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ borderRadius: '12px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <CardContent>
                <Typography variant="h5" component="div" style={{ color: 'white', fontFamily: 'monospace' }}>
                  Learning Resources
                </Typography>
                <Typography variant="body2" style={{ color: 'white', fontFamily: 'monospace' }}>
                  Access a variety of learning resources, including videos, quizzes, and activities that complement the interactive stories and games.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={{ borderRadius: '12px', backgroundColor: 'rgba(0, 0, 0, 0.7)' }}>
              <CardContent>
                <Typography variant="h5" component="div" style={{ color: 'white', fontFamily: 'monospace' }}>
                  Parent & Teacher Portal
                </Typography>
                <Typography variant="body2" style={{ color: 'white', fontFamily: 'monospace' }}>
                  Our dedicated portal for parents and teachers provides tools and resources to track progress, set learning goals, and support children’s educational journey.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '20px' }}>
        <Container className="project-description" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '8px', padding: '20px', maxWidth: '400px', marginLeft:'300px' }}>
          <Typography variant="h6" gutterBottom style={{ color: 'white', fontFamily: 'monospace' }}>
            Play games, read interactive stories and discover a fun approach to learning!
          </Typography>
        </Container>
        <img
          src="https://img-cdn.pixlr.com/image-generator/history/66a631200e07be26eed13335/29c2fe34-0f49-423a-b430-dc9d6b8b2d8b/preview.webp"
          alt="Learning"
          style={{ borderRadius: '8px', width: '300px', height: 'auto', marginRight: '100px' }}
        />
        <img
          src="https://img-cdn.pixlr.com/image-generator/history/66a6334cfa221242fa65741c/5c084def-e6d9-4dc7-a9e1-2b88a7979be5/preview.webp"
          alt="Learning"
          style={{ borderRadius: '8px', width: '300px', height: 'auto', marginRight: '100px' }}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', marginTop: '60px' }}>
        <Container className="project-description" style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)', borderRadius: '8px', padding: '20px', maxWidth: '700px', marginLeft:'100px' }}>
          <Typography variant="h6" gutterBottom style={{ color: 'white', fontFamily: 'monospace' }}>
          Interactive educational games and quizzes are dynamic tools designed to enhance learning by making it engaging and enjoyable. These activities blend educational content with game-like elements, fostering motivation and retention of information. By challenging students with quizzes and interactive tasks, they not only reinforce knowledge but also develop critical thinking and problem-solving skills. The interactive nature ensures active participation, making learning a more immersive and effective experience.
          </Typography>
        </Container>
        <img
          src="https://home.microsoftpersonalcontent.com/contentstorage/coJsE0OdIkqu2uEOCncHOQAAAAAAAAAAZL2eaINm52g/_layouts/15/download.aspx?UniqueId=0ac8390b-43e0-4238-b376-98fc6f163cc6&Translate=false&tempauth=v1e.eyJzaXRlaWQiOiI1ZGY2MGRjYy1mMjJhLTQyMDQtOWYzOS03NTRlYzM1NTAxMzYiLCJhcHBfZGlzcGxheW5hbWUiOiJEZXNpZ25lciIsImFwcGlkIjoiNWUyNzk1ZTMtY2U4Yy00Y2ZiLWIzMDItMzVmZTVjZDAxNTk3IiwiYXVkIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwL2hvbWUubWljcm9zb2Z0cGVyc29uYWxjb250ZW50LmNvbUA5MTg4MDQwZC02YzY3LTRjNWItYjExMi0zNmEzMDRiNjZkYWQiLCJleHAiOiIxNzIyMzM3MDQ4In0.v4FBODsxJD8tO_ys8vxkJpOijBsz5qpHnqo4H2uoMt0Npb35UDjvZo_eBgwbam0vYBioGdIVfOcYv-OvWX4_18uSNPk5KRyfdST-UIOa2gMo_f9pdyAOOUw3fz_91o___LV5Ztb61_ieHarnRu6jL4qdyUqIAKTJPL6JUvGD5NRNORGAZoK6fAYY14V30Y4CReiK8Wv2kRYyEHfyg_EwKzy4Hiw5PxzE6rGv3UwbkoH5M2muim3KWC25Y6JEuLc4E7wtxTvxrPYbgt13oN6DiJVN3w2ZIj3Xv_b5SWdaeHnkjS73p5EGf5lSV2xuJOhE69Nfv9QUlZIKVY18be-b4tlpWYbiPQafZs7bZi9-dySwlnbk1rqypHOSGhlScg-BqM0APOl0FgB-sEcYU3Da8g.9lyPtNLMRO139Jt6Ju1K2uhWs7k_KX4yHvezg0BBtn8&ApiVersion=2.1"
          alt="Learning"
          style={{ borderRadius: '8px', width: '300px', height: 'auto', marginRight: '300px' }}
        />
      </div>
    </div>
  );
}

export default AAHome;

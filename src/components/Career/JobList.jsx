import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const cardsPerPage = 3;

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const [visibleCards, setVisibleCards] = React.useState(cardsPerPage);

  const handleShowMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + cardsPerPage);
  };

  return (

     <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: 'url(./images/BG_2.jpg)', // Replace with your image URL
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding:'2% 0',
          // // minHeight: '100vh',
          // display: 'flex',
          // flexDirection: 'column',
        }}
      >
        <main>
          <Box
            sx={{
              pt: 3,
              pb: 6,
            }}
          >
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                Open Positions
              </Typography>
              <Stack
                sx={{ pt: 2 }}
                direction="row"
                spacing={2}
                justifyContent="center"
              >
                <Button variant="contained">Internships</Button>
                <Button variant="outlined">Full-Time</Button>
              </Stack>
            </Container>
          </Box>

          <Container sx={{ py: 2 }} maxWidth="lg">
            <Grid container spacing={2}>
              {cards.slice(0, visibleCards).map((card) => (
                <Grid item key={card} xs={12} sm={4} md={4}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        Heading
                      </Typography>
                      <Typography>
                        This is a media card. You can use this section to describe the
                        content.
                      </Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">Apply</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {visibleCards < cards.length && (
              <Button variant="outlined" onClick={handleShowMore} sx={{ mt: 2 }}>
                Show More
              </Button>
            )}
          </Container>
        </main>
      </Box>
    </ThemeProvider>
  );
}
import React, { useEffect, useState } from 'react';
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
import {useNavigate } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [visibleJobs, setVisibleJobs] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState('internships');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://20.244.24.5:8000/api/jobforms/');
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleShowMore = () => {
    setVisibleJobs((prevVisibleJobs) => prevVisibleJobs + 3);
  };

  const filterJobs = () => {
    if (selectedCategory === 'internships') {
      return jobs.filter((job) => job.employment_type.toLowerCase() === 'internship').slice(0, visibleJobs);
    } else {
      return jobs.filter((job) => job.employment_type.toLowerCase() !== 'internship').slice(0, visibleJobs);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleApplyClick = (job) => {
    navigate(`/applyjobform/${job.id}`, { state: { job } });
    // window.location.reload(); 
    window.scrollTo(0, 0);
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <Box
        sx={{
          backgroundImage: 'url(../images/BG_2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '2% 0',
        }}
      >
        <main>
          <Box sx={{ pt: 3, pb: 6 }}>
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
              <Stack sx={{ pt: 2 }} direction="row" spacing={2} justifyContent="center">
                <Button
                  variant={selectedCategory === 'internships' ? 'contained' : 'outlined'}
                  onClick={() => handleCategoryChange('internships')}
                >
                  Internships
                </Button>
                <Button
                  variant={selectedCategory === 'fullTime' ? 'contained' : 'outlined'}
                  onClick={() => handleCategoryChange('fullTime')}
                >
                  Full-Time
                </Button>
              </Stack>
            </Container>
          </Box>

          <Container sx={{ py: 2 }} maxWidth="lg">
            <Grid container spacing={2}>
              {filterJobs().map((job) => (
                <Grid item key={job.id} xs={12} sm={4} md={4}>
                  <Card
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      padding:"3%",
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {job.position}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                        sx={{
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 3,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {job.description}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Experience: {job.experience}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Skills: {job.skills}
                      </Typography>
                    </CardContent>
                    <CardActions>
                    <Button size="small" onClick={() => handleApplyClick(job)}>
              Apply
            </Button>
          </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
            {visibleJobs < jobs.length && (
              <Button variant="outlined" onClick={handleShowMore} sx={{ mt: 2 }}>
                Show More
              </Button>
            )}
          </Container>
        </main>
      </Box>
    </ThemeProvider>
  );
};

export default JobList;

import React, { useEffect } from 'react';
import { Button, Typography, Container, Box } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { keyframes } from '@emotion/react';
import innow8 from '../assets/images/innow8.jpg';  // Update with the correct path to your logo

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LoginPage = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'url(https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/277573137_466174695304464_2735799842644440087_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lQWsZ2xTvlIQ7kNvgFqwa2G&_nc_zt=23&_nc_ht=scontent.fluh1-1.fna&_nc_gid=ADUgBv7vwZl26sWbR8FaBq0&oh=00_AYBgylCByxjSrfNn8GlVHE03cUSw-6UP3ZDAIZDSh6qE4A&oe=6747D493) no-repeat center center/cover', 
        animation: `${fadeIn} 4s cubic-bezier(0.4, 0, 0.2, 1)`,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          animation: `${fadeIn} 2s ease`,
        }}
      >
        <img src={innow8} alt="My Application Logo" width="100" style={{ marginBottom: '20px' }} />
        <Typography variant="h3" gutterBottom>
          Welcome to Team Management App
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, color: '#1976d2' }}>
          "Teamwork makes the dream work!"
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => loginWithRedirect()}
          sx={{ backgroundColor: '#1976d2', padding: '10px 20px' }}
        >
          Login / Sign Up
        </Button>
      </Container>
    </Box>
  );
};

export default LoginPage;


// import React, { useEffect } from 'react';
// import { Button, Typography, Container, Box } from '@mui/material';
// import { useAuth0 } from '@auth0/auth0-react';
// import { useNavigate } from 'react-router-dom';
// import { keyframes } from '@emotion/react';
// import innow8 from '../assets/innow8.jpg';  // Update with the correct path to your logo

// const fadeIn = keyframes`
//   from {
//     opacity: 0;
//   }
//   to {
//     opacity: 1;
//   }
// `;

// const LoginPage = () => {
//   const { loginWithRedirect, isAuthenticated } = useAuth0();
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (isAuthenticated) {
//       navigate('/dashboard');
//     }
//   }, [isAuthenticated, navigate]);

//   return (
//     <Box
//       sx={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         background: 'url(https://scontent.fluh1-1.fna.fbcdn.net/v/t39.30808-6/277573137_466174695304464_2735799842644440087_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=lQWsZ2xTvlIQ7kNvgFqwa2G&_nc_zt=23&_nc_ht=scontent.fluh1-1.fna&_nc_gid=ADUgBv7vwZl26sWbR8FaBq0&oh=00_AYBgylCByxjSrfNn8GlVHE03cUSw-6UP3ZDAIZDSh6qE4A&oe=6747D493) no-repeat center center/cover', 
//         animation: `${fadeIn} 4s cubic-bezier(0.4, 0, 0.2, 1)`,
//       }}
//     >
//       <Container
//         maxWidth="sm"
//         sx={{
//           backgroundColor: 'rgba(255, 255, 255, 0.8)',
//           padding: '40px',
//           borderRadius: '8px',
//           boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//           textAlign: 'center',
//           animation: `${fadeIn} 2s ease`,
//         }}
//       >
//         <img src={innow8} alt="My Application Logo" width="100" style={{ marginBottom: '20px' }} />
//         <Typography variant="h3" gutterBottom>
//           Welcome to Team Management App
//         </Typography>
//         <Typography variant="h6" sx={{ mb: 4, color: '#1976d2' }}>
//           "Teamwork makes the dream work!"
//         </Typography>
//         <Button
//           variant="contained"
//           color="primary"
//           onClick={() => loginWithRedirect()}
//           sx={{ backgroundColor: '#1976d2', padding: '10px 20px' }}
//         >
//           Login / Sign Up
//         </Button>
//       </Container>
//     </Box>
//   );
// };

// export default LoginPage;


// require('dotenv').config();  
// const express = require('express');
// const mongoose = require('mongoose');
// const path = require('path');
// const cors = require('cors'); 
// const applicationRoutes = require('./routes/applicationRoutes');

// const app = express();
// const port = process.env.PORT || 3000;

// console.log("MONGO_URI:", process.env.MONGO_URI ? "Defined" : "Undefined");


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));


// app.use(cors());

// // Serve static files from uploads directory
// app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// // MongoDB connection
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// }).then(() => {
//   console.log('Connected to MongoDB');
// }).catch(err => {
//   console.error('MongoDB connection error:', err);
//   // Don't crash the server, but log the error
// });

// // Use application routes
// app.use('/api', applicationRoutes);

// // Error handling middleware
// app.use((err, req, res, next) => {
//   console.error('Server error:', err);
//   res.status(500).json({ 
//     message: 'An error occurred on the server', 
//     error: process.env.NODE_ENV === 'development' ? err.message : undefined
//   });
// });

// // Start server
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });








require('dotenv').config();  
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors'); 
const applicationRoutes = require('./routes/applicationRoutes');
const jobpost = require('./routes/Jobpost')

const app = express();

const port = process.env.PORT ; // Make sure this matches your frontend fetch URL

console.log("MONGO_URI:", process.env.MONGO_URI ? "Defined" : "Undefined");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Updated CORS configuration
app.use(cors({
  origin: ['https://job-portal-0dok.onrender.com', 'http://localhost:5173','http://localhost:5174','http://localhost:5175'], // ⬅️ array of URLs
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.error('MongoDB connection error:', err);
  // Don't crash the server, but log the error
});

// Use application routes
app.use('/api', applicationRoutes);
app.use('/job', jobpost);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({ 
    message: 'An error occurred on the server', 
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
const express = require('express');
const app = express();
const sequelize = require('./config/db.config');
const path = require('path');

const imageRoutes = require('./routes/image.routes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Use image routes
app.use('/api/images', imageRoutes);

// Route to serve admin.html
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'admin', 'admin.html'));
});

// Route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Sync database and start server
sequelize.sync().then(() => {
  console.log('Database connected and synced.');
  app.listen(3000, () => {
    console.log('Server is running on port 3000.');
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

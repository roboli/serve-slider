// Set default node environment to development
export const env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if(env !== 'production') {
  // Load values from .env
  require('dotenv').config();
}

export const port = process.env.PORT || 3040;

export const picturesDir = process.env.PICTURES_DIR || __dirname;

export const shufflePictures = process.env.SHUFFLE_PICTURES === 'true';

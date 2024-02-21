# Text to Image Converter App

This repository contains a text to image converter application that utilizes the Stable Diffusion Hugging Face API for generating images from text inputs. The application is built with React for the frontend, providing an intuitive user interface for converting text to images. The app also includes a feature to download the generated images.

## Features

- Convert text to images using the Stable Diffusion Hugging Face API.
- Intuitive and user-friendly interface built with React.
- Download feature allows users to save the generated images locally.
- Hosted on Netlify for easy accessibility.

## Installation and Setup

To run this application locally or customize it according to your needs, follow these steps:

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/dattu9133/text-to-image.git
   ```

2. Navigate to the project directory:

   ```
   cd text-to-image-converter
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your Hugging Face API key:

   ```
   REACT_APP_HUGGING_FACE_API_KEY=your_api_key_here
   ```

   Replace `your_api_key_here` with your actual Hugging Face API key.

5. Start the development server:

   ```
   npm start
   ```

   This will launch the application locally. You can access it at `http://localhost:3000` in your web browser.

## Usage

1. Enter the desired text input in the provided text area.
2. Click on the "Generate Image" button to convert the text to an image.
3. Once the image is generated, you can preview it on the screen.
4. To download the generated image, click on the "Download Image" button.

## Customization

You can customize the application according to your requirements:

- **UI/UX**: Modify the components and styles in the `src/components` directory to change the look and feel of the application.
- **Functionality**: Alter the logic in `src/components/ImageGen.jsx` to add or modify features such as error handling, additional API integrations, or image processing.
- **API Key**: If you want to use a different API or replace the current one, update the `.env` file with the new API key and adjust the API integration code accordingly.

## Deployment

The application is currently hosted on Netlify for easy access. To deploy your own instance:


## Contributors

- [Datta sai Moganti ](https://github.com/dattu9133)

Feel free to contribute to this project by submitting bug reports, feature requests, or pull requests.


import React, { useState } from 'react';
import {
  ChakraProvider,
  Heading,
  Container,
  Input,
  Stack,
  Image,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const ImageGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [generatedImage, setGeneratedImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const Api = "your_api_key_here";

  const handleGenerateImage = () => {
    setLoading(true);
    try {
      fetch('https://api-inference.huggingface.co/models/CompVis/stable-diffusion-v1-4', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${Api}`
        },
        body: JSON.stringify({ inputs: inputText }),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.blob();
        })
        .then((blob) => {
          setGeneratedImage(URL.createObjectURL(blob));
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error('Error generating image:', error);
        });
    } catch (error) {
      setLoading(false);
      console.error('Error generating image:', error);
    }
  };

  const handleDownloadImage = () => {
    if (generatedImage) {
      const link = document.createElement('a');
      link.href = generatedImage;
      link.download = 'generated_image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleGenerateImage();
    }
  };

  return (
    <ChakraProvider className='bg-dark w-50'>
      <Heading className="text-center"><span className='text-primary'>AI Image </span> Generator</Heading>
      <div>
        <p className="text-center mt-3" style={{
          fontSize: '1.1rem',
          margin: '0 auto',
          width: '80%',
          fontWeight: '200',
        }}>Dream it up, then add it to your design. Watch your words and phrases transform into beautiful images with the best AI image generator apps available at your fingertips. Stand out with an image perfect for your project.</p>
      </div>
      <Container className='my-5 container-fluid p-3 p-sm-5 bg-dark text-light' style={{
        fontSize: '1.1rem',
        border: '1px solid black',
        borderRadius: '10px',
        boxShadow: '0 0 25px rgba(112, 0, 255, 0.5)',
      }}>
        <div className="form-container">
          <label htmlFor="inputText">Create an image from text prompt</label>
          <Input
            type="text"
            className="form-control mt-3 "
            placeholder="Write your prompt here ...."
            id="inputText"
            backgroundColor={'#fff'}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress} // Trigger image generation on "Enter" key press
          />
          <button className="btn btn-outline-primary mt-3" style={{
            fontSize: '1.1rem',
            fontWeight: '400',
          }} onClick={handleGenerateImage}>Generate Image</button>
        </div>

        <div className="image-container mt-3 mx-auto">
          {loading ? (
            <Stack>
              <SkeletonCircle />
              <SkeletonText />
            </Stack>
          ) : generatedImage ? (
            <Image
              src={generatedImage}
              boxShadow="lg"
              style={{
                boxShadow: '0 0 20px rgba(256,256,256,0.3)',
                borderRadius: '5px',
                width: '100%',
                aspectRatio: '16/9',
                objectFit: 'fill',
                objectPosition: 'center center',
              }}
              className="img-fluid"
              alt="Generated"
            />
          ) : null}
          <br />
          {generatedImage && !loading && (
            <button className="btn btn-outline-success mt-3" style={{
              fontSize: '1.1rem',
              fontWeight: '400',
            }} onClick={handleDownloadImage}>Download Image</button>
          )}
        </div>
      </Container>
    </ChakraProvider>
  );
};

export default ImageGenerator;

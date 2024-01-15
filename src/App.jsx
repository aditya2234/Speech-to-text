import './App.css'
import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Dictaphone = () => {
  const {
    transcript,
    
    resetTranscript,
    
  } = useSpeechRecognition();

  // if (!browserSupportsSpeechRecognition) {
  //   SpeechRecognition.startListening({ continuous: true })
  // }
  // else{
  //   return <span>Browser doesn't support speech recognition.</span>;
  // }
  const handleStart =()=>{
  SpeechRecognition.startListening({ continuous: true })
  
  }

  return (
    <div>
    <div className="container">
      <h2>Speech to Text Converter</h2>
      <br />
      <p>A React hook that converts speech from the microphone to text and makes it available to your React
        components.</p>

      <div className="main-content" >
        {transcript}
      </div>

      <div className="btn-style">


        {/* <p>Microphone: {listening ? 'on' : 'off'}</p> */}
        <button onClick={handleStart}>Start</button>
        <button onClick={SpeechRecognition.stopListening}>Stop</button>
        <button onClick={resetTranscript}>Reset</button>
        

      </div>

    </div>
    </div>
  );
};
export default Dictaphone;
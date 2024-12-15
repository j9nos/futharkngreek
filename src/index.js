import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { WritingSystemProvider } from './components/WritingSystemContext';
import TextConverter from './components/TextConverter';

const App = () => {
  return (
    <WritingSystemProvider>
      <TextConverter />
    </WritingSystemProvider>
  )
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);


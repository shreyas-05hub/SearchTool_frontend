import React from 'react';
import { createRoot } from 'react-dom/client';
import MainPage from './components/MainPage';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<MainPage />);

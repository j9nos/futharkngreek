import React, { createContext, useContext, useState } from 'react';
import { characterMapping } from '../data/characterMapping';

const WritingSystemContext = createContext();

const WritingSystemProvider = ({ children }) => {
    const [writingSystem, setWritingSystem] = useState('futhark');

    const convertText = (text) => {
        const normalizedText = text.normalize('NFD').replace(/[̀-ͯ]/g, '');
        return normalizedText.split('').map(char => characterMapping[char]?.[writingSystem] || char).join('');
    };

    return (
        <WritingSystemContext.Provider value={{ writingSystem, setWritingSystem, convertText }}>
            {children}
        </WritingSystemContext.Provider>
    );
};

const useWritingSystem = () => useContext(WritingSystemContext);

export { WritingSystemProvider, useWritingSystem };

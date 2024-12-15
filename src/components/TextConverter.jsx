import React, { useEffect, useState } from 'react';
import { useWritingSystem } from './WritingSystemContext';

const TextConverter = () => {
    const { writingSystem, setWritingSystem, convertText } = useWritingSystem();
    const [text, setText] = useState('');

    useEffect(() => {
        setText('');
        document.title = writingSystem.toUpperCase();
    }, [writingSystem]);

    const handleTextChange = (e) => {
        setText(convertText(e.target.value));
    };

    return (
        <div className={`TextConverter ${writingSystem}`}>
            <button onClick={() => setWritingSystem(writingSystem === 'futhark' ? 'greek' : 'futhark')}>
                {convertText('Toggle!')}
            </button>
            <textarea value={text} onChange={handleTextChange} />
        </div>
    );
};

export default TextConverter;

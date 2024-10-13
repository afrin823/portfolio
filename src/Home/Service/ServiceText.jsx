import { Cursor, useTypewriter } from 'react-simple-typewriter';

const ServiceText = () => {
    const [text] = useTypewriter({
        words: ['WHAT I DO', 'WHAT I DO'],
        loop: 2,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <div className='App'>
        <span>{text}</span>
        <Cursor cursorColor='yellow' />
      </div>
    );
};

export default ServiceText;
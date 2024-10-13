import { useTypewriter, Cursor } from 'react-simple-typewriter'

const BannerText = () => {
    const [text] = useTypewriter({
        words: ['I am Sabikun Nahar Afrin', 'I am a React Developer', 'I am a Mern-Stact Developer'],
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

export default BannerText;
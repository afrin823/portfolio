import { Cursor, useTypewriter } from "react-simple-typewriter";

const AboutText = () => {
    const [text] = useTypewriter({
        words: ['About Me', 'About Me'],
        loop: 2,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
      })
    return (
        <div>
                   <span>{text}</span>
                   <Cursor cursorColor='yellow' />
        </div>
    );
};

export default AboutText;
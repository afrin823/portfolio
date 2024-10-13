import { Cursor, useTypewriter } from "react-simple-typewriter";

const SKillText = () => {
    const [text] = useTypewriter({
        words: ['My Skills', 'My Skills'],
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

export default SKillText;
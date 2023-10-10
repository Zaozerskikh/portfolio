import React, {useEffect, useMemo, useRef, useState} from "react";
import {formatText} from "../../models/TextFormatter";

interface TextFormatterComponentProps {
  text: string;
  additionalStyles: string;
  letterWidth: number
}

const TextFormatterComponent: React.FC<TextFormatterComponentProps> = ({ text, additionalStyles, letterWidth}) => {
  const textContainerRef = useRef<HTMLDivElement | null>(null);
  const [textWidthInPixels, setTextWidthInPixels]
    = useState<number>(window.innerWidth - 32);

  useEffect(() => {
    const handleResize = () => {
      if (textContainerRef.current) {
        setTextWidthInPixels(textContainerRef.current.clientWidth);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const formattedText = useMemo(() => {
    return formatText(text, textWidthInPixels, letterWidth)
  }, [letterWidth, textWidthInPixels, text])

  return(
    <div
      ref={textContainerRef}
      style={{ display: 'flex', width: '100%'}}
      className={additionalStyles}
      dangerouslySetInnerHTML={{ __html: formattedText}}
    />
  )
}

export default TextFormatterComponent

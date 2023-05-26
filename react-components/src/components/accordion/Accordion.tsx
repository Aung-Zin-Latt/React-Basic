import { createContext, useContext } from 'react';
// import { useState } from 'react'
import useToggle from '../hooks/useToggle';

// Create context api
const AccordionContext = createContext();
const { Provider } = AccordionContext;


// We receive (title & content) properties as a props
const Accordion = (props) => {
    const { title, content } = props;
    // const [expand, setExpand] = useState(false);


    const { status: expand, toggleStatus: toggleExpand } = useToggle(); // Reusable Components

    // const toggleExpand = () => setExpand(prevExpand => !prevExpand);

    const value = {
        expand,
        toggleExpand
    };

    return (
        // <div className='accordion'>
        //     <button onClick={toggleExpand}>
        //         {/* wee call title instead of using "expand" */}
        //         {title} <span>{title ? '-' : '+'}</span>
        //     </button>
        //     {/* {expand && <div className='content'>This is a content!</div>} */}

        //     {/* So we can update our code below */}
        //     {expand && <div className='content'>{ content }</div>}
        // </div>
        <Provider value={value}>
            <div className='accordion'>
                <AccordionHeader>{title}</AccordionHeader>
                <AccordionContent>{content}</AccordionContent>
            </div>
        </Provider>
    );
};

// Instead of writing like in return(), we will create Header & content in order to maintain easily
// Header component
const AccordionHeader = ({ children }) => {
    // const {  title } = props;
    const {expand, toggleExpand} = useContext(AccordionContext);
    return (
        <button onClick={toggleExpand}>
            {/* {children} <span>{expand ? '-' : '+'}</span> */}
            {children}
            <AccordionIcon />
        </button>
    )
}

// Icon component
const AccordionIcon = () => {
    const { expand } = useContext(AccordionContext);
    return <span>{expand ? '-' : '+'}</span>
}

// Content component
const AccordionContent = ({ children }) => {
    // const { content } = props;
    const { expand } = useContext(AccordionContext);
    return (
        <>
            {expand && <div className='content'>{ children }</div>}
        </>
    )
}

export default Accordion;
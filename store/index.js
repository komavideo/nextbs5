import { createContext, useState } from 'react';

const MyWebContext = createContext({
    count: 0,
    addCount: function () { },
    minusCount: function () { },
});

export default MyWebContext;

export function MyWebContextProvider(props) {
    const [count, setCount] = useState(100);

    const addCount = () => {
        setCount(count + 1)
    }
    const minusCount = () => {
        setCount(count - 1)
    }

    const context = {
        count,
        addCount,
        minusCount,
    };

    return (
        <MyWebContext.Provider value={context}>
            {props.children}
        </MyWebContext.Provider>
    );
}
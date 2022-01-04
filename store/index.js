import { createContext, useState } from 'react';

const MyWebContext = createContext({
    count: 0,
    addCount: function () { },
    minusCount: function () { },
    user: {},
    authUser: function (obj) { },
});

export default MyWebContext;

export function MyWebContextProvider(props) {
    const [count, setCount] = useState(100);
    const [user, setUser] = useState(null);

    const addCount = () => {
        setCount(count + 1)
    }
    const minusCount = () => {
        setCount(count - 1)
    }
    const authUser = (obj) => {
        setUser(obj)
    }

    const context = {
        count,
        addCount,
        minusCount,
        user,
        authUser,
    };

    return (
        <MyWebContext.Provider value={context}>
            {props.children}
        </MyWebContext.Provider>
    );
}
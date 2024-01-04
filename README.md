#React-Quiz

## useReducer Hook

        const[state,dispatch] = useReducer(reducer,initialArg)

useReducer function takes two arguments and it returns state and dispatch.

1. reducer function.
2. initialArg.

### reducer function

- reducer function is a pure function.
- reducer function takes previous state and action as argument and will return next state.

### Demonstration.

        import { useReducer } from "react";
        function reducer(state, action) {
        console.log(state, action);
        if (action.type === "inc") return state + action.payLoad;
        if (action.type === "dec") return state - action.payLoad;
        if (action.type === "setState") return action.payLoad;
        }

        function DateCounter() {
        const [count, dispatch] = useReducer(reducer, 0);

        // This mutates the date object.
        const date = new Date("june 21 2027");
        date.setDate(date.getDate() + count);

        const dec = function () {
            dispatch({ type: "dec", payLoad: -1 });
        };

        const inc = function () {
            dispatch({ type: "inc", payLoad: 1 });
        };

        const defineCount = function (e) {
            dispatch({ type: "setCount", payLoad: Number(e.target.value) });
        };

        return (
            <div className="counter">

            <div>
                <button onClick={dec}>-</button>
                <input value={count} onChange={defineCount} />
                <button onClick={inc}>+</button>
            </div>
            <p>{date.toDateString()}</p>
            </div>
        );
        }
        export default DateCounter;

Output:

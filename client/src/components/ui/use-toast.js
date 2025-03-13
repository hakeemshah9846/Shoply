import reducer from "@/store/auth-slice";
import * as React from "react";


let memoryState = {toasts : []};
const listeners = [];

function dispatch(action) {
    memoryState = reducer(memoryState, action);
    listeners.forEach((listener) => {
        listener(memoryState);
    })
}

let count = 0;

function genId() {
    count = (count + 1) % Number.MAX_SAFE_INTEGER;
    return count.toString();
}

function toast({...props}) {
    const id = genId();

    const update = (props) => 
        dispatch({
            type : "UPDATE_TOAST",
            toast : {...props, id},
        })
    const dismiss = () => dispatch({type : "DISMISS_TOAST", toastId : id});

        dispatch({
            type : "ADD_TOAST",
            toast : {
                ...props,
                id,
                open : true,
                openChange : (open) => {
                    if(!open) dismiss()
                },
            },

        });

        return {
            id : id,
            dismiss,
            update,
        }

        
}

function useToast() {
    const [state, setState] = React.useState(memoryState);

    React.useEffect(() => {
        listeners.push(setState);
        return () => {
            const index = listeners.indexOf(setState);
            if(index > -1) {
                listeners.splice(index, 1);
            }
        }

    }, [state]);

    return {
        ...state,
        toast,
        dismiss : (toastId) => dispatch({type: "DISMISS_TOAST", toastId}),
    }
}

export  { useToast }
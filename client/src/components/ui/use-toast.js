import * as React from "react";


let memoryState = {toasts : []};

function useToast() {
    const [state, setState] = React.useState(memoryState);

    return 1;
}

export  { useToast }
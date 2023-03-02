import React, { useState, useEffect } from 'react';
import { useStore } from '../context/auth.context'

const Test = () => {

    const  { names, setNames } = useStore();

    useEffect(() => {
        console.log('useStore', useStore)
        setNames('xys hello world in the seciton of the world')
        // setState('eeeeeeeeeeeee')
    }, [])
    return (
        <div>
            some text value is here  { names }
            {/* <pre>{
                JSON.stringify(useStore)
            }
            </pre> */}
        </div>
    )
}

export default Test

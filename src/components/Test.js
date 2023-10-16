import React, { useEffect, useState } from 'react'

const Test = () => {
    const [list, setList] = useState([]);

    useEffect(() =>{
      
    }, []);

    return (
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            {list.map((item , index)=>{
                return(      
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                )
            })}
            </tbody>
        </table>
    )
}

export default Test;
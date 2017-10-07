import React from 'react';
import Cell from './cell';

export default () => {
    return (
        <div>
            <table>
                <tbody>
                <tr>
                    <td><Cell x={0} y={0}/></td>
                    <td><Cell x={1} y={0}/></td>
                    <td><Cell x={2} y={0}/></td>
                </tr>
                <tr>
                    <td><Cell x={0} y={1}/></td>
                    <td><Cell x={1} y={1}/></td>
                    <td><Cell x={2} y={1}/></td>
                </tr>
                <tr>
                    <td><Cell x={0} y={2}/></td>
                    <td><Cell x={1} y={2}/></td>
                    <td><Cell x={2} y={2}/></td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}
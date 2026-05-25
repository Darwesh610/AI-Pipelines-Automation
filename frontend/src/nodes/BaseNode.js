import { Children } from "react";
import { Handle, Position } from "reactflow";

export const BaseNode= ({ id, title, inputs = [], outputs = [], children, style = {}}) => {
    return (
        <div className="base-node">
            {inputs.map((input, i) => (
                <Handle
                key={input.id}
                type="target"
                position={Position.Left}
                id={`${id}-${input.id}`}
                style={{top:`${(i+1)*(100 / (inputs.length + 1))}%`}}
                />
            ))}

        
            <div className="base-node-title">{title}</div>

            {inputs.map(input => (
                <div key={input.id} style={{ fontSize: '11px', color: '#888'}}>{input.label}</div>
            ))}


            {children}

            {outputs.map((output , i) => (
                <Handle
                key={output.id}
                type="source"
                position={Position.Right}
                id={`${id}-${output.id}`}
                style={{top:`${(i+1)*(100 / (outputs.length + 1))}%`}}
                />
            ))}
        </div>
    )
}
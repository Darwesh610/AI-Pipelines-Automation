import { BaseNode } from "./BaseNode";

export const TransformNode = ({id}) => (
    <BaseNode 
    id={id}
    title='Transform'
    inputs={[{ id: 'input', label: 'Input'}]}
    outputs={[{ id: 'output', label: 'Output'}]}
    >
        <select><option>Uppercase</option><option>Lowercase</option><option>Trim</option></select>
    </BaseNode>
)
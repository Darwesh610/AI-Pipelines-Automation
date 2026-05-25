import { BaseNode } from "./BaseNode";

export const MergeNode = ({id}) => (
    <BaseNode
        id={id}
        title='Merge'
        inputs={[{ id: 'a', label: 'A'}, { id: 'b', label: 'B'}]}
        outputs={[{ id: 'merged' , label: 'Merged'}]}>

            <select><option>Concatenate</option><option>JSON Merge</option></select>
        </BaseNode>

)
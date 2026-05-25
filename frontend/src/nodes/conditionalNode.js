import { BaseNode } from "./BaseNode";

export const ConditionalNode = ({id}) => (
    <BaseNode 
        id={id}
        title="Conditional"
        inputs={[{ id: 'input', label: 'Value'}]}
        outputs={[{ id: 'true', label: 'True'} , { id: 'false', label: 'False'}]}
        >
            <label>If: <input placeholder="value > 0" style={{ width: '100%'}}/></label>
        </BaseNode>
)
import { BaseNode } from "./BaseNode"

export const ApiNode = ({id}) => (
    <BaseNode
        id={id}
        title="API Call"
        inputs={[{ id: 'body', label: 'Body'}]}
        outputs={[{ id: 'response', label: 'Response'}]}
    >
        <input placeholder="https://api.example.com" style={{width: '100%'}}/>
        <select><option>GET</option><option>POST</option></select>
    </BaseNode>
)
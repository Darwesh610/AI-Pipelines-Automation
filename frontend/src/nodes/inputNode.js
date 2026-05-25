import { BaseNode } from "./BaseNode"

export const InputNode = ({ id, data }) => ( 
  <BaseNode
    id={id}
    title="Input"
    inputs={[]}
    outputs={[{ id: 'value', label: 'Value'}]}
    >

    <label>Name: <input defaultValue={data?.inputName || 'input_0'}/></label>
    <br/>
    <label>Type:
        <select defaultValue={data?.inputType || 'Text'}>
        <option>Text</option><option>File</option>
        </select>
    </label>
    </BaseNode>
)
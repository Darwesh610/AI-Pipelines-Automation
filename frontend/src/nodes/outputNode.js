import { BaseNode } from "./BaseNode"

export const OutputNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="Output"
    inputs={[{ id: 'value', label: 'Value'}]}
    outputs={[]}
    >
      
    <label>Name: <input defaultValue={data?.outputName || 'output_0'}/></label>
    <br/>
    <label>Type:
        <select defaultValue={data?.outputName || 'Text'}>
        <option>Text</option><option>File</option><option>Image</option>
        </select>
    </label>

    </BaseNode>

)
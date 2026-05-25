import { BaseNode } from "./BaseNode"

export const LLMNode = ({ id, data }) => (
  <BaseNode
    id={id}
    title="LLM"
    inputs={[
      { id: 'system', label: 'System'},
      { id: 'prompt', label: 'Prompt'},
    ]}
    outputs={[{ id: 'response', label: 'Response' }]}
    >
      <p style={{ fontSize: '12px', color: '#555'}}>This is an LLM</p>
    </BaseNode>

);
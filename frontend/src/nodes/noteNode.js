import { Background } from "reactflow";
import { BaseNode } from "./BaseNode";

export const NoteNode = ({id}) => (
    <BaseNode 
        id={id} 
        title='Note'
        inputs={[]}
        outputs={[]}
        style={{ Background: '#fffbe6', borderColor: '#f5c518'}}
        >
            <textarea rows={3} style={{width: '100%', border: 'none', background:'transparent', resize: 'both'}} placeholder="Add a note..."/>
        </BaseNode> 
)
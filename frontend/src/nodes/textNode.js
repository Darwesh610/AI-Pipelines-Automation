import { useState, useEffect, useRef } from 'react';
import { Handle, Position } from 'reactflow';

const VARIABLE_REGEX = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '');
  const [variables, setVariables] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    const ta = textareaRef.current;
    if (ta) {
      ta.style.height = 'auto';
      ta.style.height = `${ta.scrollHeight}px`;
      const lines = text.split('\n');
      const longestLine = Math.max(...lines.map(l => l.length), 15);
      ta.style.width = `${Math.min(Math.max(longestLine * 8, 150), 500)}px`;
    }
  }, [text]);

  useEffect(() => {
    const found = [];
    const seen = new Set();
    let match;
    const regex = new RegExp(VARIABLE_REGEX.source, 'g');
    while ((match = regex.exec(text)) !== null) {
      if (!seen.has(match[1])) {
        seen.add(match[1]);
        found.push(match[1]);
      }
    }
    setVariables(found);
  }, [text]);

  return (
    <div className="base-node" style={{ position: 'relative', minWidth: '180px' }}>

      {/* ✅ Permanent input handle — always present */}
      <Handle
        type="target"
        position={Position.Left}
        id={`${id}-input`}
        style={{ top: '50%' }}
      />

      {/* ✅ Dynamic variable handles — fixed map with return + unique IDs */}
      {variables.map((varName, i) => (
        <Handle
          key={varName}
          type="target"
          position={Position.Left}
          id={`${id}-${varName}`}
          style={{ top: `${((i + 1) / (variables.length + 1)) * 100}%` }}
        />
      ))}

      {/* Variable labels */}
      {variables.length > 0 && (
        <div style={{ marginBottom: 8 }}>
          {variables.map(v => (
            <div key={v} style={{ fontSize: '10px', color: 'var(--accent-light)', marginLeft: '-8px' }}>
              ◆ {v}
            </div>
          ))}
        </div>
      )}

      <div className="base-node-title">Text</div>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          resize: 'none',
          overflow: 'hidden',
          minWidth: '150px',
          minHeight: '60px',
          background: 'transparent',
          border: '1px solid var(--border)',
          borderRadius: '6px',
          color: 'var(--text-primary)',
          padding: '6px 8px',
          fontFamily: 'inherit',
          fontSize: '13px',
          lineHeight: '1.5',
        }}
        placeholder="Type text... use {{ variable }} to create inputs"
      />

      <Handle
        type="source"
        position={Position.Right}
        id={`${id}-output`}
        style={{ top: '50%' }}
      />

    </div>
  );
};
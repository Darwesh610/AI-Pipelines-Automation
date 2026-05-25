export const SubmitButton = ({ nodes, edges }) => {
    const handleSubmit = async () => {
        try {
            const response = await fetch('https://ai-pipelines-automation-production.up.railway.app/pipelines/parse', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nodes, edges })
            });

            if (!response.ok) throw new Error('Server Error');

            const result = await response.json();

            const dagStatus = result.is_dag ? 'Yes' : 'No';

            alert(
                `📊 Pipeline Analysis\n\n` +
                `Nodes: ${result.num_nodes}\n` +
                `Edges: ${result.num_edges}\n` +
                `Is DAG: ${dagStatus}`
            );
        } catch(err) {
            alert(`Error: ${err.message}`)
        }
    }

    return (
        <button className="submit-btn" onClick={handleSubmit}>
            Submit Pipeline
        </button>
    )
}
export default async function handler(req, res) {
    if(req.method === 'GET') {
        try {
            
        } catch (error) {
            return res.status(500).json({error: 'There was an error'})
        }
    } else {
        return res.status(500).json({ error: 'Only GET method allowed' });
    }
}
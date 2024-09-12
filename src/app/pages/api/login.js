export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, password } = req.body;
      const response = await fetch('http://localhost:3109/teachers/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, password }),
      })
      const data = await response.json();
      if (data.ok) {
        return res.status(200).json(data);
      } else {
        return res.status(response.status).json(data);
      }
    } catch (error) {
      return res.status(500).json({ message: 'Internal server error' });
    }
  }
}
app.post('/consulta', async (req, res) => {
    const prompt = req.body.prompt;
  
    try {
      const response = await axios.post(
        GPT3_API_URL,
        {
          prompt: `Significado filosófico de: ${prompt}`,
          max_tokens: 100,
          n: 1,
          stop: null,
          temperature: 1,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );
  
      const resultado = response.data.choices[0].text;
      res.json({ resultado });
    } catch (error) {
      res.status(500).json({ error: 'Error al procesar la consulta' });
    }
  });
  
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
  });
  

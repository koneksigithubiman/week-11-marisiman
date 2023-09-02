const getAllSpices = async (req, res) => {
    try {
      const spices = await req.db.collection('spices').find().toArray()
      
      res.status(200).json({
        message: 'Spices successfully retrieved',
        data: spices
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  
  const createSpices = async (req, res) => {
    const { 
      namaHerb,
      deskripsi,
      manfaat,
      dosis,
      saranOlahan

    } = req.body
    
    console.log(      
      namaHerb,
      deskripsi,
      manfaat,
      dosis,
      saranOlahan);
    
    try {
      const newSpice = await req.db.collection('spices').insertOne({       
        namaHerb,
        deskripsi,
        manfaat,
        dosis,
        saranOlahan })
      
      res.status(200).json({
        message: 'Spices successfully created',
        data: newSpice
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  
  module.exports = {
    getAllSpices,
    createSpices
  }
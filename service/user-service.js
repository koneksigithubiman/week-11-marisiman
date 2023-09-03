const { ObjectId } = require("mongodb")

const getAllUser = async (req, res) => {
    try {
      const user = await req.db.collection('user').find().toArray()
      
      res.status(200).json({
        message: 'User successfully retrieved',
        data: user
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }
  
  const createUser = async (req, res) => {
    const { 
        namaUser,
        usia,
        jenisKelamin,
        tinggiBdn,
        beratBdn,
        riwayatPenyakit

    } = req.body
    
    console.log(      
        namaUser,
        usia,
        jenisKelamin,
        tinggiBdn,
        beratBdn,
        riwayatPenyakit);
    
    try {
      const newUser = await req.db.collection('user').insertOne({       
        namaUser,
        usia,
        jenisKelamin,
        tinggiBdn,
        beratBdn,
        riwayatPenyakit })
      
      res.status(200).json({
        message: 'User successfully created',
        data: newUser
      })
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
  }

  const updateUser = async (req, res) => {
    try {
      // Dapatkan ID pengguna yang akan diperbarui dari parameter permintaan
      const userId = req.params.userId;
  
      // Dapatkan data pengguna yang diperbarui dari badan permintaan
      const updatedUserData = req.body;
  
      // Validasi bahwa updatedUserData tidak kosong dan berisi setidaknya satu bidang yang akan diperbarui
      if (!updatedUserData || Object.keys(updatedUserData).length === 0) {
        return res.status(400).json({ error: "Tidak ada data pengguna yang diberikan untuk diperbarui." });
      }
  
      // Perbarui dokumen pengguna dalam koleksi 'user' berdasarkan ID pengguna
      const result = await req.db.collection("user").updateOne(
        { _id: new ObjectId(userId) },
        { $set: updatedUserData } // Gunakan $set untuk memperbarui bidang-bidang tertentu
      );
  
      if (result.modifiedCount === 0) {
        // Jika tidak ada dokumen yang diubah, pengguna dengan ID yang diberikan tidak ditemukan
        return res.status(404).json({ error: "Pengguna tidak ditemukan." });
      }
  
      // Kirim respons sukses
      res.status(200).json({ message: "Pengguna berhasil diperbarui" });
    } catch (error) {
      // Tangani semua kesalahan yang terjadi selama proses pembaruan
      console.error("Kesalahan saat memperbarui pengguna:", error);
      res.status(500).json({ error: error.message });
    }
  };
  
  const deleteUser = async (req, res) => {
    try {
      // Ekstrak ID pengguna yang akan dihapus dari parameter permintaan (req.params)
      const userId = req.params.userId;
  
      // Hapus pengguna berdasarkan ID dari database (gunakan req.db)
      const result = await req.db.collection('user').deleteOne({ _id: new ObjectId(userId) });
  
      if (result.deletedCount === 0) {
        // Jika tidak ada dokumen yang dihapus, pengguna dengan ID yang diberikan tidak ditemukan
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Kirim respons sukses jika pengguna berhasil dihapus
      res.status(204).send('data user success deleted');
    } catch (error) {
      // Tangani kesalahan jika terjadi selama proses penghapusan pengguna
      console.error('Error deleting user:', error);
      res.status(500).json({ error: error.message });
    }
  };
  
  module.exports = {
    getAllUser,
    createUser,
    updateUser,
    deleteUser
  }
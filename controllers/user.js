
// let users = [
//     {id : 1, name: "hardiek", kelas : "XII RPL 3"},
//     {id : 2, name: "Jonathan", kelas : "XII RPL 3"},
//     {id : 3, name: "Udiiiin", kelas : "XII RPL 3"},
//   ]

  const User = require('../models/User')

  module.exports = {
    index: async(req, res) => {
     try {
      const users = await User.find()
      if(users.length > 0){
           res.status(200).json({
        status : true,
        data : users,
        method: req.method,
        url: req.url
      })
        
      } else{
         res.json({
          status: false,
          message: "data masih kosong"
         })
      }
   
      
     } catch (error) {
      res.status(400).json({sucess : false})
      
     }
      
        
        },
        show :  async(req, res) => {
          try {
            const users = await User.findById(req.params.id)
            res.json({
              status : true,
              data: users,
              method: req.method,
              url: req.url,
              message: "Data berhasil ditemukan"
            })
            
          } catch (error) {
            res.status(400).json({status: false}) 
          }
        },
   
        create: async(req, res) => {
          try {
            const users = await User.create(req.body)
            res.status(200).json({
              status : true,
              data: users,
              method: req.method,
              url: req.url,
              message: "Data berhasil ditambah"
            })
            
          } catch (error) {
            res.status(400).json({status: false})
            
          }
         
         
        },


        update :  async(req, res) => {
          try {
            const users = await User.findByIdAndUpdate(req.params.id, req.body, {
              new: true,
              runValidators: true
            })
            res.json({
              status : true,
              data: users,
              method: req.method,
              url: req.url,
              message: "Data berhasil diubah"
            })
            
          } catch (error) {
            res.status(400).json({status: false}) 
          }
   
         
         
        },
       delete: async (req, res) => {
        try {
          await User.findByIdAndDelete(req.params.id)
          res.json({
            status : true,
            method: req.method,
            url: req.url,
            message: "Data berhasil dihapus"
          })
          
        } catch (error) {
          res.status(400).json({status: false})
          
        }
       
        
      }
    
      
  }

 
   
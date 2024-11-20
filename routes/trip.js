const express=require('express')
const Trip=require('../models/trip')
const triprouter = express.Router(); 
// get all trips
triprouter.get('/alltrip', async (req, res) => {
    try {
      // Assurez-vous que le modèle 'Trip' est bien importé et utilisé
      const rest = await Trip.find();
      res.send({voicilistvoyage:rest,msg:'Voici tous les voyages'})
    } catch (error) {
      console.error(error);
      
    }
  });
//get voyage by id 
triprouter.get('/:id' , async(req,res)=>{
    try {
        const rest=await Trip.findById({_id:req.params.id})
        res.send({resultat:rest,msg:'voila votre voyage '})
    } catch (error) {
        console.log(error);
    }
    })
    //add new trip 
    triprouter.post('/addtrip', async (req, res) => {
        try {
          const newtrip = new Trip(req.body);
          const savedTrip = await newtrip.save();
          res.status(201).send({ success: true, msg: 'Voyage ajouté avec succès', trip: savedTrip });
     
        } catch (error) {
          console.error('Error adding trip:', error);
          res.status(500).json({ success: false, msg: 'Erreur lors de l\'ajout du voyage', error: error.message });
        }
      });
      
        //delete vayage
triprouter.delete ('/:id', async (req,res)=>{
    try {
        const rest= await Trip.findByIdAndDelete({_id:req.params.id})
        res.send({rest,msg:'vayage supprimé avec succés'})
        
    } catch (error) {
        console.log(error);
    }
    
    })
    //update trip
    triprouter.put('/:id',async(req,res)=>{
      try {
          const rest= await Trip.findByIdAndUpdate({_id:req.params.id},{$push:{Reservation:req.body}})
          res.send({rest,msg:'trip mis a jour '})
         
      } catch (error) {
          console.log(error);
      }})

    
    //update nb
    triprouter.put('/nbplace/:id', async (req, res) => {
    
    
      try {
      const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, { NumbrePlace: req.body.NumbrePlace }, { new: true });
              res.send({ updatedTrip, msg: 'Nombre de places mis à jour avec succès' });
          } 
      catch (error) {
      console.log(error);
              res.status(500).send('Erreur lors de la mise à jour du nombre de places');
          }
      });


module.exports=triprouter;


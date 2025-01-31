import Animal from '../animal/animal.model.js';

export const testing = (req, res)=>{
    console.log('Test is running')
    res.send({msg: 'Test is running'})
}

export const getAnimals = async (req, res) => {
    try {
        return res.send(await Animal.find());
    } catch (error) {
        console.error(error);
        return res.status(500).send({msg: 'Not found animal',error}); 
    }
}

export const getAnimalsId = async (req, res) => {
    try {
        let id = req.params.id;
        let animal = await Animal.findById(id);
        if(!animal) return res.status(404).send({ msg: "Animal not found" });
        return res.status(200).send(animal);
    } catch (error) {
        console.error(error);
        return res.status(500).send({msg: 'Not found animal',error}); 
    }
}

export const postAnimal = async (req, res) => {
    try {
        let data = req.body;
        let animal = new Animal(data);
        await animal.save();
        return res.status(201).send({msg: 'Animal created successfully', animal});
    } catch (error) {
        console.error(error);
        return res.status(500).send({msg: 'Cannot add animal',error})
    }
}

export const putanimal = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let animal = await Animal.findByIdAndUpdate({_id:id,},data,{new: true});
        return res.send({msg: 'Animal updated successfully', animal});
    } catch (error) {
        console.error(error);
        return res.status(500).send({msg: 'Cannot update animal',error})
    }
}

export const deleteAnimal = async (req, res) => {
    try {
        let id = req.params.id;
        let animal = await Animal.findByIdAndDelete(id);
        return res.send({msg: 'Animal deleted successfully', animal});
    } catch (error) {
        console.error(error);
        return res.status(500).send({msg: 'Cannot delete animal',error})
    }
}
import Animal from '../animal/animal.model.js';


export const getAnimals = async (req, res) => {
    try {
        return res.send(await Animal.find());
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Not found animal',error}); 
    }
}

/* export const getAnimalsId = async (req, res) => {
    try {
        let id = req.params.id;
        let animal = await Animal.find(name: name);
        if(!animal) return res.status(404).send({ msg: "Animal not found" });
        return res.status(200).send(animal);
    } catch (error) {
        console.error(error);
        return res.status(500).send({msg: 'Not found animal',error}); 
    }
} */

export const postAnimal = async (req, res) => {
    try {
        let data = req.body;
        let animal = new Animal(data);
        await animal.save();
        return res.status(201).send({message: 'Animal created successfully', animal});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Cannot add animal',error})
    }
}

export const putAnimals = async (req, res) => {
    try {
        let id = req.params.id;
        let data = req.body;
        let animal = await Animal.findByIdAndUpdate(id,data,{new: true});
        return res.send({message: 'Animal updated successfully', animal});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Cannot update animal',error})
    }
}

export const deleteAnimal = async (req, res) => {
    try {
        let id = req.params.id;
        let animal = await Animal.findByIdAndDelete(id);
        return res.send({message: 'Animal deleted successfully', animal});
    } catch (error) {
        console.error(error);
        return res.status(500).send({message: 'Cannot delete animal',error})
    }
}
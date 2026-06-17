import User from "./user.model.js";

class UserRepository {

    async create(userData) {
        return await User.create(userData);
    }

    async findByEmail(email) {
        return await User.findOne({ email });
    }

    async findById(id) {
        return await User.findById(id);
    }

    async findByEmailWithPassword(email) {
        return await User
            .findOne({ email })
            .select("+password");
    }

    // --- Added Update Function ---
    async update(id, updateData) {
        return await User.findByIdAndUpdate(
            id,
            updateData,
            {
                new: true,          
                runValidators: true 
            }
        );
    }
}

export default new UserRepository();
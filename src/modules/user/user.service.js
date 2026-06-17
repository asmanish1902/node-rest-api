import userRepository from "./user.repository.js";

class UserService {

    async createUser(data) {

        return await userRepository.create(
            data
        );
    }

    async getUser(id) {

        return await userRepository.findById(
            id
        );
    }

    async getProfile(userId) {

        return await userRepository.findById(
            userId
        );
    }
}

export default new UserService();
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../src/user-repository");
const user_service_1 = require("../src/user-service");
jest.mock("../src/user-repository");
const repository = new user_repository_1.UserRepository();
const service = new user_service_1.UserService(repository);
test("test mock user save", () => {
    const user = {
        id: 1,
        name: "Eko",
    };
    service.save(user);
    expect(repository.save).toHaveBeenCalled();
    expect(repository.save).toHaveBeenCalledWith(user);
});
test("test mock class findById", () => {
    const user = {
        id: 1,
        name: "Eko",
    };
    repository.findById.mockReturnValueOnce(user);
    expect(service.findById(1)).toEqual(user);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
});
test("test mock class findAll", () => {
    const users = [
        {
            id: 1,
            name: "Eko",
        },
        {
            id: 2,
            name: "Eko",
        },
    ];
    repository.findAll.mockReturnValueOnce(users);
    expect(service.findAll()).toEqual(users);
    expect(repository.findAll).toHaveBeenCalled();
});

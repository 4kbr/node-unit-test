"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_repository_1 = require("../src/user-repository");
const user_service_1 = require("../src/user-service");
const repository = new user_repository_1.UserRepository();
const service = new user_service_1.UserService(repository);
test("test mock partial class findById", () => {
    const user = {
        id: 1,
        name: "Eko",
    };
    const findByIdMock = jest.spyOn(repository, "findById");
    findByIdMock.mockReturnValueOnce(user);
    expect(service.findById(1)).toEqual(user);
    expect(findByIdMock).toHaveBeenCalled();
    expect(findByIdMock).toHaveBeenCalledWith(1);
    expect(repository.findById).toHaveBeenCalled();
    expect(repository.findById).toHaveBeenCalledWith(1);
});
test.failing("test mock partial findAll", () => {
    service.findAll();
});

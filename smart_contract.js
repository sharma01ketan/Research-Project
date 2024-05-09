'use strict';
const { Contract } = require('fabric-contract-api');
class StudentContract extends Contract {
    async instantiate(ctx) {
        console.info('Student Smart Contract Instantiated');
    }
    async createStudent(ctx, name, enroll, score) {
        const student = {
            name: name,
            enroll: enroll,
            score: score
        };
        const studentExists = await this.studentExists(ctx, enroll);
        if (studentExists) {
            throw new Error('Student with enroll ' + enroll + ' already exists');
        }
        await ctx.stub.putState(enroll, Buffer.from(JSON.stringify(student)));
        return JSON.stringify(student);
    }
    async getStudent(ctx, enroll) {
        const studentJSON = await ctx.stub.getState(enroll);
        if (!studentJSON || studentJSON.length === 0) {
            throw new Error('Student with enroll ' + enroll + ' does not exist');
        }
        return studentJSON.toString();
    }
    async studentExists(ctx, enroll) {
        const studentJSON = await ctx.stub.getState(enroll);
        return studentJSON && studentJSON.length > 0;
    }
}
module.exports = StudentContract;



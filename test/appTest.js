import { assert } from 'chai';
import request from 'supertest';
import {
  addNewTodo, getOneTodo, removeTodo, todos,
} from '../data';
import app from '../app';

describe('Todo Application with Babel', () => {
  describe('Get all Todos', () => {
    it('Should return an array', () => {
      assert.isArray(todos);
    });
    it('Should return a length of 4', () => {
      assert.equal(todos.length, '4');
    });
  });

  describe('Get one Todo ', () => {
    it('Should not return an array', () => {
      assert.isNotArray(getOneTodo(1));
    });

    it('Should return an object', () => {
      assert.isObject(getOneTodo(2));
    });
    it('Should handle wrong id', () => {
      assert.isUndefined(getOneTodo(8));
    });
  });
  describe('Add new Todo Application', () => {
    it('Should return a length of 5', () => {
      assert.equal(addNewTodo('Learn supertest').length, '5');
    });
  });

  describe('Remove Todo Application', () => {
    it('Should return an array', () => {
      assert.isArray(removeTodo(2));
    });

    it('Should return a length of 3', () => {
      assert.equal(removeTodo(2).length, '3');
    });
  });


  describe('Todo Api Application', () => {
    describe('# Get all Todos', () => {
      it('Should get all tasks', (done) => {
        request(app).get('/api')
          .end((err, res) => {
            assert.equal(res.statusCode, '200');
            assert.isArray(res.body);
            assert.equal(res.body.length, '4');
            done();
          });
      });
    });
  });

  describe('# Get one Todo ', () => {
    it('Should get one tasks', (done) => {
      request(app).get('/api/3')
        .end((err, res) => {
          assert.equal(res.statusCode, '200');
          assert.isObject(res.body);
          assert.isNotArray(res.body);
          done();
        });
    });

    it('Should get undefined for a wrong id', (done) => {
      request(app).get('/api/8')
        .end((err, res) => {
          assert.equal(res.statusCode, '404');
          assert.isUndefined(res.body.text);
          done();
        });
    });
  });

  describe('#Post Todo Application', () => {
    it('Should return new todos', (done) => {
      const data = 'master supertest';
      request(app).post(`/api/add/?todo=${data}`)
        .end((err, res) => {
          assert.equal(res.statusCode, '200');
          assert.isArray(res.body);
          assert.equal(res.body.length, '5');
          assert.isDefined(res.body);
          done();
        });
    });
  });

  describe('# Remove Todo Application', () => {
    it('Should remove todo by Id', (done) => {
      const id = 3;
      request(app).delete(`/api/${id}/remove`)
        .end((err, res) => {
          assert.equal(res.statusCode, '200');
          assert.equal(res.body.length, '3');
          assert.isArray(res.body);
          assert.isDefined(res.body);
          done();
        });
    });
    it('Should handle wrong Id', (done) => {
      const id = 8;
      request(app).delete(`/api/${id}/remove`)
        .end((err, res) => {
          assert.equal(res.statusCode, '404');
          assert.isUndefined(res.body.text);
          done();
        });
    });
  });
});

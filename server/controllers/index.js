const { Todo } = require("../models");

class Controller {
  static async index(req, res, next) {
    try {
      const todos = await Todo.findAll({
        attributes: ["id", "name", "isToggled"],
        order: [["id", "DESC"]],
      });

      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  }

  static async post(req, res, next) {
    try {
      const { name } = req.body;

      await Todo.create({ name });

      res.status(201).json({ message: "Created!" });
    } catch (err) {
      next(err);
    }
  }

  static async delete(req, res, next) {
    try {
      const { id } = req.params;

      const deleteTodo = await Todo.destroy({ where: { id: +id } });

      if (deleteTodo !== 1)
        throw { code: 404, message: `Todo with id ${id} is not found.` };

      res.status(200).json({ message: `Todo with id ${id} has been deleted.` });
    } catch (err) {
      next(err);
    }
  }

  static async patch(req, res, next) {
    try {
      const { id } = req.params;

      const todo = await Todo.findByPk(+id, {
        attributes: ["isToggled"],
      });
      if (!todo)
        throw { code: 404, message: `Todo with id ${id} is not found.` };

      await Todo.update(
        { isToggled: !todo.isToggled },
        {
          where: { id: +id },
        }
      );

      res.status(200).json({ message: `Todo with id ${id} has been patched.` });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = Controller;

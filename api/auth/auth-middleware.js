// jwt import from npm
const jwt = require("jsonwebtoken");

// secret import for JWT decoding
const { JWT_SECRET } = require("../secrets");

// User model import
const User = require("../class/class-model");

// Middleware that requires user making request to pass a valid JWT in header
const restricted = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, JWT_SECRET, (err, decodedJwt) => {
      if (err) {
        next({ status: 401, message: "Token invalid" });
      } else {
        req.decodedJwt = decodedJwt;
        next();
      }
    });
  } else {
    next({ status: 401, message: "Token required" });
  }
};

// Higher order middleware function that restricts access to a specific role, must be called after restricted because it requires an already decoded JWT
const only = (role_name) => (req, res, next) => {
  if (req.decodedJwt && req.decodedJwt.role_name === role_name) {
    next();
  } else {
    next({ status: 403, message: "Authorized personnel only" });
  }
};

// Middleware function to validate that username actually exists
const checkUsernameExists = async (req, res, next) => {
  try {
    let user = await User.findBy({ username: req.body.username });

    if (!user) {
      next({ status: 401, message: "Invalid login credentials" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

// Middleware function to validate that username doesn't exist in database
async function checkUsernameFree(req, res, next) {
  let [user] = await User.findBy({ username: req.body.username });
  if (user != null) {
    next({ status: 422, message: "Username taken" });
  } else {
    next();
  }
}

// Simple parsing to make sure the role name is correct, don't want whacky entries in the database
const validateRoleName = (req, res, next) => {
  let user = req.body;
  if (!user.role_name || user.role_name.trim() == "") {
    user.role_name = "client";
  }
  if (
    user.role_name.trim() !== "instructor" &&
    user.role_name.trim() !== "client"
  ) {
    res.status(422).json({
      message: "Invalid role name",
    });
  } else if (user.role_name.trim().length > 32) {
    res.status(422).json({
      message: "Role name can not be longer than 32 characters",
    });
  } else {
    next();
  }
};

// checks if account exists
const checkAccountId = async (req, res, next) => {
  try {
    const account = await User.getById(req.params.id);
    if (!account) {
      next({ status: 404, message: "account not found" });
    } else {
      req.account = account;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkAccountPayload = (req, res, next) => {
  const error = { status: 400 };
  const { name, budget } = req.body;
  if (name === undefined || budget === undefined) {
    error.message = "name and budget are required";
  } else if (typeof name !== "string") {
    error.message = "name of account must be a string";
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    error.message = "name of account must be between 3 and 100";
  } else if (typeof budget !== "number" || isNaN(budget)) {
    error.message = "budget of account must be a number";
  } else if (budget < 0 || budget > 1000000) {
    error.message = "budget of account is too large or too small";
  }
  if (error.message) {
    next(error);
  } else {
    next();
  }
};

const checkAccountNameUnique = async (req, res, next) => {
  try {
    const existing = await db("accounts")
      .where("name", req.body.name.trim())
      .first();

    if (existing) {
      next({ status: 400, message: "that name is taken" });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

// Middleware exports
module.exports = {
  checkAccountNameUnique,
  checkAccountPayload,
  checkAccountId,
  restricted,
  checkUsernameFree,
  checkUsernameExists,
  validateRoleName,
  only,
};

import { NextFunction, Request, Response } from "express";
import { User } from "../models";
import log from "../utils/logger";
import { z } from "zod";

export const organizationValidation = async (
  req: Request & { user?: User },
  res: Response,
  next: NextFunction
) => {
  try {
    const organisationSchema = z.object({
      name: z.string({
        required_error: "name is required",
        invalid_type_error: "name must be a string",
      }),
      description: z.string({
        required_error: "description is required",
        invalid_type_error: "description must be a string",
      }),
      email: z.string({
        required_error: "email is required",
        invalid_type_error: "description must be a string",
      }),
      industry: z.string({
        required_error: "industry is required",
        invalid_type_error: "description must be a string",
      }),
      type: z.string({
        required_error: "type is required",
        invalid_type_error: "description must be a string",
      }),
      country: z.string({
        required_error: "country is required",
        invalid_type_error: "description must be a string",
      }),
      address: z.string({
        required_error: "address is required",
        invalid_type_error: "description must be a string",
      }),
      state: z.string({
        required_error: "state is required",
        invalid_type_error: "description must be a string",
      }),
    });
    organisationSchema.parse(req.body);

    next();
  } catch (error) {
    const validationErrors = error.issues.map((issue) => {
      return { field: issue.path[0], message: issue.message };
    });
    res.statusCode = 422;
    return res.json({ errors: validationErrors }).status(422);
  }
};

try {
} catch (error) {}

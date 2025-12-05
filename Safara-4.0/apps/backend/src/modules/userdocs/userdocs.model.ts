// apps/backend/src/modules/userdocs/userdocs.model.ts

import { Schema, model, InferSchemaType } from "mongoose";

const UserDocSchema = new Schema(
  {
    userId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    description: { type: String },
    mime: { type: String, required: true },
    size: { type: Number, required: true },
    secureUrl: { type: String, required: true },
    publicId: { type: String, required: true },
    folder: { type: String },
  },
  {
    timestamps: { createdAt: "createdAt", updatedAt: "updatedAt" },
  }
);

export type UserDoc = InferSchemaType<typeof UserDocSchema> & { id: string };

export const UserDocModel = model<UserDoc>("UserDoc", UserDocSchema);

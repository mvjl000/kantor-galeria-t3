import { Currency, Prisma } from "@prisma/client";
import { FC, PropsWithChildren } from "react";

export type ReactFC = FC<PropsWithChildren>;

export type ReactFCWithProps<T> = FC<PropsWithChildren<T>>;

export type PriceHistory = Prisma.JsonValue[];

export type CurrencyType = Currency;

export interface FlagUploadResponse {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  access_mode: string;
  exising: boolean;
  original_filename: string;
}

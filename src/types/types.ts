import { Currency, Prisma } from "@prisma/client";
import { FC, PropsWithChildren } from "react";

export type ReactFC = FC<PropsWithChildren>;

export type ReactFCWithProps<T> = FC<PropsWithChildren<T>>;

export type PriceHistory = Prisma.JsonValue[];

export type CurrencyType = Currency;

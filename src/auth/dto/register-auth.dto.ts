import { Injectable } from "@nestjs/common";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";

export class RegisterAuthDto {
    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    role: string;
}